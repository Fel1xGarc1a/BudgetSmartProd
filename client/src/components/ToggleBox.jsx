import React, { useState } from 'react';

export function ToggleBox({ question, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
            >
                <span className="text-lg font-semibold text-gray-800">{question}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 py-4 text-gray-600">{content}</p>
            </div>
        </div>
    );
}