import PropTypes from "prop-types";
import "./Social.css";

function Social({ data }) {
    return (
        <section className="Social">
            <div className="Container Social__Container">
                <h2 className="Social__title">Social</h2>
                <ul className="Social__list">
                    {data.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <svg width="32" height="32">
                                    <use href={`icon.svg#${item.icon}`} />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

Social.propTypes = {
    data: PropTypes.any.isRequired,
};

export default Social;
