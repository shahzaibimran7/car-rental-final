import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import CarDetails from "./components/CarDetails";
import BookingsDashboard from "./Pages/BookingsDashboard";
import { SignIn } from "./Pages/SignIn";
import CreateAdmin from "./Pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <div className="floating-whatsapp">
        <a
          href="https://wa.me/971545505407"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp" id="whatsapp-float" />{" "}
        </a>
      </div>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="models/:slug" element={<CarDetails />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bookings" element={<BookingsDashboard />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signUp" element={<CreateAdmin />} />
      </Routes>
    </>
  );
}

export default App;
