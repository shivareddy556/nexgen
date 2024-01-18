import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { social_media } from '../HomePage/HomePagejson'
import { Card, Col, Row } from 'reactstrap'
import { RxHome } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import Footer from './Footer';
const NavItems = [
    {
        title: "Website",
        url: "/viewportfolio",
        cName: "nav-links"
    },
    {
        title: "Ux UI Designs",
        url: "/designs/ui_ux_designs",
        cName: "nav-links"
    },
    {
        title: "Corporate Campaigns",
        url: "/designs/corporate_campaigns",
        cName: "nav-links"
    },
    {
        title: "Social Media & Branding",
        url: "/social_media_designs",
        cName: "nav-links"
    },
];
const Social_media_design_Page = () => {
    const { id } = useParams()
    const filter_web = social_media.filter(p => p.id == id)
    const filter_svg = filter_web[0].path_svg
    console.log("filter_web...", filter_web[0].path_svg)
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <nav className="NavbarItems  py-4" style={{ background: 'linear-gradient(224deg, #172271 9.84%, rgba(0, 0, 0, 0.00) 66.2%), #040229' }}>
                <div className='ms-5' style={{ width: '20%' }}>
                    <Link to="/viewportfolio" className='link_web1'> <RxHome className='fs-2' />
                    </Link>
                </div>
                <div className="Hamburger-Cross-Icons" onClick={handleClick}>
                    <div className='text-white fw-bold fs-3'>{open ? <VscClose className='text-white fw-bold' />
                        : <CiMenuBurger className='text-white fw-bold' />
                    }</div>
                </div>
                <div className={open ? "MenuItems active" : "MenuItems"}>
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
            </nav>
            <div className='' style={{ background: '#424245' }}>
                <Card className='imagemarge border-0  bg-transparent'>
                    <div >
                        <Row className='Row_margin_view d-flex justify-content-center mx-3' >
                            {filter_svg && filter_svg.map((p, i) => {
                                return (
                                    <Col key={i} md={4} sm={6} xs={12} data-aos="fade-up" className='text-center p-3'>
                                        <div className='design_link_style'>
                                            {/* <img src={require(`./Socialmedia_Banners/${p.pathimage}`)} className='w-100 image-responsive image_hover_effect' alt='webpage' style={{ width: "100%" }} /> */}
                                            <img key={i} src={require(`../Social-Media-Images/${p}`)} className='w-100 image-responsive image_hover_effect' alt='logo'/>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    )
}
export default Social_media_design_Page
