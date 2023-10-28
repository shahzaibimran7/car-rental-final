import { useState } from "react";
import { Link } from "react-router-dom";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(false);
  return (
    <>
      {data.map((car, id) => (
        <div key={id} className="box-cars">
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}

            <img
              style={{
                display: carLoad ? "none" : "block",
              }}
              src={car.image}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{car.brand}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>yes</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            <Link className="cta-btn" to={`/model/${car.id}`}>
              Reserve Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
