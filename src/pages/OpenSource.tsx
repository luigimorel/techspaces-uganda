import OSSContent from '../components/content/OSSContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OpenSource = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron text-center my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur.
            </div>
            <OSSContent />
            <Footer />
        </div>
    );
};

export default OpenSource;
