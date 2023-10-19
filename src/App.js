import "../src/dist/styles.css";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Models = lazy(() => import("./Pages/Models"));
const Contact = lazy(() => import("./Pages/Contact"));
const CarDetails = lazy(() => import("./components/CarDetails"));
const BookingsDashboard = lazy(() => import("./Pages/BookingsDashboard"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const CreateAdmin = lazy(() => import("./Pages/SignUp"));
const AddCar = lazy(() => import("./Pages/AddCar"));

function App() {
  const admin = localStorage.getItem("role") === "ADMIN";
  return (
    <>
      <Navbar />
      {!admin && (
        <div className="floating-whatsapp">
          <a
            href="https://wa.me/971545505407"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" id="whatsapp-float" />
          </a>

          <a
            href="tel:971545505407"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-phone" id="phone-float" />
          </a>

        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models/:brand?" element={<Models />} />
          <Route path="model/:id" element={<CarDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookings" element={<BookingsDashboard />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signUp" element={<CreateAdmin />} />
          <Route path="create-car" element={<AddCar />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
