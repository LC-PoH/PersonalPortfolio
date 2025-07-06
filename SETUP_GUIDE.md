# Arbin Maharjan Portfolio - Complete Setup Guide

## 📁 Project Structure
```
arbin-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (shadcn/ui components)
│   │   │   ├── navigation.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   ├── db.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── attached_assets/
│   ├── resume.pdf
│   └── certificates/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── drizzle.config.ts
└── components.json
```

## 🚀 Quick Setup

1. **Create project directory:**
```bash
mkdir arbin-portfolio
cd arbin-portfolio
```

2. **Initialize package.json:**
```bash
npm init -y
```

3. **Install dependencies:**
```bash
# Core dependencies
npm install express react react-dom typescript tsx
npm install drizzle-orm @neondatabase/serverless ws
npm install @tanstack/react-query wouter
npm install react-hook-form @hookform/resolvers
npm install lucide-react clsx tailwind-merge
npm install class-variance-authority
npm install drizzle-zod zod zod-validation-error

# Radix UI components
npm install @radix-ui/react-dialog @radix-ui/react-label
npm install @radix-ui/react-separator @radix-ui/react-toast
npm install @radix-ui/react-tooltip @radix-ui/react-slot

# Dev dependencies
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss @tailwindcss/vite autoprefixer
npm install -D @types/node @types/express @types/react @types/react-dom
npm install -D drizzle-kit esbuild postcss
```

4. **Set up environment variables:**
```bash
# Create .env file
echo "DATABASE_URL=your_postgresql_connection_string" > .env
```

5. **Run the application:**
```bash
npm run dev
```

## 📋 Required Files

All the files are included in this project. Key files you need:

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `drizzle.config.ts` - Database configuration

### Frontend Files
- `client/src/main.tsx` - React entry point
- `client/src/App.tsx` - Main app component
- `client/src/index.css` - Global styles
- All component files in `client/src/components/`

### Backend Files
- `server/index.ts` - Express server
- `server/routes.ts` - API routes
- `server/storage.ts` - Database storage layer
- `server/db.ts` - Database connection

### Database Schema
- `shared/schema.ts` - Drizzle ORM schema

## 🗄️ Database Setup

1. **Create PostgreSQL database** (using Neon, Supabase, or local PostgreSQL)

2. **Update environment variables:**
```env
DATABASE_URL=postgresql://username:password@host:port/database
```

3. **Push schema to database:**
```bash
npm run db:push
```

## 📄 Assets Needed

Place these files in `attached_assets/`:
- Your resume PDF
- Professional certificates (PDF/PNG format)
- Any other documents you want to showcase

## 🌐 Deployment

The app is configured for deployment on platforms like:
- Replit
- Vercel
- Netlify
- Railway
- Render

Update the `DATABASE_URL` environment variable in your deployment platform.

## 🔧 Customization

Update these areas with your information:
- Personal details in components
- Social media links
- Professional experience
- Skills and certifications
- Contact information

## 📞 Support

If you need help setting up any part of this portfolio, let me know!