import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Ui_ux_Design from './Ui_ux_Design'
import Corporate_campaigns from './Corporate_campaigns'
import Socialmedia_Branding from '../Socialmedia_Branding'
import Navbarsecond from '../context/Navbarsecond'
import Aos from 'aos'
import { RxHome } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

const Menu_Navigations = () => {
    const { id,designs } = useParams()
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

      useEffect(() => {
        Aos.init({ duration: 1200 });
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
        <>
           {navbar ?
        <>
          <nav className="NavbarItems py-4" style={{ background: 'linear-gradient(224deg, #172271 9.84%, rgba(0, 0, 0, 0.00) 66.2%), #040229' }}>
            <div className="Hamburger-Cross-Icons" onClick={handleClick}>
              <div className='text-white fw-normal fs-6'>{open ? <VscClose className='text-white fw-bold' />
                : <div className='d-flex align-items-center '><CiMenuBurger className='text-white fw-bolder' /> <span className='ms-2'>Menu</span></div>
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
        : <Navbarsecond />
      }
            {id === 'ui_ux_designs' && <><Ui_ux_Design /></>}
            {id === 'corporate_campaigns' && <><Corporate_campaigns /></>}
            {id === 'social_media' && <><Socialmedia_Branding /></>}
            
        </>
    )
}

export default Menu_Navigations