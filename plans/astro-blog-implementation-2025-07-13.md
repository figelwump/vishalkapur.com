# Astro Blog Implementation Plan

**Project**: Vishal's Blog - Astro + AstroNano Theme
**Date**: 2025-07-13
**Branch**: feature/astro-blog-setup

## Overview
Build a lightweight static blog using Astro 5.x and AstroNano theme, with blog-only functionality (portfolio features removed). The blog listing will render at the root path `/` with individual posts at `/posts/[slug]`.

## Configuration Details
- **Domain**: vishalkapur.com
- **Title**: Vishal's Blog
- **Package Manager**: pnpm
- **Code Themes**: github-light / github-dark
- **Features to Skip**: Analytics (Plausible), Comments (Giscus)
- **URL Structure**: 
  - Blog listing: `/`
  - Individual posts: `/posts/[slug]`

## Implementation Phases

### Phase 1: Project Setup and Bootstrap ✅
- [x] Clone AstroNano repository
- [x] Initialize fresh git repository
- [x] Install dependencies with pnpm
- [x] Verify local development server works

### Phase 2: Remove Portfolio Features ✅
- [x] Delete portfolio pages (`src/pages/projects` and `src/pages/work`)
- [x] Delete portfolio content (`src/content/projects` and `src/content/work`)
- [x] Update navigation in Header component
- [x] Remove work and projects collections from content config

### Phase 3: Restructure Blog URLs ✅
- [x] Move blog listing from `/src/pages/blog/index.astro` to `/src/pages/index.astro`
- [x] Create `/src/pages/posts/` directory
- [x] Move blog post dynamic route to `/src/pages/posts/[...slug].astro`
- [x] Update all internal links to use new URL structure
- [x] Remove original `/blog` directory

### Phase 4: Update Routing Logic ✅
- [x] Update dynamic route handler in `posts/[...slug].astro` to generate correct paths
- [x] Ensure post URLs generate as `/posts/post-slug`
- [x] Update any helper functions that generate blog URLs
- [x] Update pagination logic if present
- [x] Update RSS feed to use new URL structure

### Phase 5: Configure Site Metadata ✅
- [x] Update site constants with "Vishal's Blog" details
- [x] Configure site URL in `astro.config.mjs` (vishalkapur.com)
- [x] Set up proper SEO metadata (Head component already configured)
- [x] Update navigation to reflect new structure
- [x] Update copyright year to 2025

### Phase 6: Astro Configuration ✅
- [x] Install Vercel static adapter
- [x] Update `astro.config.mjs` with Vercel adapter
- [x] Configure Shiki code highlighting themes (github-light/github-dark)
- [x] Ensure sitemap generation reflects new URL structure

### Phase 7: Content Model Verification ✅
- [x] Review blog content schema in `src/content/config.ts`
- [x] Added optional fields: updatedDate, image, tags
- [x] Ensure blog directory structure is correct
- [x] Removed irrelevant blog posts about deleted collections
- [x] Verify Markdown/MDX rendering
- [x] Update any content collection queries

### Phase 8: Build and Test ✅
- [x] Run production build
- [x] Test local preview
- [x] Verify blog listing renders at `/`
- [x] Verify individual posts render at `/posts/[slug]`
- [x] Check all internal links work correctly
- [x] Verify RSS feed reflects new URLs
- [x] Check sitemap has correct URLs
- [x] Verify portfolio routes return 404
- [x] Fixed Vercel adapter deprecation warning

### Phase 9: Git Setup
- [ ] Create initial commit
- [ ] Set up `.gitignore` if needed
- [ ] Create feature branch

### Phase 10: Deployment Preparation
- [ ] Document Vercel deployment steps
- [ ] Prepare environment configuration
- [ ] Create deployment guide

## Success Criteria
- Blog listing renders at `/` (root)
- Individual blog posts render at `/posts/[slug]`
- No portfolio-related pages or navigation
- No `/blog` route exists
- All internal links use new URL structure
- RSS feed and sitemap reflect correct URLs
- Code highlighting works with github themes
- Site builds without errors
- Ready for Vercel deployment

## Technical Notes
- Need to update `getStaticPaths()` in dynamic route to return correct paths
- May need to update any `href` attributes in components
- RSS feed generation will need URL pattern updates
- Sitemap should automatically reflect new structure

## Notes
- Using pnpm for better performance and disk space efficiency
- Skipping optional features (analytics, comments) for initial release
- Can add features post-MVP as needed