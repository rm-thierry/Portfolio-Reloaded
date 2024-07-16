'use client';

import React, { useState, useEffect } from 'react';

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 20);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Über mich</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Informationen über mich
                    </p>
                </div>
                <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="flex justify-center lg:justify-start lg:mr-10 -mt-20">
                        <img
                            className="w-64 h-auto rounded-full shadow-lg"
                            src="./thierry.png"
                            alt="Thierry"
                        />
                    </div>
                    <div className="mt-6 lg:mt-0 text-lg leading-7 text-gray-700 max-w-prose">
                        <p>
                            Es freut mich, dass du den Weg hierher gefunden hast. Mein Name ist Thierry, ich bin 17 Jahre alt und ich mache meine Ausbildung als Informatiker EFZ.
                        </p>
                        <p className="mt-4">
                            In meiner Freizeit programmiere ich und mache gerne Sport.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
