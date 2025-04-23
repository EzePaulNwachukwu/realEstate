import React, { useEffect, useState } from 'react'
import Sectionbanna from './Sectionbanna'
import Propcard from './Propcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

function Properties() {
  const [filterprop, setFilterprop] = useState([]);
  const [products, setproducts] = useState([])
  const validator = Yup.object().shape({
    tittle: Yup.string("property name does not match any"),
    location: Yup.string("property location does not match any").required("chose a location"),
    InvestmentType: Yup.string("property investment type does not match any").required("select an investment type"),
    repeatSchedule: Yup.string("property repeat schedule does not match any").required("chose repeat schedule"),
    capitalback: Yup.string("property capital back does not match any").required("do you want a capital back?"),

  })

  const formiks = useFormik({
    initialValues: {
      tittle: "",
      location: "",
      InvestmentType: "",
      repeatSchedule: "",
      capitalback: ""
    },
    onSubmit: values => {
      // setFilterprop(values)
      console.log(values)
    },
    validationSchema: validator

  })
  // console.log(filterprop)

  useEffect(() => {
    fetch("Propertiesss.json")
      .then((response) => response.json())
      .then((data) => setproducts(data[0].products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // console.log(products)

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Sectionbanna section={"Properties"} />


      <button style={{width:"50px", position:"relative",left:"325px",top:"20px"}}  className="btn filter d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></button>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Search Property</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div >
            <aside id="property-page-sidebar" className="property-page-sidebar " style={{ width: "100%" }}>

              <Formik>
                <Form className="filter-form" onSubmit={formiks.handleSubmit}>
                  <div className="filter-form__block">
                    <div className="form-group">
                      <Field className="lookingfor" type="text" name="tittle" placeholder="What are you looking for?" {...formiks.getFieldProps("tittle")} />
                      <small>{formiks.touched.tittle && formiks.errors.tittle ? <small>{formiks.errors.tittle}</small> : null}</small>
                    </div>
                    <div className="form-group">
                      <Field as="select" name="location" className='select '  {...formiks.getFieldProps("location")}>
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
                      </Field>
                      <small>{formiks.touched.location && formiks.errors.location ? <small>{formiks.errors.location}</small> : null}</small>
                    </div>
                    <div className="form-group">
                      <Field as="select" name="InvestmentType" data-minimum-results-for-search="-1" className='select' {...formiks.getFieldProps("InvestmentType")}>
                        <option value="">Investment Type</option>
                        <option value="1">
                          Onetime  </option>
                        <option value="2">
                          Installment </option>
                      </Field>
                      <small>{formiks.touched.InvestmentType && formiks.errors.InvestmentType ? <small>{formiks.errors.InvestmentType}</small> : null}</small>
                    </div>
                    <div className="form-group">
                      <Field as="select" name="repeatSchedule" data-minimum-results-for-search="-1" className='select' {...formiks.getFieldProps("repeatSchedule")}>
                        <option value="">Profit Schedule</option>
                        <option value="3">
                          One Time </option>
                        <option value="1">
                          Lifetime </option>
                        <option value="2">
                          Repeated Time </option>
                      </Field>
                      <small>{formiks.touched.repeatSchedule && formiks.errors.repeatSchedule ? <small>{formiks.errors.repeatSchedule}</small> : null}</small>

                    </div>
                    <div className="form-group">
                      <label >Capital Back</label>

                      <div className="radio">
                        <input name="capitalback" type="radio" value="true" {...formiks.getFieldProps("capitalback")} />
                        <label > Yes </label>
                      </div>
                      <div className="radio">
                        <input type="radio" value="false" name="capitalback" {...formiks.getFieldProps("capitalback")} />
                        <label className="form-check-label">No </label>
                      </div>
                      <small>{formiks.touched.capitalback && formiks.errors.capitalback ? <small>{formiks.errors.capitalback}</small> : null}</small>

                    </div>

                  </div>

                  <button type="submit" className="filter">
                    <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Filter Now </button>
                </Form>
              </Formik>
            </aside>
          </div>

        </div>
      </div>


      <div className='row container-xxl my-5'>
        <div className='col-lg-4 d-lg-flex d-md-none d-sm-none col-sm-10 d-none' style={{ backgroundColor: "white", padding: "20px", height: "600px", marginLeft: "20px" }} >
          <aside id="property-page-sidebar" className="property-page-sidebar " style={{ width: "100%" }}>

            <Formik>
              <Form className="filter-form" onSubmit={formiks.handleSubmit}>
                <div className="filter-form__block">
                  <h5 className="title">Search Property</h5>
                  <div className="form-group">
                    <Field className="lookingfor" type="text" name="tittle" placeholder="What are you looking for?" {...formiks.getFieldProps("tittle")} />
                    <small>{formiks.touched.tittle && formiks.errors.tittle ? <small>{formiks.errors.tittle}</small> : null}</small>
                  </div>
                  <div className="form-group">
                    <Field as="select" name="location" className='select '  {...formiks.getFieldProps("location")}>
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
                    </Field>
                    <small>{formiks.touched.location && formiks.errors.location ? <small>{formiks.errors.location}</small> : null}</small>
                  </div>
                  <div className="form-group">
                    <Field as="select" name="InvestmentType" data-minimum-results-for-search="-1" className='select' {...formiks.getFieldProps("InvestmentType")}>
                      <option value="">Investment Type</option>
                      <option value="1">
                        Onetime  </option>
                      <option value="2">
                        Installment </option>
                    </Field>
                    <small>{formiks.touched.InvestmentType && formiks.errors.InvestmentType ? <small>{formiks.errors.InvestmentType}</small> : null}</small>
                  </div>
                  <div className="form-group">
                    <Field as="select" name="repeatSchedule" data-minimum-results-for-search="-1" className='select' {...formiks.getFieldProps("repeatSchedule")}>
                      <option value="">Profit Schedule</option>
                      <option value="3">
                        One Time </option>
                      <option value="1">
                        Lifetime </option>
                      <option value="2">
                        Repeated Time </option>
                    </Field>
                    <small>{formiks.touched.repeatSchedule && formiks.errors.repeatSchedule ? <small>{formiks.errors.repeatSchedule}</small> : null}</small>

                  </div>
                  <div className="form-group">
                    <label >Capital Back</label>

                    <div className="radio">
                      <input name="capitalback" type="radio" value="true" {...formiks.getFieldProps("capitalback")} />
                      <label > Yes </label>
                    </div>
                    <div className="radio">
                      <input type="radio" value="false" name="capitalback" {...formiks.getFieldProps("capitalback")} />
                      <label className="form-check-label">No </label>
                    </div>
                    <small>{formiks.touched.capitalback && formiks.errors.capitalback ? <small>{formiks.errors.capitalback}</small> : null}</small>

                  </div>

                </div>

                <button type="submit" className="filter">
                  <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Filter Now </button>
              </Form>
            </Formik>
          </aside>
        </div>

        <div className='row col-lg-7 col-md-10 col-sm-10 ' style={{ justifyContent: "space-between", alignItems: "center" }} >
          {
            products.map((product, index) => (
              <div key={product.id} className='col-lg-5 col-md-5 col-sm-10 '>
                <Propcard image={product.images.building} title={product.tittle} price={product.price} goto={`/details/${product.id}`} bar={<>{<><div style={{ height: "10px", backgroundColor: "#FFF0E6" }} classNameName='progress' role='progressbar' aria-label='Basic example' aria-valuenow='40' aria-valuemin='0' aria-valuemax='40'><div className='progress-bar' style={{ width: product.progressbar, color: " #ff6600", backgroundColor: " #ff6600", height: "10px" }}></div></div></>}</>} located={product.location} investors={product.investors} profit={product.profit} sschedule={product.repeatSchedule} capitalback={product.CapitalBack ? (<b>Yes</b>) : (<b>No</b>)} />
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Properties