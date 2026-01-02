
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white mr-2">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <span className="text-xl font-bold text-white">DuraCore</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Leading manufacturers and installers of premium partition systems in India. Specializing in HPL, Compact Laminate, and Action TESA board solutions.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><button onClick={() => setActivePage(Page.About)} className="hover:text-white">About Our Story</button></li>
                        <li><button onClick={() => setActivePage(Page.Products)} className="hover:text-white">Product Catalog</button></li>
                        <li><button onClick={() => setActivePage(Page.CaseStudy)} className="hover:text-white">Success Stories</button></li>
                        <li><button onClick={() => setActivePage(Page.Blog)} className="hover:text-white">Design Resources</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Services</h4>
                    <ul className="space-y-4 text-sm">
                        <li><button onClick={() => setActivePage(Page.Services)} className="hover:text-white">Toilet Partitions</button></li>
                        <li><button onClick={() => setActivePage(Page.Services)} className="hover:text-white">Office Cubicles</button></li>
                        <li><button onClick={() => setActivePage(Page.Services)} className="hover:text-white">Urinal Screens</button></li>
                        <li><button onClick={() => setActivePage(Page.Services)} className="hover:text-white">Custom Partitions</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                            <span>123 Industrial Hub, Phase II, New Delhi, India 110001</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-phone mt-1 mr-3 text-blue-500"></i>
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-envelope mt-1 mr-3 text-blue-500"></i>
                            <span>sales@duracore.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} DuraCore Partition Systems. All Rights Reserved. Built with AI & Growth-Hacking Strategy.</p>
            </div>
        </footer>
    );
};

export default Footer;
