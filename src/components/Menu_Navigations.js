import React from 'react'
import { useParams } from 'react-router-dom'
import Ui_ux_Design from './Ui_ux_Design'
import Corporate_campaigns from './Corporate_campaigns'
import Socialmedia_Branding from '../Socialmedia_Branding'
import Navbarsecond from '../context/Navbarsecond'

const Menu_Navigations = () => {
    const { id,designs } = useParams()
    console.log(id)
    return (
        <>
            <Navbarsecond />
            {id === 'ui_ux_designs' && <><Ui_ux_Design /></>}
            {id === 'corporate_campaigns' && <><Corporate_campaigns /></>}
            {id === 'social_media' && <><Socialmedia_Branding /></>}
            
        </>
    )
}

export default Menu_Navigations