# Overview

This is a personal portfolio website for Shanti Lal, a Senior React.js/Next.js Developer. The application showcases professional experience, skills, projects, and contact information through a modern, responsive web interface. Built as a full-stack application with React frontend and Express backend, it demonstrates expertise in modern web development technologies and serves as both a portfolio showcase and a technical demonstration of development capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with single-page application behavior
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript for full-stack type safety
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement via Vite integration for seamless development experience

## Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme System**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family for body text, JetBrains Mono for code elements
- **Color Scheme**: Neutral base with purple primary accent colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Data Architecture
- **Schema Definition**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type validation and form handling
- **User Management**: Basic user entity structure with username/password fields
- **Storage Interface**: Abstract storage interface allowing for easy database integration

## Development Features
- **Hot Reload**: Development server with automatic refresh on file changes
- **Error Handling**: Runtime error overlay for development debugging
- **Path Aliases**: TypeScript path mapping for clean import statements
- **Code Quality**: Strict TypeScript configuration with comprehensive type checking

# External Dependencies

## Database Integration
- **ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Database Provider**: Neon Database serverless PostgreSQL (configured but not actively used)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## UI and Styling
- **Component Primitives**: Radix UI for accessible, unstyled component foundations
- **Icon Libraries**: Lucide React for general icons, React Icons for brand/social icons
- **Animation**: Embla Carousel for interactive carousels and smooth transitions
- **Form Handling**: React Hook Form with Hookform Resolvers for validation integration

## Development Tools
- **Build System**: Vite with React plugin and runtime error modal for development
- **Development Enhancement**: Replit-specific plugins for cartographer and banner integration
- **Package Management**: npm with lockfile for dependency version consistency
- **TypeScript**: Strict configuration with ES modules and modern target compilation

## Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and tailwind-merge for conditional className handling
- **Validation**: Zod for schema validation and type inference
- **Unique IDs**: nanoid for generating unique identifiers

## Deployment Configuration
- **Production Build**: ESBuild for server compilation, Vite for client bundling
- **Environment**: Node.js production deployment with static file serving
- **Font Loading**: Google Fonts integration with preconnect optimization
- **SEO**: Open Graph meta tags and proper HTML structure for search optimization