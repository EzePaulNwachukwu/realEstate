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
            <Formik>
              <Form className="filter-form" onSubmit={formiks.handleSubmit}>
                <div className="filter-form__block">

                  <div className="form-group mb-3">
                    <Field className="form-control" type="text" name="tittle" placeholder="What are you looking for?" {...formiks.getFieldProps("tittle")} />
                    {formiks.touched.tittle && formiks.errors.tittle && (
                      <small className="text-danger">{formiks.errors.tittle}</small>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="location" className="form-select" {...formiks.getFieldProps("location")}>
                      <option value="">Select Location</option>
                      <option value="1">New York, USA</option>
                      <option value="2">London, England</option>
                      <option value="3">Paris, France</option>
                      <option value="4">Berlin, Germany</option>
                      <option value="5">Tokyo, Japan</option>
                      <option value="6">San Francisco, USA</option>
                    </Field>
                    {formiks.touched.location && formiks.errors.location && (
                      <small className="text-danger">{formiks.errors.location}</small>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="InvestmentType" className="form-select" {...formiks.getFieldProps("InvestmentType")}>
                      <option value="">Investment Type</option>
                      <option value="1">Onetime</option>
                      <option value="2">Installment</option>
                    </Field>
                    {formiks.touched.InvestmentType && formiks.errors.InvestmentType && (
                      <small className="text-danger">{formiks.errors.InvestmentType}</small>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <Field as="select" name="repeatSchedule" className="form-select" {...formiks.getFieldProps("repeatSchedule")}>
                      <option value="">Profit Schedule</option>
                      <option value="3">One Time</option>
                      <option value="1">Lifetime</option>
                      <option value="2">Repeated Time</option>
                    </Field>
                    {formiks.touched.repeatSchedule && formiks.errors.repeatSchedule && (
                      <small className="text-danger">{formiks.errors.repeatSchedule}</small>
                    )}
                  </div>

                  <div className="form-group mb-4">
                    <label className="d-block mb-2">Capital Back</label>
                    <div className="form-check form-check-inline">
                      <Field className="form-check-input" name="capitalback" type="radio" value="true" />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field className="form-check-input" name="capitalback" type="radio" value="false" />
                      <label className="form-check-label">No</label>
                    </div>
                    {formiks.touched.capitalback && formiks.errors.capitalback && (
                      <div><small className="text-danger">{formiks.errors.capitalback}</small></div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-warning w-100">
                    <FontAwesomeIcon icon={faFilter} /> Filter Now
                  </button>
                </div>
              </Form>
            </Formik>
          </aside>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid my-5">
        <div className="row justify-content-between">

          {/* Large Screen Sidebar Filter */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="bg-white p-4 shadow-sm" style={{ minHeight: "600px", backgroundColor: "white" }}>
              <h5 className="mb-4">Search Property</h5>
              <aside className="property-page-sidebar w-100">
                <Formik>
                  <Form className="filter-form" onSubmit={formiks.handleSubmit}>

                    <div className="filter-form__block">

                      <div className="form-group mb-3">
                        <Field className="form-control" type="text" name="tittle" placeholder="What are you looking for?" {...formiks.getFieldProps("tittle")} />
                        {formiks.touched.tittle && formiks.errors.tittle && (
                          <small className="text-danger">{formiks.errors.tittle}</small>
                        )}
                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="location" className="form-select" {...formiks.getFieldProps("location")}>
                          <option value="">Select Location</option>
                          <option value="1">New York, USA</option>
                          <option value="2">London, England</option>
                          <option value="3">Paris, France</option>
                          <option value="4">Berlin, Germany</option>
                          <option value="5">Tokyo, Japan</option>
                          <option value="6">San Francisco, USA</option>
                        </Field>
                        {formiks.touched.location && formiks.errors.location && (
                          <small className="text-danger">{formiks.errors.location}</small>
                        )}
                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="InvestmentType" className="form-select" {...formiks.getFieldProps("InvestmentType")}>
                          <option value="">Investment Type</option>
                          <option value="1">Onetime</option>
                          <option value="2">Installment</option>
                        </Field>
                        {formiks.touched.InvestmentType && formiks.errors.InvestmentType && (
                          <small className="text-danger">{formiks.errors.InvestmentType}</small>
                        )}
                      </div>

                      <div className="form-group mb-3">
                        <Field as="select" name="repeatSchedule" className="form-select" {...formiks.getFieldProps("repeatSchedule")}>
                          <option value="">Profit Schedule</option>
                          <option value="3">One Time</option>
                          <option value="1">Lifetime</option>
                          <option value="2">Repeated Time</option>
                        </Field>
                        {formiks.touched.repeatSchedule && formiks.errors.repeatSchedule && (
                          <small className="text-danger">{formiks.errors.repeatSchedule}</small>
                        )}
                      </div>

                      <div className="form-group mb-4">
                        <label className="d-block mb-2">Capital Back</label>
                        <div className="form-check form-check-inline">
                          <Field className="form-check-input" name="capitalback" type="radio" value="true" />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field className="form-check-input" name="capitalback" type="radio" value="false" />
                          <label className="form-check-label">No</label>
                        </div>
                        {formiks.touched.capitalback && formiks.errors.capitalback && (
                          <div><small className="text-danger">{formiks.errors.capitalback}</small></div>
                        )}
                      </div>

                      <button type="submit" className="btn btn-warning w-100">
                        <FontAwesomeIcon icon={faFilter} /> Filter Now
                      </button>
                    </div>

                  </Form>
                </Formik>
              </aside>
            </div>
          </div>

          {/* Property Cards Section */}
          <div className="col-lg-8">
            <div className="row g-4">
              {products.map((product, index) => (
                <div key={product.id} className="col-12 col-md-6">
                  <Propcard
                    image={product.images.building}
                    title={product.tittle}
                    price={product.price}
                    goto={`/details/${product.id}`}
                    located={product.location}
                    investors={product.investors}
                    profit={product.profit}
                    sschedule={product.repeatSchedule}
                    capitalback={product.CapitalBack ? <b>Yes</b> : <b>No</b>}
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
          </div>
        </div>
      </div>

    </div>
  )
}

export default Properties