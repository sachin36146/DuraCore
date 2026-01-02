
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call for lead capture
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Quote Request Sent!</h3>
                <p className="text-green-700">Our expert team will contact you within 4 hours with a custom proposal.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-semibold underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Custom Quote</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                    <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company Name</label>
                    <input 
                        required
                        type="text" 
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                <input 
                    required
                    type="email" 
                    placeholder="john@acme.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>Toilet Partitions</option>
                    <option>Office Cubicles</option>
                    <option>Urinal Screens</option>
                    <option>Complete Washroom Renovation</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estimated Budget</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>Under ₹50,000</option>
                    <option>₹50,000 - ₹2,00,000</option>
                    <option>₹2,00,000 - ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                </select>
            </div>
            <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 disabled:opacity-50"
            >
                {status === 'submitting' ? 'Processing...' : 'Request Instant Proposal'}
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-4">
                By submitting, you agree to our privacy policy and terms of service. No spam, ever.
            </p>
        </form>
    );
};

export default LeadForm;
