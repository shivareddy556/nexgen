import React, { useState } from 'react'
import "../Styles/View_Portfolio_Page.css"
import { Link } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import { websit } from "../HomePage/HomePagejson"
import { useNavigate } from "react-router-dom";
import NavbarPage from '../context/Navbar';
const View_Portfolio_Page = () => {
  return (
    <div>
    <NavbarPage />
    <div className='protfilo_bg '>
      <div className='py-5 d-flex justify-content-center ' style={{zIndex:'999'}} 
      >
        <div className='ul_portfilo py-4 w-75 mt-4  shadow'>
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
              <Col md={4}  className='text-center px-4' style={{width:'30%'}}>
                <Link to={`/viewportfolio/${item.id}`} className='design_link_style'>
                <img src={require(`../Images/Website/${item.pathimage}`)} className='w-100 image_hover_effect' alt='webpage' style={{ width: "100%" }} />
                <Link to={`/viewportfolio/${item.id}`} className='design_link_style'>
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
