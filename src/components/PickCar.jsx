import React, { useState } from "react";
import CarBox from "./CarBox";

function PickCar({ cars }) {
  const [active, setActive] = useState(cars[0]?.name);
  const [colorBtn, setColorBtn] = useState(null);

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

              {active !== null && (
                <CarBox
                  data={[...cars?.filter((car) => car.name === active)]}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
