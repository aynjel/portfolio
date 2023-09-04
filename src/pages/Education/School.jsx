import PropTypes from 'prop-types'
import styled from 'styled-components'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--quaternary-color);
    height: 100%;
    padding: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--primary-color);
    }

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

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-color);
        &:hover {
            text-decoration: underline;
        }
    }
`

function School({ data }) {
    return (
        <Component>
            <h3>{data.name}</h3>
            <p>{data.level}</p>
            <p>{data.year}</p>
            <p>{data.description}</p>
            <a href={data.website} target="_blank" rel="noreferrer">See more</a>
        </Component>
    );
}

School.propTypes = {
    data: PropTypes.object.isRequired
}

export default School