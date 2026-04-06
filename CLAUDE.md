# CLAUDE.md — Daytona Beach Massages

**Owner:** Tom Bowman / Bowman Web Services LLC
**Type:** Static HTML site (no Hugo SSG)
**Domain:** daytonabeachmassages.com
**Netlify Site ID:** e0bd9826-8992-4f10-b9ce-872cc9619390
**Netlify Name:** daytona-beach-massages
**Status:** Live on Netlify, DNS on Namecheap (A→75.2.60.5)

---

## Project Overview

Massage therapy service website for Body & Foot Massage Spa in Daytona Beach. "Sanctuary" design. 18 HTML pages, no Hugo — plain static HTML deployed to Netlify.

## Tech Stack

- **Framework:** Static HTML/CSS/JS (no SSG)
- **Hosting:** Netlify (auto-deploy from GitHub push)
- **DNS:** Namecheap (A record → Netlify LB 75.2.60.5)
- **Analytics:** GA4 G-GRDQRHXRJH (direct gtag, no GTM)
- **Telnyx Agent:** assistant-f19ca1b5
- **Booking:** Setmore integration

## Deployment

- Push to `main` branch → Netlify auto-builds from publish = "."
- Do NOT use Netlify CLI
- netlify.toml handles security headers and WP redirect rules

## SEO Notes (Updated 2026-04-06)

- Schema: LocalBusiness + MassageTherapist + FAQPage
- Each page has: meta description, canonical, og:image
- Sitemap includes all service + geo pages (15 total)
- Old WordPress URLs → 410 Gone via netlify.toml
- BWS centering standard applied
