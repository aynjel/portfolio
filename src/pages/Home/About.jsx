import PropTypes from 'prop-types';
import './About.css';

function About({ data }) {
    return (
        <section className="About">
            <div className="Container About__container">
                <div className="About__content">
                    <h2 className="About__title">
                        About <span>Me</span>
                    </h2>
                    <p className="About__description">{data.personal.objective}</p>
                    <ul className="About__buttons">
                        <li>
                            <a href={data.personal.resume} target="_blank" rel="noreferrer" className="About__button">Resume</a>
                        </li>
                        <li>
                            <a href={data.personal.github} target="_blank" rel="noreferrer" className="About__button">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired
};

export default About