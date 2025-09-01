# Kaleriia Studio - Beauty Content Website

A premium, responsive one-page website for Kaleriia Studio, a US-based beauty content creation studio. Built with modern web technologies and designed with a focus on elegance, performance, and user experience.

## 🎨 Design Features

- **Premium Aesthetic**: Muted olive green and light beige color palette
- **Mobile-First**: Responsive design optimized for all devices
- **Elegant Typography**: Playfair Display for headings, Geist Sans for body text
- **Brand Font**: Font Larken Light for logo (requires setup)
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **Professional Layout**: Clean, spacious design with premium feel

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Components**: shadcn/ui for consistent UI components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for beautiful, consistent icons
- **Fonts**: Google Fonts (Playfair Display, Geist Sans) + Font Larken Light

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Photo Gallery**: Showcase of photography work
3. **Video Carousel**: Interactive video content display
4. **Before/After**: Transformation showcase with interactive elements
5. **Client Testimonials**: Social proof with carousel navigation
6. **Booking Form**: Interactive session booking with time slot selection
7. **What's Included**: Service details with checkmark list

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaleriia-studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

The color scheme is defined in `src/app/globals.css` using CSS custom properties:

```css
:root {
  --olive-green: 120 15% 35%;     /* Primary brand color */
  --light-beige: 45 30% 95%;      /* Background color */
  --dark-green: 120 20% 25%;      /* Text color */
  --warm-beige: 45 25% 90%;       /* Secondary background */
}
```

### Typography

- **Logo**: Font Larken Light (requires setup)
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Geist Sans (clean sans-serif)

### Font Larken Light Setup

**Important**: The logo is now configured to use Adobe Fonts (Font Larken). To complete the setup:

1. **Get Adobe Fonts account**: Sign up at [Adobe Fonts](https://fonts.adobe.com/) (free with Creative Cloud)
2. **Add Font Larken to your kit**: Visit [Font Larken page](https://fonts.adobe.com/fonts/larken#fonts-section)
3. **Create a web project**: In Adobe Fonts, create a web project for your domain
4. **Replace the kit code**: In `src/app/layout.tsx`, replace `[YOUR_KIT_CODE]` with your actual Adobe Fonts kit code

See `ADOBE_FONTS_SETUP.md` for detailed step-by-step instructions.

**Benefits of Adobe Fonts:**
- ✅ No font files to download or manage
- ✅ Automatic optimization and CDN delivery
- ✅ Professional licensing included
- ✅ Automatic fallbacks for better performance

### Content Updates

#### Hero Section
- Update the main heading in `src/app/page.tsx`
- Modify the description text
- Change call-to-action button text

#### Testimonials
- Edit the `testimonials` array in the component
- Add/remove testimonial objects as needed

#### Services
- Modify the "What's Included" list items
- Update time slots in the booking form

#### Images
- Replace placeholder divs with actual images
- Use Next.js `Image` component for optimization
- Place images in `public/images/` directory

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single column layout, optimized touch interactions
- **Tablet**: Adaptive grid layouts, improved spacing
- **Desktop**: Full-width layouts, enhanced hover effects

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS with purging for minimal CSS
- **Lazy Loading**: Intersection Observer for smooth animations

## 🔧 Development

### Project Structure

```
kaleriia-studio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   └── ui/                  # shadcn/ui components
│   ├── fonts/                   # Custom fonts directory
│   │   └── README.md            # Font setup instructions
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   └── images/                  # Image assets
└── package.json
```

### Adding New Components

1. Create new components in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Follow the existing component patterns

### Styling Guidelines

- Use Tailwind CSS utility classes
- Leverage custom CSS variables for consistent theming
- Maintain the established spacing and typography scale
- Follow mobile-first responsive design principles

## 📝 Content Management

The website content is currently hardcoded in the React components. For easier content management, consider:

- **CMS Integration**: Strapi, Contentful, or Sanity
- **Markdown Files**: MDX for content-driven updates
- **API Integration**: Fetch content from external sources

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure environment variables if needed

### Other Platforms

- **Netlify**: Build command: `npm run build`, publish directory: `out`
- **AWS Amplify**: Follow Next.js deployment guide
- **Traditional Hosting**: Build and upload the `out` directory

## 🔍 SEO & Analytics

- **Meta Tags**: Configured in `layout.tsx`
- **Structured Data**: Add JSON-LD for better search results
- **Analytics**: Integrate Google Analytics or similar
- **Performance**: Monitor Core Web Vitals

## 📞 Support

For questions or support:
- Check the Next.js documentation
- Review Tailwind CSS documentation
- Consult shadcn/ui component library

## 📄 License

This project is proprietary to Kaleriia Studio. All rights reserved.

---

Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.
