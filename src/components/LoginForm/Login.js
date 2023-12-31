import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { LoginUser } from "../../services/admin-api-services";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const initialValues = {
    email: "",
    pass: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is Required"),
    pass: Yup.string().required("Password is Required"),
  });
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const userData = {
      email: values.email,
      password: values.pass,
    };

    try {
      const response = await LoginUser(userData);

      if (response.status === 200) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/");
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
      <div className="form_Input_Container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="center">
            <div className="padd_Login">
              <h1 className="heading">Login</h1>
            </div>
            <div className="padd_Login">
              <Field
                className="inputField"
                type="Email"
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
  );
};
export default Login;
