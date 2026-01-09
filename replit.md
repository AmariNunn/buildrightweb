# Build Right Web

## Overview

Build Right Web is a modern marketing agency website built with React and Express. It showcases web development and social media marketing services through a sleek, futuristic design inspired by Linear, Stripe, and Vercel aesthetics. The site features a single-page layout with animated sections including hero, services, portfolio showcase, process workflow, testimonials, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth section transitions and micro-interactions
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Development Server**: Vite dev server with HMR proxied through Express
- **Production Build**: esbuild bundles server code, Vite builds client assets

### Data Storage
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect
- **Current Storage**: In-memory storage (MemStorage class) for development
- **Database Ready**: PostgreSQL schema defined in `shared/schema.ts` with users and contact_messages tables
- **Validation**: Drizzle-Zod generates TypeScript types and Zod schemas from database schema

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI and feature components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

### Build System
- **Development**: `tsx` runs TypeScript directly, Vite handles frontend HMR
- **Production**: Custom build script bundles server with esbuild, client with Vite
- **Output**: `dist/` contains bundled server (`index.cjs`) and static assets (`public/`)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migration and schema push tooling

### UI Framework Dependencies
- **Radix UI**: Headless component primitives (accordion, dialog, dropdown, etc.)
- **Lucide React**: Icon library
- **React Icons**: Additional social media icons (si- prefixed icons)
- **Embla Carousel**: Carousel component foundation
- **Vaul**: Drawer component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **Replit Plugins**: Error overlay, cartographer, and dev banner for Replit environment

### Form & Validation
- **Zod**: Schema validation
- **zod-validation-error**: Human-readable validation error messages