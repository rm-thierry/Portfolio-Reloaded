import React from 'react';

const projects = [
    {
        title: 'Puuk.ch',
        description: 'Puuk.ch war ein Schulprojekt bei welchem man Sprüche hochladen konnte und Sprüchen von anderen bewerten konnte.',
        link: 'https://puuk.ch'
    },
    {
        title: 'thierry-wyss.ch',
        description: 'Diese Seite ist mein persönliches Portfolio welches hier zu sehen ist',
        link: '/'
    }
];

export default function Projects() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projekte</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Meine öffentlichen Projekte
                    </p>
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{project.title}</h3>
                                    <p className="mt-2 text-base text-gray-500">{project.description}</p>
                                    <a href={project.link} className="mt-3 block text-indigo-600 hover:text-indigo-500">
                                        Mehr →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
