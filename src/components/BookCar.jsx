import { useEffect, useState } from "react";
import { CreateBooking } from "../services/bookings-api-services";
import axios from "axios";
import emailjs from "emailjs-com";

function BookCar({ cars }) {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");
  const [dateRange, setDateRange] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [license, setLicense] = useState("");
  const [carId, setCarId] = useState("");

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
  const handleLicense = (e) => {
    setLicense(e.target.value);
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

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

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

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
  };
  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };
  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };
  const convertImage = (image) => {
    const imageElement = "data:image/jpeg;base64," + image;

    return imageElement;
  };
  const options = cars?.map((car) => car.name);
  useEffect(() => {
    const carSelected = cars?.filter((car) => car.name === carType);
    setCarImg(carSelected[0]?.image);
    setCarId(carSelected[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carType]);
  const dropOffOptions = [
    "Dubai",
    "Abu Dhabi",
    "Al Ain",
    "Sharjah",
    "Ras Al-Khaimah",
    "Ajman",
    "Fujairah",
  ];
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
    setModal(!modal);
    console.log(bookingData);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
    const response = await CreateBooking(bookingData);
    if (response.status === 201) {
      const booking = response.data;
      const car = await axios.get(
        `https://app.fiftyfivecarrental.com/car/getCarsById/${booking.carId}`
      );
      const bookingData = `Booking ID: ${booking.id} \n First Name: ${
        booking.firstName
      } \n Last Name: ${booking.lastName} \n Age: ${
        booking.age
      } \n Phone Number: ${booking.phoneNumber} \n Email: ${
        booking.email
      } \n Address: ${booking.address} \n City: ${booking.city} \n Zip Code: ${
        booking.zipCode
      } \n Car Name: ${car.data.name} \n Pick-Up Date: ${
        booking.pickupDate
      } \n Drop-Off Date: ${booking.dropOffDate} \n Location: ${
        booking.location
      } \n License Number: ${booking.licenseNumber} \n Total Price: ${
        dateRange * car.data.price
      }`;
      console.log(bookingData);
      emailjs.init("U0B35fYtpoC6loUyp");
      const templateParams = {
        from_name: `${booking.firstName} ${booking.lastName}`,
        from_email: booking.email,
        message: bookingData,
      };
      emailjs
        .send("service_y120tlm", "template_3vb9c1z", templateParams)
        .then((response) => {
          // alert("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        });
    }
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Thank You for your booking. We'll contact you shortly.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    {options.map((car, id) => (
                      <option key={id} value={car}>
                        {car}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Where are you going?</option>
                    {dropOffOptions.map((drop, id) => (
                      <option key={id} value={drop}>
                        {drop}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    min={validateDay()}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    disabled={pickTime === ""}
                    min={pickTime}
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        {/* <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div> */}
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
            {carImg && <img src={convertImage(carImg)} alt="car_img" />}
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
    </>
  );
}

export default BookCar;
