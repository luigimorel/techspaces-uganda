import { FaGithubSquare } from 'react-icons/fa';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../assets/logo-dark.svg';

const Footer = () => {
    return (
        <footer className="main__footer__container ">
            <div className="container  footer__container">
                <div className="row mb-3">
                    <div className="footer__section col-md-4">
                        <BrowserRouter>
                            {' '}
                            <Link to="/">
                                <img
                                    src={logo}
                                    width="200"
                                    height="auto"
                                    alt="Techspaces Uganda logo"
                                />
                            </Link>
                        </BrowserRouter>

                        <p className="leading footer__para  mt-3">
                            Bringing the Ugandan tech eco-system into one place.{' '}
                        </p>
                    </div>

                    <div className="footer__section col-md-4">
                        <h5 className="heading mb-3 footer__heading ">
                            Useful Links
                        </h5>
                        <ul className="list-group footer__ul mt-2">
                            <li className="list-item mb-3">
                                <BrowserRouter>
                                    <Link className="footer__link" to="/">
                                        Home
                                    </Link>
                                </BrowserRouter>
                            </li>

                            <li className="list-item mb-3">
                                <BrowserRouter>
                                    <Link
                                        className="footer__link"
                                        to="/communities"
                                    >
                                        Communities
                                    </Link>
                                </BrowserRouter>
                            </li>

                            <li className="list-item mb-3">
                                <BrowserRouter>
                                    <Link className="footer__link" to="/oss">
                                        Open Source Projects
                                    </Link>
                                </BrowserRouter>
                            </li>

                            <li className="list-item mb-3">
                                <BrowserRouter>
                                    <Link
                                        className="footer__link"
                                        to="/open-data"
                                    >
                                        Open Data
                                    </Link>
                                </BrowserRouter>
                            </li>

                            <li className="list-item mb-3">
                                <BrowserRouter>
                                    <Link
                                        className="footer__link"
                                        to="/resources"
                                    >
                                        Resources
                                    </Link>
                                </BrowserRouter>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 footer__section">
                        <h5 className="heading mb-3 footer__heading">
                            Contribute
                        </h5>

                        <div className="row">
                            <a
                                className="footer__link mb-3 "
                                href="https://github.com/morelmiles/techspaces-uganda"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaGithubSquare className="footer__icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <span className="container copyright__container mb-0">
                    <p className=" text-center copyright    ">
                        Built with ❤ by{'  '}
                        <a
                            href="https://luigimorel.me"
                            rel="noreferrer"
                            className="footer__link"
                            target="_blank"
                        >
                            Luigi Morel {'    '}
                        </a>
                    </p>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
