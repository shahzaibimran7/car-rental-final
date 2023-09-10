import "./CarDetailsCard.css";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
const CarDetailCard = (props) => {
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [book, setBook] = useState(true);
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().required("Phone is required"),
    note: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    note: "",
  };
  useEffect(() => {
    const calculateDateRange = () => {
      if (pickTime && dropTime) {
        const pickDate = new Date(pickTime);
        const dropDate = new Date(dropTime);
        console.log(pickDate, dropDate);
        const timeDifference = dropDate - pickDate;
        const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
        setDateRange(dayDifference);
      } else {
        setDateRange("");
      }
    };
    calculateDateRange();
  }, [pickTime, dropTime]);
  const handlePickTime = (e) => {
    setPickTime(e.target.value);
    console.log(pickTime);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
    console.log(dropTime);
  };

  function validateDay() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    var maxDate = year + "-" + month + "-" + day;
    return maxDate;
  }
  const disableButton = pickTime === "" || dropTime === "";

  const Locations = ["United Arab Emirates", "Dubai,United Arab Emirates"];
  return (
    <>
      <div className="CardContainer">
        <div className="header">
          <div className="Price-Container">{props.rate} AED/Day</div>
          <div className="reviewContainer">
            <span>
              <i
                className="fa fa-star"
                aria-hidden="true"
                style={{ color: "#ffb21d" }}
              />
            </span>
            <span>4.9</span>
            {/* <span>(10 Review)</span> */}
          </div>
        </div>
        <div className="ButtonContainer">
          {/* <div>
            <button
              onClick={() => {
                setBook(true)
                setInquiry(false)
              }}
              id={`${book ? 'btn-1' : ''}`}
            >
              Book
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setInquiry(true)
                setBook(false)
              }}
              id={`${inquiry ? 'btn-1' : ''}`}
            >
              Inquiry
            </button>
          </div> */}
        </div>
        {book && (
          <div>
            <div className="bodyComponent">
              <div className="border">
                <label htmlFor="" className="text">
                  Pick Up Location
                </label>
                <div className="selectLocations">
                  <select
                    value={pickUp}
                    onChange={(e) => setPickUp(e.target.value)}
                  >
                    {Locations.map((ele, index) => (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="border" style={{ marginTop: "24px" }}>
                <label htmlFor="" className="text">
                  Drop off Location
                </label>
                <div className="selectLocations">
                  <select
                    value={dropOff}
                    onChange={(e) => setDropOff(e.target.value)}
                  >
                    {Locations.map((ele, index) => (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="border">
                <label htmlFor="picktime" className="text">
                  <div className="picker-text">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Pick-up <b>*</b>
                  </div>
                </label>
                <div className="dateInput">
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    min={validateDay()}
                    type="date"
                  ></input>
                </div>
              </div>
              <div className="box-form__car-time">
                <label htmlFor="droptime" className="text">
                  <div className="picker-text">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-off <b>*</b>
                  </div>
                </label>
                <div className="dateInput">
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    min={pickTime}
                    type="date"
                    disabled={pickTime === ""}
                  ></input>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="totalPriceContainer">
                <div>Total</div>
                <div>{dateRange * props.rate} AED</div>
              </div>
              <button
                onClick={() => {
                  props.setShowModal(true);
                  props.setDropTime(dropTime);
                  props.setPickTime(pickTime);
                  props.setPickUp(pickUp);
                  props.setDropOff(dropOff);
                }}
                disabled={disableButton}
                style={{ backgroundColor: disableButton ? "gray" : "#163474" }}
              >
                Book now
              </button>
            </div>
          </div>
        )}{" "}
        {/* {inquiry && (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ touched, errors }) => (
              <Form>
                <div className="inquiryComponent">
                  <div className="inputFields">
                    <Field type="text" name="name" placeholder="Name*" required />
                    <div style={{display:"flex"}}>
                    <ErrorMessage name="name" component="div" className="error" />
                    <span className={`${touched.name && errors.name ? "error" : "whiteClass"}`}>*</span>
                    </div>                  </div>
                  <div className="inputFields">
                    <Field type="email" name="email" placeholder="Email*" required />
                    <div style={{display:"flex"}}>
                    <ErrorMessage name="email" component="div" className="error" />
                    <span className={`${touched.email && errors.email ? "error" : "whiteClass"}`}>*</span>
                    </div>                  </div>
                  <div className="inputFields">
                    <Field type="number" name="phone" placeholder="Phone" />
                    <div style={{display:"flex"}}>
                    <ErrorMessage name="phone" component="div" className="error" />
                    <span className={`${touched.phone && errors.phone ? "error" : "whiteClass"}`}>*</span>
                    </div>
                  </div>
                  <div className="inputFields">
                    <Field type="text" name="note" placeholder="Note" />
                  </div>
                  <div className="inputFields">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )} */}
      </div>
    </>
  );
};

export default CarDetailCard;
