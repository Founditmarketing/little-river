import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Anchor, Shield, TrendingUp, Ship, ArrowUpRight, MessagesSquare, ChevronLeft, ChevronRight, Activity, FileCheck, MapPin, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// --- Assets ---
const HERO_IMAGES = {
  default: '/littleriversectionimage.jpeg',
  tugs: '/littlerivertugboats.jpeg',
  barges: '/littleriverbarges.jpeg',
  marine: '/littlerivermarinework.jpeg',
};

const LIMESTONE_IMG = '/littleriversectionimage2.jpeg';

const SERVICES_DATA = [
  {
    id: 'tugs',
    title: 'Tug Boats',
    description: 'High-horsepower inland and coastal towing services designed for reliability and safety. Our modern fleet handles heavy-duty maneuvers, shifting operations, and long-haul towing across the Gulf Coast waterways.',
    details: 'Equipped with cutting-edge navigation and powered by highly experienced crews, our vessels ensure your cargo reaches its destination efficiently.',
    image: HERO_IMAGES.tugs,
    link: '#'
  },
  {
    id: 'barges',
    title: 'Barge Services',
    description: 'Scalable transport solutions for aggregate, heavy equipment, and bulk materials. We offer specialized barge leasing and logistical support for major maritime construction and industrial hauling projects.',
    details: 'Our deck and hopper barges are maintained to the highest structural standards, capable of handling oversized loads and continuous supply chains.',
    image: HERO_IMAGES.barges,
    link: '#'
  },
  {
    id: 'marine',
    title: 'Marine Work',
    description: 'Comprehensive industrial marine construction and operational support. From dredge assist and tender services to complex marine logistics, our team provides the critical infrastructure needed for waterborne projects.',
    details: 'We partner with leading civil and marine contractors to execute complex dock constructions, revetment operations, and coastal restoration projects.',
    image: HERO_IMAGES.marine,
    link: '#'
  }
];

const WHY_CHOOSE_US_DATA = [
  {
    title: "SAFETY PROGRAM",
    description: "A comprehensive safety program is actively in force across all vessel and land operations. We cultivate a zero-incident culture to protect our most valuable assets—our people and our environment.",
    icon: Shield
  },
  {
    title: "DOT TESTING IN FORCE",
    description: "We strictly mandate and enforce Department of Transportation (DOT) drug and alcohol testing protocols for all personnel, maintaining a rigorous zero-tolerance operational climate.",
    icon: Activity
  },
  {
    title: "FULLY INSURED",
    description: "We operate with top-tier, comprehensive maritime and liability insurance policies to ensure our clients, cargo, and workforce are fully protected against risk at all times.",
    icon: FileCheck
  },
  {
    title: "LOUISIANA LICENSED",
    description: "Fully licensed and certified to execute operations across the State of Louisiana, meticulously complying with all local, state, and federal maritime guidelines and regulations.",
    icon: MapPin
  }
];

const AGGREGATE_CATEGORIES = [
  {
    title: "NUMBERED AGGREGATE SIZES",
    items: ["#2", "#8", "#10", "57", "67", "89", "610"]
  },
  {
    title: "DIMENSIONAL SIZES & CLASSES",
    items: ["4-", "8-", "4x1", "6x3", "Class 30", "Class 55"]
  },
  {
    title: "SPECIALTY MATERIALS & SOILS",
    items: ["Ag Lime", "Pea Gravel", "Pit Run", "Rip Rap", "Sand", "Top Soil"]
  }
];

// --- Components ---

function Header({ isLoaded = true }: { isLoaded?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: isLoaded ? 0.6 : 0, ease: "easeInOut" }}
        className="absolute top-0 w-full bg-signal-red h-[32px] hidden md:flex items-center justify-between px-[32px] border-b border-white/10 text-[10px] font-mono text-white/90 uppercase tracking-[0.1em] z-50"
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Shield size={12} strokeWidth={2} /> FULLY INSURED & LICENSED IN LA</span>
          <span>24/7 DISPATCH: +1 (555) 019-9182</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><MapPin size={12} strokeWidth={2} /> 683 HWY 459, OLLA LA 71465</span>
        </div>
      </motion.div>
      
      {/* Main Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: isLoaded ? 0.6 : 0, ease: "easeInOut" }}
        style={{ transitionProperty: 'background-color, border-color, box-shadow, min-height, top', transitionDuration: '300ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        className={`fixed w-full z-40 flex items-stretch ${isScrolled ? 'top-0 bg-white shadow-md border-b border-black/10 min-h-[64px] md:min-h-[80px]' : 'top-0 md:top-[32px] bg-transparent border-b border-white/10 min-h-[80px]'}`}
      >
        <div className={`flex flex-col justify-center px-[32px] relative transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-3'}`}>
          <div className="flex items-center mb-1">
            <span className={`font-sans font-black tracking-[0.05em] uppercase leading-none transition-all duration-300 ${isScrolled ? 'text-black text-[20px] md:text-[28px]' : 'text-white text-[24px] md:text-[28px]'}`}>
              LITTLE RIVER <span className="hidden md:inline">SERVICES </span><span className="text-signal-red">INC.</span>
            </span>
          </div>
          <span className={`font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isScrolled ? 'text-black/50 text-[8px] md:text-[10px]' : 'text-white/70 text-[9px] md:text-[10px]'}`}>
            LIMESTONE AGGREGATES
          </span>
        </div>
        <div className="flex flex-1 justify-end items-center pr-[24px] lg:hidden">
           <button onClick={() => setIsMenuOpen(true)} className={`p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              <Menu size={28} />
           </button>
        </div>
        <nav className="flex-1 justify-end hidden lg:flex">
          {['ABOUT', 'SERVICES', 'WHY US', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`flex items-center justify-center px-[32px] h-full border-l group cursor-pointer no-underline transition-colors duration-300 ${isScrolled ? 'border-black/10 hover:bg-black/5' : 'border-white/10 hover:bg-white/10'}`}>
              <span className={`font-sans text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${isScrolled ? 'text-black/60 group-hover:text-black' : 'text-white/80 group-hover:text-white'}`}>
                {item}
              </span>
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-steel-charcoal z-[70] flex flex-col border-l border-white/10 shadow-2xl lg:hidden"
            >
              {/* Menu Header */}
              <div className="p-[24px] flex justify-between items-center border-b border-white/10 bg-black/20">
                <div className="flex flex-col">
                  <span className="font-sans font-black text-[18px] tracking-[0.05em] uppercase leading-none text-white mb-1">
                    LITTLE RIVER <span className="text-signal-red">INC.</span>
                  </span>
                  <span className="font-sans font-bold text-[8px] tracking-[0.2em] uppercase text-white/50">
                    LIMESTONE AGGREGATES
                  </span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer bg-white/5 rounded-full">
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                {['ABOUT', 'SERVICES', 'WHY US', 'CONTACT'].map((item, i) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="px-[32px] py-[28px] border-b border-white/5 font-sans text-[22px] font-black tracking-[0.1em] text-white uppercase no-underline hover:text-signal-red hover:bg-white/5 transition-all flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-6">
                      <span className="text-[11px] text-white/20 font-mono font-normal">0{i+1}</span>
                      {item}
                    </span>
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-signal-red" />
                  </a>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="mt-auto bg-black/30 p-[32px] flex flex-col gap-3 border-t border-white/10">
                 <div className="flex items-center gap-3 font-mono text-[10px] text-signal-red font-bold tracking-[0.15em] uppercase mb-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse"></span>
                   24/7 Dispatch
                 </div>
                 <div className="font-sans font-black text-[24px] tracking-tight text-white">+1 (555) 019-9182</div>
                 <div className="font-sans text-[13px] text-white/50 leading-relaxed border-t border-white/10 pt-4 mt-2">
                   683 Hwy 459<br/>Olla LA 71465
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getBgImage = () => {
    switch (hoveredService) {
      case 'TUG BOATS': return HERO_IMAGES.tugs;
      case 'BARGES': return HERO_IMAGES.barges;
      case 'MARINE WORK': return HERO_IMAGES.marine;
      default: return HERO_IMAGES.default;
    }
  };

  const services = [
    { title: 'TUG BOATS', description: 'High-horsepower inland and coastal towing services.' },
    { title: 'BARGES', description: 'Scalable transport for aggregate and heavy equipment.' },
    { title: 'MARINE WORK', description: 'Comprehensive industrial marine construction support.' }
  ];

  return (
    <section className="relative h-auto lg:h-screen min-h-[600px] w-full overflow-hidden bg-black flex flex-col lg:flex-row">
      {/* Background Image placed behind gradient overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          <motion.img 
            key={getBgImage()}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={getBgImage()}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Industrial maritime backdrop"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0a1428]/50 to-panel/70 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 1, delay: isLoaded ? 0.8 : 0, ease: "easeOut" }}
        className="relative z-20 w-full h-full flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] pt-[80px] md:pt-[112px]"
      >
        {/* Left Viewport */}
        <div className="flex flex-col justify-center p-[32px] md:p-[64px] border-b lg:border-b-0 lg:border-r border-white/10">
          <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-white/50 mb-[16px]">
            EXPLORE OUR EXPERTISE
          </span>
          <h1 className="font-sans font-extrabold text-[40px] md:text-[56px] leading-[0.95] tracking-[-0.03em] uppercase text-white m-0 mb-[24px]">
            Industrial Scale.<br/>Precision Results.
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white/80 max-w-[400px] m-0 mb-[32px]">
            Delivering massive scale with microscopic precision across the inland waterways and Gulf Coast.
          </p>
          <button className="bg-signal-red border border-signal-red hover:bg-transparent hover:text-signal-red text-white font-mono text-[14px] md:text-[16px] font-bold tracking-[0.1em] uppercase py-[16px] px-[32px] md:py-[24px] md:px-[48px] w-fit flex items-center gap-3 transition-all duration-300 group cursor-pointer">
            Get A Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Viewport */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="flex-1 group relative border-b border-white/10 last:border-b-0 px-[32px] md:px-[64px] py-[32px] lg:py-0 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:bg-white/5"
              onMouseEnter={() => setHoveredService(service.title)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative">
                <h3 className="font-sans font-black text-[32px] md:text-[48px] tracking-[-0.01em] text-white uppercase m-0 leading-none transition-transform duration-300 lg:group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <div className="hidden lg:block absolute left-0 top-full pt-[12px] pointer-events-none overflow-hidden">
                  <p className="font-sans text-white/70 text-[15px] m-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="absolute right-[32px] md:right-[64px] top-1/2 -translate-y-1/2 text-signal-red font-sans text-[32px] md:text-[48px] leading-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                →
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TrustBanner() {
  const items = [
    "LITTLE RIVER SERVICES INC.", "INLAND WATERWAY LOGISTICS", "24/7 DISPATCH",
    "GULF COAST OPERATIONS", "HEAVY TOW OPERATIONS", "BULK AGGREGATE"
  ];
  
  const block = items.map((text, i) => (
    <div key={i} className="flex items-center">
      <span className="font-sans text-[11px] font-black tracking-[0.25em] text-steel-charcoal uppercase mx-[40px]">
        {text}
      </span>
      <div className="w-1.5 h-1.5 bg-signal-red rotate-45 shadow-[0_0_8px_rgba(255,51,51,0.5)]"></div>
    </div>
  ));

  return (
    <section className="h-[48px] bg-gradient-to-r from-[#f8f9fa] via-white to-[#f8f9fa] shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center w-full overflow-hidden shrink-0 z-30 relative border-y border-black/5">
      <motion.div 
        className="flex whitespace-nowrap items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        <div className="flex items-center">{block}</div>
        <div className="flex items-center">{block}</div>
      </motion.div>
    </section>
  );
}

function AggregateIndex() {
  return (
    <section className="bg-river-navy border-b border-white/10 flex flex-col w-full" id="products">
      {/* Top Header */}
      <div className="flex flex-col p-[40px] md:p-[64px] border-b border-white/10">
        <span className="font-sans font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-white/50 uppercase mb-[12px] block">
          INVENTORY INDEX
        </span>
        <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-[-0.01em] text-white m-0 leading-none mb-[16px]">
          Aggregate Products
        </h2>
        <p className="font-sans text-[14px] md:text-[16px] text-white/70 max-w-2xl leading-relaxed m-0">
          We maintain a comprehensive inventory of premium limestone aggregates, dimensional sizes, and specialty materials. Our products are specifically graded to support heavy-duty marine, industrial, and civil construction operations across the region.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-transparent">
        {AGGREGATE_CATEGORIES.map((category, catIdx) => (
          <div key={catIdx} className="flex flex-col p-[32px] md:p-[48px]">
            {/* Category Header */}
            <h3 className="font-sans font-bold text-[16px] md:text-[18px] tracking-[0.05em] text-white uppercase m-0 leading-snug mb-[24px]">
              {category.title}
            </h3>
            
            {/* Outline Product List */}
            <ul className="flex flex-col gap-[12px] m-0 p-0 list-none">
              {category.items.map((item, itemIdx) => (
                <li 
                  key={`${catIdx}-${itemIdx}`} 
                  className="font-mono text-[15px] md:text-[16px] text-white/70 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-signal-red rounded-full opacity-50 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Aggregate CTA Banner */}
      <div className="bg-transparent flex flex-col md:flex-row items-center justify-between p-[32px] md:p-[48px] w-full border-t border-white/10">
        <div className="flex flex-col mb-[24px] md:mb-0">
          <h4 className="font-sans font-black text-[18px] md:text-[24px] uppercase text-white m-0 leading-tight">Need a Specific Size or Custom Blend?</h4>
          <p className="font-sans text-[14px] md:text-[16px] text-white/70 m-0 mt-[8px]">Contact our dispatch for current availability, pricing, and specialized materials.</p>
        </div>
        <button className="bg-signal-red border border-signal-red hover:bg-transparent hover:text-signal-red text-white font-mono text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase py-[18px] px-[36px] md:py-[20px] md:px-[40px] transition-all duration-300 cursor-pointer flex-shrink-0 flex items-center gap-3 group">
          Call +1 (555) 019-9182 <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      zIndex: 1
    }),
    center: {
      zIndex: 1,
      x: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%"
    })
  };

  return (
    <section className="border-b border-white/10 overflow-hidden flex flex-col w-full relative z-10">
      {/* Full Width Carousel Container */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black group">
        
        {/* Navigation Overlays */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-30 flex justify-between items-center px-[16px] md:px-[48px]">
          <button onClick={prevSlide} className="pointer-events-auto bg-black/50 hover:bg-signal-red text-white p-2 md:p-4 rounded-full backdrop-blur-sm transition-all border border-white/10 flex items-center justify-center cursor-pointer shadow-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100 duration-300 translate-x-0 md:-translate-x-4 md:group-hover:translate-x-0">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button onClick={nextSlide} className="pointer-events-auto bg-black/50 hover:bg-signal-red text-white p-2 md:p-4 rounded-full backdrop-blur-sm transition-all border border-white/10 flex items-center justify-center cursor-pointer shadow-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100 duration-300 translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Line Navigation */}
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {SERVICES_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-300 cursor-pointer border-none rounded-full ${idx === currentIndex ? 'bg-signal-red w-12' : 'bg-white/30 hover:bg-white/60 w-6'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "tween", duration: 0.6, ease: [0.32, 0.72, 0, 1] } }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                nextSlide();
              } else if (swipe > 50) {
                prevSlide();
              }
            }}
          >
            {/* Background Image */}
            <motion.img 
              src={SERVICES_DATA[currentIndex].image} 
              alt={SERVICES_DATA[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-[32px] md:p-[80px] px-[56px] md:pl-[140px] pb-[64px] md:pb-[100px] flex flex-col justify-end pointer-events-none">
              <div className="max-w-4xl">
                <span className="hidden md:block font-sans font-bold text-[12px] tracking-[0.3em] uppercase text-signal-red mb-[16px]">OPERATIONAL CAPABILITIES</span>
                <h3 className="font-sans font-black text-[32px] md:text-[64px] leading-[1.1] md:leading-none text-white uppercase tracking-tight m-0 mb-[12px] md:mb-[16px] translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                  {SERVICES_DATA[currentIndex].title}
                </h3>
                <p className="font-sans text-[14px] md:text-[20px] text-white/80 m-0 mb-[20px] md:mb-[24px] translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 delay-75 max-w-3xl leading-relaxed line-clamp-3 md:line-clamp-none">
                  {SERVICES_DATA[currentIndex].description}
                </p>
                
                {/* Hidden details revealed on hover */}
                <div className="overflow-hidden pointer-events-auto">
                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-[20px] md:group-hover:translate-y-0 transition-all duration-500 delay-150 flex flex-col items-start">
                    <p className="hidden md:block font-sans text-[17px] text-white/60 m-0 mb-[24px] leading-relaxed max-w-2xl">
                      {SERVICES_DATA[currentIndex].details}
                    </p>
                    <a href={SERVICES_DATA[currentIndex].link} className="bg-white/10 hover:bg-signal-red text-white font-mono text-[11px] md:text-[12px] font-bold tracking-[0.1em] uppercase py-[10px] px-[20px] md:py-[12px] md:px-[24px] transition-colors cursor-pointer border border-white/20 hover:border-signal-red flex w-fit items-center gap-2 no-underline">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-steel-charcoal text-white border-b border-white/10 flex flex-col" id="about">
      {/* Top Half */}
      <div className="py-[64px] px-[64px] border-b border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
          <span className="font-sans font-bold text-[10px] tracking-[0.3em] uppercase text-white/50 mb-[16px]">02 // The Company</span>
          <h2 className="font-sans font-extrabold tracking-tight text-[32px] md:text-[48px] leading-tight m-0 uppercase">
            Little River Services Inc is classified as selling aggregate and tug boat and barge services.
          </h2>
        </div>
      </div>

      {/* Bottom Half: Thin Lineage Contact Form */}
      <div className="w-full px-[32px] md:px-[64px] py-[64px] bg-transparent">
        <form className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1 w-full flex flex-col">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Full Name</label>
            <input type="text" className="w-full bg-transparent border border-white/10 p-[16px] font-sans text-[16px] text-white placeholder-white/20 focus:outline-none focus:border-signal-red transition-colors" placeholder="John Doe" />
          </div>
          <div className="flex-1 w-full flex flex-col">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Email Address</label>
            <input type="email" className="w-full bg-transparent border border-white/10 p-[16px] font-sans text-[16px] text-white placeholder-white/20 focus:outline-none focus:border-signal-red transition-colors" placeholder="john@company.com" />
          </div>
          <div className="flex-1 w-full flex flex-col">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Company</label>
            <input type="text" className="w-full bg-transparent border border-white/10 p-[16px] font-sans text-[16px] text-white placeholder-white/20 focus:outline-none focus:border-signal-red transition-colors" placeholder="Enter company name" />
          </div>
          <div className="flex-1 w-full flex flex-col">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Interest</label>
            <select defaultValue="" className="w-full bg-transparent border border-white/10 p-[16px] font-sans text-[16px] text-white focus:outline-none focus:border-signal-red transition-colors cursor-pointer">
              <option value="" disabled className="text-black">Select Service...</option>
              <option value="tug_boats" className="text-black">Tug Boats</option>
              <option value="barges" className="text-black">Barges</option>
              <option value="marine_work" className="text-black">Marine Work</option>
              <option value="products" className="text-black">Products</option>
            </select>
          </div>
          <button type="button" className="bg-signal-red border border-signal-red hover:bg-transparent hover:text-signal-red text-white font-mono text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase py-[16px] px-[32px] transition-all duration-300 cursor-pointer flex-shrink-0 w-full md:w-auto h-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-river-navy border-b border-white/10 flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] w-full" id="why-us">
      {/* Left Column: Title & Text */}
      <div className="border-b lg:border-b-0 lg:border-r border-white/10 bg-transparent relative">
         <div className="p-[40px] md:p-[64px] sticky top-[100px] h-fit">
           <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 font-bold mb-[16px] block">03 // Trust & Reliability</span>
           <h2 className="font-sans text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-[-0.02em] uppercase m-0 leading-none text-white mb-[32px]">Why Choose Us</h2>
           <p className="font-sans text-[16px] md:text-[18px] leading-[1.8] text-white/70 max-w-lg m-0 mb-[40px]">
             We operate under uncompromising standards. Our commitment to safety, compliance, and professional reliability defines every project we undertake. From ensuring strict Coast Guard compliance to maintaining continuous zero-incident operations, we provide our clients with the confidence that their operations are in the best possible hands. We don't just meet industry benchmarks—we set them.
           </p>
           <button className="bg-transparent border border-white/20 hover:border-signal-red hover:bg-signal-red text-white font-mono text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase py-[16px] px-[32px] transition-all duration-300 cursor-pointer w-fit flex items-center gap-3 group">
             View Certifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
         </div>
      </div>
      
      {/* Right Column: Stacked Cards */}
      <div className="flex flex-col w-full divide-y divide-white/10">
        {WHY_CHOOSE_US_DATA.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col w-full bg-transparent py-[32px] md:py-[48px] px-[32px] md:px-[48px] lg:px-[64px]">
               <div className="flex items-center justify-between mb-[16px]">
                 <h3 className="font-sans font-black text-[18px] md:text-[20px] tracking-[0.1em] text-white uppercase m-0 pr-4">
                   {item.title}
                 </h3>
                 <Icon className="text-signal-red opacity-80 shrink-0" size={28} strokeWidth={2} />
               </div>
               <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-white/70 m-0 max-w-2xl">
                 {item.description}
               </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-signal-red flex flex-col items-center justify-center py-[96px] px-[32px] text-center cursor-pointer transition-all hover:brightness-110 group">
        <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tight uppercase text-white m-0 mb-[32px]">
          Ready to Load-Out?
        </h2>
        <div className="flex items-center gap-4 text-white group-hover:translate-x-4 transition-transform duration-300">
           <span className="font-mono text-sm tracking-[0.2em] font-bold uppercase">Contact Dispatch</span>
           <ArrowRight size={32} strokeWidth={2} />
        </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
          <div className="p-12 flex flex-col justify-between min-h-[300px]">
            <div className="flex flex-col mb-8">
              <span className="font-sans font-black text-[24px] md:text-[28px] tracking-[0.05em] uppercase leading-none text-white mb-1">
                LITTLE RIVER <span className="text-signal-red">INC.</span>
              </span>
              <span className="font-sans font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/50">
                LIMESTONE AGGREGATES
              </span>
            </div>
            <div className="font-mono text-[11px] leading-[1.6] text-white/50 space-y-2 mt-12 md:mt-0">
               <p className="m-0">683 Hwy 459<br/>Olla LA 71465</p>
               <p className="mt-4 m-0">contact@littleriver.com<br/>+1 (555) 019-9182</p>
            </div>
          </div>
          
          <div className="p-12 flex flex-col">
            <h4 className="font-sans text-[9px] uppercase tracking-[0.1em] text-white/40 mb-6 font-bold m-0">Sitemap</h4>
            <div className="flex flex-col space-y-4 font-sans text-[13px] font-medium text-white/70">
              <a href="#" className="hover:text-signal-red transition-colors no-underline text-white">About Us</a>
              <a href="#" className="hover:text-signal-red transition-colors no-underline text-white">Tug Services</a>
              <a href="#" className="hover:text-signal-red transition-colors no-underline text-white">Barge Services</a>
              <a href="#" className="hover:text-signal-red transition-colors no-underline text-white">Aggregate Store</a>
            </div>
          </div>

          <div className="p-12 flex flex-col">
            <h4 className="font-sans text-[9px] uppercase tracking-[0.1em] text-white/40 mb-6 font-bold m-0">Certifications</h4>
            <div className="flex flex-col space-y-4 font-sans text-[13px] font-medium text-white/70">
              <span>TWIC Compliant</span>
              <span>Subchapter M</span>
              <span>AWO Responsible Carrier</span>
              <span>ISO 9001:2015</span>
            </div>
          </div>

          <div className="p-12 flex flex-col">
            <h4 className="font-sans text-[9px] uppercase tracking-[0.1em] text-white/40 mb-6 font-bold m-0">Legal Data</h4>
            <div className="flex flex-col space-y-4 font-sans text-[13px] font-medium text-white/70">
              <a href="#" className="hover:text-white transition-colors text-white/50 no-underline">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors text-white/50 no-underline">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors text-white/50 no-underline">Safety Declarations</a>
            </div>
          </div>
      </div>
      <div className="p-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-mono w-full">
           <div>&copy; {new Date().getFullYear()} LITTLE RIVER SERVICES INC.</div>
           <div className="mt-4 md:mt-0">DATABANK: US-GULF-HQ // SYSTEM NOMINAL</div>
      </div>
    </footer>
  );
}

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div 
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center w-full max-w-2xl px-6">
        <h1 className="font-sans font-black text-[22px] md:text-3xl tracking-[0.1em] text-black m-0 mb-3 uppercase text-center w-full whitespace-nowrap">
          LITTLE RIVER SERVICES <span className="text-signal-red">INC.</span>
        </h1>
        {/* Underline Loading Bar */}
        <div className="w-full h-[1px] bg-black/10 overflow-hidden relative">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            onAnimationComplete={() => {
              setTimeout(onComplete, 300);
            }}
            className="absolute inset-0 bg-signal-red w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-steel-charcoal min-h-screen font-sans selection:bg-signal-red selection:text-white flex flex-col relative">
      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      
      <div className="flex-1 flex flex-col w-full h-full relative">
        <Header isLoaded={isLoaded} />
        <main className="flex-1 flex flex-col">
          <Hero isLoaded={isLoaded} />
        <TrustBanner />
        <AggregateIndex />
        <ServicesCarousel />
        <AboutSection />
        <WhyChooseUs />
        <CTASection />
        <Footer />
      </main>
      
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[90px] md:bottom-[100px] right-6 md:right-10 z-[60] w-[calc(100vw-48px)] max-w-[380px] bg-black shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Top Header */}
            <div className="bg-signal-red p-4 px-6 flex items-center justify-between text-white relative border-b border-white/10">
              <span className="font-sans font-black text-[14px] tracking-[0.15em] uppercase text-white m-0">Contact Dispatch</span>
            </div>
            
            {/* Detailed Form */}
            <div className="p-6 flex flex-col bg-steel-charcoal relative">
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/10 p-[12px] font-sans text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-signal-red transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 p-[12px] font-sans text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-signal-red transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-black/50 border border-white/10 p-[12px] font-sans text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-signal-red transition-colors" />
                <select defaultValue="" className="w-full bg-black/50 border border-white/10 p-[12px] font-sans text-[14px] text-white focus:outline-none focus:border-signal-red transition-colors cursor-pointer">
                  <option value="" disabled className="text-black">Select Interest...</option>
                  <option value="tug_boats" className="text-black">Tug Boats</option>
                  <option value="barges" className="text-black">Barges</option>
                  <option value="marine_work" className="text-black">Marine Work</option>
                  <option value="products" className="text-black">Products</option>
                </select>
                <textarea placeholder="Message Details" rows={3} className="w-full bg-black/50 border border-white/10 p-[12px] font-sans text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-signal-red transition-colors resize-none"></textarea>
                <button type="button" className="bg-white/5 hover:bg-signal-red text-white font-mono text-[12px] font-bold tracking-[0.1em] uppercase py-[12px] px-4 transition-all duration-300 cursor-pointer mt-2 w-full border border-white/10 hover:border-signal-red">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Message Button */}
      <button 
        onClick={() => setIsContactModalOpen(!isContactModalOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[70] bg-signal-red text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Toggle contact window"
      >
        {isContactModalOpen ? (
           <X size={28} strokeWidth={2} className="transition-transform duration-300" />
        ) : (
           <MessagesSquare size={28} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        )}
      </button>
      </div>
    </div>
  );
}
