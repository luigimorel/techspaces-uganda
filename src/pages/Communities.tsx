import CommunitiesContent from '../components/content/ComunitiesContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Communities = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron ">
                <p
                    className="breadcrumb"
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Home / Communities
                </p>

                <p
                    className="text-center jumbo__para "
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                    elit. Laudantium, tenetur.
                </p>
            </div>

            <CommunitiesContent />
            <Footer />
        </div>
    );
};

export default Communities;
