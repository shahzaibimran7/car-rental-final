import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import { GetCars } from "../services/car-api-services";

function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getAllCars = async () => {
      const response = await GetCars();
      setCars(response.data);
    };
    getAllCars();
  }, []);
  return (
    <>
      <Hero />
      <BookCar cars={cars} />
      <PlanTrip />
      <PickCar cars={cars} />
      <Banner />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default Home;
