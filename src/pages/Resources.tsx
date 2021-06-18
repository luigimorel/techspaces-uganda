import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ResourcesContent from '../components/content/ResourcesContent';

const Resources = () => {
    return (
        <>
            <Navbar />
            <div className="jumbotron ">
                <p
                    className="breadcrumb"
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Home / Resources
                </p>

                <p
                    className="text-center jumbo__para "
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                    elit. Laudantium, tenetur.
                </p>
            </div>
            <ResourcesContent />
            <Footer />
        </>
    );
};

export default Resources;
