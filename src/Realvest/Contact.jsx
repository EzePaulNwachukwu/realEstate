import React from 'react'
import Sectionbanna from './Sectionbanna'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt'
import { Link } from 'react-router-dom'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Field, Formik, useFormik, Form } from 'formik'
import * as Yup from 'yup'

function Contact() {
  const validator = Yup.object({
    fullname: Yup.string().required('Please enter your fullname'),
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    subject: Yup.string().required('Please enter your subject'),
    message: Yup.string().required('Please enter your message'),
  })

  const formiks = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
      subject: ""
    },
    onSubmit: (values) => {
      console.log(values);

    },
    validationSchema: validator
  })
  return (
    <div className='contact' style={{ backgroundColor: "#F5F5F5" }}>
      <Sectionbanna section={"Contact"} />

      <div className='container'>

        <div className='row container   my-5' style={{justifyContent:"space-between"}}>
          <div className='box col-lg-4 col-md-6'>
            <span><FontAwesomeIcon icon={faPhoneAlt} /></span>

            <div>
              <h5>Phone</h5>
              <p>
                <Link>+44 20 1234 5678</Link>
              </p>
            </div>
          </div>
          <div className='box col-lg-4 col-md-6'>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>

            <div>
              <h5>Email</h5>
              <p>
                <Link>support@realvest.com</Link>
              </p>
            </div>
          </div>
          <div className='box col-lg-4 col-md-6'>
            <span><FontAwesomeIcon icon={faLocationDot} /></span>

            <div>
              <h5>Location</h5>
              <p>
                123 Main Street, London
              </p>
            </div>
          </div>
        </div>

        <div style={{ 
          gap:"50px"

         }} className='contactform row my-5'>
          <img  src="https://script.viserlab.com/realvest/assets/images/frontend/contact_us/65c46977ae0b91707370871.png" alt="" className='col-lg-6  d-lg-flex d-md-none col-sm-10 ' />
          <div className='col-lg-4 col-md-12 col-sm-10'>
            <h3>Get in Touch</h3>
            <p>Let's ask your questions</p>
            <div>
              {formiks.touched.fullname && formiks.errors.fullname ? <small style={{color:"red"}}>{formiks.errors.fullname}  </small> : null}
              {formiks.touched.email && formiks.errors.email ? <small style={{color:"red"}}>{formiks.errors.email}  </small> : null}
              {formiks.touched.message && formiks.errors.message ? <small style={{color:"red"}}>{formiks.errors.message}  </small> : null}
              {formiks.touched.subject && formiks.errors.subject ? <small style={{color:"red"}}>{formiks.errors.subject}  </small> : null}

              <Formik>
                <Form onSubmit={formiks.handleSubmit}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Field type="text" name="fullname"className="lnputgroup" placeholder="full name" {...formiks.getFieldProps("fullname")} />
                    <Field type="email" name="email" className="lnputgroup" placeholder="Email" {...formiks.getFieldProps("email")} />
                  </div>
                  <div className='m'>
                    <Field type="text" name="subject" className="lnputgroup" placeholder="Subject" {...formiks.getFieldProps("object")} /><br />
                    <Field type="text" name="message" className="lnputgroup" placeholder="message" {...formiks.getFieldProps("message")}/><br  />
                    <button type="submit">Submit</button>
                  </div>

                </Form>
              </Formik>
            </div>

          </div>
        </div>


        <div style={{

          paddingBottom: "100px",
          paddingTop: "100px"

        }}>
          <div>
            <h1>All Your Concern</h1>
          </div>

          <div className="accordion accordion-flush converncollaps" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className=" accordion-button concern collapsed p-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <b >What is real estate investment?</b>
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




      </div>
    </div>
  )
}

export default Contact