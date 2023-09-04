import styled from 'styled-components'
import data from '../../data/data.json'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    h2 {
        font-size: 2rem;
        font-weight: 500;
        color: var(--primary-color);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--primary-color);
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        border: 1px solid var(--secondary-color);
    }
`

function Skills() {
    return (
        <Component>
            <h2>
                Skills
            </h2>

            <h3>
                Programming Languages
            </h3>
            <ul>
                {data.skills.programmingLanguages.map((programmingLanguage, index) => (
                    <li key={index}>
                        {programmingLanguage.name}
                    </li>
                ))}
            </ul>

            <h3>
                Frameworks and Libraries
            </h3>
            <ul>
                {data.skills.frameworksAndLibraries.map((frameworkAndLibrary, index) => (
                    <li key={index}>
                        {frameworkAndLibrary.name}
                    </li>
                ))}
            </ul>

            <h3>
                Databases
            </h3>
            <ul>
                {data.skills.databases.map((database, index) => (
                    <li key={index}>
                        {database.name}
                    </li>
                ))}
            </ul>

            <h3>
                Tools
            </h3>
            <ul>
                {data.skills.tools.map((tool, index) => (
                    <li key={index}>
                        {tool.name}
                    </li>
                ))}
            </ul>

            <h3>
                Design
            </h3>
            <ul>
                {data.skills.design.map((design, index) => (
                    <li key={index}>
                        {design.name}
                    </li>
                ))}
            </ul>

            <h3>
                Others
            </h3>
            <ul>
                {data.skills.others.map((other, index) => (
                    <li key={index}>
                        {other.name}
                    </li>
                ))}
            </ul>
        </Component>
    )
}

export default Skills