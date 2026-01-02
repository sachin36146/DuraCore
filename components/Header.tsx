
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', value: Page.Home },
        { name: 'About', value: Page.About },
        { name: 'Services', value: Page.Services },
        { name: 'Products', value: Page.Products },
        { name: 'Case Studies', value: Page.CaseStudy },
        { name: 'Blog', value: Page.Blog },
        { name: 'Contact', value: Page.Contact },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div 
                        className="flex items-center cursor-pointer group"
                        onClick={() => setActivePage(Page.Home)}
                    >
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3 transform group-hover:scale-110 transition-transform">
                            <i className="fas fa-layer-group text-xl"></i>
                        </div>
                        <div>
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">Dura</span>
                            <span className="text-2xl font-extrabold tracking-tight text-blue-600 leading-none">Core</span>
                            <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Partition Systems</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setActivePage(item.value)}
                                className={`text-sm font-semibold transition-colors ${
                                    activePage === item.value 
                                    ? 'text-blue-600 border-b-2 border-blue-600' 
                                    : 'text-slate-600 hover:text-blue-600'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button 
                            onClick={() => setActivePage(Page.Contact)}
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            Get Free Quote
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 p-2"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 animate-slideDown">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => {
                                    setActivePage(item.value);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 rounded-lg font-medium ${
                                    activePage === item.value 
                                    ? 'bg-blue-50 text-blue-600' 
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                        <button 
                            onClick={() => {
                                setActivePage(Page.Contact);
                                setIsMenuOpen(false);
                            }}
                            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-bold"
                        >
                            Get Free Quote
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
