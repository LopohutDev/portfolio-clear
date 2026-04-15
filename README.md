# Louie Jay Sarraga — Portfolio

Personal portfolio website for Louie Jay Sarraga, a Full Stack Software Engineer based in the Philippines.

## Tech Stack

- **Framework:** Next.js (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Features

- Responsive single-page design with dark theme
- Animated sections with scroll-triggered reveals
- Projects showcase with live demo and GitHub links
- Work experience timeline populated from CV
- Skills organized by category
- Contact section with email, GitHub, and LinkedIn links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/            # Next.js app router (layout, page, globals)
├── components/     # UI sections (Navbar, Hero, About, Skills, Projects, Experience, Contact)
├── data/           # Centralized content (portfolio.ts)
└── public/         # Static assets (avatar, icons)
```

## Customization

All content (personal info, skills, projects, experience) is managed in a single file:

```
data/portfolio.ts
```

## Deployment

Deployed on **AWS Amplify**.

- Build command: `npm run build`
- Output directory: `.next`
- Node version: 20
