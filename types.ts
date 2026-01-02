
export enum Page {
    Home = 'home',
    About = 'about',
    Services = 'services',
    Products = 'products',
    Blog = 'blog',
    Contact = 'contact',
    CaseStudy = 'casestudy'
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    keywords: string[];
    useCases: string[];
}

export interface Product {
    id: string;
    name: string;
    type: 'HPL' | 'Compact' | 'Board Based';
    description: string;
    image: string;
}

export interface Project {
    id: string;
    name: string;
    client: string;
    problem: string;
    solution: string;
    tools: string[];
    result: string;
    image: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    author: string;
}
