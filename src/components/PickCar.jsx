import React, { useState, useEffect } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";
import { GetCars } from "../services/car-api-services";

function PickCar() {
  const [cars, setCars] = useState([]);
  const [active, setActive] = useState(null);
  const [colorBtn, setColorBtn] = useState(null);

  const btnID = (carName) => {
    setColorBtn(carName);
  };

  const coloringButton = (carName) => {
    return carName === colorBtn ? "colored-button" : "";
  };
  useEffect(() => {
    const getAllCars = async () => {
      const response = await GetCars();
      setCars(response.data);
    };
    getAllCars();
  }, []);
  console.log(active);
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
              {/* pick car */}
              <div className="pick-box">
                {cars.map((car) => (
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
                <CarBox data={[...cars.filter((car) => car.name === active)]} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
