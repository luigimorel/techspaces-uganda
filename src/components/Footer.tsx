import { Link } from 'react-router-dom';
import logo from '../assets/logo-tech.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__container mb-5">
            <div
                style={{
                    margin: ' 2rem 7rem',
                    height: '2px',
                    backgroundColor: '#000000',
                }}
            ></div>
            <div className="container ">
                <div className="row mb-3">
                    <div className="col-md-4">
                        <Link to="/">
                            <img
                                src={logo}
                                width="200"
                                height="auto"
                                alt="Techspaces Uganda logo"
                            />
                        </Link>
                        <p className="leading footer__para  ">
                            Bringing the Ugandan tech eco-system into one place.{' '}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="heading mb-4 mt-4">Useful Links</h5>
                        <ul className="list-group mt-2">
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

                    <div className="col-md-4">
                        <h5 className="heading mb-4 mt-4">Social Links</h5>
                        <div className="row">
                            <i className="fas fas-github mb-3">
                                <a
                                    className="footer__link"
                                    href="https://github.com/CodeForUganda/techies-uganda"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Github
                                </a>
                            </i>
                        </div>
                    </div>
                </div>
                <p className=" text-center copyright  mt-5 mb-5 pb-5">
                    Built with ❤ by{'  '}
                    <a
                        href="https://luigimorel.me"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Luigi Morel {'    '}
                    </a>
                    {year}
                </p>
            </div>
        </div>
    );
};

export default Footer;
