# Deployment Checklist

This project is a small portfolio site, so the main deployment risks are dependency hygiene, third-party assets, missing response headers, and the absence of automated tests.

## Current Review Notes

- [x] Complete repo-level security audit and track findings.
  See `SECURITY_AUDIT_2026-04-09.md` for severity-ranked findings, evidence, and remediation acceptance checks.

- [x] Remediate `h3` transitive vulnerability in the TanStack Start server chain.
  TanStack package latest currently remains `@tanstack/start-server-core@1.167.9`, so an npm override now pins `h3-v2` to `h3@2.0.1-rc.20`.
  Verify with `npm ls h3 h3-v2 --all` and `npm audit --omit=dev`.

- [x] Upgrade Vite to a patched version.
  `vite` is now `7.3.2` and `npm audit --omit=dev` reports no vulnerabilities.

- [x] Replace `latest` dependency specifiers with pinned versions.
  The TanStack packages and devtools are now pinned in `package.json` to make installs more reproducible.

- [x] Remove third-party hosted display assets where practical.
  The current homepage no longer depends on Google Fonts or a remote hero image for first render.

- [x] Add deployment-level security headers.
  A starter `public/_headers` file now defines CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and related hardening headers for compatible hosts.

- [x] Add at least one smoke test.
  A minimal homepage render test now exists so `npm test` validates the app shell.

## Pre-Deploy Checklist

- [ ] Run `npm install` on a clean checkout.
- [ ] Run `npm audit --omit=dev` and confirm there are no unresolved production vulnerabilities you are accepting unknowingly.
- [ ] Run `npm run build` and verify the build passes.
- [ ] Add a basic test suite or document that deployment relies on manual QA only.
- [ ] Review all outgoing links and contact info for correctness.
- [ ] Verify the site works on mobile and desktop.
- [ ] Verify keyboard navigation works for all visible links.
- [ ] Confirm the hero image, fonts, and icons load correctly with browser cache disabled.
- [ ] Confirm no placeholder copy or unused sections remain.

## Hosting / Infrastructure Checklist

- [ ] Enable HTTPS only.
- [ ] Redirect HTTP to HTTPS.
- [ ] Set `Strict-Transport-Security` if the domain is final and HTTPS is stable.
- [ ] Set a Content Security Policy.
  A restrictive self-hosted starter policy is included below and mirrored in `public/_headers`.
- [ ] Set `X-Content-Type-Options: nosniff`.
- [ ] Set `Referrer-Policy: strict-origin-when-cross-origin`.
- [ ] Set `X-Frame-Options: DENY` or use `frame-ancestors 'none'` in CSP.
- [ ] Set a restrictive `Permissions-Policy`.
- [ ] Configure caching for static assets.
- [ ] Make sure `robots.txt`, favicon, and manifest files are present and correct.

## Content Security Policy Starting Point

Adjust this to match your host:

```txt
default-src 'self';
img-src 'self' data:;
style-src 'self';
font-src 'self';
script-src 'self';
connect-src 'self';
object-src 'none';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
upgrade-insecure-requests;
```

Notes:
- If you later reintroduce remote fonts, analytics, or image CDNs, update CSP before deployment.

## Manual QA Checklist

- [ ] Homepage loads without console errors.
- [ ] Nav anchors scroll to the expected sections.
- [ ] External links open correctly in a new tab.
- [ ] Contact email opens the correct address.
- [ ] Layout remains readable at common breakpoints: 390px, 768px, 1024px, 1440px.
- [ ] Text remains legible with browser zoom at 200%.
- [ ] Lighthouse pass completed for Performance, Accessibility, Best Practices, and SEO.

## Nice-to-Have Follow-Ups

- [ ] Add Open Graph and Twitter metadata.
- [ ] Add a simple uptime or broken-link check in CI.
- [ ] Expand the homepage smoke test into a slightly broader CI suite.
