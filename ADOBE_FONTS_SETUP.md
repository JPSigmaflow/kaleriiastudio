# Adobe Fonts Setup Guide - Font Larken

This guide will help you integrate Adobe Fonts (Font Larken) into your Kaleriia Studio website.

## 🎯 **What We're Setting Up**

- **Font Family**: Larken (designed by Ellen Luff)
- **Source**: [Adobe Fonts](https://fonts.adobe.com/fonts/larken#fonts-section)
- **Usage**: Logo and brand text
- **License**: Included with Adobe Fonts subscription

## 🚀 **Step-by-Step Setup**

### **Step 1: Access Adobe Fonts**

1. Go to [Adobe Fonts](https://fonts.adobe.com/)
2. Sign in with your Adobe account (or create one)
3. Search for "Larken" or go directly to [https://fonts.adobe.com/fonts/larken](https://fonts.adobe.com/fonts/larken)

### **Step 2: Add Font Larken to Your Kit**

1. Click "Add Family" on the Larken font page
2. This will add it to your Adobe Fonts kit
3. Go to your "Manage Fonts" section

### **Step 3: Create a Web Project**

1. In "Manage Fonts", click "Create a Web Project"
2. Give it a name (e.g., "Kaleriia Studio Website")
3. Select the domains where you'll use the fonts
4. Publish your kit

### **Step 4: Get Your Kit Code**

1. After publishing, you'll get a kit code
2. It will look like: `https://use.typekit.net/hvp8zrm.css`
3. Copy this URL

### **Step 5: Update Your Website**

1. **The kit code is already configured** in `src/components/AdobeFonts.tsx`
2. **Current kit code**: `hvp8r8zrm` (already active)
3. **The logo is already configured** to use `font-larken-light` class

## 🎨 **Available Font Weights**

Based on Adobe Fonts, Font Larken typically includes:
- **Light** (300) - Perfect for elegant logos
- **Regular** (400) - Good for headings
- **Medium** (500) - For emphasis
- **Bold** (700) - For strong statements

## 📱 **CSS Classes Available**

```css
.font-larken {
  font-family: "larken", serif;
}

.font-larken-light {
  font-family: "larken", serif;
  font-weight: 300;
}

.font-larken-regular {
  font-family: "larken", serif;
  font-weight: 400;
}

.font-larken-medium {
  font-family: "larken", serif;
  font-weight: 500;
}

.font-larken-bold {
  font-family: "larken", serif;
  font-weight: 700;
}
```

## 🔧 **Current Implementation**

The website is already configured to use Font Larken:

- **Logo**: Uses `font-larken` class
- **CSS**: Font classes are defined in `globals.css`
- **Layout**: Adobe Fonts link is ready (just needs your kit code)

## ✅ **What's Already Done**

- ✅ Font classes defined in CSS
- ✅ Logo configured to use Font Larken
- ✅ Adobe Fonts integration structure ready
- ✅ Fallback fonts configured

## ⏳ **What You Need to Do**

1. **Get Adobe Fonts account** (free with Creative Cloud)
2. **Add Font Larken to your kit**
3. **Create a web project**
4. **Replace the kit code** in `layout.tsx`
5. **Test the website**

## 🚨 **Important Notes**

- **Adobe Fonts is free** with Creative Cloud subscription
- **Web fonts are automatically optimized** for performance
- **No font files to download** or manage
- **Automatic fallbacks** if fonts fail to load
- **CDN delivery** for fast loading worldwide

## 🔍 **Testing**

After setup:
1. Run `npm run dev`
2. Check the logo font in the browser
3. Verify Font Larken is loading (check Network tab in DevTools)
4. Test on different devices and browsers

## 📞 **Support**

- **Adobe Fonts Help**: [help.adobe.com](https://help.adobe.com)
- **Font Larken Foundry**: [Ellen Luff Type Foundry](https://fonts.adobe.com/fonts/larken#fonts-section)

---

**Next Step**: Get your Adobe Fonts kit code and replace `[YOUR_KIT_CODE]` in `src/app/layout.tsx`!
