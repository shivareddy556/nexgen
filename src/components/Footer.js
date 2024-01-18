import React from "react";
import "../Styles/Footer.css";
// import skillimagefooter from "../context/Images/skillimagefooter.png"
// import potimaex_imagefooter from "../context/Images/potimaex_imagefooter.png"
import linkedinfooter from "../context/Images/linkedinfooter.png";
import youtubefooter from "../context/Images/youtubefooter.png";
import instagramfooter from "../context/Images/instagramfooter.png";
import Nexgen_icon from "../context/Images/Nexgen_icon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleClick =()=>{
    window.open("https://www.linkedin.com/in/aravind-kumar-5778a1ba/")
  }
  const handleClickyou =()=>{
    window.open("https://www.youtube.com/")
  }
  const handleClickyins =()=>{
    window.open("https://www.instagram.com/desigr_frd/?hl=en")
  }
  return (
    <div className="footer_bg">
      <div className="footer_flex">
        <div className="Home_center_footer">
          <div className="">
            <div className="service_footer mb-2">
              Your digital Partner
            </div>
            <div className="centerion">
              <img
                src={Nexgen_icon}
                alt="Nexgen_icon"
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="margitopfooter"></div>
          {/* <div className='text-center'><img src={skillimagefooter} alt="skillimagefooter" style={{ width: "50%" }} /> </div>
                    <div className='footer_line'></div>
                    <div className='service_footer text-center'>PARTNERED WITH</div>
                    <div className='text-center'><img src={potimaex_imagefooter} alt="potimaex_imagefooter" style={{ width: "50%" }} /> </div> */}
        </div>
        <div className="Home_center_footer">
          <div className="sQuick_footer">Quick links</div>
          <div className="py-3">
            <Link to="/" className="homedecratoin"> <div className="Home_footer">Home</div></Link>
            <Link to="/services" className="homedecratoin"><div className="Home_footer">Services</div></Link>
            <Link to="/viewportfolio" className="homedecratoin"><div className="Home_footer">Our Works</div></Link>
            {/*<div className="Home_footer"> Price & Plans </div>*/}
            <Link to="/contacts" className="homedecratoin"><div className="Home_footer">Free Consultation</div></Link>
          </div>
        </div>
        <div className="Home_center_footer">
          <div className="sQuick_footer">Contacts</div>
          <div className="py-4">
            <div className="aravind_footer">aravind.nexgen@gmail.com</div>
            <div className="aravind_footer pt-3">+91 93443 38444</div>
            <div className="pt-4"></div>
          </div>
        </div>
        <div className="Home_center_footer">
          <div className="sQuick_footer">Social Presence</div>
          <div className="py-4 d-flex Home_center_footer justify-content-center">
            <div className="" onClick={handleClick}>
              <img
                src={linkedinfooter}
                alt="linkedinfooter"
                style={{ width: "70%" }}
              />{" "}
            </div>
            <div onClick={handleClickyou}>
              <img
                src={youtubefooter}
                alt="youtubefooter"
                style={{ width: "70%" }}
              />{" "}
            </div>
            <div onClick={handleClickyins}>
              <img
                src={instagramfooter}
                alt="instagramfooter"
                style={{ width: "70%" }}
              />{" "}
            </div>
          </div>
          <div className="pt-5 my-4 "></div>
        </div>
      </div>
      <div className="footer_flex1">
        <div>
          <div className="footer2_line"></div>
          <div className="aravind_footer">
            Nexgen | All rights reserved 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
