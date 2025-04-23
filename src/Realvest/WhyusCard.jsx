import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WhyusCard({ icon, tittle, descrption }) {
    return (
        <div className='col-lg-3 col-md-4 col-sm-8'>
            <div>
                <FontAwesomeIcon icon={icon} style={{fontSize: "100px",
                    color: "#FF6600",
                paddingBottom: "30px"

                }}/>
                <h3 style={{fontSize:"20px"}}>{tittle}</h3>
                <p>{descrption}</p>
            </div>
        </div>
    )
}

export default WhyusCard