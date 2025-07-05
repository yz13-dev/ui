# @yz13/ui

A modern React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @yz13/ui
```

## Usage

### Import components

```tsx
import { Card, Gradient, TurborepoLogo } from '@yz13/ui';
import '@yz13/ui/styles.css';
```

### Import styles

```css
@import "tailwindcss";

@import "@yz13/ui/globals.css";

/* path to @yz13/ui in node_modules */
@source "../../../node_modules/@yz13/ui";

```

## Requirements

- React 18+ or 19+
- Tailwind CSS (for styling)

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Development mode with watch
npm run dev:components
npm run dev:styles

# Type checking
npm run check-types

# Linting
npm run lint
```

## License

MIT
