# Smeta Lab - Backend

API-only Next.js service. This repository contains the business logic, database models, and API endpoints for Smeta Lab.

## Features
- Next.js App Router (API Routes only)
- Drizzle ORM (PostgreSQL)
- Clerk Authentication
- Sentry Error Monitoring

## Getting Started

### Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```bash
   DATABASE_URL=...
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...
   ```
4. Run migrations:
   ```bash
   npm run db:migrate
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `GET /api/health`: Service health check
- `GET /api/version`: Service version and commit info
