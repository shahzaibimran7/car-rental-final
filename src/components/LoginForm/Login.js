import { Formik, ErrorMessage, Field, Form } from 'formik'
import * as Yup from 'yup'
// import image from '../../images/carspic/bg'
import './Login.css'
const Login = () => {
  const initialValues = {
    email: '',
    pass: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is Required'),
    pass: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{2,}$/, 'Password must contain one upper-case letter and a number')
      .required('Password is Required'),
  })
  const onsubmit = values => {
    // Handle form submission here, e.g., send data to the server
    console.log(values)
  }
  return (
    <div className="login_Root">
      <div className="form_Input_Container">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
          <Form className="center">
            <div className="padd_Login">
              <h1 className="heading">Login Page</h1>
            </div>
            <div className="padd_Login">
              <Field className="inputField" type="Email" placeholder="Email" name="email" id="email" />
            </div>
            <div className="err">
              <ErrorMessage name="email" />
            </div>
            <div className="padd_Login">
              <Field className="inputField" type="password" placeholder="Enter your password" name="pass" id="pass" />
            </div>
            <div className="err">
              <ErrorMessage name="pass" />
            </div>
            <div className="login_Button padd_Login">
              <button type="submit">Login</button>
            </div>
            <div className="login_Button padd_Login">
              {/* <button>
                <Link to={'/Signup_Page'}>Goto Signup</Link>
              </button> */}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export default Login
