import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <>
            <div className=" hero__section">
                <div className="herotext__container">
                    <p className="hero__para">
                        Ugandan <i>tech</i> ecosystem in one place
                    </p>
                    <p className="small__text">
                        Bringing to you the information about the ecosystem in{' '}
                        <br />
                        Uganda with convenience, purpose and zero ambiguity.
                    </p>
                    <Link to="/">
                        <button className="hero__btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
