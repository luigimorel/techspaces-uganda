import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.svg';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__container ">
            <div className="container main__footer__container">
                <div className="row mb-3">
                    <div className="footer__section col-md-4">
                        <Link to="/">
                            <img
                                src={logo}
                                width="200"
                                height="auto"
                                alt="Techspaces Uganda logo"
                            />
                        </Link>
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
                                <Link className="footer__link" to="/">
                                    Home
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
                            <li className="list-item mb-3">
                                <Link className="footer__link" to="/resources">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 footer__section">
                        <h5 className="heading mb-3 footer__heading">
                            Social Links
                        </h5>
                        <div className="row">
                            <a
                                className="footer__link mb-3"
                                href="https://github.com/CodeForUganda/techies-uganda"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container copyright__container">
                    <p className=" text-center copyright  mt-5  pb-5">
                        Built with ❤ by{'  '}
                        <a
                            href="https://luigimorel.me"
                            rel="noreferrer"
                            className="footer__link"
                            target="_blank"
                        >
                            Luigi Morel {'    '}
                        </a>
                        {year}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
