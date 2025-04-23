import React from 'react'
import { useState, useEffect } from "react";





function Brandscarose({  autoPlaySpeed = 3000 }) {

    const myImages = [
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e0044b651701709179979.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e004467627f1709179974.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e004417ef681709179969.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e0043ae02c01709179962.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00435e6f411709179957.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00430592e81709179952.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00429c295e1709179945.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00423d2d7e1709179939.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e0041e884771709179934.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00418d311a1709179928.png" },
        { src: "https://script.viserlab.com/realvest/assets/images/frontend/brands/65e00411b8b5a1709179921.png" }
      ];
      
      

    const [index, setIndex] = useState(0);
    const imagesPerSlide = 5;

   
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % myImages.length)
        }, autoPlaySpeed);

        return () => clearInterval(interval); 
    }, [index, autoPlaySpeed]);

  

    return (
        <div className="container mt-4 text-center" style={{paddingTop:"30px",paddingBottom:"100px"}}>
            <div className="row justify-content-center">
                {Array.from({ length: imagesPerSlide }).map((_, i) => {
                    const imgIndex = (index + i) % myImages.length; 
                    return (
                        <div key={imgIndex} className="col-md-2">
                            <div className="image-container">
                                <img src={myImages[imgIndex].src} className="img-fluid rounded image" alt={myImages[imgIndex].title} />
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}


export default Brandscarose