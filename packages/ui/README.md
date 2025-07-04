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

### Card Component

A clickable card component with hover effects.

```tsx
<Card title="Example Card" href="https://example.com">
  This is a description of the card content.
</Card>
```

### Gradient Component

A gradient background component with configurable options.

```tsx
<Gradient 
  conic={true} 
  small={false} 
  className="absolute inset-0"
/>
```

### TurborepoLogo Component

The official Turborepo logo as an SVG component.

```tsx
<TurborepoLogo />
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