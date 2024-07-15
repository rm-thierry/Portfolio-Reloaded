'use client';

import '../../app/globals.css';
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 20);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="relative isolate px-6 pt-1 lg:px-8 bg-gray-100 min-h-5 flex flex-col justify-center">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                </div>
                <div className={`mx-auto max-w-1xl py-32 sm:py-48 lg:py-64 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100 fade-in-up'}`}>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Portfolio Thierry Wyss</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Willkommen auf meinem persönlichen Portfolio.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#"
                               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Über mich
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Kontakt <span
                                aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true">
                </div>
            </div>
        </div>
    );
}
