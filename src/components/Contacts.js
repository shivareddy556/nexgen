import React from "react";
import NavbarPage from "../context/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Contacts = () => {
  return (
    <div>
      <NavbarPage />
      <div className="home_card6_bg pb-5">
        <div className="letspaddingcrete">
          <div className="Together_handbook pb-5">
            Let's Create Your <br />
            Digital Success Story Together 🤝
          </div>
          <div className="d-flex justify-content-center">
            <div className="Consultation_handbook">
              <div className="Consultation1_faq align-item-center">
                <div className="width_freedback">
                  <div className="Free_handbook">Free Consultation 🤙</div>
                  <div className="hearhandbook">
                    We’re happy to hear from you!{" "}
                  </div>
                  <div className=" py-3">
                    <div className="">
                      <div className="py-2">
                        <label className="name_handbook">Name*</label>
                        <br />
                        <input
                          className="handbook_input"
                          placeholder="mail@simmmple.com"
                        />
                      </div>
                      <div className="py-2">
                        <label className="name_handbook">Phone Number*</label>
                        <br />
                        <input className="handbook_input" placeholder="" />
                      </div>
                      <div className="py-2">
                        <label className="name_handbook">Mail ID*</label>
                        <br />
                        <input className="handbook_input" placeholder="" />
                      </div>
                      <div className="py-2">
                        <label className="name_handbook">Interested in</label>
                        <br />
                        <input className="handbook_input" placeholder="" />
                      </div>
                      <div className="d-flex gap-3">
                        <div className="py-2 w-50">
                          <label className="name_handbook">
                            Preferred Time to talk
                          </label>
                          <br />
                          <input className="handbook_input" placeholder="" />
                        </div>
                        <div className="py-2 w-50">
                          <label className="name_handbook">
                            Preferred Mode
                          </label>
                          <br />
                          <input className="handbook_input" placeholder="" />
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="handbook_submit py-3 my-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laptogaqimage_bg px-5">
                  <div className="Information_font">Contact Information</div>
                  <div className="withinfont">
                    Fill up the form and our Team will
                     get back to you within 2 hours.
                  </div>
                  <div className="d-flex justify-content-start py-3">
                    <div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <BsFillTelephoneFill
                          className="fs-5"
                          style={{ color: "#FFC644" }}
                        />{" "}
                        +91 93443 38444
                      </div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <IoMail style={{ color: "#FFC644" }} className="fs-5" />{" "}
                        aravind.nexgen@gmail.com
                      </div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <FaLocationDot
                          style={{ color: "#FFC644" }}
                          className="fs-5"
                        />{" "}
                        <div>
                          Bangalore,
                          <br /> Basavanagudi, Karnataka-560004 <br />
                          Chennai,
                          <br />
                          T-nagar, Tamil Nadu-600017 <br />
                          Your Digital Partner from India❤️
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
