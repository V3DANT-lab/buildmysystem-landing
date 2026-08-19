# BuildMySystem Landing Page

> **A cinematic, responsive landing page that frames operational complexity as a system ready to be understood and built.**

The page combines a full-screen video hero, an animated “Let’s get started” call to action, and an editorial FAQ experience. Its visual direction, **Field Manual Modernism**, pairs graphite cinematic framing with warm drafting-paper surfaces, precise typography, and restrained Route Green connective details.

| Area | Implementation |
| --- | --- |
| **Hero** | Autoplaying background video, visual route-line overlays, and a responsive headline. |
| **Primary action** | The requested animated CTA, which smoothly guides visitors to the FAQ section. |
| **FAQ** | Keyboard-accessible accordion interactions with concise operational-system answers. |
| **Visual system** | Space Grotesk and DM Mono typography, generated brand artwork, and responsive layouts. |

## Local development

Install the project dependencies with `pnpm install`, then start the development server with the command below.

```bash
pnpm dev
```

The application is built with React, Vite, Tailwind CSS, and Radix UI components. Use the following commands to validate and prepare a production build.

```bash
pnpm check
pnpm build
```

## Project structure

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Landing-page composition, hero content, CTA behavior, and FAQ content. |
| `client/src/index.css` | Global tokens, typography, motion, and the Field Manual Modernism visual system. |
| `client/index.html` | Page metadata, fonts, and favicon configuration. |
| `ideas.md` | The approved design direction and brand decisions. |

## Asset note

The hero video and generated visual assets are managed as web assets for this project and referenced from their managed storage paths. When adapting the page to another hosting environment, replace those source URLs with your preferred asset hosting locations.

## Author

**Vedu**  
Sales & Marketing

---

Built for **BuildMySystem**.
