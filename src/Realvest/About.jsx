import React from 'react'
import AboutCard from './AboutCard'
import Sectionbanna from './Sectionbanna'

export default function About() {
  return (
    <div style={{backgroundColor:"#F5F5F5", paddingTop:"80px"}}>
      <Sectionbanna section={"About"} />

      <AboutCard />

      <section>
        <div style={{
          width: "90%",
          margin: "auto",
          paddingBottom: "100px",
          marginTop: "50px"
          
        }}>
          <div>
            <h1>All Your Concern</h1>
          </div>

          <div className="accordion accordion-flush converncollaps" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header"> 
                <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <b>What is real estate investment?</b>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>Real estate investment involves purchasing, 
                    owning, managing, renting, or selling properties for the purpose of generating income or profit.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <b>
                  What types of real estate investments are available?</b>

                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>
                  Common types of real estate investments include residential properties (such as single-family homes, condos, and apartments), commercial properties 
                  (such as office buildings, retail spaces, and warehouses), industrial properties, and vacant land.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false"
                  aria-controls="flush-collapseThree">
                  <b>How do I get started with real estate investment?</b>

                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>
                  To get started, you can educate yourself about the market, develop a clear investment strategy, conduct thorough research, build a network of professionals (such as real estate agents, lenders, and contractors),
                   and consider working with experienced mentors or advisors.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false"
                  aria-controls="flush-collapseFour">
                  <b>How much money do I need to invest in real estate?</b>


                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>The amount of money needed depends on various factors, including the type of property, its location, market conditions, financing options, and your investment goals. You can invest directly or indirectly through real estate investment trusts
                     (REITs) or crowdfunding platforms, which may require lower initial investments.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false"
                  aria-controls="flush-collapseFive">
                  <b>How can i maximize returns in real estate investments?</b>


                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <p>Strategies for maximizing returns include conducting thorough due diligence,
                    investing in high-demand areas, maintaining properties effectively, optimizing rental
                    income,
                    minimizing expenses, leveraging tax advantages, and staying informed about market
                    trends.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>



    </div>
  )
}
