import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Testimoniacard({ testimony, profile, username, country }) {
  return (
    <div>
      <span style={{color: "#ff6600",fontSize: "18", backgroundColor:"#FFF0E6" ,padding:"10px", borderRadius:"50%"} }> <FontAwesomeIcon icon={faQuoteLeft}/></span>
     
      <div  style={{paddingLeft:"10px"}}>
        <p style={{
          fontSize: "18px",
          color: "#959393",
          fontFamily: "Arial",
        }} >{testimony}</p>
        <div>
          <div className='profilepicture'>
           <img style={{ borderRadius: "50%" }} src={profile} /> 
          </div>
          <div>
            <b>{username}</b>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimoniacard