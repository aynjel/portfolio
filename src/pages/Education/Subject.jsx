import PropTypes from 'prop-types'
import styled from 'styled-components'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--quaternary-color);
    height: 100%;
    padding: 1rem;

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--secondary-color);
    }

    .subjects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0;
    }

    li {
        font-size: 1rem;
        font-weight: 400;
        color: var(--secondary-color);
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

function Subject({ data }) {
    return (
        <Component>
            <div className="subjects">
                <h3>First Year Subjects</h3>
                <ul>
                    {data.firstYear.map((subject, index) => (
                        <li key={index}>
                            {subject.subjectName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="subjects">
                <h3>Second Year Subjects</h3>
                <ul>
                    {data.secondYear.map((subject, index) => (
                        <li key={index}>
                            {subject.subjectName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="subjects">
                <h3>Third Year Subjects</h3>
                <ul>
                    {data.thirdYear.map((subject, index) => (
                        <li key={index}>
                            {subject.subjectName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="subjects">
                <h3>Fourth Year Subjects</h3>
                <ul>
                    {data.fourthYear.map((subject, index) => (
                        <li key={index}>
                            {subject.subjectName}
                        </li>
                    ))}
                </ul>
            </div>
        </Component>
    );
}

Subject.propTypes = {
    data: PropTypes.object.isRequired
}

export default Subject