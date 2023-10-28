import React, { useState, useEffect } from "react";
import CarBox from "./CarBox";
import { GetCars } from "../services/car-api-services";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { set } from "lodash";

function PickCar({ cars }) {
  const [active, setActive] = useState(cars?.[0]?.name);
  const [colorBtn, setColorBtn] = useState(null);

  useEffect(
    () => {
      setActive(cars?.[0]?.name);
      setColorBtn(cars?.[0]?.name);
    },
    [cars]
  );

  const btnID = (carName) => {
    setColorBtn(carName);
  };

  const coloringButton = (carName) => {
    return carName === colorBtn ? "colored-button" : "";
  };
  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            {cars?.length ?
              <>
                <div className="pick-container__car-content">
                  <div
                    className="pick-box"
                    style={{
                      height: "335px",
                      overflow: "auto",
                    }}
                  >
                    {cars?.map((car) => (
                      <button
                        key={car.id}
                        className={`button ${coloringButton(car.name)}`}
                        onClick={() => {
                          setActive(car.name);
                          btnID(car.name);
                        }}
                      >
                        {car.name}
                      </button>
                    ))}
                  </div>

                  {active && (
                    <CarBox
                      data={[...cars?.filter((car) => car.name === active)]}
                    />
                  )}

                </div>
                <span className="view-all-btn">
                  <Link to='/models'>View All</Link>
                </span>
              </>
              :
              <div className="pick-container__car-content">
                <div style={{ marginTop: "44px", marginLeft: "50%" }}>
                  <RingLoader color="#2596be" />
                  <h2 style={{ color: "#2596be" }}>Loading...</h2>
                </div>
              </div>
            }
          </div>
        </div>
      </section >
    </>
  );
}

export default PickCar;
