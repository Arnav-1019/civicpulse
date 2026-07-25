# CivicPulse

Action-first civic-tech platform: citizens report hyper-local urban problems, NGOs and local youth teams organize micro-funding and skill-volunteering to resolve them fast.

## Stack
- **Frontend**: Next.js 14 (App Router, TypeScript), Tailwind CSS, Framer Motion
- **Backend**: Express.js (TypeScript), Prisma ORM, SQLite (zero-setup local database file)

> The original spec called for PostgreSQL + PostGIS. This build uses SQLite instead so the whole
> project runs with nothing installed except Node.js — no database server, no Docker, no accounts.
> The "nearby issues" geospatial search is done with an equivalent Haversine-distance calculation
> in the backend code instead of a PostGIS `ST_DWithin` query — same behavior, no extension needed.

## Quick Start

**Prerequisite (install once):** [Node.js 18+](https://nodejs.org)

**Then, from the `civicpulse` folder:**
```bash
node setup.mjs
```

That's the only command you need. It:
1. Installs backend dependencies
2. Creates the local SQLite database file (`backend/prisma/dev.db`) and applies the schema
3. Seeds a demo user + one sample issue
4. Installs frontend dependencies
5. Launches both servers

- Frontend: **http://localhost:3000**
- Backend: **http://localhost:5000**

Press `Ctrl+C` to stop both servers. Safe to re-run `node setup.mjs` anytime.

## Manual Setup (if you'd rather run steps yourself)

### Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

### Frontend (new terminal)
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints
- `POST /api/issues` — create a new issue
- `GET /api/issues/nearby?lat=..&lng=..&radiusKm=..` — nearby issues, sorted by distance (Haversine formula)
- `POST /api/pledges` — pledge funds to an issue (transactional: updates raised amount, issue status, and reporter impact points)
- `GET /health` — health check

## Notes
- The seed script (`backend/prisma/seed.ts`) creates a demo user (`11111111-1111-1111-1111-111111111111`) — the `/report` page uses this ID as `reporterId`, so submitting an issue works immediately.
- Pledge creation is wrapped in a Prisma `$transaction` so the pledge record, issue raised amount/status, and reporter impact points update atomically.
- Data lives in `backend/prisma/dev.db`, a single SQLite file. Delete it (and re-run `npx prisma db push && npx prisma db seed`) to reset everything.
- Want the original Postgres+PostGIS version instead (e.g. for production)? Swap `datasource db { provider = "sqlite" }` back to `"postgresql"` in `backend/prisma/schema.prisma`, point `DATABASE_URL` at a real Postgres+PostGIS instance, and restore the raw `ST_DWithin`/`ST_Distance` query in `issue.controller.ts`.
