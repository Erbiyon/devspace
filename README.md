# DevSpace — Personal Developer Portfolio

<div align="center">
  <h3>Modern Dark + Bento Grid + Minimal Developer Aesthetic</h3>
  <p>Production-grade Personal Developer Portfolio built with the latest stable web technologies.</p>
</div>

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **UI Runtime:** [React 19](https://react.dev/)
- **Design System:** [shadcn/ui](https://ui.shadcn.com/) (`@base-ui/react` primitives)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Motion](https://motion.dev/) (React 19 optimized)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes) (System / Dark / Light with Zero FOUC)
- **Package Manager:** [pnpm](https://pnpm.io/) ONLY
- **Deployment:** [Vercel](https://vercel.com/) with Web Analytics & Speed Insights

---

## ✨ Features

- **Hero & Bento Grid:** Balanced layout highlighting current focus, status indicator, and technical taxonomy.
- **Featured Projects:** Showcase projects with badges, live preview links, and source code.
- **Hybrid GitHub Showcase:** Server-side fetching with ISR (`revalidate: 3600`) and graceful static fallback.
- **Interactive Micro-interactions:** Smooth spring animations, subtle hover effects, and reduced-motion compliance.
- **Copy-to-Clipboard Email:** Accessible email pill with instant toast feedback powered by Sonner.
- **Dynamic OpenGraph Image:** Automated edge-generated social cards via `@vercel/og`.
- **Search Engine Optimization:** Comprehensive JSON-LD Structured Data, robots.txt, and metadata tags.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **pnpm** and **Node.js** (>= 20) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/Erbiyon/devspace.git

# Navigate into project directory
cd devspace

# Install dependencies using pnpm
pnpm install
```

### Development

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
pnpm build
```

---

## 📄 License

MIT License © 2026 [Mattana Kanlapa (Erbiyon)](https://github.com/Erbiyon)
