import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeading from '../components/PageHeading';

const OpenSource = () => {
    return (
        <div>
            <Navbar />
            <p className="leading">This is the open source page</p>

            <PageHeading />
            <Footer />
        </div>
    );
};

export default OpenSource;
