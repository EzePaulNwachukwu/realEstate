import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Propcardsec({ image, goto, title, located, investors, price, profit, bar, sschedule, capitalback, }) {
    return (
        <div>
            <div style={{
                border: "none", justifyContent: "space-between", paddingBottom: "50px"
            }} className='row my-2'>

                <Link to={goto}  className='col-lg-6 col-sm-12 imagecover' >
                    <img
                      src={image} class="Property image  propimage" alt="..." />
                </Link>

                <div class="card-body col-lg-6 col-sm-10" style={{
                    // padding: "15px", paddingBottom: "50px", backgroundColor: "#FFFFFF", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"
                }}>
                    <div style={{ paddingTop: "10px", paddingBottom: "15px" }}>
                        <Link> <h4 class="card-title"> {title}</h4></Link>
                        <p class="card-text"> <span style={{ color: " #ff6600" }}> <FontAwesomeIcon icon={faLocationDot} /> </span> {located}</p>
                    </div>
                    <div>
                        {bar}
                        <p>{investors}</p>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "15px" }}>
                        <div>
                            <b style={{ color: "#ff6600" }}>{profit}</b>
                            <p>Profit</p>                        </div>
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
                        <Button text={"Details"} To={goto} />
                        <h5 class="card-text">{price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propcardsec