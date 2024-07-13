export default function Footer(){
    return (
        <footer className="bg-indigo-600 shadow m-4 rounded-lg">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">thierry-wyss.ch</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Datenschutzerklärung</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Impressum</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kontakt</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-white sm:text-center">© 2024 <a>Thierry</a> Alle Rechte vorbehalten</span>
            </div>
        </footer>
    );
}