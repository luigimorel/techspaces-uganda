import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__container mb-4">
            <div
                style={{
                    margin: ' 2rem 7rem',
                    height: '2px',
                    backgroundColor: '#fff',
                }}
            ></div>
            <div className="container ">
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
                            <li className="list-item mb-3">
                                <Link className="footer__link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="list-item mb-3">
                                <Link className="footer__link" to="/resources">
                                    Resources
                                </Link>
                            </li>
                            <li className="list-item mb-3">
                                <Link
                                    className="footer__link"
                                    to="/communities"
                                >
                                    Communities
                                </Link>
                            </li>
                            <li className="list-item mb-3">
                                <Link className="footer__link" to="/oss">
                                    Open Source Projects
                                </Link>
                            </li>
                            <li className="list-item mb-3">
                                <Link className="footer__link" to="/open-data">
                                    Open Data
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h4 className="heading ">Social Links</h4>
                        <div className="row">
                            <i className="fas fas-github mb-3">
                                <a href="https://github.com/CodeForUganda/techies-uganda">
                                    Github
                                </a>
                            </i>
                        </div>
                    </div>
                </div>
                <p className="leading text-center copyright mt-5 mb-3">
                    &copy; TechSpaces Uganda {year}
                </p>
            </div>
        </div>
    );
};

export default Footer;
