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

    p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--secondary-color);
    }
`

function Course({ data }) {
    return (
        <Component>
            <h3>{data.name}</h3>
            <p>{data.school}</p>
            <p>{data.from + ' - ' + data.to}</p>
            <p>{data.duration} | {data.units} units</p>
            <p>Major: {data.major}</p>
            <p>{data.description}</p>
        </Component>
    );
}

Course.propTypes = {
    data: PropTypes.object.isRequired
}

export default Course