import React, { useEffect, useState } from 'react'
import "../Styles/View_Portfolio_Page.css"
import { Link } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import { websit } from "../HomePage/HomePagejson"
import NavbarPage from '../context/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';





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



  return (
    <div>
      {navbar ? 
      
      
       <div className='ul_portfilo mt-4  shadow position-sticky top-0' data-aos="flip-up" style={{zIndex:999}}>
          <div className='websit_font'>
            <Link to="/viewportfolio" className='link_web1'> Website</Link>
          </div>
          <div className='websit_font1'><Link to="/viewportfolio" className='link_web1'>Mobile App</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio" className='link_web1'>Dashboard</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio" className='link_web1'>UX Research</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio" className='link_web1'>Social Media</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio" className='link_web1'>Advertisement</Link></div>
        </div> 

     
        
        : <NavbarPage />
      }
   
    <div className='protfilo_bg '>
      <div className='py-5 d-flex justify-content-center ' style={{zIndex:'999'}} 
      >
        <div className='ul_portfilo_vie_navbar  mt-5  shadow position-sticky top-0' style={{zIndex:999}}>
          <div className='websit_font'>
            <Link to="/viewportfolio" className='link_web1'> Website</Link>
          </div>
          <div className='websit_font1'><Link to="/viewportfolio/Mobile" className='link_web1'>Mobile App</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio/Dashboard" className='link_web1'>Dashboard</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio/UXResearch" className='link_web1'>UX Research</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio/SocialMedia" className='link_web1'>Social Media</Link></div>
          <div className='websit_font1'><Link to="/viewportfolio/Advertisement" className='link_web1'>Advertisement</Link></div>
        </div>
      </div>
      <div className=''>
        <Row className='Row_margin_view d-flex justify-content-center mx-5' >
          {websit.map((item) => {
            return (
              <Col md={4} data-aos="fade-up"   className='text-center px-4' style={{width:'30%'}}>
                <Link to={`/viewportfolio/${item.id}?${item.pathimage}=modus-create`} className='design_link_style'>
                <img src={require(`../Images/Website/${item.pathimage}`)} className='w-100 image_hover_effect' alt='webpage' style={{ width: "100%" }} />
                <Link to={`/viewportfolio/${item.id}?${item.pathimage}=modus-create`}  className='design_link_style'>
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
