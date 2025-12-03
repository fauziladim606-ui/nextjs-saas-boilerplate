# 🚀 Next.js SaaS Boilerplate

Production-ready SaaS starter kit built with Next.js 16, PostgreSQL, Prisma, Stripe, and Docker.

## ✨ Features

- 🔐 **Authentication** - NextAuth.js with JWT sessions and credentials provider
- 💳 **Payments** - Stripe integration with subscription management
- 🗄️ **Database** - PostgreSQL with Prisma ORM
- 🎨 **UI** - Tailwind CSS 4 with responsive design
- 🐳 **Docker** - Complete Docker Compose setup for development
- 📧 **Email** - Ready for email integration (Resend, SendGrid)
- 🔒 **Security** - bcrypt password hashing, CSRF protection
- 📱 **Responsive** - Mobile-first design
- ⚡ **API Routes** - RESTful API with type safety
- 🎯 **TypeScript** - Full type safety across the stack

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** PostgreSQL
- **ORM:** Prisma 6
- **Authentication:** NextAuth.js
- **Payments:** Stripe
- **Styling:** Tailwind CSS 4
- **Container:** Docker & Docker Compose
- **Language:** TypeScript 5.7

## 📦 Quick Start

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- npm or yarn

### 1. Clone and Install

```bash
git clone https://github.com/ahmad-tamim/nextjs-saas-boilerplate.git
cd nextjs-saas-boilerplate
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your values:

- Generate `NEXTAUTH_SECRET`: `openssl rand -base64 32`
- Add your Stripe keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

### 3. Start Database

```bash
npm run docker:up
```

This starts PostgreSQL in Docker.

### 4. Setup Database

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

Build and run the entire stack:

```bash
docker-compose up --build
```

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── auth/         # Authentication pages
│   │   ├── dashboard/    # Protected dashboard
│   │   └── page.tsx      # Landing page
│   ├── components/       # React components
│   ├── lib/              # Utilities and configs
│   └── types/            # TypeScript definitions
├── prisma/
│   └── schema.prisma     # Database schema
├── docker-compose.yml    # Docker services
└── Dockerfile            # App container config
```

## 🔑 Key Files

- `src/lib/auth.ts` - NextAuth configuration
- `src/lib/prisma.ts` - Prisma client singleton
- `prisma/schema.prisma` - Database models
- `src/app/api/webhooks/stripe/` - Stripe webhook handler

## 💳 Stripe Integration

### Setup Webhooks

1. Install Stripe CLI: `brew install stripe/stripe-cli/stripe`
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
4. Copy webhook secret to `.env`

### Test Payments

Use Stripe test cards:

- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

## 📊 Database

### Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create migration
npm run prisma:migrate

# Open Prisma Studio
npm run prisma:studio
```

### Schema Overview

- **User** - User accounts with authentication
- **Account** - OAuth provider data
- **Subscription** - Stripe subscription management

## 🔐 Authentication

Built-in routes:

- `/auth/signin` - Sign in page
- `/auth/signup` - Sign up page
- `/dashboard` - Protected dashboard

Protected routes use NextAuth session validation.

## 🎨 Customization

### Branding

Update in:

- `src/app/page.tsx` - Landing page content
- `src/app/layout.tsx` - Site metadata
- `tailwind.config.js` - Color scheme

### Pricing Plans

Edit pricing in:

- `prisma/schema.prisma` - Plan enum
- `src/app/page.tsx` - Pricing display

## 🚀 Deployment

### Vercel

```bash
vercel deploy
```

Add environment variables in Vercel dashboard.

### Railway / Render

1. Connect GitHub repo
2. Add PostgreSQL database
3. Set environment variables
4. Deploy

## 📝 Environment Variables

Required:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - App URL
- `NEXTAUTH_SECRET` - Random secret key

Optional:

- `STRIPE_SECRET_KEY` - Stripe secret
- `STRIPE_WEBHOOK_SECRET` - Webhook secret
- `RESEND_API_KEY` - Email API key

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📄 License

MIT License - feel free to use this for your SaaS projects!

## 🔗 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Stripe Docs](https://stripe.com/docs)
- [NextAuth.js Docs](https://next-auth.js.org)

## 💬 Support

- Open an issue for bugs
- Star the repo if you find it useful!
- Follow for updates

---
