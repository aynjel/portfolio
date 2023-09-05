import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {

    const [navMenu, setNavMenu] = useState(false)

    function toggleNavMenu() {
        setNavMenu(!navMenu)
    }
    
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <span className="text-blue-500">My</span>Portfolio
                    </span>
                </a>

                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleNavMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <FaBars className={`${navMenu ? 'hidden' : 'block w-6 h-6'}`} />
                    <FaTimes className={`${navMenu ? 'block w-6 h-6' : 'hidden'}`} />
                </button>
                
                <div className={`${
                    navMenu ? 'flex' : 'hidden'
                } w-full md:inline-flex md:flex-grow md:w-auto`}>
                    <ul className="flex flex-col items-center md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center md:justify-center text-base font-semibold gap-5">
                        <li>
                            <Link to="/education" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:border-b-2 hover:border-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:border-b-2 hover:border-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:border-b-2 hover:border-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:border-b-2 hover:border-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:border-b-2 hover:border-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header