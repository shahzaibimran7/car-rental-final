import { Link } from "react-router-dom";

function Footer() {
  const whatsAppLink = "https://wa.me/971545505407";
  const gmailLink = "mailto:fiftyfivecarrental@gmail.com";
  const openWhatsApp = () => {
    window.open(whatsAppLink, "_blank");
  };
  const openGmail = () => {
    window.open(gmailLink, "_blank");
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>55 Car Rental</span> LLC
              </li>
              <li>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <Link to={""}>
                  <i
                    className="fa fa-whatsapp"
                    style={{ color: "#25D366" }}
                    onClick={openWhatsApp}
                  ></i>{" "}
                  &nbsp; (+971) 54 550 5358
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <i className="fa-solid fa-envelope" onClick={openGmail}></i>
                  &nbsp; fiftyfivecarrental@gmail.com
                </Link>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun: 24/7</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
