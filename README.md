# In Bound Gymnastics

Website for In Bound Gymnastics — a gymnastics studio in Albany, GA serving the community since 2005.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion v12**
- **TypeScript**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, class preview, highlights, testimonials, CTA |
| `/about` | History, staff bios, facility features |
| `/classes` | Filterable class grid (Pre-School, Beginner, Advanced, Specialty) |
| `/camps` | Seasonal camp listings (Spring, Summer, Winter) |
| `/parties` | Birthday party packages (Basic, Deluxe, Ultimate) |
| `/competitive-team` | Team info, stats, athlete spotlights |
| `/events` | Upcoming events & home meets |
| `/contact` | Contact form (Formspree), Google Maps, hours, social links |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Railway. The app runs `npm run build && npm run start` with the `PORT` env var injected automatically.

```bash
railway up --detach
```

## Project Structure

```
app/                  # Next.js pages (App Router)
components/           # React components organized by page
  home/               # Home page sections
  about/              # About page sections
  classes/            # Classes page
  camps/              # Camps page
  parties/            # Parties page
  team/               # Competitive team sections
  events/             # Events page sections
  contact/            # Contact page
data/                 # Content data (classes, staff, testimonials, events)
public/images/        # Static assets (logo, photos — add your own)
```

## Customization

- **Brand assets**: Drop logo and photos into `public/images/`
- **Formspree**: Create a form at [formspree.io](https://formspree.io) and update `FORMSPREE_URL` in `components/contact/ContactSection.tsx`
- **Content**: Update staff, testimonials, events, and class data in the `data/` directory
- **Colors**: Modify CSS variables in `app/globals.css`
