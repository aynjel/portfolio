import styled from 'styled-components'
import data from '../../data/data.json'
import Svg from '../../components/SVG/Svg'

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
            <Svg data="icon.svg#tools-2" />
            <h2>
                Skills
            </h2>

            <h3>
                Programming Languages
            </h3>
            <ul>
                {data.skills.programmingLanguages.map((programmingLanguage, index) => (
                    <li key={index}>
                        {programmingLanguage.name} <br />
                        <Svg data={programmingLanguage.icon} />
                    </li>
                ))}
            </ul>

            <h3>
                Frameworks and Libraries
            </h3>
            <ul>
                {data.skills.frameworksAndLibraries.map((frameworkAndLibrary, index) => (
                    <li key={index}>
                        {frameworkAndLibrary.name} <br />
                        <Svg data={frameworkAndLibrary.icon} />
                    </li>
                ))}
            </ul>

            <h3>
                Databases
            </h3>
            <ul>
                {data.skills.databases.map((database, index) => (
                    <li key={index}>
                        {database.name} <br />
                        <Svg data={database.icon} />
                    </li>
                ))}
            </ul>

            <h3>
                Tools
            </h3>
            <ul>
                {data.skills.tools.map((tool, index) => (
                    <li key={index}>
                        {tool.name} <br />
                        <Svg data={tool.icon} />
                    </li>
                ))}
            </ul>

            <h3>
                Design
            </h3>
            <ul>
                {data.skills.design.map((design, index) => (
                    <li key={index}>
                        {design.name} <br />
                        <Svg data={design.icon} />
                    </li>
                ))}
            </ul>

            <h3>
                Others
            </h3>
            <ul>
                {data.skills.others.map((other, index) => (
                    <li key={index}>
                        {other.name} <br />
                        <Svg data={other.icon} />
                    </li>
                ))}
            </ul>
        </Component>
    )
}

export default Skills