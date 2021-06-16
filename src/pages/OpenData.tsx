import OpenDataContent from '../components/content/OpenDataContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OpenData = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron text-center my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur.
            </div>
            <OpenDataContent />
            <Footer />
        </div>
    );
};

export default OpenData;
