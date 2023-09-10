import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {

    const [navMenu, setNavMenu] = useState(false)

    function toggleNavMenu() {
        setNavMenu(!navMenu)
    }
    
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="nav-logo">
                        My<span className="span-logo">Website</span>
                    </Link>
                    <button className="nav-toggle" onClick={toggleNavMenu}>
                        {navMenu ? <FaTimes /> : <FaBars />}
                        <ul className={navMenu ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/education" className="nav-link">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/experience" className="nav-link">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className="nav-link">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/achievements" className="nav-link">Achievements</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hobbies" className="nav-link">Hobbies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default Header