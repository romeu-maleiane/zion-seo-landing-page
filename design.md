# Zion SEO landing page — design reference

## Purpose and tone

The page promotes Zion SEO, an AI-powered SEO product for e-commerce stores. Its visual language is optimistic, polished, and approachable: a very light neutral canvas, oversized confident type, friendly rounded surfaces, and an energetic green-to-blue gradient used to signal AI-powered actions and emphasis.

## Page structure

1. **Fixed navigation** — logo, `About`, `Features`, and `Pricing` anchor links, plus a “Try for free” call to action. On mobile, the links and CTA move into a menu opened by a hamburger button.
2. **Hero** — a small “Start ranking on Google and ChatGPT” pill, a large product promise, supporting copy, gradient CTA, and a no-credit-card reassurance. Desktop pairs it with two layered product screenshots.
3. **Social proof** — a headline followed by a continuously scrolling row of Shopify-client logos, faded at both edges.
4. **Features** — three alternating image/text cards, then a full-width dark visual feature panel about ranking in Google and AI assistants.
5. **Testimonials** — one to three auto-scrolling vertical columns of customer cards, depending on viewport width.
6. **Pricing** — Starter and Pro cards; Pro is the highlighted plan.
7. **FAQ** — a single-open accordion of four common questions.
8. **Closing CTA** — centred heading, supporting paragraph, and primary action.
9. **Footer** — large blue, angled section with company description, utility links, contact, copyright, and oversized wordmark.

## Visual system

| Element | Implemented treatment |
| --- | --- |
| Canvas | `#f9fafa` (`gray-30`) across the main page; white cards sit on top with subtle shadows. |
| Core text | Near-black (`text-black/80`) for headings and body copy; white text on the dark feature panel and footer. |
| Accent | Left-to-right green `green-500` to light blue `blue-400` gradient. Used for primary CTAs, emphasized inline text, and the Pro plan. |
| Surfaces | Large `rounded-3xl` cards; smaller rounded screenshot frames (`rounded-xl`/`rounded-2xl`); pills and buttons use full rounding. |
| Depth | Restrained `shadow-sm` on cards; prominent `shadow-lg`/`shadow-2xl` only on hero imagery. |
| Icons | Lucide line icons: globe, check circles, pricing checks, and mobile menu. |
| Imagery | Product UI screenshots, client logo images, testimonial avatars, a Google/ChatGPT graphic, plus a remote Spline scene in the hero. |

### Typography

The implementation relies on Tailwind’s sans-serif defaults (the README references Geist, though no font is explicitly loaded in `layout.tsx`). The type scale is deliberately expansive:

- Hero heading: `text-6xl` on small screens, up to `text-8xl`, bold, with tight line-height.
- Section headings: `text-3xl` up to `text-6xl`, semibold.
- Feature headings: `text-2xl` up to `text-5xl`, bold.
- Body: mostly default size, rising to `text-lg` or `text-xl` at larger breakpoints.
- Navigation and CTA labels: medium weight, typically `text-lg`/`text-xl` on desktop.

## Layout and responsive behavior

The reusable `personalized-conteiner` utility establishes the content widths: 22rem on the smallest screens, then 40rem, 48rem, 64rem, and 80rem from `xl` upward. Horizontal page sections are centered with `flex-x-center`.

- **Desktop (`lg`+)**: hero screenshots are absolutely positioned at the upper right; feature cards are horizontal and alternate image placement; three testimonial columns appear.
- **Tablet**: feature cards become vertical; the testimonial carousel keeps two columns at `md`; navigation remains expanded from `md`.
- **Mobile**: navigation collapses to a menu, hero screenshots are hidden, cards have reduced padding, and only one testimonial column remains. Section spacing drops from 7.5rem to 5rem.

## Component patterns

### Buttons

Two branded variants are used consistently:

- **Secondary** is the dominant action: a green-to-blue gradient, white text, medium weight, and a pill shape. Hover fades the gradient.
- **Primary** is a white pill, used against coloured contexts such as the navbar CTA and highlighted pricing card. In some placements its label uses gradient-filled text.

Buttons default to a compact 36px height; `lg` increases this to 40px and preserves the pill shape.

### Feature cards

The three standard cards use white backgrounds, subtle shadows, 24–48px responsive padding, and 24px corners. On large screens image and content each occupy roughly half the card; text content has a fixed responsive height to distribute its title, paragraph, and CTA. The fourth card instead uses `feature-bg.webp` as a cover background and centres white copy above a wide illustrative graphic.

### Pricing cards

Cards are arranged side by side at `md` and stacked below it. The Starter card is white with blue check icons. Pro uses the signature gradient background, white content, and a white CTA to establish hierarchy. Both include plan title, monthly price, description, full-width button, divider, and feature checklist.

## Motion and interaction

Lenis provides smooth scrolling, while GSAP introduces most motion:

- Hero copy rises in on load; the small floating screenshot slides in from the right.
- The navbar becomes a translucent, blurred, rounded floating bar after it scrolls past the top.
- Feature images scale/fade in and feature copy rises into view on scroll.
- Pricing title characters progressively darken as the section enters the viewport.
- Testimonial columns continuously scroll upward at varied speeds with a soft top/bottom mask.
- Closing CTA content rises/fades in and the footer fades in on entry.
- The client-logo strip loops horizontally every 35 seconds.

## Assets

All local design assets live in `public/`:

- `zion-seo-logo.webp` — logo
- `hero_image_1.webp`, `hero_image_2.webp` — layered hero product screenshots
- `feature-1.webp` through `feature-3.webp`, `feature-bg.webp`, `google-chatgpt.webp` — feature visuals
- `testimonial_1.webp` through `testimonial_9.webp` — testimonial portraits
- `client_1.png` through `client_16.png` — logo marquee

The hero additionally embeds a remote Spline scene, clipped to a trapezoid that occupies the viewport height behind the hero content.

## Implementation map

- Page composition: `src/app/page.tsx`
- Global tokens and reusable utilities: `src/app/globals.css`
- Navigation, hero, and footer: `src/components/navbar.tsx`, `hero.tsx`, `footer.tsx`
- Content sections: `clients.tsx`, `features.tsx`, `feedback.tsx`, `pricing.tsx`, `faq.tsx`, `callToAction.tsx`
- Shared visual primitives: `src/components/ui/button.tsx`, `coloredText.tsx`, `pricingCard.tsx`, `feedbackCol.tsx`
- Content data: `constants/index.ts`

## Design guardrails

- Keep the light, airy canvas and reserve saturated colour primarily for the brand gradient and footer.
- Preserve generous vertical rhythm (80px mobile / 120px desktop between major sections).
- Use rounded, low-elevation white cards rather than borders or hard-edged panels.
- Maintain the gradient consistently: green on the left, blue on the right.
- Use animation to add polish, not to conceal information; all primary content remains legible without motion.
- Keep the desktop hero visual hierarchy: value proposition on the left, product proof on the right, ambient 3D shape behind both.
