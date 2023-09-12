import "./CarDetailsCard.css";
import { useEffect, useState } from "react";

const CarDetailCard = (props) => {
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [book, setBook] = useState(true);
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
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

  const Locations = [
    "United Arab Emirates",
    "Dubai, United Arab Emirates",
    "Abu Dhabi, United Arab Emirates",
    "Sharjah, United Arab Emirates",
    "Alain, United Arab Emirates",
  ];
  return (
    <>
      <div className="CardContainer">
        <div className="header">
          <div className="Price-Container">${props.rate}/Day</div>
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
        <div className="ButtonContainer"></div>
        {book && (
          <div>
            <div className="bodyComponent">
              <div className="border" style={{ marginTop: "24px" }}>
                <label htmlFor="" className="text">
                  Drop off Location
                </label>
                <div className="selectLocations">
                  <select
                    value={dropOff}
                    onChange={(e) => {
                      setDropOff(e.target.value);
                      props.setDropOff(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPickTime(e.target.value);
                      props.setPickTime(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setDropTime(e.target.value);
                      props.setDropTime(e.target.value);
                    }}
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
                <div>${dateRange * props.rate}</div>
              </div>
              <button
                onClick={() => {
                  props.setShowModal(true);
                }}
                disabled={disableButton}
                style={{ backgroundColor: disableButton ? "gray" : "#163474" }}
              >
                Book now
              </button>
            </div>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default CarDetailCard;
