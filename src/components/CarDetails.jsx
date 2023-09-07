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
  return (
    <>
    {car && ( 
      <div className='details-class'>
      <h1 className='label-class'>{car.name}</h1>
      <div className='carousel'>
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
      <div className='horizontal-line'>
      </div>
      <div style={{display:"flex",marginTop:"3rem",marginBottom:"3rem"}}>
        <div style={{display:"flex",marginLeft:"3rem"}}>
      <i class="fa-solid fa-circle-check" style={{marginTop:"3px",fontSize:"18px"}}></i>
      <h3 style={{fontSize:"18px",marginLeft:"1rem"}}>Free Cancellation</h3>
        </div>
        <div style={{display:"flex",marginLeft:"5rem"}}>
        <i class="fa-solid fa-circle-check" style={{marginTop:"3px",fontSize:"18px"}}></i>
        <h3 style={{fontSize:"18px",marginLeft:"1rem"}}>Pay at Pickup</h3>
        </div>
      </div>
      <div className='horizontal-line'>
      </div>
      <h2 style={{marginTop:"4rem", marginBottom:"2rem",fontSize:"32px",marginLeft:"2rem"}}>
      <span>{car.name} </span>For Rent in Dubai
      </h2>
      <p style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>
        55 Car Rental LLC in Dubai offers an extensive selection of the latest model <span style={{fontWeight: 'bold'}}>{car.name}</span> car available for self-drive rentals in Dubai.
        These luxury vehicles are perfect for special occasions, allowing you to experience the exhilaration of driving a supercar on the open roads of Dubai. 
        Renting a <span style={{fontWeight: 'bold'}}>{car.name} </span>in Dubai provides an opportunity to indulge in one of the most prestigious sports car brands ever created.<span className='br-margin'></span> 
        The moment you step into a <span style={{fontWeight: 'bold'}}>{car.name}</span>, you'll feel the rush of adrenaline. 
        Choosing <span style={{fontWeight: 'bold'}}>55 Car Rental LLC</span> in Dubai for your <span style={{fontWeight: 'bold'}}>{car.name}</span> rental guarantees an unforgettable experience filled with luxury, power, and excitement. 
        Renting this luxury supercar for a weekend getaway will allow you to appreciate every curve and detail of this car maker's engineering excellence.
        Don't wait any longer to leave your mark on the world; embark on an adventurous journey into the realm of luxury supercars today.<span className='br-margin'></span>  
        Experience the dream of driving such an elegant beauty by renting a <span>{car.name}</span> in Dubai. We anticipate the powerful <span style={{fontWeight: 'bold'}}>{car.name}</span> to be a common sight on the roads.
         We're here to make that dream come true for you, offering <span style={{fontWeight: 'bold'}}>{car.name}</span> rentals in Dubai. Don't miss out <span>-</span> <span style={{fontWeight: 'bold'}}>Book</span> your exotic <span style={{fontWeight: 'bold'}}>{car.name}</span> rental in Dubai today.
      </p>
      <h2 style={{marginTop:"4rem", marginBottom:"2rem",fontSize:"32px",marginLeft:"2rem"}}>
      <span>{car.name} </span>For Rent in Dubai Requirements
      </h2>
      <p style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>It's a straightforward and hassle-free process. However, it's essential to prepare the necessary documents for a smooth rental experience. Depending on your residency status, different sets of documents are required from tourists and UAE residents.</p>
      <span className='br-margin'></span>
  <h3 style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>For Tourists:</h3>
  <ul style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>
    <li>Passport</li>
    <li>Driving License from their home country</li>
    <li>VISA copy</li>
    <li>An International Driving Permit (IDP)</li>
  </ul>

  <p style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>Please note that visitors from certain countries, such as the GCC, US, UK, Canada, and Europe, may drive with their home country's driving license without needing an IDP.</p>
  <span className='br-margin'></span>
  <h3 style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>For UAE Residents:</h3>
  <ul style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>
    <li>A copy of your passport</li>
    <li>Emirates ID</li>
    <li>UAE driving license</li>
  </ul>

  <p style={{width:"64%",fontSize:"16px",marginLeft:"2rem"}}>By preparing these documents in advance, you'll be ready to cruise around Dubai in style with the Ferrari 488. Don't miss the chance to feel the thrill of driving a luxury car in one of the most glamorous cities in the world. Renting a Ferrari 488 in Dubai has never been easier, so book now and enjoy the ride!</p>

      <Footer />
    </div>
    )}
    </>
    
  );
}

export default CarDetails;
