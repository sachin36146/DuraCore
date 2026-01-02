
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AIQuoteAssistant from './components/AIQuoteAssistant';
import LeadForm from './components/LeadForm';
import { SERVICES, PRODUCTS, CASE_STUDIES, BLOG_POSTS, FAQS } from './constants';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>(Page.Home);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    const renderPage = () => {
        switch (activePage) {
            case Page.Home: return (
                <main className="animate-fadeIn">
                    {/* Hero Section */}
                    <section className="relative bg-slate-900 text-white pt-20 pb-32 overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30 mb-6 inline-block">
                                    Quality. Durability. Excellence.
                                </span>
                                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                                    Engineering <span className="text-blue-500">Privacy</span> for India's Infrastructure.
                                </h1>
                                <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                                    Leading the market in premium partition systems using Action TESA technology and industrial-grade hardware.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={() => setActivePage(Page.Contact)}
                                        className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95"
                                    >
                                        Get Free Quote
                                    </button>
                                    <button 
                                        onClick={() => setActivePage(Page.Products)}
                                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                                    >
                                        Explore Materials
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <LeadForm />
                            </div>
                        </div>
                    </section>

                    {/* Our Process Section */}
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">The DuraCore Workflow</h2>
                                <p className="text-slate-500">From blueprint to reality in 4 seamless steps.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: '01', title: 'Consultation', desc: 'Expert site survey and technical requirement mapping.' },
                                    { step: '02', title: 'Design', desc: 'Precision CAD layouts and material selection.' },
                                    { step: '03', title: 'Fabrication', desc: 'State-of-the-art CNC cutting of Action TESA boards.' },
                                    { step: '04', title: 'Installation', desc: 'Zero-disruption setup by our certified technicians.' },
                                ].map((item) => (
                                    <div key={item.step} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                                        <div className="text-6xl font-black text-blue-100 absolute top-4 right-4">{item.step}</div>
                                        <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                                        <p className="text-sm text-slate-500 relative z-10 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stats Snapshot */}
                    <section className="bg-blue-600 py-16 text-white">
                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">1.2M+</div>
                                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest">Sq. Ft. Installed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">50+</div>
                                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest">City Presence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">350+</div>
                                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest">Corporate Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-black mb-2">12k+</div>
                                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest">Cubicles Shipped</div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Products */}
                    <section className="py-24 bg-slate-50">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between items-end mb-16">
                                <div>
                                    <h2 className="text-4xl font-black text-slate-900 mb-4">Precision Engineering</h2>
                                    <p className="text-slate-500">Explore our signature material ranges.</p>
                                </div>
                                <button onClick={() => setActivePage(Page.Products)} className="hidden md:block text-blue-600 font-bold border-b-2 border-blue-600 pb-1">View Full Catalog</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {PRODUCTS.slice(0, 3).map(p => (
                                    <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                                        <div className="h-56 overflow-hidden">
                                            <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                                            <p className="text-sm text-slate-500 mb-6">{p.description}</p>
                                            <button onClick={() => setActivePage(Page.Contact)} className="text-sm font-bold text-blue-600">Request Specs</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            );
            case Page.About: return (
                <div className="animate-fadeIn py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                            <div>
                                <h1 className="text-6xl font-black mb-8 text-slate-900">Built to <span className="text-blue-600">Last.</span></h1>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                    DuraCore isn't just a partition supplier; we are an engineering firm dedicated to the science of architectural separation. Founded in 2013, we recognized the massive gap between cheap local fabrications and high-cost international imports.
                                </p>
                                <p className="text-lg text-slate-500 mb-12">
                                    We bridged this gap by manufacturing in India using Action TESA's world-class HDHMR and Compact boards, integrated with CNC precision technology.
                                </p>
                                <div className="flex gap-12">
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900">ISO 9001</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Certified Factory</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900">LEED</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Green Material</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Manufacturing" />
                                </div>
                                <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-12 rounded-3xl shadow-2xl">
                                    <div className="text-5xl font-black mb-2">10+</div>
                                    <div className="text-sm font-bold uppercase tracking-widest">Years of Excellence</div>
                                </div>
                            </div>
                        </div>

                        {/* More Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-slate-100">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">We exclusively use boards derived from sustainable forestry and high-density materials that minimize waste and maximize lifespan.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Honest pricing, technical transparency, and a commitment to zero-maintenance installations for every single client.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Factory Direct</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">By eliminating middlemen, we provide premium global-quality partitions at local-friendly prices across India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            case Page.Services: return (
                <div className="animate-fadeIn py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl font-black text-slate-900 mb-6">Our Capabilities</h1>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive partition engineering from a single source provider. No outsourcing, no compromises.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {SERVICES.map((s) => (
                                <div key={s.id} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className={`fas ${s.icon} text-3xl`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                    <p className="text-slate-500 mb-8 text-sm leading-relaxed">{s.description}</p>
                                    <div className="space-y-3 mb-10">
                                        {s.useCases.slice(0, 3).map(u => (
                                            <div key={u} className="flex items-center text-xs font-bold text-slate-700">
                                                <i className="fas fa-check-circle text-blue-500 mr-2"></i> {u}
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => setActivePage(Page.Contact)} className="w-full py-4 border-2 border-slate-100 rounded-xl font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-all">Get Service Inquiry</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
            case Page.Products: return (
                <div className="animate-fadeIn py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
                            <h1 className="text-5xl font-black text-slate-900 mb-4 md:mb-0">Materials Catalog</h1>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">HPL</span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Compact</span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Board Based</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {PRODUCTS.map(p => (
                                <div key={p.id} className="group">
                                    <div className="h-[400px] rounded-3xl overflow-hidden mb-6 relative">
                                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.name} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                            <button onClick={() => setActivePage(Page.Contact)} className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-xl">Get Quote</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-tighter whitespace-nowrap bg-blue-50 px-2 py-1 rounded-md">Action TESA</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
            case Page.CaseStudy: return (
                <div className="animate-fadeIn py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl font-black text-slate-900 mb-6">Proven Performance</h1>
                            <p className="text-slate-500 max-w-2xl mx-auto">See how we solved complex separation challenges for India's biggest brands.</p>
                        </div>
                        <div className="space-y-24">
                            {CASE_STUDIES.map((c, idx) => (
                                <div key={c.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="flex-1">
                                        <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">{c.client}</div>
                                        <h2 className="text-4xl font-bold mb-8 text-slate-900">{c.name}</h2>
                                        <div className="space-y-8 mb-12">
                                            <div>
                                                <h4 className="text-xs font-black text-slate-400 uppercase mb-2">The Challenge</h4>
                                                <p className="text-slate-600 leading-relaxed">{c.problem}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-black text-slate-400 uppercase mb-2">The DuraCore Solution</h4>
                                                <p className="text-slate-600 leading-relaxed">{c.solution}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="text-2xl font-bold text-blue-600 mb-1">Result</div>
                                                <p className="text-xs text-slate-500 font-medium">{c.result}</p>
                                            </div>
                                            <div className="bg-slate-900 p-6 rounded-2xl text-white">
                                                <div className="text-xs font-bold uppercase text-slate-400 mb-2">Growth Tech</div>
                                                <div className="flex flex-wrap gap-1">
                                                    {c.tools.map(t => <span key={t} className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded">{t}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                                        <img src={c.image} className="w-full h-full object-cover" alt={c.name} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
            case Page.Blog: return (
                <div className="animate-fadeIn py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl font-black text-slate-900 mb-4">Design Library</h1>
                            <p className="text-slate-500">Industry insights, technical guides, and design trends.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {BLOG_POSTS.map(post => (
                                <article key={post.id} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center cursor-pointer">
                                    <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                                        <img src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600&seed=${post.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                                    </div>
                                    <div>
                                        <div className="flex gap-4 items-center mb-4">
                                            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded uppercase font-black">{post.category}</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{post.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                                        <p className="text-sm text-slate-500 mb-6 line-clamp-2">{post.excerpt}</p>
                                        <span className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center">Read More <i className="fas fa-arrow-right ml-2"></i></span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            );
            case Page.Contact: return (
                <div className="animate-fadeIn py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                            <div>
                                <h1 className="text-5xl font-black text-slate-900 mb-8">Ready to Start?</h1>
                                <p className="text-xl text-slate-600 mb-12">Connect with our engineering team for technical guidance or an immediate quotation.</p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="p-8 bg-blue-50 rounded-3xl">
                                        <i className="fas fa-phone text-blue-600 text-2xl mb-4"></i>
                                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">Direct Line</div>
                                        <div className="text-lg font-bold text-slate-900">+91 98765 43210</div>
                                    </div>
                                    <div className="p-8 bg-green-50 rounded-3xl">
                                        <i className="fab fa-whatsapp text-green-600 text-2xl mb-4"></i>
                                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">Instant Support</div>
                                        <div className="text-lg font-bold text-slate-900">+91 98765 00000</div>
                                    </div>
                                </div>

                                <div className="mt-12 space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4 mt-1 shrink-0"><i className="fas fa-map-marker-alt text-slate-600"></i></div>
                                        <div>
                                            <div className="font-bold text-slate-900">Headquarters</div>
                                            <p className="text-sm text-slate-500">123 Industrial Hub, Phase II, New Delhi, India 110001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4 mt-1 shrink-0"><i className="fas fa-clock text-slate-600"></i></div>
                                        <div>
                                            <div className="font-bold text-slate-900">Working Hours</div>
                                            <p className="text-sm text-slate-500">Mon - Sat: 09:00 AM - 07:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <LeadForm />
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="pt-24 border-t border-slate-100">
                            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {FAQS.map((faq, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3">{faq.q}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
            <Header activePage={activePage} setActivePage={setActivePage} />
            
            <div className="flex-1">
                {renderPage()}
            </div>

            <Footer setActivePage={setActivePage} />

            {/* Floatings */}
            <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 group"
            >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">Chat on WhatsApp</span>
            </a>

            <AIQuoteAssistant />
        </div>
    );
};

export default App;
