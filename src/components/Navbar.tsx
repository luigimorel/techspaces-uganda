import { Link } from 'react-router-dom';
import logo from '../assets/logo-tech.png';

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg sticky-top"
            id="navBarResponsive"
        >
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        width="200"
                        height="auto"
                        alt="Techspaces Uganda"
                    />
                </Link>
                <button
                    className="navbar-toggler  font-weight-bold bg-primary text-white "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div
                    className="colla0000000pse navbar-collapse"
                    id="navbarResponsive"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2 ">
                            <Link
                                to="/communities"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Communities
                            </Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link
                                to="/oss"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Open Source Projects
                            </Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link
                                to="/open-data"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Open Data
                            </Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link
                                to="/resources"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Resources
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
