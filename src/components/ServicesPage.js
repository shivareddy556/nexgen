import React, { useEffect, useState } from "react";
import Homeimage5 from "../Images/HomeImages/Homeimage5.png";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { hamePage } from "../HomePage/HomePagejson";
import { BsArrowRight } from "react-icons/bs";
import Navbarsecond from "../context/Navbarsecond";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const ServicesPage = () => {
  const [toggle1, setToggle1] = useState(true);
  useEffect(() => {
    if (!toggle1) {
      var val = {};
      hamePage.map((v) => (val[v.id] = false));
      setToggle1(val);
    }
  }, [toggle1]);
  const handledropdown = (item) => {
    setToggle1({ ...toggle1, [item.id]: !toggle1[item.id] });
  };
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/contacts");
  };
  return (
    <div className="">
      <Navbarsecond />

      <div className="home_card3_bg_srvices">
        <div className="home_gride tdi9mq0 tdi9mq4 py-5">
          <div>
            <div className="servise_page_font">
              Your Expert{" "}
              <span className="servise_page_font_web">
                Web Design & Development
              </span>{" "}
              Partner
            </div>
            <div className="services_arefont2 py-3">
              Are you looking for top-notch Website Design Services that
              resonate with your brand's uniqueness? At Nexgen, we specialize in
              Custom Web Design solutions tailored to your specific needs. Our
              team crafts Responsive Web Designs that adapt seamlessly across
              devices, ensuring an optimal user experience for your audience.
            </div>
            <div>
              {hamePage.map((item, index) => {
                return (
                  <div className="">
                    <div className="">
                      <div
                        className="d-flex justify-content-between border-bottom my-2  pointer"
                        onClick={(e) => handledropdown(item)}
                      >
                        <div className="home_Responsive py-3">
                          {" "}
                          {item.title}
                        </div>
                        <div>
                          <div
                            className="pointer py-3"
                            style={{ transition: "all 1m ease" }}
                            onClick={(e) => handledropdown(item)}
                            width={15}
                          >
                            {toggle1[item.id] ? (
                              <BsChevronUp className="BsChevronDown_style fw-bold fs-5" />
                            ) : (
                              <BsChevronDown className="BsChevronDown_style fw-bold fs-5" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        {" "}
                        {toggle1[item.id] && (
                          <div
                            className="content_bspan"
                            style={{ padding: "0.5rem" }}
                          >
                            {" "}
                            {item.discription}{" "}
                          </div>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <button
                className="home_get_style_Consultation py-2 px-4"
                onClick={handleClick}
              >
                Get Free Consultation <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="py-3">
            <img
              src={Homeimage5}
              alt="Homeimage5"
              className="serviceimage5_style"
            />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
