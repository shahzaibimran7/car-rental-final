import React, { useState } from 'react';
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
const CarDetails = () => {
  const { carName } = useParams();
  const car = carData.find(car => car.name === carName);
  
  const carouselStyles = {

    marginTop: "120px", // Center horizontally and add top margin
  };

  return (
    <div className='flex flex-col'>
      <div style={carouselStyles}>
        <Carousel showThumbs={true} width={800}>
          <div>
            <img src={car.image} alt={car.name} />
          </div>
          <div>
            <img src="https://unsplash.it/640/425?image=30" alt="1" />
          </div>
          <div>
            <img src="https://unsplash.it/640/425?image=40" alt="2" />
          </div>
          <div>
            <img src="https://unsplash.it/640/425?image=50" alt="3" />
          </div>
        </Carousel>
      </div>
      <h1 className='ml-20 text-black'>{car.name}</h1>
      <Footer />
    </div>
  );
}

export default CarDetails;
