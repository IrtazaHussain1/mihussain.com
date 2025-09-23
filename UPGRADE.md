# Node.js 22 Upgrade Guide

This project has been upgraded to use Node.js 22 or higher. Follow these steps to complete the upgrade:

## Prerequisites

- Node.js 22.0.0 or higher
- pnpm 8.0.0 or higher

## Installation Steps

1. **Install Node.js 22+**
   ```bash
   # Using nvm (recommended)
   nvm install 22
   nvm use 22
   
   # Or download from https://nodejs.org/
   ```

2. **Install pnpm 8+**
   ```bash
   npm install -g pnpm@latest
   ```

3. **Clean install dependencies**
   ```bash
   # Remove existing node_modules and lock file
   rm -rf node_modules pnpm-lock.yaml
   
   # Install with new versions
   pnpm install
   ```

4. **Verify installation**
   ```bash
   node --version  # Should show v22.x.x
   pnpm --version  # Should show 8.x.x or higher
   ```

## What's New

### Updated Dependencies
- **Next.js**: Upgraded to v15.0.0 with React 19 support
- **React**: Updated to v18.3.0
- **TypeScript**: Upgraded to v5.6.0
- **Framer Motion**: Updated to v11.0.0
- **Lucide React**: Updated to v0.400.0
- **All other dependencies**: Updated to latest compatible versions

### New Features
- **Modern ES2022 target**: Better performance and modern JavaScript features
- **Enhanced TypeScript**: Improved type checking and module resolution
- **React 19 compatibility**: Ready for React 19 features
- **Better performance**: Optimized for Node.js 22

### Configuration Updates
- Added Node.js 22+ requirement in `package.json`
- Created `.nvmrc` file for version management
- Updated TypeScript config for modern ES features
- Enhanced Next.js config with performance optimizations

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Troubleshooting

If you encounter issues:

1. **Clear all caches**
   ```bash
   rm -rf .next node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Check Node.js version**
   ```bash
   node --version
   # Should be 22.x.x or higher
   ```

3. **Update pnpm**
   ```bash
   npm install -g pnpm@latest
   ```

## Performance Benefits

- **Faster builds**: Node.js 22 includes performance improvements
- **Better memory management**: Enhanced garbage collection
- **Modern JavaScript**: ES2022 features for better performance
- **Improved TypeScript**: Faster type checking and compilation
