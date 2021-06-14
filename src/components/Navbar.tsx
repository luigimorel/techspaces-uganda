import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-tech.png';

const Navbar = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark  ">
            <Link to="/" className="navbar-brand">
                <img
                    src={logo}
                    width="200"
                    height="auto"
                    alt="Techspaces Uganda"
                />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={
                    open ? 'navbar-collapse' : 'collapse navbar-collapse '
                }
                id="navbarResponsive"
            >
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active mx-2 ">
                        <Link
                            to="/communities"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Communities
                        </Link>
                    </li>
                    <li className="nav-item mx-2 ">
                        <Link to="/oss" className="nav-link py-3 px-0 px-lg-3 ">
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
        </nav>
    );
};

export default Navbar;
