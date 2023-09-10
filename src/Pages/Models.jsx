import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { AdditionalImage, GetCars } from "../services/car-api-services";
function Models() {
  const [cars, setCars] = React.useState([]);
  const convertImage = (image) => {
    const imageElement = "data:image/jpeg;base64," + image;

    return imageElement;
  };
  // Step 1: Create a state variable to hold the selected image file
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [carId, setCarId] = React.useState(null);
  // Step 2: Create a ref for the file input element
  const fileInputRef = useRef(null);

  // Step 3: Handle the image selection and update the state
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
      const response = await GetCars();
      setCars(response.data);
    };
    getAllCars();
  }, []);
  useEffect(() => {
    if (carId) {
      setSelectedImage({
        ...selectedImage,
        carId: carId,
      });
    }
  }, [carId]);
  useEffect(() => {
    const uploadImage = async (data) => {
      const response = await AdditionalImage(data);
      console.log(response);
      if (response.status === 200) alert("Image uploaded successfully");
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
        <div className="container">
          <div className="models-div">
            {cars.map((car, index) => (
              <div
                className="models-div__box"
                style={{ borderRadius: "38px" }}
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
                        <h4>{car.price} AED</h4>
                        <p>/ day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                        {car.brand}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.doors}/5 &nbsp;{" "}
                        <i className="fa-solid fa-car-side"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                        {car.transmission}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.fuel} &nbsp;{" "}
                        <i className="fa-solid fa-car-side"></i>
                      </span>
                    </div>
                    {admin ? (
                      <Link
                        to={`/models/${car.id}`}
                        className="models-div__box__descr__name-price__btn"
                      >
                        Book Ride
                      </Link>
                    ) : (
                      <div
                        className="models-div__box__descr__name-price__btn"
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
                    )}
                  </div>
                </div>
              </div>
            ))}
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
