import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <main role="main" className="cover inner">
            <h1 className="cover-heading">Cover the page</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quibusdam. Quam eveniet nam minima facere dolore placeat
                recusandae commodi aspernatur!
            </p>
            <button className="hero__btn">
                <Link to="#/" className="hero__link">
                    Learn More
                </Link>
            </button>
        </main>
    );
};

export default Hero;
