import assert from 'node:assert/strict';
import fs from 'node:fs';
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173';
const files=fs.readdirSync(new URL('./dist/',import.meta.url),{recursive:true});
let count=0;
for(const file of files){
 if(!/\.(html|css|js|jpg|svg|txt|xml)$/.test(file))continue;
 const route=file.replaceAll('\\','/').replace(/index\.html$/,'');
 const response=await fetch(`${base}/${route}`);
 assert.equal(response.status,200,`${route} status`);
 assert.ok((await response.arrayBuffer()).byteLength>0,`${route} body`);count++;
}
assert.equal((await fetch(base+'/missing-page/')).status,404);
assert.equal((await fetch(base+'/services/dry-lining',{redirect:'manual'})).status,308);
assert.equal((await fetch(base+'/contact/',{method:'POST',body:'test-only'})).status,405);
assert.match((await fetch(base+'/')).headers.get('content-type'),/text\/html/);
console.log(`PASS: ${count} HTTP pages/assets, correct 404, directory redirect, POST rejection and HTML content type. Browser rendering is not tested.`);
