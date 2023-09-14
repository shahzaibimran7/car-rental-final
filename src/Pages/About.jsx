import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";

function About() {
  const whatsAppLink = "https://wa.me/971545505407";
  const openWhatsApp = () => {
    window.open(whatsAppLink, "_blank");
  };
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Welcome to 55 Car Rental LLC, where your journey begins with a
                touch of luxury and convenience. At 55 Car Rental, we don't just
                offer cars; we offer experiences. Whether you're exploring the
                vibrant streets of the city or embarking on a scenic road trip,
                we provide the wheels that match your style and the service that
                exceeds your expectations. Our mission is to make every mile
                memorable. With a fleet of meticulously maintained vehicles,
                from sleek sedans to spacious SUVs, we cater to all your travel
                needs. Our commitment to excellence extends to our exceptional
                customer service, ensuring a seamless rental experience from
                start to finish. At 55 Car Rental, we're not just in the
                business of renting cars; we're in the business of making
                memories. Join us on the open road, and let us be your trusted
                partner in every adventure. Your journey awaits, and we're here
                to make it extraordinary. Discover the world with 55 Car Rental
                LLC today!
              </p>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i
                className="fa fa-whatsapp"
                style={{ color: "#25D366", cursor: "pointer" }}
                onClick={openWhatsApp}
              ></i>
              <h3>(+971) 54 567 5505</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
