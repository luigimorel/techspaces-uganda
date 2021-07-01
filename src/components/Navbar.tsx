import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../assets/logo2.svg';

const Navbar = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar navbar-expand-md">
            <BrowserRouter>
                {' '}
                <Link to="/" className="navbar-brand ">
                    <img
                        src={logo}
                        width="200"
                        height="auto"
                        className="logo__img"
                        alt="Techspaces Uganda"
                    />
                </Link>
            </BrowserRouter>

            <button
                className="navbar-toggler mx-2"
                type="button"
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <FaAlignRight />
            </button>

            <div
                className={
                    open ? 'navbar-collapse' : 'collapse navbar-collapse '
                }
                id="navbarResponsive"
                data-testid="nav-open"
            >
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active mx-2 ">
                        <BrowserRouter>
                            <Link
                                to="/communities"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Communities
                            </Link>
                        </BrowserRouter>
                    </li>

                    <li className="nav-item mx-2 ">
                        <BrowserRouter>
                            <Link
                                to="/oss"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Open Source Projects
                            </Link>
                        </BrowserRouter>
                    </li>

                    <li className="nav-item mx-2 ">
                        <BrowserRouter>
                            <Link
                                to="/open-data"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Open Data
                            </Link>
                        </BrowserRouter>
                    </li>

                    {/* <li className="nav-item mx-2 ">
                        <BrowserRouter>
                            <Link
                                to="/companies"
                                className="nav-link py-3 px-0 px-lg-3 "
                            >
                                Companies
                            </Link>
                        </BrowserRouter>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
