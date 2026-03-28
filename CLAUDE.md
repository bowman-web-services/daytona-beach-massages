# CLAUDE.md — Daytona Beach Massages

**Owner:** Tom Bowman / Bowman Web Services LLC
**Type:** Hugo static site — local service business
**Domain:** daytonabeachmassages.com
**Status:** Live on Netlify, DNS flipped. "Sanctuary" design deployed.

---

## Project Overview

Massage therapy service website for the Daytona Beach area. Recently rebuilt with "Sanctuary" design and deployed to Netlify. The old WordPress site domain cutover is pending — need to fully decommission the WordPress version.

## Tech Stack

- **SSG:** Hugo on Netlify
- **Design:** "Sanctuary" theme/layout
- **Hosting:** Netlify (auto-deploy from GitHub push)

## Deployment

- Push to GitHub → Netlify auto-builds
- Do NOT use Netlify CLI
- Never run `hugo build` locally on Cowork VM

## Pending Tasks

- Complete domain cutover from old WordPress site
- Import any remaining content from WordPress version

## Cowork / Claude Code Notes

- Cowork bindfs blocks standard git operations
- Always clone to `/tmp`, copy files, commit/push from there
- Check `df -h /` before bulk operations
