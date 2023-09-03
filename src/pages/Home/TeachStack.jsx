import PropTypes from 'prop-types';
import styled from 'styled-components'

const Component = styled.section`
    height: 600px;
    max-width: 1158px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    h2{
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--secondary-color);
    }

    ul{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--white-color);
            border-radius: 50%;
            padding: 1rem;
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: var(--primary-color);
                transform: scale(1.1);
            }
            svg{
                width: 50px;
                height: 50px;
            }
        }
    }

    @media screen and (max-width: 768px){
        height: 800px;
        ul{
            grid-template-columns: repeat(4, 1fr);
        }
    }
`

function TeachStack({ data }) {
    return (
        <Component>
            <h2>
                Tech Stack and Tools
            </h2>
            <ul>
                {data.skills.map(skill => (
                    <li key={skill.id} title={skill.name}>
                        <svg width="60" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={skill.icon} />
                        </svg>
                    </li>
                ))}
            </ul>
        </Component>
    )
}

TeachStack.propTypes = {
    data: PropTypes.object.isRequired
}

export default TeachStack