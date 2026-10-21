export interface Project {
  id: string;
  title: string;
  category: 'Brand Identity' | 'Editorial & Posters' | 'Photography & Direction' | 'Typography & Layout';
  tagline: string;
  client: string;
  year: string;
  coverImage: string;
  featured?: boolean;
  deliverables: string[];
  tools: string[];
  palette: string[];
  description: string;
  clientReview?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const DESIGNER_INFO = {
  brandName: 'ABYEE STYLE',
  name: 'Waqas',
  fullName: 'Waqas · ABYEE STYLE',
  title: 'Graphic Designer & Visual Art Director',
  tagline: 'Designing distinctive visual identities, editorial layouts, and high-impact art direction for forward-thinking brands.',
  email: 'waqasaby0301@gmail.com',
  phone: '03035958723',
  phoneFormatted: '+92 303 5958723',
  whatsappUrl: 'https://wa.me/923035958723?text=Hi%20ABYEE%20STYLE,%20I%20would%20like%20to%20discuss%20a%20graphic%20design%20project!',
  location: 'Available Globally · Remote & Studio',
  heroImage: '/assets/aistudio/7da29ef5188d40bda8aa3ad85bc41db0_3e531d97.jpg',
  aboutImage: '/assets/aistudio/Confident_Portrait_by_a_Modern_Wall_42f9c56c.png',
  bio: 'Specializing in visual identities, editorial publications, poster designs, and creative art direction at ABYEE STYLE. I translate complex brand stories into striking visual languages that stand out in crowded cultural and commercial landscapes.',
  metrics: [
    { label: 'Completed Projects', value: '52+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Brand Identities', value: '18' },
    { label: 'Client Satisfaction', value: '100%' },
  ],
  skills: [
    { name: 'Adobe Photoshop', level: '96%' },
    { name: 'Adobe Illustrator', level: '95%' },
    { name: 'Adobe InDesign', level: '92%' },
    { name: 'Figma & UI Systems', level: '88%' },
    { name: 'Adobe Lightroom', level: '94%' },
    { name: 'Typography & Layout', level: '98%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'neo-noir-identity',
    title: 'Neo-Noir Visual Identity',
    category: 'Brand Identity',
    tagline: 'High-contrast cyan & crimson dual-lighting campaign for night culture & electronic music label',
    client: 'KROMA Sound & Club Co.',
    year: '2026',
    coverImage: '/assets/aistudio/7da29ef5188d40bda8aa3ad85bc41db0_3e531d97.jpg',
    featured: true,
    deliverables: ['Brand Identity', 'Stage Visuals', 'Merch Direction', 'Event Posters'],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Lightroom'],
    palette: ['#050505', '#06B6D4', '#F43F5E', '#E4E4E7'],
    description: 'Developed an atmospheric, cyberpunk-inspired visual language utilizing saturated split-lighting (cyan and magenta) against absolute dark backgrounds. The identity bridged underground electronic music with high-fashion streetwear, featuring bespoke geometric logotypes, vinyl record packaging, and motion assets.',
    clientReview: {
      quote: "Waqas brought our sound identity to life with unmatched precision. The visual contrast made our festival launch sell out in 3 hours.",
      author: 'Marcus Vance',
      role: 'Creative Director, KROMA Co.'
    }
  },
  {
    id: 'monochrome-editorial',
    title: 'Avant-Garde Studio Monograph',
    category: 'Photography & Direction',
    tagline: 'Stark minimalist stool staging with high-aperture rim illumination',
    client: 'Atelier Submissions',
    year: '2026',
    coverImage: '/assets/aistudio/c0c6711246c0448f89c6e3ee497a6552_b9bfa110.jpg',
    featured: true,
    deliverables: ['Creative Direction', 'Studio Staging', 'Editorial Lookbook', 'Poster Series'],
    tools: ['Capture One', 'Photoshop', 'InDesign'],
    palette: ['#0A0A0A', '#1E293B', '#38BDF8', '#F1F5F9'],
    description: 'An editorial exploration of spatial isolation and silhouette tension. Staged upon a raw timber stool within an infinite black void, illuminated solely by dual rim light tubes to accentuate posture and jewelry reflections.',
    clientReview: {
      quote: "The composition and restraint are museum-grade. Waqas knows exactly when to leave negative space untouched.",
      author: 'Elena Rostova',
      role: 'Editorial Lead, Atelier'
    }
  },
  {
    id: 'urban-denim-culture',
    title: 'Urban Denim Culture Lookbook',
    category: 'Editorial & Posters',
    tagline: 'Streetwear editorial campaign celebrating embroidered patches & tactile textile storytelling',
    client: 'Indigo Syndicate',
    year: '2025',
    coverImage: '/assets/aistudio/776034bc206a494cadb16e275cdbf09d_4c101f00.jpg',
    featured: false,
    deliverables: ['Lookbook Design', 'Custom Patch Graphics', 'Social Media Kit', 'Retail Posters'],
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    palette: ['#1D4ED8', '#DC2626', '#F59E0B', '#111827'],
    description: 'Designed a 64-page printed seasonal lookbook showcasing raw selvedge denim, custom typography badges, and natural outdoor photography. Balanced rugged utilitarian themes with contemporary layout systems.',
    clientReview: {
      quote: "The badge designs and editorial flow gave our heritage collection a cutting-edge modern edge.",
      author: 'Tariq Malik',
      role: 'Founder, Indigo Syndicate'
    }
  },
  {
    id: 'sartorial-monochrome',
    title: 'Monochrome Sartorial Identity',
    category: 'Brand Identity',
    tagline: 'Minimalist high-contrast menswear visual identity & lookbook system',
    client: 'Maison Blanc & Noir',
    year: '2026',
    coverImage: '/assets/aistudio/Minimalist_Smart-Casual_Portrait_c8dca254.png',
    featured: true,
    deliverables: ['Brand Guidelines', 'Packaging Sleeve', 'Hang Tags', 'Website Assets'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    palette: ['#09090B', '#FFFFFF', '#A1A1AA', '#27272A'],
    description: 'A pure monochromatic brand identity built for luxury tailored menswear. Highlights stark contrast between deep black tailored shirts and pristine ivory trousers against architectural white gallery walls.',
    clientReview: {
      quote: "Minimal, timeless, and executed with extreme care. The brand guidelines transformed our entire retail presence.",
      author: 'David Chen',
      role: 'Brand Manager, Maison B&N'
    }
  },
  {
    id: 'architectural-monolith',
    title: 'Architectural Posture & Monolith',
    category: 'Photography & Direction',
    tagline: 'Brutalist modern wall editorial exploring human geometry and structural light',
    client: 'Modus Architecture Quarterly',
    year: '2025',
    coverImage: '/assets/aistudio/Confident_Portrait_by_a_Modern_Wall_42f9c56c.png',
    featured: false,
    deliverables: ['Magazine Feature', 'Large Format Prints', 'Social Carousel'],
    tools: ['Lightroom', 'Photoshop', 'InDesign'],
    palette: ['#18181B', '#F4F4F5', '#D97706', '#3F3F46'],
    description: 'Shot on location against brutalist white architectural facets, capturing the interplay between sharp geometric building shadows, relaxed posture, and warm earth-tone trousers.',
    clientReview: {
      quote: "Every frame looks like a fine-art print. Waqas has a remarkable eye for architectural angles.",
      author: 'Sophie Laurent',
      role: 'Editor, Modus Quarterly'
    }
  },
  {
    id: 'editorial-monograph',
    title: 'Monograph: Dream · Shoot · Grow',
    category: 'Typography & Layout',
    tagline: 'Hardcover editorial publication, custom serif typesetting & park landscape monograph',
    client: 'Self-Curated Monograph',
    year: '2026',
    coverImage: '/assets/aistudio/Reading_in_the_Park_Portfolio_38e22e1d.png',
    featured: true,
    deliverables: ['Publication Design', 'Bespoke Typesetting', 'Print Production Specs', 'Foil Stamp Cover'],
    tools: ['Adobe InDesign', 'Typography Layout', 'Photoshop'],
    palette: ['#1C1917', '#F5F5F4', '#15803D', '#78716C'],
    description: 'A celebration of literary contemplation and visual growth. Crafted with custom serif title lettering "PORTFOLIO · DREAM · SHOOT · GROW" and generous margins reminiscent of classic European art monographs.',
    clientReview: {
      quote: "The typesetting and print quality blew our critics away. A masterpiece in contemporary layout design.",
      author: 'Zaid Al-Hassan',
      role: 'Publisher, Oasis Press'
    }
  },
  {
    id: 'golden-hour-editorial',
    title: 'Golden Hour Tailoring Campaign',
    category: 'Editorial & Posters',
    tagline: 'Warm sunset lighting & bespoke neckwear campaign poster series',
    client: 'Sovereign Clothiers',
    year: '2025',
    coverImage: '/assets/aistudio/Golden-Hour_Garden_Portrait_696c360b.png',
    featured: false,
    deliverables: ['Campaign Posters', 'Billboard Displays', 'Digital Lookbook'],
    tools: ['Photoshop', 'Lightroom', 'Illustrator'],
    palette: ['#B45309', '#FEF3C7', '#1E293B', '#78350F'],
    description: 'Harnessing golden-hour backlight through lush arboretum foliage to accentuate the crisp craftsmanship of striped silk neckties and formal white tailoring.',
    clientReview: {
      quote: "The warm cinematic tone created our most successful quarterly marketing campaign to date.",
      author: 'Alexander Wright',
      role: 'Marketing Director, Sovereign'
    }
  },
  {
    id: 'resortwear-patio',
    title: 'Azure Resortwear & Spatial Layout',
    category: 'Typography & Layout',
    tagline: 'Sun-drenched patio editorial celebrating Mediterranean azure tones & relaxed luxury',
    client: 'Riviera Resortwear',
    year: '2026',
    coverImage: '/assets/aistudio/Minimalist_Patio_Portrait_with_Greenery_4439134f.png',
    featured: false,
    deliverables: ['Lookbook System', 'Packaging Design', 'E-Commerce Art Direction'],
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
    palette: ['#1D4ED8', '#FFFFFF', '#15803D', '#64748B'],
    description: 'Created a summery, high-end editorial spread combining royal blue shirts, crisp white trousers, and warm Mediterranean patio sunlight.',
    clientReview: {
      quote: "Clean, breezy, and effortlessly premium. Exactly what our brand needed for international distribution.",
      author: 'Nadia Sen',
      role: 'Founder, Riviera Resortwear'
    }
  }
];

export const SERVICES = [
  {
    number: '01',
    title: 'Brand Identity & Systems',
    description: 'Comprehensive brand systems including vector logos, typography hierarchies, color schemes, and rigorous design guidelines.',
    deliverables: ['Logo & Iconography Suite', 'Color & Type Specifications', 'Complete Brand Style Guide', 'Vector Asset Export (SVG, EPS, PDF)']
  },
  {
    number: '02',
    title: 'Editorial, Books & Lookbooks',
    description: 'Multi-page print and digital layouts engineered for maximum reading comfort, elegant white space, and visual rhythm.',
    deliverables: ['Magazine & Monograph Layouts', 'Fashion Lookbooks & Catalogs', 'Hardcover Print Production Specs', 'Digital Interactive PDF / Flipbooks']
  },
  {
    number: '03',
    title: 'Poster & Campaign Visuals',
    description: 'High-impact promotional posters, stage banners, social media marketing kits, and commercial billboard graphics.',
    deliverables: ['High-Resolution Print Posters (A1/A2/A3)', 'Social Media Campaign Templates', 'Merchandise & Apparel Graphics', 'Digital Ad Sets']
  },
  {
    number: '04',
    title: 'Creative Direction & Retouching',
    description: 'Guiding photo shoots, color grading, high-end skin and fabric retouching, and cohesive atmospheric lighting direction.',
    deliverables: ['Concept Moodboards & Art Direction', 'High-End Editorial Retouching', 'Color Grading & Lighting Calibration', 'E-Commerce & Commercial Image Prep']
  }
];

export const TESTIMONIALS = [
  {
    quote: "Working with Waqas was an absolute game changer. His ability to understand our niche and craft a dark, sophisticated visual language exceeded every expectation.",
    author: "Hamza Tariq",
    role: "Head of Marketing",
    company: "Apex Media Group",
    metric: "+180% Engagement"
  },
  {
    quote: "Waqas delivered our entire rebrand and print collateral ahead of schedule. The craftsmanship in typography and spatial balance is truly world class.",
    author: "Zainab Rashid",
    role: "Creative Director",
    company: "Studio Lumina",
    metric: "30k+ Copies Printed"
  },
  {
    quote: "From the initial moodboard to final production files, every single detail was impeccable. His dark-aesthetic work is some of the finest I've seen.",
    author: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Nova Vanguard",
    metric: "14 Days Turnaround"
  }
];
