import React, { useEffect, useState } from 'react'
import "../Styles/View_Portfolio_Page.css"
import { Link } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import { websit } from "../HomePage/HomePagejson"
import NavbarPage from '../context/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RxHome } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const NavItems = [
  {title: "Website",
  url: "/viewportfolio",
  cName: "nav-links"
},
{
  title: "UX UI Design",
  url: "/viewportfolio",
  cName: "nav-links"
},
{
  title: "Corporate Campaigns",
  url: "/viewportfolio",
  cName: "nav-links"
},
{
  title: "Social Media & Branding",
  url: "/viewportfolio",
  cName: "nav-links"
},
];
const View_Portfolio_Page = () => {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
};
window.addEventListener("scroll", changeNavbar);
const [open, setOpen] = useState(false);
const handleClick = () => {
  setOpen(!open);
};
  return (
    <div>
      {navbar ? 
      <>
      <nav className="NavbarItems  bg-dark py-4">
        <div className="Hamburger-Cross-Icons" onClick={handleClick}>
          <div className='text-white fw-bold fs-3'>{open ? <VscClose className='text-white fw-bold'/>
            : <CiMenuBurger className='text-white fw-bold'/>
          }</div>
        </div>
        <div className='d-flex justify-content-center mx-auto'>
        <div className={open ? "MenuItems active " : "MenuItems"}>
          {NavItems.map((Item, index) => {
            return (
              <div key={index}>
                <Link to={Item.url} className={`${Item.cName} ms-5`}>
                  {Item.title}
                </Link>
              </div>
            );
          })}
        </div>
        </div>
      </nav>
      </>
        : <NavbarPage />
      }
    <div className='protfilo_bg '>
      <div className='py-5 d-flex justify-content-center ' style={{zIndex:'999'}} 
      >
        <div className='ul_portfilo_vie_navbar  mt-5  shadow position-sticky top-0' style={{zIndex:999}}>
          <div className='websit_font'>
            <Link to="/viewportfolio" className='link_web1'> Website</Link>
          </div>
          <div className='websit_font1'><Link to="/designs/ui_ux_designs" className='link_web1'>UX UI Design</Link></div>
          <div className='websit_font1'><Link to="/designs/corporate_campaigns" className='link_web1'>Corporate Campaigns</Link></div>
          <div className='websit_font1'><Link to="/designs/social_media" className='link_web1'>Social Media & Branding</Link></div>
        </div>
      </div>
      <div className=''>
        <Row className='Row_margin_view d-flex justify-content-center mx-3' >
          {websit.map((item,i) => {
            return (
              <Col key={i} md={4} sm={6} xs={12} data-aos="fade-up"   className='text-center px-3'>
                <Link to={`/viewportfolio/${item.id}`} className='design_link_style'>
                <img src={require(`../Images/Website/${item.pathimage}`)} className='w-100 image-responsive image_hover_effect' alt='webpage' style={{ width: "100%" }} />
                <Link to={`/viewportfolio/${item.id}`}  className='design_link_style'>
                <div className='titel_web text-decoration-none'>{item.title}</div>
                </Link>     
                <div className='year_web mb-5'>{item.year}</div>
                </Link>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
    </div>
  )
}
export default View_Portfolio_Page
