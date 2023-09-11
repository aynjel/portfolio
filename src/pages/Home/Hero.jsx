import PropTypes from 'prop-types';
import './Hero.css';

function Hero({ data }) {
    return (
        <section className="Hero">
            <div className='Container Hero__Container'>
                <figure className='Hero__Image'>
                    <img src={data.image.src} alt={data.image.alt} />
                    <figcaption className='Hero__Caption'>
                        <h1>
                            {data.name}
                        </h1>
                        <h2>
                            {data.profession.title}
                        </h2>
                    </figcaption>
                </figure>
                <a className='Hero__Button' href='mailto:ortegacanillo76@gmail.com'>
                    Hire Me
                </a>
            </div>
        </section>
    )
}

Hero.propTypes = {
    data: PropTypes.any.isRequired,
};

export default Hero;
