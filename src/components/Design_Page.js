import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { websit } from '../HomePage/HomePagejson'
import { Card } from 'reactstrap'
import NavbarPage from '../context/Navbar'
import { RxHome } from "react-icons/rx";

const Design_Page = () => {
    const { id } = useParams()
    const filter_web = websit.filter(p => p.id == id)
    return (
        <div>
        <div className='bg-dark position-sticky top-0 d-flex align-items-center' style={{zIndex:'999'}}>
        <div className='ms-5' style={{width:'20%'}}>
            <Link to="/viewportfolio" className='link_web1'> <RxHome  className='fs-2'/>
            </Link>
          </div>
        <div className='ul_portfilo11 ms-5'>
          
          <div className='websit_font_link'>
            <Link to="/viewportfolio" className='link_web1'> Website</Link>
          </div>
          <div className='design_nav_font1'><Link to="/viewportfolio/Mobile" className='link_web1'>Mobile App</Link></div>
          <div className='design_nav_font1'><Link to="/viewportfolio/Dashboard" className='link_web1'>Dashboard</Link></div>
          <div className='design_nav_font1'><Link to="/viewportfolio/UXResearch" className='link_web1'>UX Research</Link></div>
          <div className='design_nav_font1'><Link to="/viewportfolio/SocialMedia" className='link_web1'>Social Media</Link></div>
          <div className='design_nav_font1'><Link to="/viewportfolio/Advertisement" className='link_web1'>Advertisement</Link></div>
        </div>
      </div>
        
        <div className='' style={{ background: '#424245' }}>
            <Card className='mx-5 border-0 shadow'>
                <img src={require(`../Images/WebsiteImage/${filter_web[0].path_svg}`)} />
            </Card>
        </div>
        </div>
    )
}
export default Design_Page
