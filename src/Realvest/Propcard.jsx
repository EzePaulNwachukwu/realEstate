import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'


function Propcard({ image,goto, title, located, investors, price, profit, bar, sschedule, capitalback, }) {
    return (
        <div  className='col-lg-4 col-sm-12 mb-5'>
            <div className="card " style={{ width: "23rem", border: "none"  }}>
                <Link to={goto}>
                <img style={{ width: "100%",height:"100%", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src={image} class="Property image" alt="..." />
                
                </Link>
                <div class="card-body" style={{ padding: "15px", paddingBottom: "50px", backgroundColor: "#FFFFFF", borderRadius: "20px" }}>
                    <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        <Link > <h4 class="card-title"> {title}</h4></Link>
                        <p class="card-text"> <span style={{ color: " #ff6600" }}> <FontAwesomeIcon icon={faLocationDot} /> </span> {located}</p>
                    </div>
                    <div>
                        {bar}

                        <p>{investors}</p>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <div>
                            <b style={{ color: "#ff6600" }}>{profit}</b>
                            <p>Profit</p>
                        </div>
                        <div>
                            <b style={{ color: "#ff6600" }}>{sschedule}</b>
                            <p>Profit Schedule</p>
                        </div>
                        <div >
                            <b style={{ color: "#ff6600" }}>{capitalback}</b>
                            <p>Capital Back</p>
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px" }}>
                        <Button To={goto} text={"Details"} />
                        <h5 class="card-text">{price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propcard