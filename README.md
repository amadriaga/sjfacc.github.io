# SJFACC Website

**https://sjfacc.org**

Source for [sjfacc.org](https://sjfacc.org), hosted on GitHub Pages.

Plan: `../docs/sjfacc.org-website-plan.md` · Domain setup: `../docs/sjfacc.org-domain.md` (kept outside this folder so they are never published to the website).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About Us | `about.html` |
| Schedule | `schedule.html` |
| Register | `register.html` (posts to Formspree; disabled until a form ID replaces `FORM_ID_PENDING`) |
| Downloads (program, flyers) | `downloads.html` + `downloads/*.pdf` (refresh with `../scripts/sync-downloads.sh`) |
| Invitation (pre-launch home page) | `invitation.html` |
| Not found | `404.html` |

Shared: `styles.css`, `script.js`. No external fonts, scripts, or images: everything is inline, to satisfy the site's Content Security Policy.

## Still to fill in

Venue, meeting day/time, contact email, officers, fees, and the Formspree form ID. Each is a one-line edit, and they're listed in `../docs/sjfacc.org-website-plan.md` §2.

## Deployment — GitHub Pages

Repo: `https://github.com/amadriaga/sjfacc.github.io` (public). Served through Cloudflare (orange cloud); the HTTPS redirect and security headers are set at Cloudflare. GitHub's own "Enforce HTTPS" stays off behind Cloudflare; that's expected.

GitHub Pages serves the **`main`** branch. For the Inaugural Club Night launch, three branches are used:

| Branch | Content | Updated by |
|---|---|---|
| `launch` (default branch) | The full site | `../scripts/prepare-launch-branches.sh` (from this repo's committed `main`) |
| `prelaunch` | Invitation version: `invitation.html` as the home page, About Us and Schedule removed | Same script (`../scripts/make-prelaunch.py`) |
| `main` (live) | Points at `launch` or `prelaunch` | **Only** the workflows below — never pushed by hand |

Workflows (Actions tab, "Run workflow"): **Go live — show the full site** (type `LAUNCH`) and **Show the invitation page** (type `INVITATION`). Button page: https://sjfacc.o2bot.com/launch.html. Details: `../inaugural-club-night/inaugural-club-night-program.md` §17.

Review copy: https://sjfacc.o2bot.com (`../scripts/publish-preview.sh`).

Local backup: GitLab `http://10.1.0.200:8082/cloudflare-platform/websites/sjfacc-website` (remote `gitlab`; local `main` tracks it, so a plain `git push` never reaches GitHub).

## Local Development

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
