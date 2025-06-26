import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";



function Citycarosel() {
    const myImages = [
        { src: "https://script.viserlab.com/realvest/assets/images/location/65ebff15c4cd41709965077.png", title: "New York, USA", description: "3  Properties" },
        { src: "https://script.viserlab.com/realvest/assets/images/location/65dd6482c72881709008002.png", title: "London, England", description: "2 Properties" },
        { src: "https://script.viserlab.com/realvest/assets/images/location/65dd6475edc2e1709007989.png", title: "Paris, France", description: "2 Properties" },
        { src: "https://script.viserlab.com/realvest/assets/images/location/65dd64682c4ea1709007976.png", title: "Berlin, Germany", description: "2 Properties" },
        { src: "https://script.viserlab.com/realvest/assets/images/location/65dd645794bc81709007959.png", title: "Tokyo, Japan", description: "1  Property" },
        { src: "https://script.viserlab.com/realvest/assets/images/location/65ebfce1b41bd1709964513.png", title: "San Francisco, USA", description: "1  Property" }
    ];
    const [index, setIndex] = useState(0);
    const imagesPerSlide = 4

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % myImages.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);
    };

    // Auto-slide every 3
    //  seconds
    useEffect(() => {


        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % myImages.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [myImages.length]);

    return (

        <div className="container  text-center citycarosel">
            <div style={{
                width: "100%",
                margin: "auto",
            }}>
                <p className="w-25" style={{
                    color: "#FF6600",
                    fontSize: "18px",
                    padding: "8px"
                } } >Latest properties</p >
                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <h1>Explore By Cities</h1>
                    <div>
                        <button className="btn  me-2" onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft} /></button>

                        <button className="btn  ms-2" style={{}} onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight} /></button>

                    </div>

                </div>
                <div style={{ paddingTop: "50px" }}>
                    <div className=" row ">
                        {Array.from({ length: imagesPerSlide }).map((_, i) => {
                            // Ensure seamless looping by wrapping around
                            const imgIndex = (index + i) % myImages.length;
                            return (
                                <div key={imgIndex} className="col-lg-3 col-md-3 col-sm-7 m-auto h-sm-50">
                                    <div className="image-container " >
                                        <img src={myImages[imgIndex].src} className="img-fluid rounded image" alt={myImages[imgIndex].title} />
                                        <div className="overlay">
                                            <Link style={{ textDecoration: "none", color: "#ff6600" }}><h4>{myImages[imgIndex].title}</h4></Link>
                                            <p>{myImages[imgIndex].description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Citycarosel;
