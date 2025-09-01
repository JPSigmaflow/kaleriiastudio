# Fonts Directory

This directory contains custom fonts for the Kaleriia Studio website.

## Required Fonts

### Font Larken Light
- **File**: `Larken-Light.woff2`
- **Usage**: Logo and brand text
- **Status**: ❌ **MISSING** - Please add the font file

## How to Add Font Larken Light

1. **Obtain the font file**: Purchase or download the Font Larken Light in `.woff2` format
2. **Place the file**: Save `Larken-Light.woff2` in this directory (`src/fonts/`)
3. **Verify the path**: The font is configured in `src/app/layout.tsx` to load from `../fonts/Larken-Light.woff2`

## Font Configuration

The font is already configured in the project:

```typescript
// src/app/layout.tsx
const larkenLight = localFont({
  src: "../fonts/Larken-Light.woff2",
  variable: "--font-larken-light",
  display: "swap",
});
```

## Usage in CSS

```css
/* src/app/globals.css */
.font-larken-light {
  font-family: var(--font-larken-light);
}
```

## Usage in Components

```tsx
<h1 className="font-larken-light">KALERIIA STUDIO</h1>
```

## Alternative Fonts

If Font Larken Light is not available, you can:

1. **Use a similar Google Font**: Replace with a similar elegant serif font
2. **Use system fonts**: Fall back to system serif fonts
3. **Contact the design team**: For the exact font specification

## Notes

- The `.woff2` format provides the best compression and browser support
- The font is configured with `display: "swap"` for better performance
- The font variable is available globally as `--font-larken-light`
