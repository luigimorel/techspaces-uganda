import Footer from '../components/Footer';
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
                <Footer />
            </div>
        </>
    );
};

export default Home;
