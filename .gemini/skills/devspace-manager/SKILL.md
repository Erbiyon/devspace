---
name: devspace-manager
description: Development workflow and production management assistant for the DevSpace portfolio project.
---

# DevSpace Developer Assistant Skill

This skill guides engineering workflows, component conventions, and production releases for the DevSpace Developer Portfolio.

## Architecture Guidelines
- **Framework:** Next.js (App Router, Server Components first)
- **Styling:** Tailwind CSS v4 + shadcn/ui primitives
- **Package Manager:** `pnpm` ONLY. Never use npm or yarn.
- **Data Layer:** Schema-first TypeScript configs in `src/content/portfolio-data.ts`.

## Release Verification Checklist
When making changes, always run:
```bash
pnpm lint
pnpm build
```
Verify that all routes prerender statically without hydration mismatches or dynamic date leaks in Client Components.
