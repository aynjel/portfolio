import PropTypes from 'prop-types';
import styled from 'styled-components'

const Component = styled.section`
    height: 600px;
    max-width: 1158px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
        width: 100%;
        max-width: 300px;
        border-radius: 50%;
        animation: animateBorder 5s linear infinite;

        @keyframes animateBorder {
            0% { 
                border: 5px solid var(--tertiary-color);
            }
            25% { 
                border: 5px solid var(--secondary-color);
            }
            50% { 
                border: 5px solid var(--primary-color);
            }
            75% { 
                border: 5px solid var(--secondary-color);
            }
            100% { 
                border: 5px solid var(--tertiary-color);
            }
        }
    }
    .hero-text {
        max-width: 600px;
        width: 100%;
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--quaternary-color);
        }
        p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: var(--quinary-color);
        }

        .hero-cta{
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            a{
                text-decoration: none;
                color: var(--primary-color);
                background-color: var(--quaternary-color);
                font-size: 1rem;
                font-weight: 600;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
            }
            .cta-resume{
                background-color: var(--secondary-color);
                color: var(--quaternary-color);
            }
        }
    }

    @media screen and (max-width: 768px){
        height: 800px;
        flex-direction: column;
        gap: 1rem;
        img{
            max-width: 200px;
        }
        .hero-text {
            text-align: center;
            max-width: 400px;
            width: 100%;
            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
            }
            .hero-cta{
                flex-direction: column;
                gap: 1rem;
            }
        }
    }
`;

function Hero({ data }) {
    return (
        <Component>
            <img src={data.image.src} alt={data.image.alt} />
            <div className="hero-text">
                <h1>{data.position}</h1>
                <p>
                    Hi I am <strong><em>{data.name}</em></strong>, I seek to obtain a position as a {data.position} in a company where I can maximize my skills in web development, leadership, and problem solving, and at the same time, contribute to the success of the company. I am a graduate of Bachelor of Science in Information Technology at the Consolatrix College of Toledo City. I am also a self-taught programmer and I am always eager to learn new technologies and skills.
                </p>
                <div className="hero-cta">
                    <a href="https://www.canva.com/design/DAFtHdMtW8Q/IfhLn_NluCi-AG4odvuj5Q/edit?utm_content=DAFtHdMtW8Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noreferrer" className="cta-resume">Resume</a>
                    <a href="mailto:ortegacanillo76@gmail.com" className="cta-hire">Hire Me</a>
                </div>
            </div>
        </Component>
    )
}

Hero.propTypes = {
    data: PropTypes.object.isRequired
}

export default Hero