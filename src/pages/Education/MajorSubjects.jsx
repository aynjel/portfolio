import styled from 'styled-components'

const Component = styled.div`
    max-width: 1158px;
    margin: 0 auto;
    padding: 2rem 0;

    h3{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .year-tab-list{
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
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease-in-out;

                &:hover{
                    background-color: var(--primary-color);
                    color: var(--secondary-color);
                }
            }
        }
    }

    .subject-list{
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            margin: 0.5rem 0;

            a{
                text-decoration: none;
                color: var(--secondary-color);
                font-weight: 500;
                font-family: 'Raleway', sans-serif;
                font-size: 1.2rem;
                &:hover {
                    color: var(--primary-color);
                    border-bottom: 3px solid var(--primary-color);
                }
            }
        }
    }
`

function MajorSubjects() {
    return (
        <Component>
            <h3>
                Major Subjects
            </h3>
            <ul className='year-tab-list'>
                <li>
                    <a href="#first-year">
                        First Year
                    </a>
                </li>
                <li>
                    <a href="#second-year">
                        Second Year
                    </a>
                </li>
                <li>
                    <a href="#third-year">
                        Third Year
                    </a>
                </li>
                <li>
                    <a href="#fourth-year">
                        Fourth Year
                    </a>
                </li>
            </ul>

            <section id="first-year">
                <h4>
                    First Year
                </h4>
                <ul className="subject-list">
                    <li>
                        <a href="https://www.google.com/search?q=calculus+1" target="_blank" rel="noreferrer">
                            Calculus 1
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=calculus+2" target="_blank" rel="noreferrer">
                            Calculus 2
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=calculus+3" target="_blank" rel="noreferrer">
                            Calculus 3
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=physics+1" target="_blank" rel="noreferrer">
                            Physics 1
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=physics+2" target="_blank" rel="noreferrer">
                            Physics 2
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=physics+3" target="_blank" rel="noreferrer">
                            Physics 3
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=chemistry+1" target="_blank" rel="noreferrer">
                            Chemistry 1
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=chemistry+2" target="_blank" rel="noreferrer">
                            Chemistry 2
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=chemistry+3" target="_blank" rel="noreferrer">
                            Chemistry 3
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=engineering+graphics" target="_blank" rel="noreferrer">
                            Engineering Graphics
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=engineering+mechanics" target="_blank" rel="noreferrer">
                            Engineering Mechanics
                        </a>
                    </li>
                </ul>
            </section>
        </Component>
    )
}

export default MajorSubjects
