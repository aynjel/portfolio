import { Card, CardBody, CardHeader, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'

function Skills() {
    return (
        <Card className="border-0 text-center w-100">
            <CardHeader className="bg-transparent border-0">
                <h1 className="text-warning fw-bold">
                    Skills
                </h1>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xs={12} md={6} className="mb-4">
                        <h3 className="text-warning fw-bold mb-4">
                            Frontend Development
                        </h3>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap gap-3">
                            <li>
                                <Link to="https://html.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/html.png" alt="HTML"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://css-tricks.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/css-3.png" alt="CSS"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.javascript.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/js.png" alt="JavaScript"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/bootstrap.png" alt="Bootstrap"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://reactjs.org/" target="_blank" rel="noreferrer">
                                    <img src="/icons/react.png" alt="React"  width="40" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <h3 className="text-warning fw-bold mb-4">
                            Backend Development
                        </h3>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap gap-3">
                            <li>
                                <Link to="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                                    <img src="/icons/nodejs.png" alt="Node.js"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.mysql.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/mysql.png" alt="Mysql"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.php.net/" target="_blank" rel="noreferrer">
                                    <img src="/icons/php.png" alt="PHP"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://cplusplus.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/c++.png" alt="C++" width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
                                    <img src="/icons/c-sharp.png" alt="C++" width="40" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={12} className="mb-4">
                        <h3 className="text-warning fw-bold mb-4">
                            Development Tools and Environments
                        </h3>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap gap-3">
                            <li>
                                <Link to="https://git-scm.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/git.png" alt="Git"  width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.github.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/code.png" alt="Github" width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.microsoft.com/en-us/windows/" target="_blank" rel="noreferrer">
                                    <img src="/icons/windows.png" alt="Windows" width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.office.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/office.png" alt="Office" width="40" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.trello.com/" target="_blank" rel="noreferrer">
                                    <img src="/icons/trello.png" alt="Trello" width="40" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Skills