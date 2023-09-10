import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CreateCar.css";
import { CreateOneCar } from "../../services/car-api-services";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Car Name is required"),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  transmission: Yup.string().required("Transmission is required"),
  fuel: Yup.string().required("Fuel Type is required"),
  doors: Yup.number().required("Number of Doors is required"),
});

const brands = ["Mercedes", "BMW", "Audi", "Lexus", "Tesla", "Bentley"];
const transmissions = ["Automatic", "Manual"];
const fuelTypes = ["Petrol", "Diesel", "Electric"];

function CreateCar() {
  const handleIcon = async (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue("image", file);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }

    const response = await CreateOneCar(formData);
    console.log("response", response);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: "",
          image: null,
          price: "",
          brand: "",
          transmission: "",
          fuel: "",
          doors: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Car Name:</label>
              <Field type="text" name="name" id="carName" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <Field name="image">
                {({ form, field }) => {
                  const { setFieldValue } = form;
                  return (
                    <input
                      type="file"
                      required
                      onChange={(e) => handleIcon(e, setFieldValue)}
                    />
                  );
                }}
              </Field>{" "}
              <ErrorMessage name="image" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <Field type="number" name="price" id="price" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand:</label>
              <Field as="select" name="brand" id="brand">
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="brand" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="transmission">Transmission:</label>
              <Field as="select" name="transmission" id="transmission">
                <option value="">Select Transmission</option>
                {transmissions.map((transmission) => (
                  <option key={transmission} value={transmission}>
                    {transmission}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="transmission"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fuel">Fuel Type:</label>
              <Field as="select" name="fuel" id="fuelType">
                <option value="">Select Fuel Type</option>
                {fuelTypes.map((fuelType) => (
                  <option key={fuelType} value={fuelType}>
                    {fuelType}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="fuel" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="doors">Number of Doors:</label>
              <Field type="number" name="doors" id="doors" />
              <ErrorMessage name="doors" component="div" className="error" />
            </div>

            <div className="form-group">
              <button type="submit">Create</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateCar;
