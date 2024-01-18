import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Ui_ux_banners } from "../HomePage/HomePagejson";
import { Card } from "reactstrap";
import { RxHome } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const NavItems = [
  {
    title: "Website",
    url: "/viewportfolio",
    cName: "nav-links",
  },
  {
    title: "Ux UI Designs",
    url: "/designs/ui_ux_designs",
    cName: "nav-links",
  },
  {
    title: "Corporate Campaigns",
    url: "/designs/corporate_campaigns",
    cName: "nav-links",
  },
  {
    title: "Social Media & Branding",
    url: "/social_media_designs",
    cName: "nav-links",
  },
];
const Ui_ux_Menu_Page = () => {
  const { designs } = useParams();
  const find_web = Ui_ux_banners.find((p) => p.id === Number(designs));
  console.log("filter_web..", find_web.path_svg, designs);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav
        className="NavbarItems py-4"
        style={{
          background:
            "linear-gradient(224deg, #172271 9.84%, rgba(0, 0, 0, 0.00) 66.2%), #040229",
        }}
      >
        <div className="ms-5" style={{ width: "20%" }}>
          <Link to="/designs/ui_ux_designs" className="link_web1">
            {" "}
            <RxHome className="fs-2" />
          </Link>
        </div>
        <div className="Hamburger-Cross-Icons" onClick={handleClick}>
          <div className="text-white fw-bold fs-3">
            {open ? (
              <VscClose className="text-white fw-bold" />
            ) : (
              <CiMenuBurger className="text-white fw-bold" />
            )}
          </div>
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
      <div>
          <div className="" style={{ background: "#424245" }}>
            <Card className="imagemarge border-0 shadow">
              <img src={require(`../Design_Banners/${find_web.path_svg}`)} />
            </Card>
          </div>
        </div>
    </div>
  );
};
export default Ui_ux_Menu_Page;
