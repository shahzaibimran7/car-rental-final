import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  AdditionalImage,
  GetCars,
  DeleteCar,
} from "../services/car-api-services";
import { RingLoader } from "react-spinners";
function Models() {
  const params = useParams();
  const { brand } = params;
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = React.useState([]);
  const convertImage = (image) => {
    const imageElement = "data:image/jpeg;base64," + image;

    return imageElement;
  };
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [carId, setCarId] = React.useState(null);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage({
        image: file,
      });
    }
  };

  useEffect(() => {
    const getAllCars = async () => {
      setLoading(true);
      const response = await GetCars();
      setCars(response.data);
      setLoading(false);
      if (brand) {
        setLoading(true);
        const filteredCars = response.data.filter((car) => car.brand === brand);
        setCars(filteredCars);
        setLoading(false);
      }
    };
    getAllCars();
  }, [brand]);

  useEffect(() => {
    if (carId) {
      setSelectedImage({
        ...selectedImage,
        carId: carId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carId]);

  useEffect(() => {
    const uploadImage = async (data) => {
      const response = await AdditionalImage(data);
      if (response.status === 201) {
        alert("Image uploaded successfully");
        window.location.reload();
      }
    };

    if (selectedImage && selectedImage.carId) {
      const formData = new FormData();
      formData.append("image", selectedImage.image);
      formData.append("carId", selectedImage.carId);
      uploadImage(formData);
    }
  }, [selectedImage]);

  const admin = localStorage.getItem("role") === "ADMIN";
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        {!loading ? (
          <div className="container">
            {cars.length ? (
              <div className="models-div">
                {cars.map((car, index) => (
                  <div
                    className="models-div__box"
                    style={{ borderRadius: "38px", height: "100%" }}
                    key={index}
                  >
                    <div className="models-div__box__img">
                      <img
                        src={convertImage(car.image)}
                        alt="car_img"
                        className="car-img"
                      />
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
                            <h4>${car.price}/ day</h4>
                          </div>
                        </div>
                        <div className="models-div__box__descr__name-price__details">
                          <span title="Brand">
                            <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                            {car.brand}
                          </span>
                          <span title="Doors">
                            <i className="fa-solid fa-door-open"></i>&nbsp;{" "}
                            {car.doors}/5
                          </span>
                          <span title="Gear Shift">
                            <i className="fa-solid fa-gear"></i>
                            {car.transmission}
                          </span>
                          <span title="Fuel Type">
                            <i className="fa-solid fa-gas-pump"></i>&nbsp;{" "}
                            {car.fuel}
                          </span>
                        </div>
                        {!admin ? (
                          <Link
                            to={`/model/${car.id}`}
                            className="models-div__box__descr__name-price__btn"
                          >
                            Book Ride
                          </Link>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginLeft: "5rem",
                            }}
                          >
                            <div
                              className="models-div__box__descr__name-price__btn"
                              title="Upload Additional Image"
                              onClick={() => {
                                fileInputRef.current.click();
                              }}
                            >
                              <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={(event) => {
                                  handleImageChange(event);
                                  setCarId(car.id);
                                }}
                              />
                              <i
                                className="fa fa-upload"
                                aria-hidden="true"
                                id="additional"
                              ></i>
                            </div>
                            <div
                              className="models-div__box__descr__name-price__btn"
                              title="Delete Car"
                              onClick={() => {
                                if (window.confirm("Are you sure?")) {
                                  DeleteCar(car.id);
                                  window.location.reload();
                                }
                              }}
                            >
                              <i
                                className="fa fa-archive"
                                aria-hidden="true"
                                id="additional"
                              ></i>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-cars">
                <h1>Coming Soon!!</h1>
              </div>
            )}
          </div>
        ) : (
          <div style={{ marginTop: "44px", marginLeft: "50%" }}>
            <RingLoader color="#163474" />
          </div>
        )}

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(971) 54 567 5505</h3>
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
