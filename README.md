# AIFit Homepage Demo (GitHub Pages)

This folder is a standalone static homepage template for `sixteenaifit.com`.

## Files

- `index.html`: landing page content
- `styles.css`: visual theme and responsive layout
- `script.js`: API `/health` check interaction
- `CNAME`: custom domain binding (`sixteenaifit.com`)
- `.github/workflows/deploy-pages.yml`: auto deploy workflow for GitHub Pages

## Quick Start

1. Create a new GitHub repository (example: `aifit-homepage`).
2. Copy all files from this folder to that repository root.
3. Push to `main`.
4. In GitHub repo settings:
   - Enable Pages and set source to `GitHub Actions`.
   - Confirm deployment succeeds in the `Actions` tab.

## DNS Setup For `sixteenaifit.com`

At your DNS provider, add these records for apex domain:

- Type `A`, Host `@`, Value `185.199.108.153`
- Type `A`, Host `@`, Value `185.199.109.153`
- Type `A`, Host `@`, Value `185.199.110.153`
- Type `A`, Host `@`, Value `185.199.111.153`

Optional for `www`:

- Type `CNAME`, Host `www`, Value `<your-github-username>.github.io`

Notes:

- The `CNAME` file in this repo already sets `sixteenaifit.com`.
- DNS propagation may take minutes to 48 hours.
- After DNS works, HTTPS certificate issuance is handled by GitHub Pages automatically.

## Later: API Subdomain (`api.sixteenaifit.com`)

When your backend is ready, add DNS for API:

- If backend has a stable domain: `CNAME api -> <backend-domain>`
- If backend requires fixed IP: add `A`/`AAAA` records from your provider

Then update backend CORS to allow:

- `https://sixteenaifit.com`
- `https://www.sixteenaifit.com` (if you use `www`)

## Local Preview

Run from this folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.
