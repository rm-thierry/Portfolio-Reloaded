import '../../app/globals.css';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">My Portfolio</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Projects</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-800 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
