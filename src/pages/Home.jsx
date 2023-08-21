import { Card, CardBody, CardHeader, List, ListGroup, ListGroupItem, } from 'reactstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="px-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '600px' }}>
                <img src='/images/my-profile-pic.jpg' alt="My Profile" className="img-fluid rounded-circle mb-4" width="200px" style={
                    {
                        border: '2px solid #ffc107'
                    }
                } />
                <h1 className="text-warning fw-bold mb-4 text-center">
                    Full Stack Developer
                </h1>
                <p className="text-secondary text-center">
                    Hi, I am <em><strong>Angel Niño Ortega</strong></em>, a passionate and dedicated full stack developer with a degree in BSIT.
                </p>
            </section>

            <section className="py-4 px-5 d-flex justify-content-center align-items-center flex-column" style={{
                minHeight: '400px',
                backgroundColor: '#FFF3DA',
                borderRadius: '8px'
            }}>
                <h2 className="text-secondary fw-bold mb-4 text-center">
                    Tech Stack and Tools
                </h2>
                <ListGroup className="d-flex justify-content-center align-items-center flex-wrap flex-row">
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://html.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/html.png" alt="HTML"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://css-tricks.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/css-3.png" alt="CSS"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.javascript.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/js.png" alt="JavaScript"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/bootstrap.png" alt="Bootstrap"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src="/icons/react.png" alt="React"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                            <img src="/icons/nodejs.png" alt="Node.js"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.mysql.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/mysql.png" alt="Mysql"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.php.net/" target="_blank" rel="noreferrer">
                            <img src="/icons/php.png" alt="PHP"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://cplusplus.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/c++.png" alt="C++" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
                            <img src="/icons/c-sharp.png" alt="C++" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://git-scm.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/git.png" alt="Git"  width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.github.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/code.png" alt="Github" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.microsoft.com/en-us/windows/" target="_blank" rel="noreferrer">
                            <img src="/icons/windows.png" alt="Windows" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.office.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/office.png" alt="Office" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.trello.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/trello.png" alt="Trello" width="40" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="bg-transparent border-0">
                        <Link to="https://www.vscode.com/" target="_blank" rel="noreferrer">
                            <img src="/icons/vscode.png" alt="VS Code" width="40" />
                        </Link>
                    </ListGroupItem>
                </ListGroup>
            </section>

            <section className="py-5 px-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '300px' }}>
                <h2 className="text-secondary fw-bold mb-4 text-center">
                    Connect with me
                </h2>
                <ListGroup className="d-flex justify-content-center align-items-center flex-wrap flex-row">
                    <ListGroupItem className="border-0">
                        <Link to="https://www.facebook.com/" target="_blank">
                            <img src='/icons/facebook.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.github.com/" target="_blank">
                            <img src='/icons/code.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.linkedin.com/" target="_blank">
                            <img src='/icons/linkedin.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.twitter.com/" target="_blank">
                            <img src='/icons/twitter.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img src='/icons/instagram.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.youtube.com/" target="_blank">
                            <img src='/icons/youtube.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="https://www.discord.com/" target="_blank">
                            <img src='/icons/discord.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="mailto:ortegacanillo76@gmail.com" target="_blank">
                            <img src='/icons/gmail.png' width="30" />
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="border-0">
                        <Link to="tel:+639271305088" target="_blank">
                            <img src='/icons/telephone.png' width="30" />
                        </Link>
                    </ListGroupItem>
                </ListGroup>
            </section>

            <section className="py-5 px-3 d-flex justify-content-center align-items-center flex-column bg-secondary rounded" style={{ minHeight: '400px' }}>
                <img src='/images/my-profile-pic.jpg' alt="My Profile" className="img-fluid rounded-circle mb-4" width="80px" style={{border: '1px solid #fff'}} />
                <h2 className="text-light fw-bold mb-4 text-center">
                    Welcome to my portfolio
                </h2>
                <p className="text-light text-center">
                    This is a simple portfolio website created using ReactJS and Reactstrap. You can find my projects, certifications, skills, and experiences here.
                </p>
            </section>
        </>
    )
}

export default Home