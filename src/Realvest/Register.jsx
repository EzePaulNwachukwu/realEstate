import { Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from "yup"

function Register() {
  const validator = Yup.object({
    firstname: Yup.string().required('firstName is required').min(2, 'name must at least 2 character'),
    lastname: Yup.string().required('lastName is required').min(2, 'name must at least 2 character'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must at least 8 character'),
    confirmpassword: Yup.string().required('Confirm Password '),
    check: Yup.string().required('check me ')
  })

  const formiks = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      check: ""
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validator


  })

  return (
    <div style={{ backgroundColor: "#F5F5F5", paddingTop: "50px", paddingBottom: "100px" }}>

      <div className='formcontainer'>
        <div className='wrapform'>

          <div className='formheader'>
            <img className='formhimag' style={{ width: "250px" }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="logo" />
            <h5 >Create an Account</h5>



            <div className='socials'>
              <Link className='socials-facebook'>
                <span><img src="https://script.viserlab.com/realvest/assets/templates/basic/images/facebook.svg" alt="" />  Facebook</span>
              </Link>
              <Link className='socials-google'>
                <span><img src="https://script.viserlab.com/realvest/assets/templates/basic/images/google.svg" alt="" />  Google</span>
              </Link>
              <Link className=' socials-linkdin'>
                <span><img src="https://script.viserlab.com/realvest/assets/templates/basic/images/linkedin.svg" alt="" />Linkdin</span>
              </Link>
            </div>

            <p className='or'><span></span> OR <span></span></p>
          </div>

          <small style={{ color: "red" }}>

            
           
            
            
           
          </small>
          <div>
            <Formik>
              <Form onSubmit={formiks.handleSubmit}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <label htmlFor="firstname">First Name <span>*</span></label>
                   <small style={{color:"red"}} >{formiks.touched.firstname && formiks.errors.firstname ? <small>{formiks.errors.firstname}</small> : null}</small> 
                    <Field type="text" name="firstname" className="lnputgroup"{...formiks.getFieldProps('firstname')} />
                    
                  </div>
                  <div>
                    <label htmlFor="lastname">Last Name <span>*</span></label>
                    <small style={{ color: "red" }}>{formiks.touched.lastname && formiks.errors.lastname ? <small>{formiks.errors.lastname}</small> : null} </small>
                    <Field type="text" name="lastname" className="lnputgroup"  {...formiks.getFieldProps('lastname')} />
                  </div>

                </div>
                <label htmlFor="email">Email <span>*</span></label>
                <small style={{ color: "red" }}> {formiks.touched.email && formiks.errors.email ? <small>{formiks.errors.email}</small> : null} </small>
                <Field type="email" name="email" className="lnputgroup"  {...formiks.getFieldProps('email')} />
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <label htmlFor="password">Password <span>*</span></label>
                    <small style={{ color: "red" }}>{formiks.touched.password && formiks.errors.password ? <small>{formiks.errors.password}</small> : null} </small>
                    <Field type="password" name="password" className="lnputgroup" {...formiks.getFieldProps('password')}  />
                  </div>
                  <div>
                    <label htmlFor="confirm_password">Confirm Password <span>*</span></label>
                    <small style={{ color: "red" }}>{formiks.touched.confirmpassword && formiks.errors.confirmpassword ? <small>{formiks.errors.confirmpassword}</small> : null}</small>
                    <Field type="password" name="confirmpassword" className="lnputgroup" {...formiks.getFieldProps('confirmpassword')} />
                  </div>

                </div>
                <div style={{ display: "flex", gap: "20px" }} >
            
                  <input type="checkbox" name="check" className="check" {...formiks.getFieldProps('check')} />
                  <span className='linkgroup'>I agree to the <Link to={"/privacy-policy"}>Privacy Policy</Link>,<Link to={"/terms"}>Terms and Conditions</Link> <small style={{ color: "red" }}> {formiks.touched.check && formiks.errors.check ? <small>{formiks.errors.check}</small> : null}</small> </span>

                </div>

                <button className='buttongroup' type='submit'>Register</button>
                <p className='linkgroup'>Already have an account? <Link to={"/login"}>Login</Link></p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register