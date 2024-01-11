import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const Socialmedia_Branding = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  return (
    <div>
    {id === 'social_media' && <div style={{height:'50vh'}}>heyyyy</div>}
    </div>
  )
}
export default Socialmedia_Branding
