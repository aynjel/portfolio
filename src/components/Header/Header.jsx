import { Link } from "react-router-dom"
import { FaCode } from "react-icons/fa"
import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: var(--white-color);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

function Header() {
    
    return (
        <HeaderContainer>
            <Link to="/" className="text-decoration-none ms-5 d-flex align-items-center text-secondary fw-bold fs-4">
                <FaCode className="fs-1 me-2" />
                Portfolio
            </Link>
            <nav className="me-5">
                <Link to="/education" className="text-decoration-none text-secondary fw-bold me-3">Education</Link>
                <Link to="/skills" className="text-decoration-none text-secondary fw-bold me-3">Skills</Link>
                <Link to="/projects" className="text-decoration-none text-secondary fw-bold me-3">Projects</Link>
                <Link to="/certifications" className="text-decoration-none text-secondary fw-bold me-3">Certifications</Link>
                <Link to="/experience" className="text-decoration-none text-secondary fw-bold me-3">Experience</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header