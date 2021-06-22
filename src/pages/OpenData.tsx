import OpenDataContent from '../components/content/OpenDataContent';
import Footer from '../components/Footer';

const OpenData = () => {
    return (
        <div>
            <div className="jumbotron ">
                <p
                    className="breadcrumb"
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Home / Open Data
                </p>

                <p
                    className="text-center jumbo__para "
                    style={{ backgroundColor: '#25c2a0' }}
                >
                    Browse through actionable data about Uganda <br /> that can
                    be used for decision making.
                </p>
            </div>
            <OpenDataContent />
            <Footer />
        </div>
    );
};

export default OpenData;
