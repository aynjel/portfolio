import ProfilePic from '../assets/img/my-profile-pic.jpg'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap'
import { FaBootstrap, FaCss3Alt, FaDiscord, FaFacebook, FaGit, FaGithub, FaHtml5, FaInstagram, FaJs, FaLaravel, FaLinkedinIn, FaNodeJs, FaPhp, FaReact, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <Row className='justify-content-center align-items-center'>
                <Col lg="4" md="4" sm="12">
                    <img src={ProfilePic} alt="My Profile" className="img-fluid rounded-circle" width="200px" style={
                        {
                            border: '2px solid #ffc107'
                        }
                    }/>
                </Col>
                <Col lg="8" md="8" sm="12">
                    <Card className="border-0">
                        <CardHeader className="bg-transparent border-0">
                            <h2 className="text-warning fw-bold fs-2">
                                Full Stack Developer
                            </h2>
                            <p className="text-secondary">
                                Hi, I am Angel Niño Ortega, a passionate and dedicated full stack developer with a degree in BSIT.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-start">
                                <li className="me-3">
                                    <Link to="https://www.facebook.com/" target="_blank">
                                        <FaFacebook className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.github.com/" target="_blank">
                                        <FaGithub className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.linkedin.com/" target="_blank">
                                        <FaLinkedinIn className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.twitter.com/" target="_blank">
                                        <FaTwitter className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.instagram.com/" target="_blank">
                                        <FaInstagram className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.youtube.com/" target="_blank">
                                        <FaYoutube className="text-secondary fs-3" />
                                    </Link>
                                </li>
                                <li className="me-3">
                                    <Link to="https://www.discord.com/" target="_blank">
                                        <FaDiscord className="text-secondary fs-3" />
                                    </Link>
                                </li>
                            </ul>
                        </CardHeader>
                        <CardBody>
                            <fieldset>
                                <legend className="text-secondary fw-bold fs-5">
                                    Tech Stack
                                </legend>
                                <ul className="list-unstyled d-flex justify-content-start gap-3">
                                    <li>
                                        <Link to="https://html.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaHtml5 className="fs-3" title='HTML5' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://css-tricks.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaCss3Alt className="fs-3" title='CSS3' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.javascript.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaJs className="fs-3" title='JavaScript' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.php.net/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaPhp className="fs-3" title='PHP' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.getbootstrap.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaBootstrap className="fs-3" title='Bootstrap' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.nodejs.org/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaNodeJs className="fs-3" title='NodeJS' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.reactjs.org/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaReact className="fs-3" title='ReactJS' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.laravel.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaLaravel className="fs-3" title='Laravel' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.git.com/" className="text-decoration-none text-secondary" target="_blank">
                                            <FaGit className='fs-3' title='Git' />
                                        </Link>
                                    </li>
                                </ul>
                            </fieldset>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home