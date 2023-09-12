import React, { useState } from "react";
import { CreateBooking } from "../services/bookings-api-services";
const BookingModal = (props) => {
  const {
    dropTime,
    pickTime,
    showModal,
    dropOff,
    carType,
    imgUrl,
    carId,
    setShowModal,
  } = props;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [modal, setModal] = useState(showModal);
  const [license, setLicense] = useState("");

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-modal");
    if (
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setShowModal(false);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };
  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };
  const handleLicense = (e) => {
    setLicense(e.target.value);
  };
  const bookingData = {
    firstName: name,
    lastName: lastName,
    age: age,
    status: "pending",
    phoneNumber: phone,
    email: email,
    address: address,
    city: city,
    zipCode: zipcode,
    carId: carId,
    licenseNumber: license,
    pickupDate: pickTime,
    dropOffDate: dropTime,
    location: dropOff,
  };
  const confirmBooking = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(bookingData).some((value) => {
      if (typeof value === "string") {
        return !value.trim();
      }
      return false;
    });
    if (hasEmptyFields) {
      alert("Please fill in all the fields as they are required.");
    } else {
      setShowModal(false);
      const response = await CreateBooking(bookingData);
    }
  };
  return (
    <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
      <div className="booking-modal__title">
        <h2>Complete Reservation</h2>
        <i onClick={openModal} className="fa-solid fa-xmark"></i>
      </div>
      {/* car info */}
      <div className="booking-modal__car-info">
        <div className="dates-div">
          <div className="booking-modal__car-info__dates">
            <h5>Location & Date</h5>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Pick-Up Date</h6>
                <p>{pickTime}</p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Drop-Off Date</h6>
                <p>{dropTime}</p>
              </div>
            </span>
          </div>
          <div className="booking-modal__car-info__dates">
            <span>
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h6>Drop-Off Location</h6>
                <p>{dropOff}</p>
              </div>
            </span>
          </div>
        </div>
        <div className="booking-modal__car-info__model">
          <h5>
            <span>Car -</span> {carType}
          </h5>
          {imgUrl && <img src={imgUrl} alt="car_img" />}
        </div>
      </div>
      {/* personal info */}
      <div className="booking-modal__person-info">
        <h4>Personal Information</h4>
        <form className="info-form">
          <div className="info-form__2col">
            <span>
              <label>
                First Name <b>*</b>
              </label>
              <input
                value={name}
                onChange={handleName}
                type="text"
                placeholder="Enter your first name"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                placeholder="Enter your last name"
              ></input>
              <p className="error-modal ">This field is required.</p>
            </span>

            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type="tel"
                placeholder="Enter your phone number"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type="number"
                placeholder="18"
              ></input>
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                placeholder="Enter your email address"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Address <b>*</b>
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type="text"
                placeholder="Enter your street address"
              ></input>
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <div className="info-form__2col">
            <span>
              <label>
                City <b>*</b>
              </label>
              <input
                value={city}
                onChange={handleCity}
                type="text"
                placeholder="Enter your city"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                value={zipcode}
                onChange={handleZip}
                type="text"
                placeholder="Enter your zip code"
              ></input>
              <p className="error-modal ">This field is required.</p>
            </span>
            <span>
              <label>
                Licence Number <b>*</b>
              </label>
              <input
                value={license}
                onChange={handleLicense}
                type="text"
                placeholder="Enter your licence number"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>
          </div>
          <div className="reserve-button">
            <button onClick={confirmBooking}>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
