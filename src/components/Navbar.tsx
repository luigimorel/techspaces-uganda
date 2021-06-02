import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center nav__bar p-5 px-md-1  mb-3  box-shadow">
            <Link
                to="/"
                className="my-0 mr-md-auto font-weight-normal name__logo"
            >
                Techspaces Uganda
            </Link>

            <nav className="mr-1" id="navBarResponsive">
                <Link to="/" className="p-5 text-dark nav__link nav-link">
                    Home
                </Link>
                <Link
                    to="/resources"
                    className="p-3 text-dark nav__link nav-link active"
                >
                    Resources
                </Link>
                <Link
                    to="/communities"
                    className="p-3 text-dark nav__link nav-link"
                >
                    Communities
                </Link>
                <Link to="/oss" className="p-3 text-dark nav__link nav-link">
                    Open Source Projects
                </Link>
                <Link
                    to="/open-data"
                    className="p-3 text-dark nav__link nav-link"
                >
                    Open Data
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
