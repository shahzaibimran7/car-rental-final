import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import { SignUpUser } from "../../services/admin-api-services";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  // import image from '../../images/carspic/bg'

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    pass: "",
  };
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
  const validationSchema = Yup.object({
    firstname: Yup.string().min(3).required("firstname is required"),
    lastname: Yup.string().min(3).required("lastname is required"),
    email: Yup.string().email().required("Email is Required"),
    pass: Yup.string()
      .matches(
        passwordRegex,
        "Password must contain one upper-case letter and a number"
      )
      .required("Password is Required"),
  });
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const userData = {
      email: values.email,
      password: values.pass,
      firstName: values.firstname,
      lastName: values.lastname,
      role: "USER",
    };

    try {
      const response = await SignUpUser(userData);

      if (response.status === 200) {
        console.log(response);
        navigate("/login");
        window.location.reload();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="login_Root">
      <div className="form_Input_Container_s">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="center">
            <div className="padd_Login">
              <h1 className="heading">Create Admin</h1>
            </div>
            <div className="padd_Login">
              <Field
                className="inputField"
                type="text"
                placeholder="FirstName"
                name="firstname"
                id="fName"
              />
            </div>
            <div className="err">
              <ErrorMessage name="firstname" />
            </div>
            <div className="padd_Login">
              <Field
                className="inputField"
                type="text"
                placeholder="Last Name"
                name="lastname"
                id="lName"
              />
            </div>
            <div className="err">
              <ErrorMessage name="lastname" />
            </div>
            <div className="padd_Login">
              <Field
                className="inputField"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>
            <div className="err">
              <ErrorMessage name="email" />
            </div>
            <div className="padd_Login">
              <Field
                className="inputField"
                type="password"
                placeholder="Enter your password"
                name="pass"
                id="pass"
              />
            </div>
            <div className="err">
              <ErrorMessage name="pass" />
            </div>
            <div className="login_Button padd_Login">
              <button type="submit">Signup</button>
            </div>
            <div className="login_Button padd_Login"></div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Signup;
