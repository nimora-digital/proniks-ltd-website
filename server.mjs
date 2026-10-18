import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const port=Number(process.env.PORT||4173);
const host=process.env.HOST||'127.0.0.1';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
if(!fs.existsSync(path.join(root,'index.html'))){console.error('No build found. Run npm run build before npm run preview.');process.exit(1)}
const server=http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end('Preview only: enquiry delivery is disabled.');}
 let name;
 try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end('Invalid URL');}
 let file=path.resolve(root,'.'+name);const relative=path.relative(root,file);
 if(relative.startsWith('..')||path.isAbsolute(relative)){res.writeHead(403);return res.end('Forbidden');}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory()){
  if(!name.endsWith('/')){res.writeHead(308,{'Location':name+'/'+new URL(req.url,'http://localhost').search});return res.end();}
  file=path.join(file,'index.html');
 }
 let status=200;if(!fs.existsSync(file)||!fs.statSync(file).isFile()){file=path.join(root,'404.html');status=404;}
 res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'});
 if(req.method==='HEAD')return res.end();
 const stream=fs.createReadStream(file);stream.on('error',()=>res.destroy());stream.pipe(res);
});
server.on('error',err=>{console.error(err.code==='EADDRINUSE'?'Preview port is already in use. Reuse the existing server or choose PORT.':err.message);process.exit(1)});
server.listen(port,host,()=>console.log('Local: http://'+(host==='0.0.0.0'?'127.0.0.1':host)+':'+port+'\nServing '+root+'\nKeep this process running while using the preview.'));
