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

function Experience() {
    return (
        <Component>
            <h2>
                Experience
            </h2>
            <ul>
                {data.experience.map((experience, index) => (
                    <li key={index}>
                        <h3>
                            {experience.jobTitle} | {experience.jobType}
                        </h3>
                        <p>{experience.company.name}</p>
                        <p>
                            {experience.from + ' - ' + experience.to} | {experience.duration}
                        </p>
                        <p>
                            {experience.company.location.street + ', ' + experience.company.location.baranggay + ', ' + experience.company.location.city + ', ' + ', ' + experience.company.location.country} | <a href={experience.company.location.googlemaps.link} target="_blank" rel="noreferrer">Google Maps</a>
                        </p>
                        <a href={experience.company.website}>{experience.company.website}</a>
                        
                        <h4>Responsibilities</h4>
                        <ul>
                            {experience.responsibilies.map((responsibility, index) => (
                                <li key={index}>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>

                        <h4>Salary</h4>
                        <p>
                            {experience.salary} {experience.currency}
                        </p>
                    </li>
                ))}
            </ul>
        </Component>
    )
}

export default Experience