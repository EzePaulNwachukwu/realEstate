import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollTodown = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <div>
      <button className="scrollbtn"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        fontSize: "20px",
        backgroundColor: "#ff6600",
        color: "white",
        zIndex: 99999,            // Ensures it's above everything
        display: isVisible ? "block" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
        touchAction: "manipulation", // Helps with mobile touch feedback
        pointerEvents: "auto",    
      }}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleDoubleUp}/>
    </button>   
    <button className="scrollbtn"
      onClick={scrollTodown}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        fontSize: "20px",
        backgroundColor: "#ff6600",
        color: "white",
        zIndex: 99999,            // Ensures it's above everything
        display: isVisible ? "none" : "block",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
        touchAction: "manipulation", // Helps with mobile touch feedback
        pointerEvents: "auto",  
      }}
       aria-label="Scroll Down"
    >
      <FontAwesomeIcon icon={faAngleDoubleDown}/>
    </button> 

    </div>
   
    
  );
};

export default ScrollToTopButton;
