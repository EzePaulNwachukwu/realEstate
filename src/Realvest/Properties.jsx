import React, { useEffect, useState } from 'react'
import Sectionbanna from './Sectionbanna'
import Propcard from './Propcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Properties() {
  const [products, setproducts] = useState([])
  const [loadpage, setloadpage] = useState(false)
  const [allproducts, setallproducts] = useState();

  useEffect(() => {
    fetch("Propertiesss.json")
      .then((response) => response.json())
      .then((data) => setproducts(data[0].products))
      .then((data) => setallproducts(data[0].products))
      .catch((error) => console.error("Error fetching data:", error));

    setInterval(() => {
      setloadpage(true)
    }, 3000);

  }, []);

  const initialValues = {
    tittle: "",
    location: "",
    InvestmentType: "",
    repeatSchedule: "",
    capitalback: ""
  }

  const validator = Yup.object().shape({
    tittle: Yup.string("property name does not match any"),
    location: Yup.string("property location does not match any"),
    InvestmentType: Yup.string("property investment type does not match any"),
    repeatSchedule: Yup.string("property repeat schedule does not match any"),
    capitalback: Yup.string("property capital back does not match any"),

  })

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      const filtered = products?.filter((product, b) => {
        return product.location === values.location || product.InvestmentType === values.InvestmentType || product.tittle === values.tittle || product.repeatSchedule === values.repeatSchedule || product.CapitalBack === values.capitalback

      })
      setproducts(filtered)

    }  catch (error) {
      console.error(error)

    }finally {
    
      setSubmitting(false)
   

    }

  }




  // console.log(products)

  return (
    <div style={{ backgroundColor: "#F5F5F5", paddingTop: "80px " }}>
      <Sectionbanna section={"Properties"} />
      {/* Filter Button (Mobile Only) */}
      <div className="d-lg-none d-flex justify-content-end px-3 pt-2">
        <button
          className="btn filter"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>

      {/* Offcanvas Filter (for small screens) */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Search Property</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Filter Form */}
          <aside className="property-page-sidebar w-100">
            <Formik
              initialValues={initialValues}
              validationSchema={validator}
              onSubmit={handleSubmit}

            >

              {({ isSubmitting }) => (<Form className="filter-form" >
                <div className="filter-form__block">

                  <div className="form-group mb-3">
                    <Field className="form-control" type="text" name="tittle" placeholder="By Title" />
                    <ErrorMessage name="tittle" component="div" className="text-danger small" />

                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="location" className="form-select" >
                      <option value="">By Select Location</option>
                      <option value="New York, USA">New York, USA</option>
                      <option value=" London,England"> London,England</option>
                      <option value="Paris, France">Paris, France</option>
                      <option value="Berlin, Germany">Berlin, Germany</option>
                      <option value="Tokyo japan">Tokyo japan </option>
                      <option value="San Francisco, USA"> San Francisco, USA</option>
                    </Field>
                    <ErrorMessage name="location" component="div" className="text-danger small" />

                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="InvestmentType" className="form-select" >
                      <option value="">By Investment Type</option>
                      <option value="Onetime">One time</option>
                      <option value="Installment">Installment</option>
                    </Field>
                    <ErrorMessage name="InvestmentType" component="div" className="text-danger small" />

                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="repeatSchedule" className="form-select" >
                      <option value="">By Profit Schedule</option>
                      <option value="Onetime">One Time</option>
                      <option value="Lifetime (Monthly)">Lifetime (Monthly)</option>
                      <option value="Repeat(Monthly) ">Repeat(Monthly) </option>

                      <ErrorMessage name="repeatSchedule" component="div" className="text-danger small" />

                    </Field>

                  </div>

                  <div className="form-group mb-4">
                    <label className="d-block mb-2">By Capital Back</label>
                    <div className="form-check form-check-inline">
                      <Field className="form-check-input" name="capitalback" type="radio" value="true" />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field className="form-check-input" name="capitalback" type="radio" value="false" />
                      <label className="form-check-label">No</label>
                    </div>


                  </div>

                  <button type="submit" className="btn btn-warning w-100" disabled={isSubmitting}>
                    <FontAwesomeIcon icon={faFilter} /> Filter Now
                  </button>
                </div>
              </Form>)}


            </Formik>
          </aside>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid my-5">
        <div className="row justify-content-between">

          {/* Large Screen Sidebar Filter */}
          <div div className="col-lg-4 d-none d-lg-block">
            <div className="bg-white p-4 shadow-sm" style={{ minHeight: "600px", backgroundColor: "white" }}>
              <h5 className="mb-4">Search Property</h5>
              <aside className="property-page-sidebar w-100">
                <Formik initialValues={initialValues}
                  validationSchema={validator}
                  onSubmit={handleSubmit}>

                  {({ isSubmitting, resetForm}) => (<Form className="filter-form">

                    <div className="filter-form__block">

                      <div className="form-group mb-3">
                        <Field className="form-control" type="text" name="tittle" placeholder="By Title" />
                        <ErrorMessage name="tittle" component="div" className="text-danger small" />

                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="location" className="form-select"  >
                          <option value=""> By Select Location</option>
                          <option value="New York, USA">New York, USA</option>
                          <option value="London, England">London, England</option>
                          <option value="Paris, France">Paris, France</option>
                          <option value="Berlin, Germany">Berlin, Germany</option>
                          <option value="Tokyo japan">Tokyo japan </option>
                          <option value="San Francisco, USA"> San Francisco, USA</option>
                        </Field>
                        <ErrorMessage name="location" component="div" className="text-danger small" />

                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="InvestmentType" className="form-select" >
                          <option value="">By Investment Type</option>
                          <option value="Onetime">One time</option>
                          <option value="Installment">Installment</option>
                        </Field>
                        <ErrorMessage name="InvestmentType" component="div" className="text-danger small" />

                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="repeatSchedule" className="form-select" >
                          <option value="">By Profit Schedule</option>
                          <option value="Onetime">One Time</option>
                          <option value="Lifetime (Monthly)">Lifetime (Monthly)</option>
                          <option value="Repeat(Monthly) ">Repeat(Monthly) </option>
                        </Field>
                        <ErrorMessage name="repeatSchedule" component="div" className="text-danger small" />


                      </div>

                      <div className="form-group mb-4">
                        <label className="d-block mb-2"> By Capital Back</label>
                        <div className="form-check form-check-inline">
                          <Field className="form-check-input" name="capitalback" type="radio" value="true" />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field className="form-check-input" name="capitalback" type="radio" value="false" />
                          <label className="form-check-label">No</label>

                        </div>

                        <ErrorMessage name="capitalback" component="div" className="text-danger small" />


                      </div>


                      <button type="submit" className="btn btn-warning w-100" disabled={isSubmitting}  >
                        <FontAwesomeIcon icon={faFilter} /> Filter Now
                      </button>
      

                    </div>

                  </Form>)}

                </Formik>
              </aside>
            </div>
          </div>

          {/* Property Cards Section */}



          <div className="col-lg-8">

            {loadpage ? (


              <div className="row g-4">
                {products?.map((product, index) => (
                  <div key={product.id} className="col-12 col-md-6">
                    <Propcard
                      image={product.images.building}
                      title={product.tittle}
                      price={"₦" + product.price.toLocaleString()}
                      goto={`/details/${product.id}`}
                      located={product.location}
                      investors={product.investors}
                      profit={product.profit}
                      sschedule={product.repeatSchedule}
                      capitalback={product.CapitalBack === "true" ? <b>Yes</b> : <b>No</b>}
                      bar={
                        <div className="progress" style={{ height: "10px", backgroundColor: "#FFF0E6" }}>
                          <div
                            className="progress-bar"
                            style={{
                              width: product.progressbar,
                              backgroundColor: "#ff6600",
                            }}
                          ></div>
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>

            ) : (<div className="d-flex justify-content-center align-items-center vh-100  text-center">
              {/* Spinner Animation */}
              <div className="d-flex justify-content-center gap-4 mb-4">
                <div
                  className="spinner-border"
                  style={{ width: "4rem", height: "4rem", color: "#E65C2F" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-grow"
                  style={{ width: "4rem", height: "4rem", color: "#E65C2F" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

              {/* Optional Loading Text */}
              <h5 className="text-white">Please wait... </h5>
            </div>)}
          </div>




        </div>
      </div>

    </div >
  )
}

export default Properties