# SJFACC Website

**https://sjfacc.org**

Source for [sjfacc.org](https://sjfacc.org), hosted on GitHub Pages.

Plan: `../sjfacc.org-website-plan.md` · Domain setup: `../sjfacc.org-domain.md` (kept outside this folder so they are never published to the website).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About Us | `about.html` |
| Schedule | `schedule.html` |
| Register | `register.html` (posts to Formspree; disabled until a form ID replaces `FORM_ID_PENDING`) |
| Not found | `404.html` |

Shared: `styles.css`, `script.js`. No external fonts, scripts, or images: everything is inline, to satisfy the site's Content Security Policy.

## Still to fill in

Venue, meeting day/time, contact email, officers, fees, and the Formspree form ID. Each is a one-line edit, and they're listed in `../sjfacc.org-website-plan.md` §2.

## Deployment — GitHub Pages

Repo: `https://github.com/amadriaga/sjfacc.github.io` (public). Served through Cloudflare (orange cloud); the HTTPS redirect and security headers are set at Cloudflare

1. Push to the `main` branch; GitHub Pages deploys automatically
2. The custom domain is set by the `CNAME` file (`sjfacc.org`)
3. GitHub's own "Enforce HTTPS" stays off behind Cloudflare; that's expected

## Local Development

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
