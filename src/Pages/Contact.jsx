import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  const whatsAppLink="https://wa.me/971545505407";
  const gmailLink="mailto:fiftyfivecarrental@gmail.com"
  const openWhatsApp = () => {
    window.open(whatsAppLink, '_blank');
  };
const openGmail = () => {
    window.open(gmailLink, '_blank');
  };
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
               Our Service has NO SPEED LIMITS
              </p>
              <Link to={''}>
                <i className="fa fa-whatsapp" style={{color:'#25D366'}} onClick={openWhatsApp}></i>&nbsp; (+971) 54 550 5407
              </Link>
              <Link to={''}>
                <i className="fa-solid fa-envelope" onClick={openGmail}></i>&nbsp;
                fiftyfivecarrental@gmail.com
              </Link>
              <Link to={''}>
                <i className="fa-solid fa-location-dot"></i>&nbsp;
                Al khaimah building 2, Al Barsha 1 Office# 6F-09, Dubai
              </Link>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa fa-whatsapp" style={{color:'#25D366',cursor:'pointer'}} onClick={openWhatsApp}></i>
                <h3>(+971) 54 550 5407</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
