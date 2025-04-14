import React, { useEffect, useState } from 'react'
import Sectionbanna from './Sectionbanna'
import Propcard from './Propcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Formik,Form, Field } from 'formik';

function Properties() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("Propertiesss.json")
      .then((response) => response.json())
      .then((data) => setproducts(data[0].products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // console.log(products)

  return (
    <div style={{backgroundColor: "#F5F5F5"}}>
      <Sectionbanna section={"Properties"} />

      <div style={{display: "flex" ,gap:"50px", flexWrap: "wrap", paddingTop: "100px", paddingBottom: "100px"}} classNameName='container'>
        <div style={{width: "30%",margin:"auto", backgroundColor:"white",padding:"20px",borderRadius:"10px",height:"700px"}}>
          <aside id="property-page-sidebar" className="property-page-sidebar ">
            {/* <button className="close-btn" type="button">
              <i className="fas fa-times"></i>
            </button> */}
            <Formik>
            <Form action="https://script.viserlab.com/realvest/properties" className="filter-form">
              <div className="filter-form__block">
                <h5 className="title">Search Property</h5>
                <div className="form-group">
                  <Field className="lookingfor" type="text" name="search"  placeholder="What are you looking for?" />
                </div>
                <div className="form-group">
                  <select name="location_id" className='select' required>
                    <option value="">Select Location</option>
                    <option value="1">
                      New York, USA</option>
                    <option value="2">
                      London, England</option>
                    <option value="3">
                      Paris, France</option>
                    <option value="4">
                      Berlin, Germany</option>
                    <option value="5">
                      Tokyo, Japan</option>
                    <option value="6">
                      San Francisco, USA</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="invest_type"data-minimum-results-for-search="-1" className='select' required>
                    <option value="">Investment Type</option>
                    <option value="1">
                      Onetime  </option>
                    <option value="2">
                      Installment </option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="profit_schedule" data-minimum-results-for-search="-1" className='select' required>
                    <option value="">Profit Schedule</option>
                    <option value="3">
                      One Time </option>
                    <option value="1">
                      Lifetime </option>
                    <option value="2">
                      Repeated Time </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="">Capital Back</label>
                  <div className="radio">
                    <Field name="capitalback" type="radio" value=""  checked />
                    <label for="capital-all"> All </label>
                  </div>
                  <div className="radio">
                    <Field  name="capitalback" type="radio" value="1"  />
                    <label for="capital-yes"> Yes </label>
                  </div>
                  <div className="radio">
                    <Field  type="radio" value="2"name="capitalback"/>
                    <label className="form-check-label" for="capital-no">No </label>
                  </div>
                </div>
                
              </div>

              <button type="submit" className="filter">
                <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Filter Now </button>
            </Form>
            </Formik>
          </aside>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "auto auto ",
          width: "55%",
          gap: "20px",
          margin: "auto",
          justifyContent:"center",
          alignItems: "center"
        }}>
          {
            products.map((product, index) => (
              <div key={product.id}>
                <Propcard image={product.images.building}  title={product.tittle} price={product.price} goto={`/details/${product.id}`} bar={<>{<><div style={{height:"10px", backgroundColor:"#FFF0E6"}} classNameName='progress' role='progressbar' aria-label='Basic example' aria-valuenow='40' aria-valuemin='0' aria-valuemax='40'><div className='progress-bar' style={{ width: product.progressbar, color: " #ff6600", backgroundColor: " #ff6600",height:"10px" }}></div></div></>}</>} located={product.location} investors={product.investors} profit={product.profit} sschedule={product.repeatSchedule} capitalback={product.CapitalBack ? (<b>Yes</b>) : (<b>No</b>)} />
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Properties