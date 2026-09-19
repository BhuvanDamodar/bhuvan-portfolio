<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=32&duration=3000&pause=1000&color=8AAD82&center=true&vCenter=true&width=650&lines=Bhuvan+Damodar+Anand;Software+Engineer;Backend%2C+ML+%26+GenAI+Systems" alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-11.18-FF0050?style=for-the-badge&logo=framer&logoColor=white" /></a>
  <a href="#-deployment"><img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
</p>

---

## About

A modern, high-performance developer portfolio website built with **React 18** - showcasing professional engineering experience, applied AI research, and production-grade full-stack projects. 

Designed around an elegant dark sage glassmorphism design system with high-contrast typography, **Framer Motion** micro-interactions, an **EmailJS**-integrated contact form with honeypot spam protection, and responsive mobile navigation with tuned scroll-spying.

> **Live Site →** [bhuvandamodar-portfolio.vercel.app](https://bhuvandamodar-portfolio.vercel.app)

---

## Features

| Section | Highlights |
|---------|-----------|
| **Home** | Bold hero introducing backend, ML & GenAI focus, quick summary badges, and direct CTAs (*View Projects* & *Download CV*) |
| **Experience** | Interactive alternating timeline detailing roles at **Mercedes-Benz** (Applied ML / Engineering Simulation), **Happiest Minds Technologies** (Software Engineer → Senior Software Engineer), Shiash Info Solutions, and The Sparks Foundation |
| **Projects** | Curated project showcase headlined by **Briefly.ai** (GenAI News Intelligence & RAG Platform with live demo, benchmarks, and interactive detail modal) and cancer histopathology deep learning research (0.94 ROC-AUC) |
| **Skills** | Categorized skill matrix (Languages, Backend & Systems, ML & GenAI, Cloud & DevOps, Databases, Frontend, Engineering Practices) and additional technologies bar |
| **Education** | Academic background detailing **M.Sc. Computer Science** at the University of Stuttgart and **B.E. Computer Science** at VVCE |
| **Contact** | Glassmorphism contact form with client-side validation, bot-deterrent honeypot, and seamless **EmailJS** integration |
| **Navigation** | Sticky glassmorphism header with active link scroll-spying via `react-scroll`, smooth offset targeting, and a responsive mobile drawer menu |

### Design System & UX

- 🌿 **Curated Dark Sage Palette** - High-contrast design using tailored tokens (`#0F1110`, `#F7F7F4`, `#E8ECE6`, `#8AAD82`) engineered for effortless readability at a glance.
- 🪟 **Frosted Glassmorphism** - Layered surfaces with `backdrop-filter: blur()`, subtle border treatments, and deep ambient box shadows.
- 🎞️ **Fluid Framer Motion Animations** - Coordinated entrance transitions, interactive card hover lift, and tactile button presses.
- 📱 **Fully Responsive** - Thoughtfully adapted layouts across mobile, tablet, and high-resolution desktop viewports.
- ♿ **Accessibility & Motion Preferences** - Clear focus-visible outlines and `prefers-reduced-motion` fallbacks.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 18 (Create React App) |
| **Motion & Micro-interactions** | Framer Motion |
| **Smooth Navigation** | React Scroll (with offset-tuned scrollspy) |
| **Icons** | React Icons (`fa`, `si`, `vsc`) |
| **Email Service** | EmailJS |
| **Telemetry & Analytics** | Vercel Analytics |
| **Styling** | Vanilla CSS Design Tokens & Scoped Modules |
| **Typography** | Google Fonts (Orbitron & System Sans) |

---

## 📁 Project Structure

```
bhuvan-portfolio/
├── public/
│   ├── Bhuvan_Damodar_Anand_CV.pdf   # Direct download resume
│   ├── index.html                    # HTML template & SEO meta tags
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js                        # Root component & section orchestration
│   ├── index.js                      # React DOM root render
│   ├── index.css                     # Global resets & font definitions
│   ├── components/
│   │   ├── Header.jsx                # Sticky navbar + mobile hamburger drawer
│   │   ├── Home.jsx                  # Hero section with avatar & quick credentials
│   │   ├── Experience.jsx            # Chronological career timeline
│   │   ├── Projects.jsx              # Featured & standard projects + detail modal
│   │   ├── Skills.jsx                # Categorized tech grid & additional stack bar
│   │   ├── Education.jsx             # Degrees & specialization highlights
│   │   ├── Contact.jsx               # Contact form with validation & EmailJS
│   │   ├── Footer.jsx                # Social links, direct mail, and copyright
│   │   └── styles/                   # Modular CSS stylesheets
│   │       ├── Global.css            # Root design tokens & global variables
│   │       ├── Header.css
│   │       ├── Home.css
│   │       ├── Experience.css
│   │       ├── Projects.css
│   │       ├── Skills.css
│   │       ├── Education.css
│   │       ├── Contact.css
│   │       └── Footer.css
│   └── resources/
│       └── photos/                   # Screenshots & profile media
├── .env                              # EmailJS credentials (kept local)
├── package.json
└── README.md
```

---

## Quick Start

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# Clone repository
git clone https://github.com/BhuvanDamodar/bhuvan-portfolio.git
cd bhuvan-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with your [EmailJS](https://www.emailjs.com/) configuration:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

### Development

```bash
npm start
```

Runs the application locally at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production Build

```bash
npm run build
```

Creates an optimized production bundle in the `build/` directory ready for deployment.

---

## 🌐 Deployment

This project is deployed and hosted on **Vercel** with continuous deployment on Git pushes:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BhuvanDamodar/bhuvan-portfolio)

---

<p align="center">
  <sub>Designed &amp; built by <strong>Bhuvan Damodar Anand</strong></sub>
</p>
