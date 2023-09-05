import PropTypes from 'prop-types';

function Svg({ data }) {
    return (
        <>
            <svg width="64" height="64">
                <use href={data} />
            </svg>
        </>
    )
}

Svg.propTypes = {
    data: PropTypes.object.isRequired
}

export default Svg