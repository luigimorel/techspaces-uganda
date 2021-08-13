import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../assets/logo2.svg';

const Navbar = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar navbar-expand-md">
            <NavLink to="/" className="navbar-brand ">
                <img
                    src={logo}
                    width="200"
                    height="auto"
                    className="logo__img"
                    alt="Techspaces Uganda"
                />
            </NavLink>

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
                        <NavLink
                            to="/communities"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Communities
                        </NavLink>
                    </li>
                    {/* {
                    <li className="nav-item mx-2 ">
                        <NavLink
                            to="/oss"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Open Source Projects
                        </NavLink>
                    </li>

                    <li className="nav-item mx-2 ">
                        <NavLink
                            to="/open-data"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Open Data
                        </NavLink>
                    </li>} */}
                    {/* 
                    <li className="nav-item mx-2 ">
                        <NavLink
                            to="/companies"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Companies
                        </NavLink>
                    </li>

                    <li className="nav-item mx-2 ">
                        <NavLink
                            to="/blog"
                            className="nav-link py-3 px-0 px-lg-3 "
                        >
                            Blog
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
