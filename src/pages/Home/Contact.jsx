import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Component = styled.section`
    display: block;
    width: 100%;
    background-color: var(--quinary-color);
    padding: 2rem 0;

    h2{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            margin: 0 1rem;

            a{
                display: block;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;

                &:hover{
                    background-color: var(--primary-color);
                }

                svg{
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
`

function Contact({data}) {
    return (
        <Component>
            <h2>
                Connect with me
            </h2>
            <ul>
                {data.socials.map(social => (
                    <li key={social.id} title={social.username}>
                        <Link to={social.link} target="_blank" rel="noreferrer" title={social.name}>
                            <svg width="60" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={social.icon} />
                            </svg>
                        </Link>
                    </li>
                ))}
            </ul>
        </Component>
    )
}

Contact.propTypes = {
    data: PropTypes.array.isRequired
}

export default Contact