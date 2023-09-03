import PropTypes from 'prop-types';
import styled from 'styled-components'

const Component = styled.section`
    display: block;
    width: 100%;
    background-color: var(--quaternary-color);
    padding: 2rem 0;

    img{
        display: block;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    h2{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    p{
        font-size: 1.2rem;
        text-align: center;
        margin: 0 auto;
        width: 80%;
    }
`

function About({data}) {
    return (
        <Component>
            <img src={data.image.src} alt="My Profile" />
            <h2 className="text-light fw-bold mb-3 text-center">
                Welcome to my portfolio
            </h2>
            <p className="text-light" style={{ textAlign: 'justify' }}>
                Hi there! I am <strong>{data.name}</strong>, a {data.position} from {data.location}. I have a passion for web development and love to create websites and web applications. I am also a freelance web developer and I am open for projects. I am a self-taught programmer and I am always eager to learn new technologies and skills. I am a fast learner and I can easily adapt to new environments. I am also a team player and I can work with a team or individually. I am a hardworking person and I always strive to do my best in everything I do. I am also a responsible person and I always make sure to finish my tasks on time. I am also a good communicator and I can communicate well with my teammates and clients. I am also a good leader and I can lead a team to success. I am also a good problem solver and I can solve problems quickly and efficiently.
            </p>
        </Component>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired
}

export default About