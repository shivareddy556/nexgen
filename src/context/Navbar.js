import React, { useState } from "react";
import { NavbarBrand } from "reactstrap";
import Nexgen_icon from "../context/Images/Nexgen_icon.png";
import "../context/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const NavbarPage = (args) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
        <div>
            <div className="nav_bg">
                <nav className={colorChange ? "nav1 nav12" : "nav1"}>
                    <Link to="/" className="title">
                        <NavbarBrand href="/">
                            <img
                                src={Nexgen_icon}
                                alt="Nexgen_icon"
                                style={{ width: "50%" }}
                            />
                        </NavbarBrand>
                    </Link>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <FaTimes className="fs-2" />
                        ) : (
                            <FaBars className="fs-2" />
                        )}
                    </div>
                    <ul className={menuOpen ? "open ul1" : "ul1"}>
                        <li className="li1">
                            <Link
                                to="/"
                                className={active === true ? "nav_bgfont" : "nav_bgfont"}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="li1">
                            <Link
                                to="/services"
                                className={active === true ? "nav_bgfont" : "nav_bgfont"}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="li1">
                            <Link
                                to="/price"
                                className={active === true ? "nav_bgfont" : "nav_bgfont"}
                            >
                                Price & Plan
                            </Link>
                        </li>
                        <li className="li1">
                            <Link
                                to="/viewportfolio"
                                className={active === true ? "nav_bgfont" : "nav_bgfont"}
                            >
                                {" "}
                                View Portfolio
                            </Link>
                        </li>
                        <li className="li1">
                            <Link
                                to="/contacts"
                                className={active === true ? "nav_bgfont" : "nav_bgfont"}
                            >
                                Free Consultation
                            </Link>
                        </li>
                        {colorChange ?
                            <li className="li1">
                                <div className="">
                                    <a
                                        href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                                        target="_blank"
                                        className="Contact_button_nav py-1 px-3"
                                    >
                                        <FaWhatsapp className="fs-4" />{" "}
                                        <span className="py-1">Contact Us</span>
                                    </a>
                                </div>
                            </li>
                            :
                            ""
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default NavbarPage;