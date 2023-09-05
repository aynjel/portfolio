import styled from 'styled-components'
import data from '../../data/data.json'
import School from './School'
import Course from './Course'
import Subject from './Subject'
import Svg from '../../components/SVG/Svg'

const Component = styled.div`
    max-width: 1158px;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    h2 {
        font-size: 2rem;
        font-weight: 500;
        color: var(--primary-color);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--secondary-color);
    }

    .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .schools {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`

function Education() {
    return (
        <Component>
            <Svg data="icon.svg#graduation" />
            <h2>
                Education
            </h2>

            <div className="details">
                <h3>
                    Course
                </h3>
                <div className="course">
                    <Course data={data.education.course} />
                </div>
            </div>

            <div className="details">
                <h3>
                    Subjects
                </h3>
                <div className="subjects">
                    <Subject data={data.education.subjects} />
                </div>
            </div>

            <div className="details">
                <h3>
                    Schools
                </h3>
                <div className="schools">
                    {data.education.schools.map((school, index) => {
                        return <School key={index} data={school} />
                    })}
                </div>
            </div>

        </Component>
    )
}

export default Education