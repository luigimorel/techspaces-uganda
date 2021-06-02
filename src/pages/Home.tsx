import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <div className="container mb-4">
                <Navbar />
            </div>
            <div className="container mt-auto">
                <Hero />
            </div>
        </>
    );
};

export default Home;
