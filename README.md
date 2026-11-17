# SJFACC Website

**https://sjfacc.org** (not live yet)

Source for [sjfacc.org](https://sjfacc.org), hosted on GitHub Pages.

Spec: `../sjfacc.org-website-spec.md` · Domain setup: `../sjfacc.org-domain.md` (kept outside this folder so they are never published to the website).

## Deployment — GitHub Pages

Repo: `https://github.com/amadriaga/sjfacc.github.io` (to be created)

1. Push to the `main` branch; GitHub Pages deploys automatically
2. The custom domain is set by the `CNAME` file (`sjfacc.org`)
3. In the repo, go to Settings → Pages → Custom domain → `sjfacc.org` and turn on Enforce HTTPS

## Local Development

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
