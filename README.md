# Proniks Ltd — Nimora Digital prospect demonstration

Complete responsive static multipage website. Dependency-free Node build; no client framework or CMS. All images ship locally. Source content: content.mjs. Layouts: build.mjs. Styling and interactions: assets/. Never label the illustrative gallery as completed Proniks work.

## Run locally

Node 22 LTS or newer required.

```sh
npm ci
npm run build
npm test
npm run dev
```

Visit http://127.0.0.1:4173/ and keep the terminal running. `npm run dev` rebuilds then serves; `npm run preview` serves the existing production build. This is a dependency-free static generator, so Vite is not needed. Default host: 127.0.0.1; port: 4173. HOST and PORT can override these where an explicitly configured forwarding environment requires it. The server resolves dist relative to its source file, so it also works when launched from another directory. Stop preview with Ctrl+C. Run `npm run test:http` while the server is running to verify HTTP delivery. No live reload is included: rebuild and refresh after source edits.

## GitHub and Netlify

1. Extract this ZIP. Create an empty GitHub repository and upload this folder's contents, including the dotfiles and lockfile. Do not upload node_modules, .env or private records.
2. Netlify: Add new project → Import an existing project → GitHub → select the repository.
3. Install command: `npm ci`. Build command: `npm run build`. Publish directory: `dist`. Node version: `22`. netlify.toml contains the build, security headers and real 404 fallback.
4. Set optional build environment `SITE_URL` to your actual HTTPS origin without a trailing slash; rebuild to generate canonical URLs and sitemap entries. No secrets or other environment variables are required. Node does not automatically load .env; configure SITE_URL in the build environment.
5. Verify every route and enquiry behaviour on the actual deployment. No Netlify deployment has been performed by this handoff.

## Forms — disabled by default

The visible form uses native required/email/minimum-length validation. JavaScript prevents delivery and explicitly confirms that nothing was sent or stored. No files are uploaded; no customer emails or unapproved services are activated. The form intentionally has no `data-netlify` activation attribute and no submit button. Netlify detection and enquiry delivery require the approved setup below.

After approval: replace `data-demo-form="true"` with `data-netlify="true"`, change the check button to type="submit", enable Netlify form detection, redeploy, confirm `project-enquiry` appears in Forms, then replace the disabled submit handler with URL-encoded POST to `/` using all form fields and form-name. Display receipt only when the server returns success; on errors retain entries and show an error. Add a dedicated success page for non-JavaScript submissions. Update CTA text to Send project enquiry. Submit a consented test enquiry and verify the actual dashboard record before launch. Notification emails are a separate opt-in setting; do not configure them without approval. Review retention, access controls and privacy text first. File uploads need a separately approved private backend.

## Indexing / legal / content launch gates

Noindex is set in every page and X-Robots-Tag; robots.txt blocks all crawling. After publication approval, remove these three blocks, set SITE_URL and rebuild. Sitemap is intentionally empty until a genuine origin is provided. Privacy/cookie pages are marked reviewable drafts. Confirm legal contact, retention, hosting processors, approved company logo, genuine project photographs and descriptions, contact details, capacity and services. No WhatsApp, analytics, credentials, premises, coverage, testimonials or certification claims are included. Additional publicly listed finishing services remain hidden and removable in content.mjs.

Project records are currently empty. The gallery is a functional illustrative capability showcase. Add approved records in content.mjs using title, description, type, categories, images (objects with src, alt and optional stage) and optional location. The renderer hides records without a title, description or images. Empty records should remain hidden. This configuration is not a CMS.

## Verification

`npm test` checks 17 generated pages, all local links/assets, one H1 per page, metadata, noindex, form markup and Netlify configuration. See HANDOFF.md for browser checks and limitations.

