# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Developer Role
Frontend Developer

## Project Overview
Glen is a Next.js 15 application for place discovery and reviews with map integration. Built with TypeScript, React 19, TailwindCSS, and MapLibre GL for interactive maps. The project focuses on Korean places with location-based features.

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Prepare Husky git hooks
npm run prepare
```

## Architecture & Code Organization

### Feature-Sliced Design (FSD)
The project follows Feature-Sliced Design methodology:

- `src/app/` - Application layer (providers, layouts, global styles)
- `src/pages/` - Pages layer (route-specific components)
- `src/features/` - Features layer (business logic components)
- `src/entities/` - Entities layer (business entities)
- `src/shared/` - Shared layer (UI components, utilities)

### Key Architectural Patterns
- **Barrel Exports**: Each layer uses index.ts files for clean imports
- **UI Components**: Shared UI components in `src/shared/ui/` with consistent API
- **Absolute Imports**: Uses `@/` path mapping for clean imports
- **Component Co-location**: Related files grouped in feature directories

### Tech Stack Integration
- **Next.js 15**: App Router with TypeScript
- **MapLibre GL**: Interactive maps with custom Korean bounds (124.5-131.9 lng, 33.0-39.7 lat)
- **TailwindCSS**: Utility-first styling with CSS variables for theming
- **Overlay Kit**: Modal/dialog state management
- **Framer Motion**: Animations and transitions
- **Husky + lint-staged**: Git hooks for code quality

### Component Patterns
- React 19 features enabled
- Strict mode disabled in Next.js config
- Korean language support with Pretendard font
- Responsive design with mobile-first approach
- Semantic HTML with accessibility considerations

### Code Quality Tools
- ESLint with Next.js recommended config
- Prettier with Tailwind plugin for class sorting
- Commitlint with conventional commit format
- TypeScript strict mode enabled

## Work Documentation
After completing any development task, create a work log entry in `@worklog/yyyy-mm-dd.md` format to document (in Korean):
- What was implemented or changed
- Key decisions made during development
- Any issues encountered and how they were resolved
- Impact on the codebase or user experience