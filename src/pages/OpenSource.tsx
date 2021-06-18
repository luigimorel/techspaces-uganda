import OSSContent from '../components/content/OSSContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OpenSource = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron ">
                <p
                    className="breadcrumb"
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Home / Open Source
                </p>
                <p
                    className="text-center jumbo__para "
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                    elit. Laudantium, tenetur.
                </p>
            </div>
            <OSSContent />
            <Footer />
        </div>
    );
};

export default OpenSource;
