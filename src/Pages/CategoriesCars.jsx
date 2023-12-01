import React, { useEffect, useRef, useState } from "react";
import { Link, useAsyncValue, useLocation, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  AdditionalImage,
  GetCarsPaginated,
  DeleteCar,
  GetCarsByCategory,
} from "../services/car-api-services";
import Footer from "../components/Footer";
import imageCompression from "browser-image-compression";

import HeroPages from "../components/HeroPages";

function Cars() {
  const params = useParams();
  const { category } = params;
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [carId, setCarId] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = async (event, car) => {
    const file = event.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      // Set carId and selectedImage synchronously
      setSelectedImage({
        image: compressedFile,
        carId: car,
      });
    }
  };

  console.log(params);

  const fetchCars = async (nextPage) => {
    setIsLoadingMore(true);
    try {
      let response;

      if (category) {
        response = await GetCarsByCategory(
          category,
          nextPage ? `?page=${nextPage}` : ``
        );
      } else {
        response = await GetCarsPaginated(nextPage ? `?page=${nextPage}` : ``);
      }

      const newCars = response.data.cars;

      setCars((prevCars) => [...prevCars, ...newCars]);

      setPagination({
        page: response.data.page,
        nextPage: response.data.nextPage,
      });

      setIsLoadingMore(false);
    } catch (error) {
      console.error("Error loading more cars:", error);
      setIsLoadingMore(false);
    }
  };
  const getAllCars = () => {
    if (!isLoadingMore) {
      const nextPage = pagination ? pagination.nextPage : null;
      fetchCars(nextPage);
    }
  };

  useEffect(() => {
    setCars([]);
    fetchCars(null);
  }, [category]);

  useEffect(() => {
    const uploadImage = async (data) => {
      const response = await AdditionalImage(data);
      if (response.status === 201) {
        alert("Image uploaded successfully");
      }
    };

    if (selectedImage && selectedImage.carId) {
      const formData = new FormData();
      for (const key in selectedImage) {
        formData.append(key, selectedImage[key]);
      }
      uploadImage(formData);
    }
  }, [selectedImage]);

  console.log(fileInputRef);

  const admin = localStorage.getItem("role") === "ADMIN";

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        {!loading ? (
          <div className="container">
            <InfiniteScroll
              dataLength={cars.length}
              next={getAllCars}
              hasMore={!!pagination?.nextPage}
              loader={
                isLoadingMore ? (
                  <div style={{ marginLeft: "50%" }}>
                    <RingLoader color="#2596be" />
                    <h2 style={{ color: "#2596be", fontWeight: "normal" }}>
                      {" "}
                      Loading...
                    </h2>
                  </div>
                ) : null
              }
              style={{ overflow: "hidden" }}
            >
              {cars?.length ? (
                <div className="models-div">
                  {cars?.map((car, index) => (
                    <div
                      className="models-div__box"
                      style={{ borderRadius: "38px", height: "100%" }}
                      key={index}
                    >
                      <div className="models-div__box__img">
                        <Link to={`/model/${car.id}`}>
                          <img
                            src={car.image}
                            alt="car_img"
                            className="car-img"
                          />
                        </Link>
                        <div className="models-div__box__descr">
                          <div className="models-div__box__descr__name-price">
                            <div className="models-div__box__descr__name-price__name">
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                                to={`/model/${car.id}`}
                              >
                                <p>{car.name}</p>
                              </Link>
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
                              <i className="fa-light fa-door-open"></i>&nbsp;{" "}
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
                                  const fileInput =
                                    document.createElement("input");
                                  fileInput.type = "file";
                                  fileInput.style.display = "none";
                                  fileInput.addEventListener(
                                    "change",
                                    (event) => {
                                      handleImageChange(event, car.id);
                                    }
                                  );
                                  fileInput.click();
                                }}
                              >
                                {/* <input
                                  type="file"
                                  // ref={fileInputRef}
                                  style={{ display: "none" }}
                                  onChange={(event) => {

                                    handleImageChange(event, car.id);
                                  }}
                                /> */}
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
                                    // window.location.reload()
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
                <div style={{ marginTop: "44px", marginLeft: "50%" }}>
                  <RingLoader color="#2596be" />
                </div>
              )}
            </InfiniteScroll>
          </div>
        ) : (
          <div style={{ marginTop: "44px", marginLeft: "50%" }}>
            <RingLoader color="#2596be" />
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

export default Cars;
