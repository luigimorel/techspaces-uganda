import PageHeading from '../components/PageHeading';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Reasons from '../components/Reasons';

const Home = () => {
    return (
        <>
            <div className="container mb-4">
                <Navbar />
            </div>
            <div className="container mt-auto">
                <Hero />
                <Reasons />
                <PageHeading />
            </div>
        </>
    );
};

export default Home;
