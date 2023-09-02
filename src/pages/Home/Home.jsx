import { Container, ListGroup, ListGroupItem, Spinner} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://db-json-nine.vercel.app/details')
            .then(res => {
                setDetails(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        
        // axios.get('http://localhost:4000/details')
        //     .then(res => {
        //         setDetails(res.data)
        //         setIsLoading(false)
        //     })
        //     .catch(err => console.log(err))
    }, [])

    return (
        (isLoading) ? (
            <section className="px-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner color="warning" />
            </section>) : 
        <>
            <section style={{
                minHeight: '600px',
                backgroundColor: '#FFF3DA',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container className="px-5 py-5 d-flex justify-content-center align-items-center flex-column">
                    <img src={details.image.src} alt="Profile Pic" className="img-fluid rounded-circle mb-5 d-flex justify-content-center align-items-center" width="200px" height="200px" style={
                        {
                            border: '2px solid #ffc107'
                        }
                    } title={details.image.alt} />

                    <h1 className="text-warning fw-bold mb-3 text-center">
                        {details.position}
                    </h1>

                    <p className="text-secondary" style={{ textAlign: 'justify' }}>
                        Hi I am <strong>{details.name}</strong>, I seek to obtain a position as a {details.position} in a company where I can maximize my skills in web development, leadership, and problem solving, and at the same time, contribute to the success of the company. I am a self-taught programmer and I am always eager to learn new technologies and skills.
                    </p>
                </Container>
            </section>

            <section style={{
                minHeight: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container className="px-5 py-5 d-flex justify-content-center align-items-center flex-column">
                    <div className="mb-5">
                        <svg width="80" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref="svg/icons.svg#tools" />
                        </svg>
                    </div>
                    <h2 className="text-secondary fw-bold mb-5 text-center">
                        Tech Stack and Tools
                    </h2>
                    <ListGroup className="d-flex justify-content-center align-items-center flex-wrap flex-row">
                        {details.skills.map(skill => (
                            <ListGroupItem className="bg-transparent border-0" key={skill.id} title={skill.name}>
                                <svg width="60" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref={skill.icon} />
                                </svg>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </section>

            <section style={{
                minHeight: '500px',
                backgroundColor: '#FFF3DA',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container className="px-5 py-5 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="text-secondary fw-bold mb-5 text-center">
                        Connect with me
                    </h2>
                    <ListGroup className="d-flex justify-content-center align-items-center flex-wrap flex-row">
                        {details.socials.map(social => (
                            <ListGroupItem className="bg-transparent border-0" key={social.id} title={social.username}>
                                <Link to={social.link} target="_blank" rel="noreferrer" className='text-decoration-none text-dark' title={social.name}>
                                    <svg width="60" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <use xlinkHref={social.icon} />
                                    </svg>
                                </Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </section>

            <section className='bg-secondary' style={{
                minHeight: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container className="px-5 py-5 d-flex justify-content-center align-items-center flex-column">
                    <img src={details.image.src} alt="My Profile" className="img-fluid rounded-circle mb-5" width="80px" style={{border: '1px solid #fff'}} />
                    <h2 className="text-light fw-bold mb-3 text-center">
                        Welcome to my portfolio
                    </h2>
                    <p className="text-light" style={{ textAlign: 'justify' }}>
                        Hi there! I am <strong>{details.name}</strong>, a {details.position} from {details.location}. I have a passion for web development and love to create websites and web applications. I am also a freelance web developer and I am open for projects. I am a self-taught programmer and I am always eager to learn new technologies and skills. I am a fast learner and I can easily adapt to new environments. I am also a team player and I can work with a team or individually. I am a hardworking person and I always strive to do my best in everything I do. I am also a responsible person and I always make sure to finish my tasks on time. I am also a good communicator and I can communicate well with my teammates and clients. I am also a good leader and I can lead a team to success. I am also a good problem solver and I can solve problems quickly and efficiently.
                    </p>
                </Container>
            </section>
        </>
    )
}

export default Home