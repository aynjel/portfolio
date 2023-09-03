import { useState } from "react"
import { Link } from "react-router-dom"
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components"

const Component = styled.header`
    background-color: var(--quinary-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    nav {
        padding: 1.4rem 1rem;
        max-width: 1158px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.7rem;

        a[href="/"] {
            text-decoration: none;
            color: var(--secondary-color);
            font-weight: 800;
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            &:hover {
                color: var(--primary-color);
            }
            svg {
                margin-right: 0.5rem;
                color: var(--primary-color);
            }
        }
        .nav-list {
            list-style: none;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 1.2rem;
            padding: 0;
            li {
                a {
                    text-decoration: none;
                    color: var(--secondary-color);
                    font-weight: 500;
                    font-family: 'Raleway', sans-serif;
                    font-size: 1.2rem;
                    &:hover {
                        color: var(--primary-color);
                        border-bottom: 3px solid var(--primary-color);
                    }
                }
            }
        }
    }

    #mobile-menu {
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 1.4rem 1rem;
        font-size: 1.5rem;
        color: var(--primary-color);
        cursor: pointer;

        #mobile-menu-button {
            font-size: 1.5rem;
            color: var(--secondary-color);
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;

            &:hover {
                color: var(--primary-color);
            }
        }
        #mobile-menu-list {
            list-style: none;
            display: none;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.5rem;
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background-color: var(--white-color);
            border: 1px solid var(--tertiary-color);
            border-radius: 0.5rem;
            padding: 1rem;
            z-index: 10;
            li {
                a {
                    text-decoration: none;
                    color: var(--secondary-color);
                    font-weight: 500;
                    font-family: 'Raleway', sans-serif;
                    font-size: 1.2rem;
                    &:hover {
                        color: var(--primary-color);
                        border-bottom: 3px solid var(--primary-color);
                    }
                }
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        #mobile-menu {
            display: flex;
        }
        nav {
            display: none;
        }
    }
`;

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    function toggleMobileMenu() {
        setMobileMenu(!mobileMenu)
    }
    
    return (
        <Component>
            <nav>
                <Link to="/">
                    <FaCode />
                    Portfolio
                </Link>
                <ul className="nav-list">
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/cs">Projects</Link>
                    </li>
                    <li>
                        <Link to="/cs">Certifications</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            
            <nav id="mobile-menu">
                <Link to="/">
                    <FaCode />
                    Portfolio
                </Link>
                <button id="mobile-menu-button" onClick={toggleMobileMenu}>
                    {mobileMenu ? <FaTimes /> : <FaBars />}
                </button>
                <ul id="mobile-menu-list" style={{display: mobileMenu ? "flex" : "none"}}>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/cs">Projects</Link>
                    </li>
                    <li>
                        <Link to="/cs">Certifications</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </Component>
    )
}

export default Header