
import { Service, Product, Project, BlogPost } from './types';

export const SERVICES: Service[] = [
    {
        id: 'toilet-partitions',
        title: 'Toilet Partition Cubicles',
        description: 'Advanced moisture-resistant restroom solutions designed for high-traffic commercial environments.',
        icon: 'fa-restroom',
        keywords: ['toilet partitions India', 'restroom cubicles', 'commercial washroom design'],
        useCases: ['Shopping Malls', 'Corporate Offices', 'Airports']
    },
    {
        id: 'office-partitions',
        title: 'Office Partition Systems',
        description: 'Flexible modular glass and board systems to maximize office space utility and privacy.',
        icon: 'fa-laptop-code',
        keywords: ['office cubicles', 'modular partitions', 'workplace separation'],
        useCases: ['Co-working Spaces', 'IT Hubs', 'Hospitals']
    },
    {
        id: 'urinal-partitions',
        title: 'Urinal Partitions',
        description: 'Sleek, hygienic privacy screens crafted from Action TESA boards and premium hardware.',
        icon: 'fa-shield-halved',
        keywords: ['urinal privacy screens', 'washroom hardware', 'hygiene partitions'],
        useCases: ['Stadiums', 'Public Facilities', 'Educational Institutes']
    },
    {
        id: 'custom-design',
        title: 'Custom CAD Planning',
        description: 'Expert layout optimization using 3D modeling to ensure maximum capacity and flow in restricted spaces.',
        icon: 'fa-drafting-compass',
        keywords: ['washroom layout design', 'CAD planning cubicles', 'architectural partitions'],
        useCases: ['Architectural Firms', 'Interior Designers', 'Real Estate Developers']
    },
    {
        id: 'maintenance',
        title: 'Annual Maintenance (AMC)',
        description: 'Comprehensive hardware checks, alignment adjustments, and sanitization services for existing installations.',
        icon: 'fa-tools',
        keywords: ['partition repair', 'AMC cubicles', 'hardware replacement'],
        useCases: ['Facility Management', 'Hotels', 'Large Campus Offices']
    },
    {
        id: 'shower-cubicles',
        title: 'Shower & Locker Systems',
        description: '100% waterproof phenolic compact laminate systems designed specifically for wet-room environments.',
        icon: 'fa-shower',
        keywords: ['shower partitions', 'HPL lockers', 'gym changing rooms'],
        useCases: ['Fitness Centers', 'Sports Clubs', 'Industrial Plants']
    }
];

export const PRODUCTS: Product[] = [
    {
        id: 'hpl-premium',
        name: 'Dura-HPL Premium',
        type: 'HPL',
        description: 'Anti-bacterial, high-pressure laminate with over 50+ color options. Ideal for luxury retail and corporate HQ.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'compact-standard',
        name: 'Action Solid Compact',
        type: 'Compact',
        description: '12mm solid core. Impact resistant and fully waterproof. The gold standard for public infrastructure.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'board-dry',
        name: 'TESA Dry-Tech Board',
        type: 'Board Based',
        description: 'Value-engineered solution using moisture-resistant Action TESA boards for dry office environments.',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'designer-glass',
        name: 'Crystal Series Glass',
        type: 'Board Based',
        description: 'Toughened 12mm glass partitions with ceramic frosting for elite executive washrooms.',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'hardware-elite',
        name: 'SS-304 Elite Hardware',
        type: 'HPL',
        description: 'Heavy-duty stainless steel components: Gravity hinges, Indicator bolts, and coat hooks.',
        image: 'https://images.unsplash.com/photo-1517646288024-aa60d1f7385c?auto=format&fit=crop&q=80&w=800'
    }
];

export const CASE_STUDIES: Project[] = [
    {
        id: 'tech-park-bangalore',
        name: 'Global IT Hub Phase IV',
        client: 'Global IT Solutions',
        problem: 'Frequent hardware failure and water damage in high-traffic office washrooms with 5000+ daily users.',
        solution: 'Installed 450+ DuraCore 12mm Compact Laminate Cubicles with SS-304 elite hardware.',
        tools: ['AutoCAD', 'AI Estimate Tool', 'ISO 9001 Standards'],
        result: 'Zero maintenance reported in 24 months, 40% improvement in hygiene rating.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'medical-college',
        name: 'Apex Medical University',
        client: 'Government Health Dept',
        problem: 'Hygiene concerns and difficulty in sanitizing old wooden partitions.',
        solution: 'Antibacterial HPL partitions with seamless floor-to-ceiling mounting for easy cleaning.',
        tools: ['Growth Hacking', 'Health Safety Audit', 'Custom Fabrication'],
        result: 'Achieved "Superior Hygiene" accreditation from local health board.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'metro-station',
        name: 'City Metro Infrastructure',
        client: 'Metro Rail Corp',
        problem: 'Extreme vandal-prone environment requiring ultra-durable materials.',
        solution: 'Anti-vandal Compact Laminate with specialized tamper-proof hardware.',
        tools: ['Durability Stress Test', 'SEM Planning', 'Industrial Logistics'],
        result: '98% reduction in graffiti damage and vandal-related repairs.',
        image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=800'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Best Toilet Partition Materials in India 2024',
        excerpt: 'Choosing the right material is crucial for longevity. Explore HPL, Compact, and Metal options.',
        date: 'Oct 12, 2023',
        category: 'Guide',
        author: 'Lead Architect'
    },
    {
        id: '2',
        title: 'HPL vs Compact Laminate: Which is Right?',
        excerpt: 'A deep dive into technical specifications, costs, and durability factors for commercial projects.',
        date: 'Nov 05, 2023',
        category: 'Analysis',
        author: 'Product Strategy Head'
    },
    {
        id: '3',
        title: 'Sustainability in Modern Washroom Design',
        excerpt: 'How Action TESA boards contribute to LEED certification and green building initiatives.',
        date: 'Dec 01, 2023',
        category: 'Environment',
        author: 'Eco Consultant'
    },
    {
        id: '4',
        title: 'The Hidden ROI of Premium Restrooms',
        excerpt: 'How better facilities improve employee retention and client brand perception.',
        date: 'Jan 15, 2024',
        category: 'Business',
        author: 'Marketing Strategist'
    }
];

export const FAQS = [
    {
        q: "What is the standard warranty on DuraCore installations?",
        a: "We provide a 5-year replacement warranty on Compact Laminate panels and a 10-year warranty against rusting for our SS-304 Elite Hardware range."
    },
    {
        q: "Do you provide on-site measurements?",
        a: "Yes, our technical team conducts on-site surveys within 24-48 hours of your inquiry across all major tier-1 and tier-2 cities in India."
    },
    {
        q: "Are Action TESA boards really waterproof?",
        a: "We use Action TESA's HDHMR (High Density High Moisture Resistance) boards which are designed for moisture-rich environments, though for direct water contact (showers), we recommend our Compact Laminate range."
    },
    {
        q: "How long does installation take?",
        a: "A typical 10-cubicle installation is completed within 2-3 working days post-delivery of material at the site."
    }
];
