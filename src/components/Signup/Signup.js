import { Formik, ErrorMessage, Field, Form } from 'formik'
import * as Yup from 'yup'
import './Signup.css'
const Signup = () => {
  // import image from '../../images/carspic/bg'

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
  }
  const validationSchema = Yup.object({
    firstname: Yup.string().min(3).required('firstname is required'),
    lastname: Yup.string().min(3).required('lastname is required'),
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
      <div className="form_Input_Container_s">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
          <Form className="center">
            <div className="padd_Login">
              <h1 className="heading">Signup Page</h1>
            </div>
            <div className="padd_Login">
              <Field className="inputField" type="text" placeholder="FirstName" name="firstname" id="fName" />
            </div>
            <div className="err">
              <ErrorMessage name="firstname" />
            </div>
            <div className="padd_Login">
              <Field className="inputField" type="text" placeholder="Last Name" name="lastname" id="lName" />
            </div>
            <div className="err">
              <ErrorMessage name="lastname" />
            </div>
            <div className="padd_Login">
              <Field className="inputField" type="email" placeholder="Email" name="email" id="email" />
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
              <button type="submit">Signup</button>
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
export default Signup
