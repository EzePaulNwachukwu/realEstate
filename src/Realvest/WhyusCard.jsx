import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WhyusCard({ icon, tittle, descrption }) {
    return (
        <div>
            <div style={{
                width: "200px",
            }}>
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