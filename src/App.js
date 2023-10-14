import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import CarDetails from "./components/CarDetails";
import BookingsDashboard from "./Pages/BookingsDashboard";
import { SignIn } from "./Pages/SignIn";
import CreateAdmin from "./Pages/SignUp";
import AddCar from "./Pages/AddCar";

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
            <i className="fa-solid fa-phone" id="phone-float"  />
          </a>

        </div>
      )}

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
    </>
  );
}

export default App;
