# MicroTools Hub - Tip Calculator

## Overview
This is a Next.js 14 application that provides a tip calculator tool with Google AdSense integration. The project was successfully imported from GitHub and configured to run in the Replit environment.

## Recent Changes
- **September 20, 2025**: Successfully imported and configured the project for Replit environment
  - Fixed TypeScript configuration and syntax errors in JSX files
  - Reorganized project structure to use Next.js App Router pattern
  - Configured development server to run on 0.0.0.0:5000 for Replit proxy compatibility
  - Set up deployment configuration for production use

## Project Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with custom variables and utility classes
- **Components**:
  - `app/layout.tsx`: Root layout with navigation and AdSense script
  - `app/page.tsx`: Main tip calculator component
  - `components/AdSenseSlot.tsx`: Reusable AdSense ad slot component
  - `app/globals.css`: Global styles and CSS variables

## Key Features
- Tip calculation with customizable percentage
- Bill splitting among multiple people
- Google AdSense integration (requires NEXT_PUBLIC_ADSENSE_CLIENT environment variable)
- Responsive design with mobile-first approach

## Development
- **Dev Server**: Runs on port 5000 with host 0.0.0.0
- **Build**: Uses standard Next.js build process
- **Deployment**: Configured for autoscale deployment target

## Environment Variables
- `NEXT_PUBLIC_ADSENSE_CLIENT`: Google AdSense client ID (optional for development)

## File Structure
```
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Main tip calculator page
│   └── globals.css      # Global styles
├── components/
│   └── AdSenseSlot.tsx  # AdSense component
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── ads.txt              # AdSense ads.txt file
```

## Notes
- The project uses Next.js 13+ App Router pattern
- Development server is configured for Replit environment with proper host settings
- Cache control headers are disabled for development to prevent caching issues in Replit's iframe environment