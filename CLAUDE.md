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
Claude는 모든 작업 완료 후 반드시 `@worklog/yyyy-mm-dd.md` 형식으로 작업 로그를 작성해야 합니다 (한국어로 작성):
- 구현되거나 변경된 내용
- 개발 중 내린 주요 결정사항
- 발생한 문제와 해결 방법
- 코드베이스나 사용자 경험에 미치는 영향
- Claude가 수행한 모든 작업 내용 (코드 변경, 파일 생성/수정, 설정 변경 등)