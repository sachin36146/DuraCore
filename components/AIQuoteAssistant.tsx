
import React, { useState } from 'react';
import { getGeminiResponse } from '../services/gemini';

const AIQuoteAssistant: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleAsk = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        const result = await getGeminiResponse(query);
        setResponse(result);
        setIsLoading(false);
    };

    if (!isOpen) {
        return (
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 group"
            >
                <i className="fas fa-robot text-xl"></i>
                <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">Ask AI Consultant</span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 flex flex-col overflow-hidden animate-slideUp">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center">
                    <i className="fas fa-brain mr-2"></i>
                    <span className="font-bold">DuraCore AI Advisor</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto bg-slate-50 text-sm space-y-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tl-none">
                    Hello! I'm your DuraCore AI advisor. I can help you choose between HPL, Compact Laminate, or Board-based partitions. What are your project needs?
                </div>
                {response && (
                    <div className="bg-white border border-slate-200 text-slate-700 p-3 rounded-lg rounded-tr-none ml-4 shadow-sm">
                        {response}
                    </div>
                )}
                {isLoading && (
                    <div className="flex justify-center py-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce mx-0.5"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s] mx-0.5"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s] mx-0.5"></div>
                    </div>
                )}
            </div>

            <div className="p-3 border-t flex gap-2">
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                    placeholder="Ask about materials..."
                    className="flex-1 px-3 py-2 rounded-lg border outline-none text-sm focus:border-blue-500"
                />
                <button 
                    onClick={handleAsk}
                    disabled={isLoading}
                    className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-50"
                >
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};

export default AIQuoteAssistant;
