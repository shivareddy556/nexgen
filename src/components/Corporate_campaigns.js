import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { websit } from '../HomePage/HomePagejson'
const NavItems = [
  {
    title: "Mobile App",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Dashboard",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "UX Research",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Social Media",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Advertisement",
    url: "/viewportfolio",
    cName: "nav-links"
  },
];
const Corporate_campaigns = () => {
  const { corporate } = useParams()
  // const filter_web = websit.filter(p => p.id == id)
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
    {corporate === 'corporate' && <div style={{height:'50vh'}}>heyyyy</div>}

    </div>
  )
}
export default Corporate_campaigns
