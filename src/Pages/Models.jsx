import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";


const carData = [
  {
    name: "Audi A1",
    image: CarImg1,
    price: 45,
    brand: "Audi",
    transmission: "Auto",
    fuel: "Diesel",
    doors: "4"
  },
  {
    name: "Mercedes C1",
    image: CarImg2,
    price: 67,
    brand: "Mercedes",
    transmission: "Manual",
    fuel: "Petrol",
    doors: "5"
  },
  {
    name: "BMW 69",
    image: CarImg3,
    price: 69,
    brand: "BMW",
    transmission: "Auto",
    fuel: "Petrol",
    doors: "5"
  },
  {
    name: "Lamborghini 69",
    image: CarImg4,
    price: 69,
    brand: "Lamborghini",
    transmission: "Manual",
    fuel: "Petrol",
    doors: "5"
  }
]
function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
          {carData.map(car => 
            <div className="models-div__box" style={{borderRadius: "38px"}}>
              <div className="models-div__box__img">
                <img src={car.image} alt="car_img" className="car-img"/>
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>{car.name}</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{car.price} AED</h4>
                      <p>/ day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {car.brand}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {car.doors}/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {car.transmission}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {car.fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>)}
            
          </div>
        </div>
        
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
