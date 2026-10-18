# Delivery and verification

Built: home, services overview, eight individual service pages, sectors, illustrative projects showcase, about, contact, privacy draft, cookie draft and custom 404 (17 pages). Responsive CSS, mobile menu, sticky mobile enquiry link, click-to-call/email, gallery filters, keyboard-dismissable lightbox, FAQs and browser-native form validation are implemented. Real portfolio records can be added to content.mjs; incomplete records remain hidden.

Passed: npm ci, production generation, automated checks of 17 pages and 366 local links/assets, unique page metadata and heading checks, noindex defaults, JavaScript syntax check. No dependency vulnerabilities reported (zero external packages).

Preview follow-up: no listener was present at the beginning of the investigation. Restarting the server restored HTTP 200. The preview now runs in a retained terminal on 127.0.0.1:4173. Server improvements include a working-directory-independent build path, explicit missing-build/port errors, no-cache responses, safe HEAD handling, directory redirects and rejection of POST requests. The dev command now builds before serving; a separate production preview command is included.

Passed on the running server: 25 HTTP page/asset responses (including homepage, all service pages, contact, images, CSS and JavaScript), correct 404 status, 308 directory redirect, POST rejection and HTML content type. Production build, static checks and JavaScript syntax checks pass. Source review fixed the navigation collapse breakpoint at tablet widths and Escape focus return.

Not completed: actual browser access, desktop/mobile visual inspection, measured layout overflow, interactive form/menu/gallery tests and browser console inspection. The browser tool explicitly rejected preview observation under its URL security policy; no alternate browser route was attempted. HTTP checks do not verify rendering or client-side interaction. No live Netlify site, backend storage or deployment was verified. Enquiry delivery remains disabled.

Customer approval checklist: confirm business contact details and branding; supply approved project images/descriptions; confirm services and working arrangements; approve privacy/controller/retention details; approve hosting and enquiry storage; verify a stored test enquiry; supply actual domain; authorise publication and indexing. No unconfirmed finishing services, WhatsApp or marketing integrations are enabled.

## FEATURES CURRENTLY LIVE

None: this handoff is not published. The pages and interactions listed above are built and ready for deployment, subject to the documented checks.

## FEATURES WE CAN ADD WITH CUSTOMER CONTENT OR APPROVAL

Approved project stories and photography, official logo, confirmed additional finishing services, legal details, active Netlify enquiry storage, verified WhatsApp link and search indexing.

## ADDITIONAL INTEGRATIONS AVAILABLE AFTER APPROVAL

Private drawing uploads, CRM routing, enquiry notifications, analytics, marketing tools and a genuine content management system. These are not included or active.
