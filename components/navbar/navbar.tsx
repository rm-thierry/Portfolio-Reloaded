'use client';

import '../../app/globals.css';
import { useState, useEffect } from 'react';

const Links = [
    { name: 'Start', href: '/' },
    { name: 'Über mich', href: '/about' },
    { name: 'Projekte', href: '/projects' },
];

export default function Navbar() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/" className="text-indigo-600 font-bold text-xl">
                                    Thierry
                                </a>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {Links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`text-gray-800 hover:bg-indigo-100 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium ${
                                                loading && link.name === 'Start' ? 'animate-bounce' : ''
                                            }`}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}