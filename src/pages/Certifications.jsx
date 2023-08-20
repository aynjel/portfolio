import { Card, CardBody, CardHeader,} from 'reactstrap'
import { Link } from 'react-router-dom'

function Certifications() {
    return (
        <Card className="border-0 text-center">
            <CardHeader className="bg-transparent border-0">
                <img src='/images/my-profile-pic.jpg' alt="My Profile" className="img-fluid rounded-circle mb-4" width="200px" style={
                    {
                        border: '2px solid #ffc107'
                    }
                } />
                <h1 className="text-warning fw-bold">
                    Full Stack Developer
                </h1>
                <p className="text-secondary">
                    Hi, I am <em><strong>Angel Niño Ortega</strong></em>, a passionate and dedicated full stack developer with a degree in BSIT.
                </p>
                <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap">
                    <li className="me-3">
                        <Link to="https://www.facebook.com/" target="_blank">
                            <img src='/icons/facebook.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.github.com/" target="_blank">
                            <img src='/icons/code.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.linkedin.com/" target="_blank">
                            <img src='/icons/linkedin.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.twitter.com/" target="_blank">
                            <img src='/icons/twitter.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img src='/icons/instagram.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.youtube.com/" target="_blank">
                            <img src='/icons/youtube.png' width="30" />
                        </Link>
                    </li>
                    <li className="me-3">
                        <Link to="https://www.discord.com/" target="_blank">
                            <img src='/icons/discord.png' width="30" />
                        </Link>
                    </li>
                </ul>
            </CardHeader>
            <CardBody className='d-flex justify-content-center align-items-center flex-column'>
                <h3 className="text-warning fw-bold mb-4">
                    Connect with me
                </h3>
                <ul className="list-unstyled d-flex justify-content-center align-items-start flex-column gap-3">
                    <li className="me-3">
                        <img src="/icons/gmail.png" width="30" />
                        <span className="ms-2">
                            <a href="mailto:ortegacanillo76@gmail.com" className="text-decoration-none text-secondary">
                                ortegacanillo76@gmail.com
                            </a>
                        </span>
                    </li>
                    <li className="me-3">
                        <img src="/icons/telephone.png" width="30" />
                        <span className="ms-2">
                            <a href="tel:+639271305088" className="text-decoration-none text-secondary">
                                +639271305088
                            </a>
                        </span>
                    </li>
                </ul>

            </CardBody>
        </Card>
    )
}

export default Certifications