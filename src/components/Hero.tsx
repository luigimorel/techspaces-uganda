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
            <p className="lead">
                <Link to="#" className="btn btn-secondary btn-lg">
                    Learn More
                </Link>
            </p>
        </main>
    );
};

export default Hero;
