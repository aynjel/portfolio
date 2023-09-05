
function Footer() {
    return (
        <div className="bg-gray-800 text-white flex flex-col justify-center items-center p-20 gap-10">
            <h3 className="text-2xl font-bold text-center text-white md:text-3xl">
                &copy; {new Date().getFullYear()} All rights reserved
                <br />
                Designed and developed by <a href="#" className="hover:text-gray-500">Anggi</a>
            </h3>
            <ul className="flex flex-wrap justify-center items-center w-full gap-5">
                <li className="hover:text-gray-500">
                    <a href="/" className="hover:text-gray-500">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/education" className="hover:text-gray-500">
                        Education
                    </a>
                </li>
                <li>
                    <a href="/experience" className="hover:text-gray-500">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="/skills" className="hover:text-gray-500">
                        Skills
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
