# Security Audit Report

Date: 2026-04-09  
Project: `isthisjason`  
Scope: Repository-only audit (frontend app, widget script, headers/config, dependency tree). External chatbot API internals are out of scope.

Implementation status (2026-04-09): All remediation items from this report have been implemented in this repository.

## Method

- Static review of runtime code and security-relevant config.
- Dependency review using:
  - `npm audit --omit=dev`
  - `npm outdated --long`
  - `npm ls h3 @tanstack/start-server-core @tanstack/react-start vite --all`
- Build/test verification:
  - `npm run build` (pass)
  - `npm test` (fails in this environment due Cloudflare vite-plugin `uv_interface_addresses` system error)

## Findings (Prioritized)

| Severity | ID | Finding | Impact |
|---|---|---|---|
| High | F-001 | Known vulnerable production transitive dependency (`h3` via TanStack Start server core) | Potential DoS / middleware boundary issues in server runtime chain |
| High | F-002 | Known vulnerable Vite version in use (`vite@7.3.1`) | High-severity dev-server vulnerabilities remain until upgrade |
| Medium | F-003 | Remote widget script URL is fully trust-based and not origin-validated | Misconfiguration can become arbitrary script execution in visitors' browsers |
| Medium | F-004 | Upstream API error text is reflected back into end-user chat output | Information disclosure of backend/internal error details |
| Low | F-005 | CSP currently allows `'unsafe-inline'` styles | Weakens CSP hardening and increases style-injection blast radius |

---

## F-001 (High): Vulnerable `h3` in production dependency chain

### Evidence

- `npm audit --omit=dev` reports moderate advisories for `h3` (`h3 2.0.0-beta.0 - 2.0.1-rc.17`), including DoS and route prefix boundary issues.
- `npm ls h3 h3-v2 nitropack --all` resolves:
  - `@tanstack/react-start@1.167.16`
  - `@tanstack/start-server-core@1.167.9`
  - `h3-v2@npm:h3@2.0.1-rc.16`

### Risk

The app includes a server runtime chain with an affected `h3` version. Even if specific exploitability depends on route usage, this is a known vulnerable production dependency path.

### Remediation

- Upgrade TanStack Start server packages so transitive `h3` resolves beyond affected versions.
- Re-run `npm audit --omit=dev` and verify the `h3` advisory is cleared.

### Acceptance check

- `npm ls h3 h3-v2 --all` no longer resolves to vulnerable ranges.
- `npm audit --omit=dev` shows no unresolved `h3` production advisories.

---

## F-002 (High): Vulnerable Vite version in use

### Evidence

- `npm audit --omit=dev` reports high severity for `vite 7.0.0 - 7.3.1` (path traversal / file read / deny bypass advisories).
- `npm ls ... vite --all` resolves `vite@7.3.1` throughout the toolchain.

### Risk

Vite dev-server vulnerabilities are relevant to local/preview/dev environments and CI workflows where Vite server endpoints may be exposed.

### Remediation

- Minimum: update to patched `7.3.2`.
- Preferred: plan upgrade to current major (`8.x`) after plugin compatibility validation.

### Acceptance check

- `npm ls vite --all` resolves to patched version.
- `npm audit --omit=dev` no longer reports the Vite high advisory set.
- Local dev/preview/test flows still work.

---

## F-003 (Medium): Widget script origin is not validated before execution

### Evidence

- [`src/components/PortfolioChatbotEmbed.tsx:29`](/home/schoopitylol/projects/isthisjason/src/components/PortfolioChatbotEmbed.tsx:29) reads `VITE_CHATBOT_WIDGET_URL` directly.
- [`src/components/PortfolioChatbotEmbed.tsx:97`](/home/schoopitylol/projects/isthisjason/src/components/PortfolioChatbotEmbed.tsx:97) assigns `script.src = url` and executes it in-page.
- No explicit allowlist or URL validation in this component.

### Risk

If environment config is mis-set (or compromised in deployment variables), the site executes attacker-controlled JavaScript with full origin privileges.

### Remediation

- Enforce strict URL allowlist (exact origins/paths) before script injection.
- Fail closed to local bundled widget path when URL validation fails.
- Optionally add contract version checks after script load.

### Acceptance check

- Invalid/non-allowlisted URLs are rejected and logged.
- Widget still mounts from approved origin(s) and local fallback.

---

## F-004 (Medium): Backend error detail reflection into user-visible chat output

### Evidence

- [`public/widget.js:610`](/home/schoopitylol/projects/isthisjason/public/widget.js:610) captures raw error message detail.
- [`public/widget.js:616`](/home/schoopitylol/projects/isthisjason/public/widget.js:616) renders that detail back to the user.
- Non-200 responses derive message text from backend payload (`payload?.error?.message`) at [`public/widget.js:565`](/home/schoopitylol/projects/isthisjason/public/widget.js:565).

### Risk

Internal API errors, status context, and backend implementation clues may be exposed to users, aiding reconnaissance.

### Remediation

- Return fixed user-safe error strings in UI.
- Keep raw detail only in internal logs/telemetry with truncation and redaction.

### Acceptance check

- Force API 500/validation error and verify UI shows generic safe message only.
- Logs retain actionable debug metadata without sensitive payload leakage.

---

## F-005 (Low): CSP style policy allows `'unsafe-inline'`

### Evidence

- [`public/_headers:6`](/home/schoopitylol/projects/isthisjason/public/_headers:6) includes `style-src 'self' 'unsafe-inline'`.

### Risk

Allows inline style execution, which reduces CSP effectiveness as a mitigation layer against certain injection paths.

### Remediation

- Move toward nonce/hash-based style policy or eliminate inline style requirements where possible.
- Re-test widget/site rendering after tightening style policy.

### Acceptance check

- Effective response CSP no longer includes `'unsafe-inline'` for styles, or usage is explicitly documented and justified.
- UI remains visually correct in production.

---

## Additional Notes (Non-findings / Context)

- XSS handling in widget message rendering is largely sound:
  - [`public/widget.js:64`](/home/schoopitylol/projects/isthisjason/public/widget.js:64) escapes HTML entities.
  - [`public/widget.js:344`](/home/schoopitylol/projects/isthisjason/public/widget.js:344) applies escaping before insertion.
- Link hygiene uses `rel="noreferrer"` with `target="_blank"` in key places (e.g. [`src/components/HomePage.tsx:212`](/home/schoopitylol/projects/isthisjason/src/components/HomePage.tsx:212), [`src/components/HomePage.tsx:454`](/home/schoopitylol/projects/isthisjason/src/components/HomePage.tsx:454)).
- `.env` is gitignored by policy in `.gitignore`; this audit did not find `.env` tracked in git index.

## Recommended Remediation Order

1. Upgrade vulnerable dependency chain (`h3`/TanStack Start server stack).
2. Upgrade `vite` to patched version and verify local workflows.
3. Add strict allowlisting for `VITE_CHATBOT_WIDGET_URL` and API base URL.
4. Replace user-visible raw error reflection with safe generic messages.
5. Tighten CSP style policy where feasible.
