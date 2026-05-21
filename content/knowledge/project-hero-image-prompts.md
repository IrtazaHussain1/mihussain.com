# Project hero image prompts

Use these with an image LLM (DALL·E, Midjourney, Flux, etc.). Save as `public/projects/{slug}.png` (or `.webp`), then add to the project MDX frontmatter:

```yaml
image: /projects/{slug}.png
```

**Recommended:** 1920×1080 or 1600×900, 16:9, PNG or WebP, no watermark.

**Style reference (existing heroes):**
- **HRMS Cloud**: light SaaS UI collage with feature callouts
- **n8n Automation**: dark workflow canvas with connected nodes (real product screenshot style)

---

## Already have images (no action)

| Slug | File | In-body extras |
|------|------|----------------|
| `hrms-beta` | `/projects/hrms-cloud.png` | (done) |
| `n8n-automation` | `/projects/n8n-automation.png` | `/projects/n8n/*.png` in MDX |
| `saleshoney` | `/projects/saleshoney.png` | (done) |
| `scrapeops` | `/projects/scrapeops.png` | (done) |
| `x-proxy-tester` | `/projects/x-proxy-tester.png` | (done) |
| `google-adspower-login` | `/projects/google-adspower-login.png` | (done) |
| `ganexus` | `/projects/ganexus.png` | (done) |
| `permispop` | `/projects/permispop.png` | (done) |
| `power-insight` | `/projects/power-insight.png` | (done) |
| `smart-learning` | `/projects/smart-learning.png` | (done) |
| `sso` | `/projects/sso.png` | (done) |

## Still missing hero image

| Slug | Suggested file |
|------|----------------|
| `omnidots` | `/projects/omnidots.png` |

---

## Saleshoney (`saleshoney.png`)

Professional hero collage for a B2B sales operations SaaS called SmashDeck / Saleshoney. Multiple overlapping browser UI windows on a soft dark gray studio background: contact list with enrichment status badges, email campaign dashboard, live call activity panel, and a manager report chart. Modern light UI (white cards, subtle borders), accents in teal and amber. Clean enterprise product marketing style, no fake logos, no readable lorem text, 16:9.

---

## ScrapeOps (`scrapeops.png`)

Hero image for a web scraping operations platform named ScrapeOps. Dark developer-dashboard aesthetic: split view with proxy request metrics graph, world map geo-targeting, parser API response JSON panel, and Scrapy job monitor list. Colors: deep navy background, green success indicators, monospace accents. Technical but polished, 16:9, no third-party trademarks.

---

## XProxy Tester (`x-proxy-tester.png`)

Hero for a proxy fleet observability tool. Dark operations center UI: Grafana-style dashboard with uptime percentage, stability classification chart (stable vs unstable), IP rotation verification timeline, and alert feed. Subtle grid background, cyan and orange status colors, infrastructure monitoring vibe, 16:9.

---

## AdsPower Login Automation (`google-adspower-login.png`)

Hero for browser automation at scale. Abstract composition: grid of browser profile cards with fingerprint icons, proxy location pins on a minimal map, and a pipeline status bar (login queued, success, retry). Dark charcoal UI, purple and blue accents, engineering/automation tone, no Google logo, 16:9.

---

## Omnidots (`omnidots.png`)

Hero for environmental monitoring software. Dashboard showing air quality index gauges, vibration sensor timeline, noise level chart, and site location list. Clean light Scandinavian SaaS UI, green and blue environmental data viz, professional IoT platform, 16:9.

---

## Power Insight (`power-insight.png`)

Hero for industrial generator telemetry platform. Grafana dashboards with fuel level, load kW, temperature trends, fleet map of generator units. Dark theme, industrial orange and steel blue accents, edge-to-cloud data pipeline diagram subtle in background, 16:9.

---

## Ganexus (`ganexus.png`)

Hero for a cloud AI operating system. Futuristic desktop-in-browser shell: floating windows for image catalog, model training progress, canvas editor, and payment module. Dark mode glassmorphism, gradient purple-to-cyan, creative-tech product launch style, 16:9.

---

## PermisPop (`permispop.png`)

Hero for a driving-school marketplace app (France). Mobile and web mockups: map with instructor pins, lesson booking calendar, in-app chat bubble. Friendly light UI, road-map aesthetic, blue and white, consumer marketplace (not ride-hailing brand colors), 16:9.

---

## Smart Learning (`smart-learning.png`)

Hero for education analytics platform. Instructor dashboard: student performance prediction chart, team grouping visualization, assessment comparison table predicted vs actual. Academic but modern UI, soft blues and neutrals, data-for-teachers tone, 16:9.

---

## SSO (`sso.png`)

Hero for centralized single sign-on service. Minimal security-focused diagram: one login gate connecting to multiple microservice boxes, JWT token flow arrows, FastAPI + MongoDB badges as subtle icons. Dark background, clean lines, developer documentation aesthetic, 16:9.
