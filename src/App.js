import "../src/dist/styles.css";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SignIn } from "./Pages/SignIn";
import Models from "./Pages/Models";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const CarDetails = lazy(() => import("./components/CarDetails"));
const BookingsDashboard = lazy(() => import("./Pages/BookingsDashboard"));
const CreateAdmin = lazy(() => import("./Pages/SignUp"));
const AddCar = lazy(() => import("./Pages/AddCar"));

function App() {
  const admin = localStorage.getItem("role") === "ADMIN";

  const whatsAppLink = "https://wa.me/971545505358";
  const gmailLink = "mailto:fiftyfivecarrental@gmail.com";
  const callLink = "tel:971545505407";

  const openWhatsApp = () => {
    window.open(whatsAppLink, "_blank");
  };
  const openGmail = () => {
    window.open(gmailLink, "_blank");
  };

  const openPhone = () => {
    window.open(callLink, "_blank");
  }
  return (
    <>
      <Navbar />
      {!admin && (
        <div className="floating-whatsapp">
          <i className="fa fa-whatsapp" id="whatsapp-float" onClick={openWhatsApp} />
          <i className="fa-solid fa-phone" id="phone-float" onClick={openPhone} />
        </div >
      )
      }

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
