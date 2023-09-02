import { Card, CardBody, CardHeader,} from 'reactstrap'
import { Link } from 'react-router-dom'

function Experience() {
    return (
        <Card className="border-0 text-center"
            style={
                {
                    marginTop: '100px',
                }
            }
        >
            <CardHeader className="bg-transparent border-0">
                <h2 className="text-warning fw-bold">
                    Work Experience
                </h2>
            </CardHeader>
            <CardBody className='d-flex justify-content-center align-items-center flex-column'>
                <ul className="list-unstyled">
                    <li className="card p-3">
                        <h3>
                            CEBECO 3 - Electric utility company in Toledo, Cebu
                        </h3>
                        <p>
                            January 2023 to March 2023 - OJT (On the Job Training)
                        </p>
                        <h4>
                            Responsibilities:
                        </h4>
                        <ul className='list-unstyled'>
                            <li>
                                <p>
                                    Assist in the development of the web application.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Assist in maintaining and fixing computers and other electronic devices.
                                </p>
                            </li>
                        </ul>
                        <a href="http://www.cebeco3.com.ph/" target="_blank" rel="noreferrer">
                            View Website
                        </a>
                    </li>

                    <li className="card p-3">
                        <h3>
                            Toledo Sports Center Megadome - Sports center in Toledo, Cebu
                        </h3>
                        <p>
                            March 2023 to June 2023 - Part-Time Web Developer
                        </p>
                        <h4>
                            Responsibilities:
                        </h4>
                        <ul className='list-unstyled'>
                            <li>
                                <p>
                                    Develop the web application.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Maintain and fix the web application.
                                </p>
                            </li>
                        </ul>
                        <a href="https://sugbo.ph/2020/toledo-city-sports-center-megadome/" target="_blank" rel="noreferrer">
                            View Website
                        </a>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default Experience