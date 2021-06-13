import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="container footer__container">
            <div className="row mb-3">
                <div className="col-md-4">
                    <p className="leading ml-3b footer__para">
                        This is the text that will be used to talk about the
                        final web page
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="heading ">Useful Links</h4>
                    <ul className="list-group">
                        <li className="list-item">
                            <Link to="/">Home </Link>
                        </li>

                        <li className="list-item">
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/communities">Communities</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/oss">Open Source Projects</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/open-data">Open Data</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4 className="heading ">Social Links</h4>
                    <div className="row">
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                        <i className="fas fas-facebook mb-3">
                            <a href="#">social link</a>
                        </i>
                    </div>
                </div>
            </div>
            <p className="leading text-center mt-5">
                &copy; TechSpaces Uganda {year}
            </p>
        </div>
    );
};

export default Footer;
