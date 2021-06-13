import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="container cover ">
            <div className="row">
                <h1 className="cover-heading">Cover the page</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quibusdam. Quam eveniet nam minima facere dolore placeat
                recusandae commodi aspernatur!
                <button className="hero__btn">
                    <Link to="#/" className="hero__link">
                        Learn More
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Hero;
