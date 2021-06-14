import OpenDataContent from '../components/content/OpenDataContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeading from '../components/PageHeading';

const OpenData = () => {
    return (
        <div>
            <Navbar />
            <PageHeading />
            <OpenDataContent />
            <Footer />
        </div>
    );
};

export default OpenData;
