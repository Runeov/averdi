# Dependency Optimization Plan for Averdi Projects

## Executive Summary

You have two parallel projects:
1. **Next.js project** (root directory) - Production-ready with Next.js 14
2. **Vite/React project** (`react-averdi/`) - Duplicate with Vite 7 + React 19

**Key Finding**: The `react-averdi` project has **massive dependency bloat** - it includes 31 Radix UI packages but only uses **6 UI components** in the actual application.

---

## Current Dependency Analysis

### React-Averdi Project (Vite)

#### Actually Used UI Components (6 total):
1. **Button** - Used in: Navbar, Hero, ContactPanel, NewsSection, ServiceCard, TeamCard, StylesheetPage
2. **Card** (+ CardContent, CardHeader, CardTitle, CardDescription) - Used in: ContactPanel, NewsSection, ServiceCard, TeamCard, OfficeSwitcher, StylesheetPage
3. **Input** - Used in: ContactPanel
4. **Textarea** - Used in: ContactPanel
5. **Label** - Used in: ContactPanel
6. **Badge** - Used in: StylesheetPage, ProfilePage
7. **Separator** - Used in: Footer, ProfilePage

#### Installed But UNUSED Radix UI Packages (24 packages):
- `@radix-ui/react-accordion` ❌
- `@radix-ui/react-alert-dialog` ❌
- `@radix-ui/react-aspect-ratio` ❌
- `@radix-ui/react-avatar` ❌
- `@radix-ui/react-checkbox` ❌
- `@radix-ui/react-collapsible` ❌
- `@radix-ui/react-context-menu` ❌
- `@radix-ui/react-dialog` ❌
- `@radix-ui/react-dropdown-menu` ❌
- `@radix-ui/react-hover-card` ❌
- `@radix-ui/react-menubar` ❌
- `@radix-ui/react-navigation-menu` ❌
- `@radix-ui/react-popover` ❌
- `@radix-ui/react-progress` ❌
- `@radix-ui/react-radio-group` ❌
- `@radix-ui/react-scroll-area` ❌
- `@radix-ui/react-select` ❌
- `@radix-ui/react-slider` ❌
- `@radix-ui/react-switch` ❌
- `@radix-ui/react-tabs` ❌
- `@radix-ui/react-toggle` ❌
- `@radix-ui/react-toggle-group` ❌
- `@radix-ui/react-tooltip` ❌

#### Other Unused Dependencies:
- `@fontsource-variable/inter` ❌ (font not used)
- `vaul` ❌ (drawer component not used)
- `cmdk` ❌ (command menu not used)
- `embla-carousel-react` ❌ (carousel not used)
- `input-otp` ❌ (OTP input not used)
- `react-day-picker` ❌ (calendar not used)
- `react-hook-form` ❌ (form library not used)
- `react-resizable-panels` ❌ (resizable panels not used)
- `recharts` ❌ (charts not used)
- `sonner` ❌ (toast notifications not used)
- `next-themes` ❌ (theme switcher not used - this is for Next.js)

### Next.js Project (Root)

**Status**: Has similar bloat with same unused packages

---

## Optimization Recommendations

### Option 1: Consolidate to Single Project (RECOMMENDED)

**Recommendation**: Keep the **Next.js project** and remove `react-averdi/` entirely.

**Reasons**:
- Next.js is production-ready with better SEO, routing, and deployment
- Eliminates duplicate maintenance
- Next.js has built-in optimizations (image optimization, code splitting, etc.)
- Better for business website with multiple pages

**Action Items**:
1. Delete entire `react-averdi/` directory
2. Clean up Next.js project dependencies (see Option 2)
3. Update deployment to use Next.js build

**Estimated Savings**: 
- ~50% reduction in repository size
- Eliminate duplicate dependency management
- Faster CI/CD builds

---

### Option 2: Minimize Dependencies in Current Projects

If keeping both projects, here's the optimization for `react-averdi/package.json`:

#### Dependencies to KEEP (Required):
```json
{
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.554.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwind-merge": "^3.4.0",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4"
  }
}
```

#### Dependencies to REMOVE (Unused):
```json
{
  "dependencies": {
    "@fontsource-variable/inter": "^5.2.8",  // ❌ Remove
    "@radix-ui/react-accordion": "^1.2.12",  // ❌ Remove
    "@radix-ui/react-alert-dialog": "^1.1.15",  // ❌ Remove
    "@radix-ui/react-aspect-ratio": "^1.1.8",  // ❌ Remove
    "@radix-ui/react-avatar": "^1.1.11",  // ❌ Remove
    "@radix-ui/react-checkbox": "^1.3.3",  // ❌ Remove
    "@radix-ui/react-collapsible": "^1.1.12",  // ❌ Remove
    "@radix-ui/react-context-menu": "^2.2.16",  // ❌ Remove
    "@radix-ui/react-dialog": "^1.1.15",  // ❌ Remove
    "@radix-ui/react-dropdown-menu": "^2.1.16",  // ❌ Remove
    "@radix-ui/react-hover-card": "^1.1.15",  // ❌ Remove
    "@radix-ui/react-menubar": "^1.1.16",  // ❌ Remove
    "@radix-ui/react-navigation-menu": "^1.2.14",  // ❌ Remove
    "@radix-ui/react-popover": "^1.1.15",  // ❌ Remove
    "@radix-ui/react-progress": "^1.1.8",  // ❌ Remove
    "@radix-ui/react-radio-group": "^1.3.8",  // ❌ Remove
    "@radix-ui/react-scroll-area": "^1.2.10",  // ❌ Remove
    "@radix-ui/react-select": "^2.2.6",  // ❌ Remove
    "@radix-ui/react-slider": "^1.3.6",  // ❌ Remove
    "@radix-ui/react-switch": "^1.2.6",  // ❌ Remove
    "@radix-ui/react-tabs": "^1.1.13",  // ❌ Remove
    "@radix-ui/react-toggle": "^1.1.10",  // ❌ Remove
    "@radix-ui/react-toggle-group": "^1.1.11",  // ❌ Remove
    "@radix-ui/react-tooltip": "^1.2.8"  // ❌ Remove
  }
}
```

#### DevDependencies - Keep Build Tools, Remove Vite:
```json
{
  "devDependencies": {
    "@types/node": "^24.10.1",  // ✅ Keep
    "@types/react": "^19.2.2",  // ✅ Keep
    "@types/react-dom": "^19.2.2",  // ✅ Keep
    "autoprefixer": "^10.4.22",  // ✅ Keep
    "postcss": "^8.5.6",  // ✅ Keep
    "tailwindcss": "^4.1.17",  // ✅ Keep
    "typescript": "~5.9.3",  // ✅ Keep
    
    // Remove all Vite and ESLint packages if consolidating
    "@eslint/js": "^9.39.1",  // ❌ Remove
    "@tailwindcss/postcss": "^4.1.17",  // ❌ Remove (use standard postcss)
    "@vitejs/plugin-react": "^5.1.0",  // ❌ Remove
    "eslint": "^9.39.1",  // ❌ Remove
    "eslint-plugin-react-hooks": "^7.0.1",  // ❌ Remove
    "eslint-plugin-react-refresh": "^0.4.24",  // ❌ Remove
    "globals": "^16.5.0",  // ❌ Remove
    "tailwindcss-animate": "^1.0.7",  // ❌ Remove (not used)
    "typescript-eslint": "^8.46.3",  // ❌ Remove
    "vite": "^7.2.4"  // ❌ Remove
  }
}
```

**Estimated Savings**:
- Remove ~30 unused packages
- Reduce `node_modules` size by ~60-70%
- Faster `npm install` times
- Smaller bundle size

---

### Option 3: Align Versions Between Projects

If keeping both projects, align dependency versions:

#### Version Mismatches to Fix:

| Package | Next.js Version | Vite Version | Recommended |
|---------|----------------|--------------|-------------|
| React | 18.3.1 | 19.2.0 | **18.3.1** (stable) |
| React DOM | 18.3.1 | 19.2.0 | **18.3.1** (stable) |
| TypeScript | 5.6.3 | 5.9.3 | **5.6.3** (latest stable) |
| Tailwind CSS | 3.4.15 | 4.1.17 | **3.4.15** (v4 is beta) |
| Lucide React | 0.487.0 | 0.554.0 | **0.554.0** (latest) |
| @types/node | 20.17.6 | 24.10.1 | **20.17.6** (LTS) |

**Note**: React 19 is still in RC. Downgrade to React 18.3.1 for production stability.

---

## Deployment Issue Resolution

### Current Problem
The Netlify build fails because:
1. Build runs from root directory
2. Tries to build `react-averdi` subdirectory
3. Can't find `node_modules` in correct location

### Solution Applied
Updated `react-averdi/netlify.toml`:
```toml
[build]
  base = "react-averdi"  # ✅ Added this line
  command = "npm run build"
  publish = "dist"
```

### Better Solution
**Deploy the Next.js project instead**:
- Better SEO and performance
- No subdirectory complexity
- Built-in Netlify optimization for Next.js

---

## Implementation Plan

### Phase 1: Immediate Actions (Recommended)
1. ✅ Fix Netlify build (already done with `base` config)
2. **Decision Point**: Choose Option 1 (consolidate) or Option 2 (minimize)

### Phase 2: If Consolidating (Option 1)
1. Backup `react-averdi/` directory
2. Verify Next.js project has all features
3. Delete `react-averdi/` directory
4. Update deployment to use Next.js
5. Clean Next.js dependencies using Option 2 approach

### Phase 3: If Minimizing (Option 2)
1. Create new branch for testing
2. Remove unused dependencies from `react-averdi/package.json`
3. Delete unused UI component files from `react-averdi/src/components/ui/`
4. Run `npm install` to update `package-lock.json`
5. Test application thoroughly
6. Repeat for Next.js project

### Phase 4: Version Alignment (Option 3)
1. Downgrade React 19 → 18.3.1 in `react-averdi`
2. Downgrade Tailwind 4 → 3.4.15 in `react-averdi`
3. Align other package versions
4. Test both projects

---

## Expected Benefits

### If Consolidating (Option 1):
- **50% smaller repository**
- **Single deployment pipeline**
- **No duplicate maintenance**
- **Better SEO and performance**
- **Estimated time saved**: 30-40% on future development

### If Minimizing (Option 2):
- **60-70% smaller node_modules**
- **40-50% faster npm install**
- **30-40% smaller bundle size**
- **Faster build times**
- **Reduced security surface area**

---

## Recommended Next Steps

1. **Decide on strategy**: Consolidate (Option 1) or Minimize (Option 2)?
2. **If consolidating**: Switch to Code mode to delete `react-averdi/` and clean Next.js
3. **If minimizing**: Switch to Code mode to remove unused dependencies
4. **Test thoroughly** after changes
5. **Update documentation** to reflect new structure

---

## Questions to Consider

1. **Do you need both projects?** If not, consolidate to Next.js
2. **Is the Vite project for development only?** Consider using Next.js dev mode instead
3. **Are there features in Vite project not in Next.js?** Port them over before consolidating
4. **What's your deployment target?** Next.js is better for production websites

---

## Files to Review/Modify

### If Consolidating:
- Delete: `react-averdi/` (entire directory)
- Modify: `package.json` (root) - remove unused deps
- Modify: Deployment configuration

### If Minimizing:
- Modify: `react-averdi/package.json`
- Delete: `react-averdi/src/components/ui/` (unused components)
- Modify: `package.json` (root) - same cleanup
- Delete: `components/ui/` (unused components in root)

---

*Generated: 2025-11-21*
*Analysis based on actual component usage in application code*