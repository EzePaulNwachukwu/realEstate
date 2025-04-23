import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


function Blogscard({ image, title,goto, p1, day, month }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const words = p1.split(" ");
    const previewText = words.slice(0, 24).join(" ");

    return (
        <div  className='col-lg-4 col-md-6  col-sm-12 my-3 gap-5'>
            <div className="card">
                <Link to={goto}> <img src={image} className="card-img-top" alt="..." /></Link>

                <div className="card-body" style={{paddingTop:"50px"}}>
                    <div className="card-date text-center" style={{ backgroundColor: "#002E47",width:"20% ",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px", position:"absolute", bottom:"250px",left:"250px" }}>
                        <h4 style={{color:"#ff6600"}}>{day}</h4>
                        <span style={{color:"#ffff"}}>{month}</span>
                    </div>
                    <div >
                        <Link to={goto}> <h3>{title}</h3></Link>

                    </div>
                    <div >
                        <p style={{ color: "#8B8989", fontSize: "16px" }}>{isExpanded ? `${p1}` : `${previewText}...`}</p>
                    </div>

                    <div >
                        <Link to={goto} style={{ color: "#ff6600" }}>Read More...</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Blogscard