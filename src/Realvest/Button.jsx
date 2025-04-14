import React from 'react'
import { Link } from 'react-router-dom'

function Button({ To, text, Type}) {
    return (
        <div className='cardbtn'>
            <Link style={{
                padding: "10px 20px",
                backgroundColor: "#FF6600",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "20px"
            }} to={To} type={Type}>{text}</Link >
        </div>
    )
}

export default Button