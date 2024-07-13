import React from 'react';

const Links = [
    { name: 'Kontakt', href: '/' },
    { name: 'Datenschutzrichtlinien', href: '/about' },
    { name: 'Impressum', href: '/projects' },
];

export default function Footer() {
    return (
        <footer className="bg-white shadow m-4 rounded-lg">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">thierry-wyss.ch</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0">
                        {Links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`me-4 md:me-6 hover:text-indigo-600`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center">© 2024 <a href="/" className="hover:text-indigo-600">Thierry</a> Alle Rechte vorbehalten</span>
            </div>
        </footer>
    );
}
