import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeading from '../components/PageHeading';

const OpenData = () => {
    return (
        <div>
            <Navbar />
            <p className="leading">This is the open data page</p>
            <PageHeading />
            <Footer />
        </div>
    );
};

export default OpenData;
