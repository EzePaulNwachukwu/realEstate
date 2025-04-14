import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Investorscard({image,investor,location,propertyowned,yearjoined}) {
    return (
        <div>

            <div className="property-details-investor">
                <div className="property-details-investor__wrapper" style={{display:"flex", gap:"20px"}}>
                    <div className="property-details-investor__thumb">
                        <img src={image}
                            alt="profile-image"style={{width:"100px", borderRadius:"10px"}} />
                    </div>
                    <div className="property-details-investor__content">
                        <h6 className="name">{investor}</h6>
                        <span className="designation">
                            {yearjoined}
                        </span>
                        <div className="meta-list">


                            <p className="meta-list__item">
                                <span className="icon" style={{marginRight:"10px",color:"#ff6600"}}><FontAwesomeIcon icon={faBuilding}/></span>
                                <span className="text" style={{marginRight:"10px"}}>{propertyowned}</span>
                                <span className="icon" style={{marginRight:"10px",color:"#ff6600"}}><FontAwesomeIcon icon={faLocationDot}/></span>
                                <span className="text" style={{marginRight:"10px"}}>{location}</span>
                            </p>
                            <p className="meta-list__item">
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
