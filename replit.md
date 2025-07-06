# Arbin Maharjan Portfolio - Full Stack Web Application

## Overview

This is a modern full-stack web application built as a professional portfolio for Arbin Maharjan, a certified shift manager and IT student. The application showcases professional experience, skills, education, and provides a contact form for potential employers or clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: TSX for TypeScript execution in development

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schema with Zod validation
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon serverless database connection

## Key Components

### Frontend Components
1. **Layout Components**
   - Navigation with smooth scrolling and active section tracking
   - Responsive mobile-first design
   - Glass effect styling with backdrop blur

2. **Content Sections**
   - Hero section with call-to-action buttons
   - About section with professional background
   - Skills section with progress bars and certifications
   - Experience section with timeline and achievements
   - Contact form with validation and submission handling

3. **UI Components**
   - Comprehensive Shadcn/ui component library
   - Custom toast notifications
   - Responsive forms with error handling
   - Interactive elements with hover effects

### Backend Components
1. **API Routes**
   - Contact form submission endpoint with validation
   - Resume download functionality
   - Error handling middleware

2. **Database Layer**
   - User schema with authentication support
   - In-memory storage implementation for development
   - Extensible storage interface for future enhancements

3. **Development Tools**
   - Vite integration for development server
   - Request logging middleware
   - Error handling and response formatting

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data is validated on client-side using React Hook Form
3. Validated data is sent to `/api/contact` endpoint
4. Server validates required fields and email format
5. Contact information is logged (ready for email integration)
6. Success/error response is sent back to client
7. Toast notification displays result to user

### Resume Download
1. User clicks download button in hero section
2. Client initiates download request to `/api/resume/download`
3. Server serves resume file with appropriate headers
4. Browser downloads file automatically

### Navigation & Scrolling
1. Navigation tracks scroll position and updates active section
2. Smooth scrolling implemented for section navigation
3. Mobile menu toggles for responsive design

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Shadcn/ui components
- **Styling**: Tailwind CSS, Class Variance Authority
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Utilities**: Date-fns, Clsx, Lucide React icons

### Backend Dependencies
- **Server**: Express.js, TSX for development
- **Database**: Drizzle ORM, Neon Database client
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for schema validation
- **Build**: ESBuild for production builds

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Autoprefixer
- **Replit**: Development environment integration

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - starts development server with hot reload
2. **Type Checking**: `npm run check` - validates TypeScript
3. **Database**: `npm run db:push` - pushes schema changes to database
4. **Production Build**: `npm run build` - builds client and server
5. **Production Start**: `npm run start` - starts production server

### Build Output
- Client files built to `dist/public/` directory
- Server bundled to `dist/index.js` with external dependencies
- Static assets served from build directory

### Environment Configuration
- Database URL required for PostgreSQL connection
- Development vs production environment detection
- Replit-specific integrations for development environment

## Changelog
- July 06, 2025. Initial setup
- July 06, 2025. Added interactive certificate viewing with modal dialogs and downloadable certificates

## User Preferences

Preferred communication style: Simple, everyday language.