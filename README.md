# Shoe Store

A Nike shoe store built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Better Auth**, **Neon PostgreSQL**, **Drizzle ORM**, and **Zustand**.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling
- **Better Auth** — Authentication (email/password)
- **Neon** — Serverless PostgreSQL
- **Drizzle ORM** — Type-safe SQL queries
- **Zustand** — Lightweight client state management (cart)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example env file and fill in your Neon database connection string:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
BETTER_AUTH_SECRET=<generate with: openssl rand -base64 32>
BETTER_AUTH_URL=http://localhost:3000
```

### 3. Push database schema

```bash
npm run db:push
```

### 4. Seed the database

```bash
npm run db:seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the store.

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts   # Better Auth API handler
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage (server component, queries DB)
│   └── product-list.tsx              # Product grid (client component, cart)
├── db/
│   ├── index.ts                      # Drizzle + Neon client
│   ├── schema.ts                     # Database schema (products, auth tables)
│   └── seed.ts                       # Seed script with Nike products
├── lib/
│   ├── auth.ts                       # Better Auth server config
│   └── auth-client.ts                # Better Auth client
└── store/
    └── cart-store.ts                 # Zustand cart store
```

## Scripts

| Command            | Description                     |
| ------------------ | ------------------------------- |
| `npm run dev`      | Start development server        |
| `npm run build`    | Build for production            |
| `npm run lint`     | Run ESLint                      |
| `npm run db:push`  | Push schema to database         |
| `npm run db:seed`  | Seed Nike products              |
| `npm run db:generate` | Generate Drizzle migrations  |
| `npm run db:migrate`  | Run Drizzle migrations       |
| `npm run db:studio`   | Open Drizzle Studio          |
