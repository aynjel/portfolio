import { NavLink } from "react-router-dom"
import { FaCode } from "react-icons/fa"
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';

function NavBar({ ...args }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Container className="px-5 d-none">
            <Navbar {...args} light expand="md">
                <NavLink to="/" className="navbar-brand d-flex align-items-center text-secondary text-uppercase fw-bold fs-4">
                    <FaCode className="me-2 fs-1" />
                    <span className="text-warning">My</span>Profile
                </NavLink>
                <NavbarToggler onClick={toggle} className="border-0" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink to="/education" className="nav-link">
                                Education
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Projects
                            </DropdownToggle>
                            <DropdownMenu start="true">
                                <DropdownItem>
                                    <NavLink to="/projects" className="nav-link">
                                        All Projects
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/projects/web-design" className="nav-link">
                                        Wed Design
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/projects/web-development" className="nav-link">
                                        Web Development
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/projects/mobile-apps" className="nav-link">
                                        Mobile Apps
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/projects/database" className="nav-link">
                                        Database
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/projects/other" className="nav-link">
                                        Other
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink to="/skills" className="nav-link">
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/certifications" className="nav-link">
                                Certifications
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/experience" className="nav-link">
                                Exprience
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar