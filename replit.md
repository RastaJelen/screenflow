# Overview

This is a laptop rescreening system application built with React frontend and Express backend. The application guides technicians through a 5-step process to evaluate and rescreen laptops, collecting device information, cosmetic condition, functional status, and FMI (Find My iPhone) status. The system features a progress-based wizard interface with an admin panel for configuration management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a wizard-style flow (/, /q1, /q2, /q3, /q4, /admin)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS styling
- **State Management**: React Context API for global rescreening state management across components
- **Data Fetching**: TanStack Query (React Query) for server state management and API communication
- **Styling**: Tailwind CSS with CSS variables for theming, configured for both light and dark modes

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API structure with /api prefix for all endpoints
- **Storage Interface**: Abstracted storage layer with IStorage interface, currently implemented with in-memory storage (MemStorage)
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM with schema-driven development
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema**: Centralized schema definitions in shared directory for type consistency between frontend and backend
- **Validation**: Zod schemas generated from Drizzle schemas for runtime validation
- **Current Implementation**: In-memory storage for development, with database infrastructure ready for production deployment

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Admin Access**: Simple credential-based authentication for admin panel access
- **Security**: Cookie-based session management with secure defaults

## Development and Build Process
- **Monorepo Structure**: Client, server, and shared directories with TypeScript path mapping
- **Build Pipeline**: Vite for frontend bundling, ESBuild for backend compilation
- **Development Experience**: Hot reload for both frontend and backend, integrated error overlay
- **Type Safety**: Shared TypeScript types between frontend and backend via shared directory

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle Kit**: Database migration and schema management tool
- **PostgreSQL**: Primary database with UUID generation and session storage

## UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality for image displays

## Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast backend bundling for production builds
- **Replit Plugins**: Development environment integration for Replit platform

## Validation and Forms
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Form state management with resolver integration
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Utilities
- **date-fns**: Date manipulation and formatting utilities
- **clsx/tailwind-merge**: Conditional className composition utilities
- **nanoid**: Unique ID generation for client-side operations