"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Camera, Star, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCalApi } from "@calcom/embed-react";

interface Package {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  isSpecial?: boolean;
  categories: string[];
}

const packages: Package[] = [
  {
    id: "kids-dream",
    title: "Kids Dream Photoshoot",
    shortDescription: "Individual approach and guidance with posing",
    fullDescription: [
      "Individual approach and guidance with posing",
      "Creation the look in the studio using props and custom AI elements",
      "Artistic photo editing",
      "20 edited photos + additional chosen by the client",
      "Pre-shoot consultation with parents to discuss wishes and styles",
      "1 hour photo shooting"
    ],
    categories: ["Kids"]
  },
  {
    id: "birthday-queen-king",
    title: "Birthday Queen/King Photoshoot",
    shortDescription: "Creation a festive look and setting",
    fullDescription: [
      "Creation a festive look and setting",
      "Portraits with decor, cake, candles",
      "15–20 editing photos chosen by the client",
      "Short video clips with the cake to capture emotions",
      "Artistic editing and full posing guidance"
    ],
    categories: ["Birthday", "Kids"]
  },
  {
    id: "family-photoshoot",
    title: "Family Photoshoot",
    shortDescription: "Individual approach to each family member",
    fullDescription: [
      "Individual approach to each family member",
      "Curating personalized looks, decor, and AI elements for unique style",
      "Group portraits and individual shots",
      "Full posing guidance during the shoot",
      "20–30 editing photos chosen by the client"
    ],
    categories: ["Kids", "Couples"]
  },
  {
    id: "brand-product",
    title: "Brand & Product Story Content",
    shortDescription: "Concept development and styling for your brand's image",
    fullDescription: [
      "Concept development and styling for your brand's image",
      "Products photography + lifestyle content with models/owners",
      "Option to add video clips",
      "Individual approach to the client's needs",
      "30+ edited photos for websites, ads, Instagram"
    ],
    categories: ["Beauty Portrait"]
  },
  {
    id: "maternity-glow",
    title: "Maternity Glow Photoshoot",
    shortDescription: "Portraits alone or with partner (studio, outdoor)",
    fullDescription: [
      "Portraits alone or with partner (studio, outdoor)",
      "Individual approach to each client",
      "15 professional edited photos chosen by the client",
      "Full posing guidance and frame composition",
      "High quality equipment, professional lighting, and additional props",
      "Creative enhancement with AI elements for a unique touch"
    ],
    categories: ["Beauty Portrait", "Couples"]
  },
  {
    id: "premium-portrait",
    title: "Premium Portrait Photoshoot",
    shortDescription: "2–4 hours of shooting with full support in creating personalized look",
    fullDescription: [
      "2–4 hours of shooting with full support in creating personalized look and styling guidance",
      "Use of professional equipment, lighting, props, and AI creativity",
      "Video clips for social media",
      "All photos in artistic color correction",
      "20–30 client-selected photos in premium retouch",
      "Personal consultation and posing guidance throughout",
      "Same-day photo selection with the client — chosen images will receive premium retouch (10–15)"
    ],
    categories: ["Beauty Portrait"]
  },
  {
    id: "christmas-magic",
    title: "Christmas Magic Photoshoot",
    shortDescription: "Individually styled looks and Christmas-themed décor in the studio",
    fullDescription: [
      "Individually styled looks and Christmas-themed décor in the studio",
      "Professional lighting, props, and cozy seasonal setups",
      "Posing guidance to create natural and warm holiday portraits",
      "20–25 edited photos + 10 client-selected for retouch",
      "Short festive video clips for social media",
      "✨ Available only during the holiday season"
    ],
    isSpecial: true,
    categories: ["Beauty Portrait", "Birthday"]
  },
  {
    id: "personal-content",
    title: "Personal Content Photoshoot",
    shortDescription: "Full personalized look (styling + guidance)",
    fullDescription: [
      "Full personalized look (styling + guidance)",
      "1 hour photoshoot (studio or outdoor)",
      "15 professionally edited photos",
      "Short video clips / Reels / TikToks for social media",
      "Individual approach and posing support throughout"
    ],
    categories: ["Beauty Portrait"]
  }
];

const filterCategories = ["All Packages", "Beauty Portrait", "Birthday", "Kids", "Couples"];

export default function BookSession() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All Packages");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "kids-dream-photoshoot" } as any);
        cal("ui", { 
          theme: "light",
          cssVarsPerTheme: { light: { "cal-brand": "#5b6854" }, dark: { "cal-brand": "#5b6854" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      } catch (e) {
        // no-op
      }
    })();
  }, []);

  const togglePackage = (packageId: string) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId);
  };

  const filteredPackages = packages.filter(pkg => 
    activeFilter === "All Packages" || pkg.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[12vh] flex items-center overflow-hidden py-2 md:py-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/bg-hero.jpg)' }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-beige/20"></div>
            <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-beige/20"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-beige/20"></div>
          </div>
          
          {/* Header (hamburger like home) */}
          <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 
                  className="text-2xl font-bold text-beige font-larken-light tracking-wider cursor-pointer hover:text-beige/90 transition-colors"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                  onClick={() => {
                    window.location.href = '/';
                  }}
                >
                  <div className="leading-tight">
                    <div 
                      style={{
                        background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      KALERIIA
                    </div>
                    <div className="ml-12">STUDIO</div>
                  </div>
                </h1>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-beige hover:bg-beige/10 p-3"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </div>
            </div>
          </header>

          {/* Navigation Menu (copied from home) */}
          <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu Content */}
            <div className={`absolute top-0 right-0 h-full w-80 bg-primary shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-end mb-8">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-beige hover:text-beige/80 p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-8">
                  <div>
                    <ul className="space-y-4">
                      <li>
                        <a 
                          href="/"
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#gallery"
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Watch Photo: Our Work in Action
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#videos"
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Video: Beauty in Motion
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#before-after"
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          The Art of Makeup: Beauty, defined by every detail
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          
          
        </section>

        {/* Filter Section */}
        <section className="pt-8 pb-3 bg-warm-beige">
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-1"
            >
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-primary text-beige hover:bg-primary/90"
                      : "border-primary text-primary hover:bg-primary hover:text-beige"
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Packages Section */}
        <section className="pt-2 pb-20 bg-warm-beige">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                {activeFilter === "All Packages" 
                  ? ""
                  : `Showing ${filteredPackages.length} package${filteredPackages.length !== 1 ? 's' : ''} in ${activeFilter}`
                }
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-2">
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-beige border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        {/* Package Header - Always Visible */}
                        <div 
                          className="px-6 py-4 cursor-pointer hover:bg-primary/5 transition-colors duration-200"
                          onClick={() => togglePackage(pkg.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-xl md:text-2xl font-larken-light font-semibold text-primary"
                                    style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 600 }}>
                                  {pkg.title}
                                </h3>
                                {pkg.isSpecial && (
                                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                    <Star className="w-3 h-3" />
                                    Seasonal
                                  </span>
                                )}
                              </div>
                              <p className="text-primary/80 text-base leading-normal">
                                {pkg.shortDescription}
                              </p>
                              {/* Category tags */}
                              <div className="flex flex-wrap gap-2 mt-2">
                                {pkg.categories.map((category) => (
                                  <span
                                    key={category}
                                    className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <motion.div
                                animate={{ rotate: expandedPackage === pkg.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {expandedPackage === pkg.id ? (
                                  <ChevronUp className="w-6 h-6 text-primary" />
                                ) : (
                                  <ChevronDown className="w-6 h-6 text-primary" />
                                )}
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Package Details - Expandable */}
                        <AnimatePresence>
                          {expandedPackage === pkg.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 border-t border-primary/10">
                                <div className="pt-4 space-y-2">
                                  {pkg.fullDescription.map((detail, detailIndex) => (
                                    <motion.div
                                      key={detailIndex}
                                      initial={{ opacity: 0, x: 100 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ 
                                        duration: 0.5, 
                                        delay: 0.1 + (detailIndex * 0.1),
                                        ease: "easeOut"
                                      }}
                                      className="flex items-start gap-3"
                                    >
                                      <Check className="w-4 h-4 text-primary mt-1.5 flex-shrink-0" />
                                      <motion.p
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ 
                                          duration: 0.4, 
                                          delay: 0.3 + (detailIndex * 0.1),
                                          ease: "easeOut"
                                        }}
                                        className="text-primary/90 text-base leading-relaxed"
                                      >
                                        {detail}
                                      </motion.p>
                                    </motion.div>
                                  ))}
                                </div>
                                
                                {/* Book Now Button */}
                                <motion.div
                                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{ 
                                    duration: 0.5, 
                                    delay: 0.5,
                                    ease: "backOut"
                                  }}
                                  className="mt-6 pt-4 border-t border-primary/10"
                                >
                                  {pkg.id === "kids-dream" ? (
                                    <Button 
                                      asChild
                                      className="w-full text-gray-800 rounded-full py-5 px-10 font-medium text-base transition-all duration-300 hover:scale-105"
                                      style={{ background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)' }}
                                    >
                                      <a href="/book-session/kids-dream">
                                        Book Now <ArrowRight className="ml-2 w-5 h-5" />
                                      </a>
                                    </Button>
                                  ) : pkg.id === "birthday-queen-king" ? (
                                    <Button 
                                      asChild
                                      className="w-full text-gray-800 rounded-full py-5 px-10 font-medium text-base transition-all duration-300 hover:scale-105"
                                      style={{ background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)' }}
                                    >
                                      <a href="/book-session/birthday-queen-king">
                                        Book Now <ArrowRight className="ml-2 w-5 h-5" />
                                      </a>
                                    </Button>
                                  ) : (
                                    <Button 
                                      className="w-full text-gray-800 rounded-full py-5 px-10 font-medium text-base transition-all duration-300 hover:scale-105"
                                      style={{ background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)' }}
                                    >
                                      Book Now <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                  )}
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12"
                >
                  <div className="bg-beige rounded-lg p-8 border border-primary/20">
                    <Camera className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-primary mb-2">No packages found</h3>
                    <p className="text-primary/60 mb-4">
                      No packages match the selected filter. Try selecting a different category.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setActiveFilter("All Packages")}
                      className="border-primary text-primary hover:bg-primary hover:text-beige"
                    >
                      Show All Packages
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-8 bg-warm-beige">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-4xl md:text-5xl font-larken-light font-bold text-primary mb-2"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                Ready to Create Magic?
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-6">
                Can't find the perfect package? Let's create a custom experience just for you
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary text-beige hover:bg-primary/90 rounded-full px-16 py-6 font-medium">
                  <a href="sms:+19172951997?&body=Hi%20KALERIIA%20STUDIO%2C%20I%27d%20like%20to%20get%20in%20touch%20about%20a%20photoshoot.">
                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/kaleriiastudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-beige hover:text-beige/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold">kaleriiastudio</span>
            </a>
            <a 
              href="https://www.tiktok.com/@kaleriiastudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-beige hover:text-beige/80 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.2.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="font-semibold">kaleriiastudio</span>
            </a>
          </div>
          <p className="text-beige/80 text-sm">
            © 2025 KALERIIA STUDIO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
