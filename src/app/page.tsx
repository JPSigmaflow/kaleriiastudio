"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Video, PenTool, Play, Pause, Star, Calendar, ArrowRight, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDemoActive, setIsDemoActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize slider position
  useEffect(() => {
    const initializeSlider = () => {
      const afterImage = document.querySelector('.after-image img') as HTMLElement;
      const sliderLine = document.querySelector('.slider-line') as HTMLElement;
      const sliderHandle = document.querySelector('.slider-handle') as HTMLElement;
      
                            if (afterImage && sliderLine && sliderHandle) {
        console.log('Initializing slider with position:', sliderPosition);
        
        // Add smooth transitions for demo
        if (isDemoActive) {
          afterImage.style.transition = 'clip-path 0.8s ease-in-out';
          sliderLine.style.transition = 'left 0.8s ease-in-out';
          sliderHandle.style.transition = 'left 0.8s ease-in-out';
        } else {
          afterImage.style.transition = '';
          sliderLine.style.transition = '';
          sliderHandle.style.transition = '';
        }
        
        afterImage.style.clipPath = `inset(0 0 0 ${sliderPosition}%)`;
        sliderLine.style.left = `${sliderPosition}%`;
        sliderHandle.style.left = `${sliderPosition}%`;
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeSlider, 100);
    return () => clearTimeout(timer);
  }, [sliderPosition, isDemoActive]);

  // Demo animation effect
  useEffect(() => {
    if (!isDemoActive) return;

    const runDemo = () => {
      const demoSequence = [
        { position: 50, delay: 1000 },  // Start at center (50%) - Shows balanced view
        { position: 30, delay: 1000 },  // Move left (30%) - Shows more "after" image
        { position: 70, delay: 1000 },  // Move right (70%) - Shows more "before" image
        { position: 50, delay: 1000 },  // Return to center (50%)
      ];

      let currentStep = 0;
      
      const executeStep = () => {
        if (currentStep >= demoSequence.length) {
          setIsDemoActive(false); // End demo
          return;
        }

        const step = demoSequence[currentStep];
        setSliderPosition(step.position);
        
        currentStep++;
        setTimeout(executeStep, step.delay);
      };

      // Start demo after initial delay
      setTimeout(executeStep, 2000);
    };

    runDemo();
  }, [isDemoActive]);

  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

  const testimonials = [
    {
      quote: "Working with Kaleria was a dream. They captured my essence in ways I never thought possible.",
      name: "Maya Rodriguez",
      location: "NYC"
    },
    {
      quote: "The attention to detail and creativity exceeded all my expectations. Absolutely stunning results!",
      name: "Sarah Chen",
      location: "LA"
    },
    {
      quote: "Professional, artistic, and truly transformative. I couldn't be happier with my beauty content.",
      name: "Emma Thompson",
      location: "Miami"
    }
  ];

  const videos = [
    {
      title: "Natural brow transformation",
      description: "for a captivating, expressive look.",
      image: "/images/video-1.mov"
    },
    {
      title: "Sunflower field session",
      description: "capturing natural beauty in nature.",
      image: "/images/video-2.mov"
    },
    {
      title: "Follow on TikTok",
      description: "see more beauty content",
      image: "/images/video-4-thumb.jpg",
      isLink: true,
      link: "https://www.tiktok.com/@kaleriiastudio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-start overflow-hidden py-16 md:py-0">
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
          
          {/* Header positioned on top of hero background */}
          <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 
                  className="text-2xl font-bold text-beige font-larken-light tracking-wider cursor-pointer hover:text-beige/90 transition-colors"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
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

          {/* Navigation Menu */}
          <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className={`absolute top-0 right-0 h-full w-80 bg-primary shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-6 h-full overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-beige hover:text-beige/80 p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="space-y-8">
                  <div>
                    <ul className="space-y-4">
                      <li>
                        <a 
                          href="#gallery" 
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMenuOpen(false);
                          }}
                        >
                          Watch Photo: Our Work in Action
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#videos" 
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMenuOpen(false);
                          }}
                        >
                          Video: Beauty in Motion
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#before-after" 
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('before-after')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMenuOpen(false);
                          }}
                        >
                          The Art of Makeup: Beauty, defined by every detail
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/book-session" 
                          className="text-beige hover:text-beige/80 transition-colors block py-3 text-2xl font-bold cursor-pointer"
                          style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}
                          onClick={() => {
                            setIsMenuOpen(false);
                          }}
                        >
                          Book a Session
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                
                
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-12 relative z-10 w-full">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="relative min-h-[70vh]">
                {/* Hero images for mobile - independently positioned */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -top-16 -right-12 z-10"
                >
                  {/* Large hero image */}
                  <div className="relative w-[17rem] h-[21rem]">
                    <img 
                      src="/images/hero-img-1.jpg" 
                      alt="Beauty transformation close-up" 
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Small eye image positioned on top */}
                                          <div className="absolute -bottom-28 -left-4 w-32 h-[10.5rem]">
                        <img 
                          src="/images/hero-img-2.jpg" 
                          alt="Eye detail with eyeliner" 
                          className="w-full h-full object-cover transform -rotate-[8deg]"
                        />
                      </div>
                  </div>
                </motion.div>
                
                {/* Text content for mobile - independently positioned */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute left-4 right-4 flex flex-col items-center justify-center text-center space-y-6 z-10"
                  style={{ top: '25%', transform: 'translateY(-50%)' }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-beige space-y-2">
                    <div className="hero-beauty-content">Beauty Content</div>
                    <div 
                      className="hero-reimagined italic font-light leading-[1.15] pb-1 overflow-visible"
                      style={{
                        background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Reimagined
                    </div>
                  </h2>
                  
                  
                  
                  <p className="text-base text-white max-w-md mx-auto leading-relaxed mt-32">
                    Creating stunning visual narratives that capture your authentic beauty and elevate your brand presence
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button 
                      size="lg" 
                      className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-16 py-6 font-medium cursor-pointer"
                      onClick={() => {
                        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      View Portfolio
                    </Button>
                    <Button size="lg" className="text-gray-700 hover:opacity-90 rounded-full px-16 py-6 font-medium"
                      style={{ 
                        background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)'
                      }}
                      onClick={() => {
                        window.location.href = '/book-session';
                      }}>
                      Book a Session <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="relative min-h-[70vh]">
                {/* Hero images for desktop - independently positioned */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-20 right-8 z-20"
                >
                  {/* Large hero image with small image on top */}
                  <div className="relative w-[32rem] h-[35rem]">
                    <img 
                      src="/images/hero-img-1.jpg" 
                      alt="Beauty transformation close-up" 
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Small eye image positioned at bottom */}
                    <div className="absolute -bottom-16 -left-6 w-56 h-56">
                      <img 
                        src="/images/hero-img-2.jpg" 
                        alt="Eye detail with eyeliner" 
                        className="w-full h-full object-cover transform -rotate-5"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Text content for desktop - independently positioned */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-12 top-3/5 transform -translate-y-1/2 max-w-2xl z-20"
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-beige mb-8 md:mb-6">
                    <span className="hero-beauty-content">Beauty Content</span>
                    <br />
                    <span 
                      className="hero-reimagined italic font-light"
                      style={{
                        background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Reimagined
                    </span>
                  </h2>
                  
                  
                  
                  <p className="text-base text-white mt-28 mb-10 md:mb-8 max-w-lg">
                    Creating stunning visual narratives that capture your authentic beauty and elevate your brand presence
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <Button 
                      size="lg" 
                      className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-16 py-6 font-medium cursor-pointer"
                      onClick={() => {
                        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      View Portfolio
                    </Button>
                    <Button size="lg" className="text-gray-700 hover:opacity-90 rounded-full px-16 py-6 font-medium"
                      style={{ 
                        background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)'
                      }}
                      onClick={() => {
                        window.location.href = '/book-session';
                      }}>
                      Book a Session <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section id="gallery" className="py-20 bg-warm-beige">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-5xl md:text-6xl font-larken-light font-bold text-primary mb-4"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                Watch Our Work <span className="italic font-light">in Action</span>
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                See how we create magic through motion, capturing every detail of the beauty transformation process
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (i === 4) {
                      window.open('https://www.instagram.com/kaleriastudio', '_blank');
                    } else {
                      setSelectedPhoto(`/images/foto-${i}.jpg`);
                    }
                  }}
                >
                  <img 
                    src={`/images/foto-${i}.jpg`}
                    alt={`Photo ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section id="videos" className="py-20" style={{ backgroundColor: '#dad6d1' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-5xl md:text-6xl font-larken-light font-bold text-primary mb-4"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                Beauty in Motion
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Every brushstroke, every detail, every transformation captured in motion.
              </p>
            </motion.div>
            
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
                onScroll={(e) => {
                  const container = e.currentTarget;
                  const scrollLeft = container.scrollLeft;
                  const videoWidth = 256 + 24; // w-64 (256px) + gap-6 (24px)
                  const currentIndex = Math.round(scrollLeft / videoWidth);
                  setCurrentVideo(Math.min(currentIndex, videos.length - 1));
                }}
              >
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-64 md:w-80"
                  >
                    {video.isLink ? (
                      // TikTok link card
                      <a 
                        href={video.link}
            target="_blank"
            rel="noopener noreferrer"
                        className="block relative aspect-[9/16] rounded-2xl overflow-hidden bg-black group"
                      >
                        <img 
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Instagram-style overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4">
                          <div className="text-white">
                            <h4 className="font-semibold text-base mb-1">{video.title}</h4>
                            <p className="text-xs text-white/90">{video.description}</p>
                          </div>
                        </div>
                        

                      </a>
                    ) : (
                      // Regular video card
                      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black group">
                        <video 
                          id={`video-${index}`}
                          src={video.image}
                          className="w-full h-full object-cover cursor-pointer"
                          preload="metadata"
                          playsInline
                          muted
                          poster={`/images/video-${index + 1}-thumb.jpg`}
                          onPlay={() => {
                            const playIcon = document.getElementById(`play-icon-${index}`);
                            const pauseIcon = document.getElementById(`pause-icon-${index}`);
                            const playButtonContainer = document.querySelector(`#play-button-${index}`);
                            if (playIcon && pauseIcon && playButtonContainer) {
                              playIcon.classList.add('hidden');
                              pauseIcon.classList.remove('hidden');
                              
                              // Hide pause button after 1 second
                              setTimeout(() => {
                                pauseIcon.classList.add('hidden');
                              }, 1000);
                              
                              // Hide entire circle/button after 1 second
                              setTimeout(() => {
                                playButtonContainer.classList.add('opacity-0');
                              }, 1000);
                            }
                          }}
                          onPause={() => {
                            const playIcon = document.getElementById(`play-icon-${index}`);
                            const pauseIcon = document.getElementById(`pause-icon-${index}`);
                            const playButtonContainer = document.querySelector(`#play-button-${index}`);
                            if (playIcon && pauseIcon && playButtonContainer) {
                              playIcon.classList.remove('hidden');
                              pauseIcon.classList.add('hidden');
                              playButtonContainer.classList.remove('opacity-0');
                            }
                          }}
                          onClick={() => {
                            const video = document.querySelector(`#video-${index}`) as HTMLVideoElement;
                            if (video && !video.paused) {
                              video.pause();
                            }
                          }}
                        />
                        {/* Instagram-style overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4">
                          <div className="text-white">
                            <h4 className="font-semibold text-base mb-1">{video.title}</h4>
                            <p className="text-xs text-white/90">{video.description}</p>
                          </div>
                        </div>
                        
                        {/* Play button overlay (center) */}
                        <div 
                          id={`play-button-${index}`}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-300 cursor-pointer"
                          onClick={() => {
                            const video = document.querySelector(`#video-${index}`) as HTMLVideoElement;
                            if (video) {
                              if (video.paused) {
                                video.play();
                                video.muted = false; // Unmute when playing
                              } else {
                                video.pause();
                              }
                            }
                          }}
                        >
                          <div id={`play-icon-${index}`}>
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <div id={`pause-icon-${index}`} className="hidden">
                            <Pause className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentVideo ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section id="before-after" className="py-20 bg-warm-beige">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <PenTool className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-5xl md:text-6xl font-larken-light font-bold text-primary mb-4"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                The Art of Makeup
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Beauty, defined by every detail.
              </p>
            </motion.div>
              
              {/* Interactive Before/After Slider */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-xl mx-auto lg:max-w-md"
              >
                <div 
                  className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 cursor-ew-resize"
                  onMouseDown={(e) => {
                    setIsDemoActive(false); // Stop demo when user interacts
                    const container = e.currentTarget;
                    const rect = container.getBoundingClientRect();
                                                             const handleSlider = (e: MouseEvent) => {
                      const x = e.clientX - rect.left;
                      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                      const beforeImage = container.querySelector('.before-image img') as HTMLElement;
                      const afterImage = container.querySelector('.after-image img') as HTMLElement;
                      const sliderLine = container.querySelector('.slider-line') as HTMLElement;
                      const sliderHandle = container.querySelector('.slider-handle') as HTMLElement;
                      
                      if (beforeImage && afterImage && sliderLine && sliderHandle) {
                                                 // Allow full range for complete image reveal
                         const safePercentage = Math.max(0, Math.min(100, percentage));
                        
                        // Moving left (lower percentage) should show more after image
                        // clipPath 'inset(0 0 0 X%)' clips from left by X%, revealing before image
                        // So lower percentage = less clipping = more after image visible
                        console.log('Mouse: Setting clip path to:', safePercentage);
                        afterImage.style.clipPath = `inset(0 0 0 ${safePercentage}%)`;
                        
                        sliderLine.style.left = `${safePercentage}%`;
                        sliderHandle.style.left = `${safePercentage}%`;
                        
                        setSliderPosition(safePercentage);
                      }
                    };
                    
                    const stopSlider = () => {
                      document.removeEventListener('mousemove', handleSlider);
                      document.removeEventListener('mouseup', stopSlider);
                    };
                    
                    document.addEventListener('mousemove', handleSlider);
                    document.addEventListener('mouseup', stopSlider);
                  }}
                  onTouchStart={(e) => {
                    setIsDemoActive(false); // Stop demo when user interacts
                    const container = e.currentTarget;
                    const rect = container.getBoundingClientRect();
                                         const handleSlider = (e: TouchEvent) => {
                       const touch = e.touches[0];
                       const x = touch.clientX - rect.left;
                       const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                       const beforeImage = container.querySelector('.before-image img') as HTMLElement;
                       const afterImage = container.querySelector('.after-image img') as HTMLElement;
                       const sliderLine = container.querySelector('.slider-line') as HTMLElement;
                       const sliderHandle = container.querySelector('.slider-handle') as HTMLElement;
                       
                       if (beforeImage && afterImage && sliderLine && sliderHandle) {
                         // Allow full range for complete image reveal
                         const safePercentage = Math.max(0, Math.min(100, percentage));
                         
                         // Moving left (lower percentage) should show more after image
                         // clipPath 'inset(0 0 0 X%)' clips from left by X%, revealing before image
                         // So lower percentage = less clipping = more after image visible
                         console.log('Touch: Setting clip path to:', safePercentage);
                         afterImage.style.clipPath = `inset(0 0 0 ${safePercentage}%)`;
                         
                         sliderLine.style.left = `${safePercentage}%`;
                         sliderHandle.style.left = `${safePercentage}%`;
                         
                         setSliderPosition(safePercentage);
                       }
                     };
                    
                    const stopSlider = () => {
                      document.removeEventListener('touchmove', handleSlider);
                      document.removeEventListener('touchend', stopSlider);
                    };
                    
                    document.addEventListener('touchmove', handleSlider);
                    document.addEventListener('touchend', stopSlider);
                  }}
                >
                  {/* Before Image (Full - Behind) */}
                  <div className="absolute inset-0 before-image z-0">
                    <img 
                      src="/images/before.jpg"
                      alt="Before makeup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* After Image (Full - Front) */}
                  <div className="absolute inset-0 after-image z-10">
                    <img 
                      src="/images/after.jpg"
                      alt="After makeup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  

                  
                  {/* Slider Line */}
                  <div className="absolute top-0 slider-line w-1 h-full bg-white border border-gray-200 transform -translate-x-1/2 z-10 shadow-lg" style={{ left: '50%' }}></div>
                  
                  {/* Slider Handle */}
                  <div className="absolute top-1/2 slider-handle transform -translate-x-1/2 -translate-y-1/2 cursor-ew-resize z-20" style={{ left: '50%' }}>
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center">
                      <span className="text-gray-600 text-xl">◀▶</span>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" style={{ background: 'linear-gradient(to top, #cfc6ba, #f5f2ed)' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-5xl md:text-6xl font-larken-light font-bold text-primary mb-4"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                Client Love
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Hear from the beautiful souls who trusted us with their stories
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-80"
                  >
                    <Card className="bg-beige border-primary/20">
                      <CardContent className="p-6 text-center">
                        <p className="text-primary mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold text-sm">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-primary/70">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-warm-beige">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-5xl md:text-6xl font-larken-light font-bold text-primary mb-4"
                  style={{ fontFamily: '"larken", "larken-display", "Larken", serif', fontWeight: 300 }}>
                Ready to Elevate Your Look?
              </h3>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-12">
                Book your personalized beauty content session and let us create something magical together
              </p>
              
              <Button size="lg" className="text-gray-700 hover:opacity-90 rounded-full px-16 py-6 font-medium"
                style={{ 
                  background: 'linear-gradient(72deg, #b48e19 0%, #f5da83 100%)'
                }}
                onClick={() => {
                  window.location.href = '/book-session';
                }}>
                Book a Session <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
              <Instagram className="w-6 h-6" />
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

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] lg:max-h-[98vh]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedPhoto}
              alt="Full size photo"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
