import React, { useEffect, useState } from "react";
import "../Styles/View_Portfolio_Page.css";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Ui_ux_banners } from "../HomePage/HomePagejson";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
const View_Portfolio_Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const [navbar,setNavbar] = useState(false);
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
      <div className="protfilo_bg">
        <div
          className="py-5 d-flex justify-content-center "
          style={{ zIndex: "999" }}
        >
          <div
            className="ul_portfilo_vie_navbar  mt-5  shadow position-sticky top-0"
            style={{ zIndex: 999 }}
          >
            <div className="websit_font">
              <Link to="/viewportfolio" className="link_web1">
                {" "}
                Website
              </Link>
            </div>
            <div className="websit_font1">
              <Link to="/designs/ui_ux_designs" className="link_web1">
                UX UI Design
              </Link>
            </div>
            <div className="websit_font1">
              <Link to="/designs/corporate_campaigns" className="link_web1">
                Corporate Campaigns
              </Link>
            </div>
            <div className="websit_font1">
              <Link to="/designs/social_media" className="link_web1">
                Social Media & Branding
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <Row className="Row_margin_view p-0 d-flex ">
            {Ui_ux_banners.map((item, i) => {
              return (
                <Col
                  key={i}
                  md={4}
                  sm={6}
                  xs={12}
                  data-aos="fade-up"
                  className="text-center image_padding"
                >
                  <Link
                    to={`/designs/ui_ux_designs/${item.id}`}
                    className="design_link_style"
                  >
                    <img
                      src={require(`../Design_Banners/${item.pathimage}`)}
                      className="w-100 image-responsive image_hover_effect"
                      alt="webpage"
                      style={{ width: "100%" }}
                    />
                    <Link
                      to={`/designs/ui_ux_designs/${item.id}`}
                      className="design_link_style"
                    >
                      <div className="titel_web text-decoration-none">
                        {item.title}
                      </div>
                    </Link>
                    <div className="year_web mb-5">{item.year}</div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default View_Portfolio_Page;
