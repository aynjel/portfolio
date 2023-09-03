import styled from 'styled-components'

const Component = styled.footer`
    padding: 2rem 0;
    max-width: 1158px;
    margin: 0 auto;

    h1{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    p{
        font-size: 1rem;
        text-align: center;
        margin: 0 auto;
        width: 80%;

        a{
            color: var(--primary-color);
            text-decoration: none;
            transition: all 0.3s ease-in-out;

            &:hover{
                color: var(--tertiary-color);
            }
        }
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin-top: 2rem;

        li{
            margin: 0 1rem;

            a{
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: var(--primary-color);

                &:hover{
                    color: var(--tertiary-color);
                }

                svg{
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
`

function Footer() {
    return (
        <Component>
            <p>
                &copy; {new Date().getFullYear()} All rights reserved
                <br />
                Designed and developed by <a href="#">Anggi</a>
            </p>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Education</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Experience</a>
                </li>
            </ul>
        </Component>
    )
}

export default Footer
