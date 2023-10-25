import React, { useState, useEffect } from "react";
import PlanTrip from "../components/PlanTrip";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import { GetCars } from "../services/car-api-services";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const LazyHero = Loadable({
  loader: () => import("../components/Hero"),
  loading: Loading,
})

const LazyBookCar = Loadable({
  loader: () => import("../components/BookCar"),
  loading: Loading,
});

const LazyPickCar = Loadable({
  loader: () => import("../components/PickCar"),
  loading: Loading,
});

function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getAllCars = async () => {
      const response = await GetCars();
      setCars(response.data?.cars);
    };
    getAllCars();
  }, []);

  return (
    <>
      <LazyHero />
      <LazyBookCar cars={cars} />
      <PlanTrip />
      <LazyPickCar cars={cars} />
      <Banner />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default Home;
