import { Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

function Login() {
  const validator = Yup.object({

    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must at least 8 character'),
    remember: Yup.string().required('remember me ')
  })

  const formiks = useFormik({
    initialValues: {

      email: "",
      password: "",
      remember: ""
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validator


  })

  return (
    <div style={{ backgroundColor: "#F5F5F5", paddingTop: "50px", paddingBottom: "100px" }}>
      <div className='formcontainer'>
        <div className='formheader'>
          <img className='formhimag' style={{ width: "250px" }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="logo" />
          <h5 >Account Login</h5>
          <div className='socials'>
            <Link className='socials-facebook'>
              <span><img src="https://script.viserlab.com/realvest/assets/templates/basic/images/facebook.svg" alt="" />  Facebook</span>
            </Link>
            <Link className='socials-google'>
              <span><img src="https://script.viserlab.com/realvest/assets/templates/basic/images/google.svg" alt="" />  Googlre</span>
            </Link>
            <Link className=' socials-linkdin'>
              <span> <img src="https://script.viserlab.com/realvest/assets/templates/basic/images/linkedin.svg" alt="" />  Linkdin</span>
            </Link>
          </div>

          <p className='or'><span></span> OR <span></span></p>
        </div>


        <div>
          <Formik>
            <Form onSubmit={formiks.handleSubmit}>
              <div>
                <label htmlFor="email"> Email <span>*</span></label>
                <small style={{ color: "red" }}> {formiks.touched.email && formiks.errors.email ? <small>{formiks.errors.email}</small> : null} </small>

                <Field type="email"  name="email" className="lnputgroup" {...formiks.getFieldProps('email')} />
              </div>
              <div>
                <label htmlFor="password">Password <span>*</span></label>
                <small style={{ color: "red" }}>{formiks.touched.password && formiks.errors.password ? <small>{formiks.errors.password}</small> : null}</small>

                <Field type="password" id="password" name="password" className="lnputgroup" {...formiks.getFieldProps('password')} />
              </div>
              <div>
                <input type="checkbox"  name="remember" {...formiks.getFieldProps('remember')}/>
                <label htmlFor="remember">Remember me   <small style={{ color: "red" }}> {formiks.touched.remember && formiks.errors.remember ? <small>{formiks.errors.remember}</small> : null}</small> </label>
              </div>
              <button className='buttongroup' type='submit'>Login</button>
              <p className='linkgroup'>Don't have an account? <Link to={"/register"}>Register</Link> </p>

            </Form>
          </Formik>

        </div>
      </div>

    </div>
  )
}

export default Login