import { Card, CardBody, CardHeader, Container, ListGroup, ListGroupItem, CardLink, CardText, CardTitle, Row, Col, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom'

function Education() {
    return (
        <Card className="border-0 text-center">
            <CardHeader className="bg-transparent border-0">
                <h1 className="text-warning fw-bold fs-1">
                    Bachelor of Science in Information Technology
                </h1>
                <h2 className="text-secondary fw-bold fs-2">
                    2019 - 2023
                </h2>
                <h3 className="text-secondary fw-bold">
                    Consolatrix College of Toledo City Inc.
                </h3>
                <p className="text-secondary">
                    <em>
                        Magsaysay Hills, Poblacion, Toledo City
                    </em>
                </p>
                <img src='/images/about.png' alt="My Profile" className="img-fluid mb-4 shadow" style={
                    {
                        border: '2px solid #ffc107'
                    }
                } />
            </CardHeader>
            <CardBody>
                <Container className='d-flex justify-content-center align-items-center flex-column w-100'>
                    <h3 className="text-warning fw-bold mb-5">
                        Awards and Achievements
                    </h3>
                    <Row>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Best in Robotics
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        First Year College Robotics Competition (2019)
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Outstanding Software Developer
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Graduate of Bachelor of Science in Information Technology (2023)
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Outstanding IT Specialist
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Graduate of Bachelor of Science in Information Technology (2023)
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Outstanding IT Professional
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Graduate of Bachelor of Science in Information Technology (2023)
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Best in Capstone Project
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Best in Capstone Project (2023) - Excellence Award
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Google IT Support Professional Certificate
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Google IT Support Professional Certificate (2021) - Coursera Certification
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg='3' xs='12' md='6' className='mb-4'>
                            <Card className='rounded-0 border-warning h-100'>
                                <img
                                    alt="Card cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Academic Excellence Award
                                    </CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>
                                        Academic Excellence Award (2019) - Excellence Award
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardLink href="#" className="text-secondary">
                                        Certificate
                                    </CardLink>
                                    <CardLink href="#" className="text-secondary">
                                        Pictures
                                    </CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>

                    <span className="my-4"></span>

                    <h3 className="text-warning fw-bold mb-4">
                        Major Subjects
                    </h3>
                    <ListGroup>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                1st Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Introduction to Computing
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Computer Programming 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Computer Programming 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Human Computer Interaction
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Web Development
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Data Structure and Algorithm
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                2nd Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Object-Oriented Programming
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Information Management
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Platform Technologies
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Fundamentals of Database Systems
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Data Communications and Networking 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Integrative Programming and Technologies
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                3rd Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Networking 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Event Driven Programming
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Application Development 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        System Analysis and Design
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Operating Systems
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Information Assurance and Security
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Methods of Research in Computing
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Advanced Web Development
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Fundamentals of Data Warehousing and Data Mining
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Multimedia Concepts
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Systems Integration and Architecture
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Capstone Project 1
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                4th Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        System Administration and Maintenance
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Capstone Project 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Certification Exam Review
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Technopreneurship
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 3
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 4
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Practicuum (OJT)
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                    </ListGroup>

                    <h3 className="text-warning fw-bold mb-4">
                        Minor Subjects
                    </h3>
                    <ListGroup>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                1st Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Introduction to Computing
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Computer Programming 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Computer Programming 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Human Computer Interaction
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Web Development
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Data Structure and Algorithm
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                2nd Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Object-Oriented Programming
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Information Management
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Platform Technologies
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Fundamentals of Database Systems
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Data Communications and Networking 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Integrative Programming and Technologies
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                3rd Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        Networking 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Event Driven Programming
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Application Development 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        System Analysis and Design
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Operating Systems
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 1
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Information Assurance and Security
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Methods of Research in Computing
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Advanced Web Development
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Fundamentals of Data Warehousing and Data Mining
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Multimedia Concepts
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Systems Integration and Architecture
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Capstone Project 1
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem className="bg-transparent border-0 text-secondary">
                            <strong>
                                4th Year
                            </strong>
                            <ul className="list-unstyled">
                                <li>
                                    <em>
                                        System Administration and Maintenance
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Capstone Project 2
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Certification Exam Review
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Technopreneurship
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 3
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        IT Professional Elective 4
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Practicuum (OJT)
                                    </em>
                                </li>
                            </ul>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Education