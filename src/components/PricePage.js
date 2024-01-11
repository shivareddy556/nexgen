import React from "react";
import "../Styles/PriceandPlan.css";
import { AiFillCheckCircle } from "react-icons/ai";
import sectionprice1 from "../Images/AboutImages/sectionprice1.png";
import Navbarsecond from "../context/Navbarsecond";
import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react'
import profile_homelogo12 from "../Images/HomeImages/profile_homelogo12.png"
const PricePage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const check = (index) => setSelectedIndex(index);
  return (
    <div>
      <Navbarsecond />

      <div className="home_card3_bg">
        <div className="tdi9mq0 tdi9mq4 py-2">
          <div className="price_font">
            Choose a package that fits your needs <br></br>with our{" "}
            <span className="convenient_style_price">convenient EMI</span>
          </div>
          <div className="price_bg_flex">
            <div className="price_bg py-3 my-1 mb-5">
              <div className="">
                <div className="">
                  <section id="slider" className="d-flex mb-5">
                    <input
                      type="radio"
                      name="slider"
                      id="s1"
                      checked={selectedIndex === 1}
                      onClick={() => check(1)}
                      style={{ display: "none" }}
                    />
                    <input
                      type="radio"
                      name="slider"
                      id="s2"
                      checked={selectedIndex === 0}
                      onClick={() => check(0)}
                      style={{ display: "none" }}
                    />
                    <input
                      type="radio"
                      name="slider"
                      id="s3"
                      checked={selectedIndex === 2}
                      onClick={() => check(2)}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="s1" id="slide1">
                      <div className='my-2 py-3 px-4'>
                        <Card>
                          <CardHeader style={{ minHeight: "15vh" }}>
                            <Heading size='md'>
                              <div className='my-1'><button className='Feed_price_button py-1 mb-2'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 100 meals</button></div>
                              <div className='Starter_price pb-2'>Starter</div>
                              <div className='Unleash_price'>Unleash the power of <br />automation.</div>
                            </Heading>
                          </CardHeader>
                          <CardBody style={{ minHeight: "50vh" }}>
                            <Text>
                              <div className='price_ul'>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>  Upto 1 Page Designing</span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Mobile responsive </span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Up to 2 contact Forms </span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Social Media Integration </span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>   What’s app chat Integration </span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Website Performance Report </span></li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /><span> 12 Months Free Support </span></li>
                              </div>
                            </Text>
                          </CardBody>
                          <CardFooter>
                            <div className='Pricing_hring'>Pricing involves up to the month after the launch*</div>
                          </CardFooter>
                        </Card>
                      </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                      <div className='my-2 py-3 px-4'>
                        <Card>
                          <CardHeader style={{ minHeight: "15vh" }}>
                            <Heading size='md'>
                              <div className=''><button className='Feed_price_button py-1 mb-2'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 150 meals</button></div>
                              <div className='Starter_price pb-2'>Business Plan</div>
                              <div className='Unleash_price'><img src={profile_homelogo12} alt="profile_homelogo12" style={{ width: "30%" }} />  (654+ benefited)</div>
                            </Heading>
                          </CardHeader>
                          <CardBody style={{ minHeight: "50vh" }}>
                            <Text>
                              <div className='price_ul'>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Upto 3 Pages Designing</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> 100% Responsive for all Devices</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Website Performance Report</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> SEO Friendly Pages</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />Accept all Integrations</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Full Source code</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> 12 Months Free Support</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Weekly Lead Reports</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Competitor Surveillance</li>
                              </div>
                            </Text>
                          </CardBody>
                          <CardFooter>
                            <div className='Pricing_hring'>Pricing involves up to the month after the launch*</div>
                          </CardFooter>
                        </Card>
                      </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                      <div className='my-2 py-3 px-4'>
                        <Card>
                          <CardHeader style={{ minHeight: "15vh" }}>
                            <Heading size='md'>
                              <div className='my-1'><button className='Feed_price_button py-1 mb-2'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 500 meals</button></div>
                              <div className='Starter_price pb-2'>Futuristic Web</div>
                              <div className='Unleash_price'>Unleash the power of <br />automation.</div>
                            </Heading>
                          </CardHeader>
                          <CardBody style={{ minHeight: "50vh" }}>
                            <Text>
                              <div className='price_ul'>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> All Pages Designing</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />100% Responsive for all Devices</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />Full Source Code</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />SEO Friendly Pages</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Website Performance Report</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Weekly Lead Reports</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Competitor surveillance</li>
                                <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />12 Months Free Support</li>
                              </div>
                            </Text>
                          </CardBody>
                          <CardFooter>
                            <div className='Pricing_hring'>Pricing involves up to the month after the launch*</div>
                          </CardFooter>
                        </Card>
                      </div>
                    </label>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
