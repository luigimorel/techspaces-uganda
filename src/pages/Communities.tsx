import CommunitiesContent from '../components/content/ComunitiesContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Communities = () => {
    return (
        <div>
            <Navbar />
            <div className="jumbotron text-center my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur.
            </div>{' '}
            <CommunitiesContent />
            <Footer />
        </div>
    );
};

export default Communities;
