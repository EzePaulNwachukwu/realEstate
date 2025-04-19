import React, { useEffect, useState } from 'react'
import Button from './Button'
import WhyusCard from './WhyusCard'
import { faArrowRight, faCloudMeatball, faHandHoldingDollar, faHeadset, } from '@fortawesome/free-solid-svg-icons'

import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons/faGaugeHigh'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Propcard from './Propcard'
import Propcardsec from './Propcardsec'
import Testimoniacard from './Testimoniacard'
import Blogscard from './Blogscard';
import Citycarosel from './Citycarosel'
import Brandscarose from './Brandscarose'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp'



function Home() {
  const [myproduct, setmyproduct] = useState([])
  const [posts, setposts] = useState([])

  function getRandomItems(array, count = 3) {
    return array.sort(() => Math.random() - 0.5).slice(0, count);
  }

  useEffect(() => {
    fetch("Propertiesss.json")
      .then((response) => response.json())
      .then((data) => {
        setmyproduct(getRandomItems(data[0].products))
        setposts(getRandomItems(data[0].blogs));
      })
      .catch((error) => console.error("Error fetching data:", error))

  }, []);

  return (
    <div className='shadow' style={{
      backgroundColor: "#F5F5F5"
    }}>
      <div className="banner  row ">
        <div className='col-lg-7 col-sm-10'>
          <p className='sub-p' style={{
            color: "#FF6600",
            fontSize: "20px",
            fontWeight: "bold",
          }}>Smart & secure real estate investment platform</p>
          <h1 className='  bannerh1'>Invest in The Future of Real Estate</h1>
          <Button text={"Get Started"} />
          <div style={{
            display: "flex",
            gap: "50px",
            marginTop: " 60px",
          }}>
            <div>
              <h2>9k+</h2>
              <p>Member</p>
            </div>
            <div>
              <h2>3k+ </h2>
              <p>Properties</p>
            </div>
            <div>
              <h2>20%</h2>
              <p>Average Profit Upto</p>
            </div>

          </div>
        </div>
        <div className='banneleft col-lg-4 col-sm-12'>
          <img style={{
            width: " 450px",
            height: " 100%",
          }} src="https://script.viserlab.com/realvest/assets/images/frontend/banner/65ec2b2b832361709976363.png" alt="banner-image" />
        </div>
      </div>


      <div style={{ backgroundColor: "#ffff" }}>
        <div style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
          paddingTop: "50px ",
          paddingBottom: "50px"
        }} >
          <div>
            <p className='sm-w-100 lg-w-25 p-1 ' style={{
              color: "#FF6600",
              backgroundColor: "#FFF0E6",

            }}>Built to help smart investors invest smarter</p>
            <h1 style={{
              paddingTop: "10px",
              paddingBottom: "30px",
            }}  >Why Invest in Real Estate?</h1>
          </div>

          <div className='row w-100' >
            <WhyusCard icon={faHandHoldingDollar} tittle={"Secure Investment"} descrption={"Rest assured with our secure investment solutions, your financial future is protected"} />
            <WhyusCard icon={faGaugeHigh} tittle={"Transparent Platform"} descrption={"Experience the confidence of a transparent platform for your peace of mind"} ></WhyusCard>
            <WhyusCard icon={faCloudMeatball} tittle={"Passive Income"} descrption={"Explore opportunities for generating passive income streams"} />
            <WhyusCard icon={faHeadset} tittle={"Support"} descrption={"Count on our dedicated support team for prompt and reliable assistance"} />

          </div>
        </div>

      </div>

      <div style={{
        width: "90%",
        margin: "auto",
        paddingTop: "100px ",
      }}>
        <p style={{
          color: "#FF6600",
          backgroundColor: "#FFF0E6",
          width: "15%",
          fontSize: "18px",
          padding: "8px"
        }} className='w-50'>Latest properties</p>
        <div style={{  justifyContent: "space-between" }} className='row mb-3' >
          <h1 className='col-lg-8 col-sm-10'>Explore Latest Properties</h1>
          <Link className='col-lg-4 col-sm-10' to={"/properties"} style={{ textDecoration: "none", color: "#ff6600", fontSize: "26px" }}>Explore <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
        </div>

        <div className='row'>
          {
            myproduct.map((sam) => (


              <Propcard image={sam.images.building} goto={`/details/${sam.id}`} title={sam.tittle} price={sam.price} bar={<>{<><div style={{ height: "10px", backgroundColor: "#FFF0E6" }} className='progress' role='progressbar' aria-label='Basic example' aria-valuenow='40' aria-valuemin='0' aria-valuemax='40'><div className='progress-bar' style={{ width: sam.progressbar, color: " #ff6600", backgroundColor: " #ff6600", height: "10px" }}></div></div></>}</>} located={sam.location} investors={sam.investors} profit={sam.profit} sschedule={sam.repeatSchedule} capitalback={sam.CapitalBack ? (<b>Yes</b>) : (<b>No</b>)} />


            ))
          }

        </div>
      </div>

      <AboutCard />
      <div className='d-lg-flex d-none'>
        <Citycarosel />
      </div>



      <div style={{
        width: "90%",
        margin: "auto",
        paddingTop: "100px ",
      }}>
        <p style={{
          color: "#FF6600",
          backgroundColor: "#FFF0E6",
          width: "20%",
          fontSize: "18px",
          padding: "8px"
        }}>Featured properties</p>
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <h1>All Properties Spotlight</h1>
          <Link to={"/properties"} style={{ textDecoration: "none", color: "#ff6600", fontSize: "26px" }}>Explore <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
        </div>

        <div style={{ paddingTop: "50px" }}>
          {
            myproduct.map((Featured) => (

              <div >
                <Propcardsec image={Featured.images.building} goto={`/details/${Featured.id}`} title={Featured.tittle} price={Featured.price} bar={<>{<><div style={{ height: "10px", backgroundColor: "#FFF0E6" }} className='progress' role='progressbar' aria-label='Basic example' aria-valuenow='40' aria-valuemin='0' aria-valuemax='40'><div className='progress-bar' style={{ width: Featured.progressbar, color: " #ff6600", backgroundColor: " #ff6600", height: "10px" }}></div></div></>}</>} located={Featured.location} investors={Featured.investors} profit={Featured.profit} sschedule={Featured.repeatSchedule} capitalback={Featured.CapitalBack ? (<b>Yes</b>) : (<b>No</b>)} />
              </div>

            ))
          }
        </div>
      </div>

      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div style={{
          width: "90%",
          margin: "auto",
          paddingTop: "100px ",
          justifyContent: "space-between",
          borderBottom: "1px solid black"
        }} className='row  '>
          <div style={{
            // width: "30%",
          }} className='col-lg-4 col-sm-10'>
            <p style={{
              color: "#FF6600",
              backgroundColor: "#FFF0E6",
              width: "50%",
              fontSize: "18px",
              padding: "8px"
            }}>Investors trust us</p>
            <h1>Trusted by Over 3000+ Investors</h1>


          </div>

          <div style={{
            //  width: "50%", padding: "20px" 
          }} className='col-lg-6 col-sm-10 mt-2'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Testimoniacard testimony={" impressed by the level of professionalism and dedication displayed here. They genuinely care about their clients&#039; success and go above and beyond to ensure optimal outcomes."} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa76d4033ca1710913236.png"} username={"  Samantha Garcia"} country={"San Francisco"} />
                </div>
                <div className="carousel-item">
                  <Testimoniacard testimony={" A reliable partner for real estate investing! They guided me through every step of the process, from property selection to closing deals. Their expertise and professionalism are unmatched"} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa762d3be721710913069.png"} username={"Mark Roberts"} country={"New York"} />
                </div>
                <div className='carousel-item' >
                  <Testimoniacard testimony={" been with this platform for years, and they consistently deliver exceptional results. Their transparent communication and strategic investment advice have earned my trust and loyalty."} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa75e5c16a21710912997.png"} username={"  Rachel Lewis"} country={"Paris"} />
                </div>
                <div className="carousel-item">
                  <Testimoniacard testimony={"Five stars all the way! This platform helped me diversify my investment portfolio with real estate, and I couldn&#039;t be happier with the results. Trustworthy, knowledgeable, and always available to address any concerns."} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa755d201401710912861.png"} username={"Emily Hughes"} country={"Australia"} />
                </div>
                <div className="carousel-item">
                  <Testimoniacard testimony={"i  tried various investment platforms, but none compare to the professionalism and expertise offered here. Their attention to detail and commitment to client satisfaction sets them apart. Highly recommend"} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa750f0d0781710912783.png"} username={" Michael Thompson"} country={"Berlin"} />
                </div>
                <div className="carousel-item">
                  <Testimoniacard testimony={"Exceptional service! The team goes above and beyond to ensure their clients&#039; success. From start to finish, they provided thorough guidance and support, making my investment journey smooth and rewarding."} profile={"https://script.viserlab.com/realvest/assets/images/frontend/testimonial/65fa74cb84b8f1710912715.png"} username={"  Sarah Johnson"} country={" Cir. Shiloh, Hawaii"} />
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className=' d-lg-flex d-none'>
          <Brandscarose />
        </div>


      </div>

      <div style={{
        width: "90%",
        margin: "auto",
        paddingTop: "100px ",
      }}>

        <p style={{
          color: "#FF6600",
          backgroundColor: "#FFF0E6",
          // width: "10%",
          fontSize: "18px",
          padding: "8px"
        }} className='w-lg-25 w-sm-25'>Our blogs</p>
        <div  className="row" style={{  justifyContent: "space-between" }} >
          <h1 className='col-lg-8 col-sm-10'>Latest News & Articles</h1>
          <Link className='col-lg-4 col-sm-7' to={"/blogs"} style={{ textDecoration: "none", color: "#ff6600", fontSize: "26px" }}>Explore <span><FontAwesomeIcon icon={faArrowRight} /></span> </Link>
        </div>

        <div style={{
          paddingTop: "50px",
          justifyContent: "space-between",
          paddingBottom: "100px"
        }} className='row'>
          {
            posts.map((post) => (

              <Blogscard image={post.images} title={post.title} p1={post.p1.p} day={post.date.day} month={post.date.month} goto={`/blogpost/${post.id}`} />
            ))
          }

        </div>


      </div>

      <div style={{ textAlign: "end" }}>
        <Link style={{ textDecoration: "none", color: "white", fontSize: "30px", backgroundColor: "#ff6600", padding: "10px", borderRadius: "50%" }}><FontAwesomeIcon icon={faAngleDoubleUp} /></Link>

      </div>

    </div>
  )
}

export default Home