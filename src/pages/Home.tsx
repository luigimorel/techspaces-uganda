import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import Navbar from '../components/Navbar';
import Reasons from '../components/Reasons';
import ValueProposition from '../components/ValueProposition';

const Home = () => {
    return (
        <div className="mx-auto">
            <Navbar />
            <Hero />
            <ImageSection />
            <Reasons />
            <ValueProposition />
            <Footer />
        </div>
    );
};

export default Home;
