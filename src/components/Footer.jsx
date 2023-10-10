import { Link } from "react-router-dom";

function Footer() {
  const whatsAppLink = "https://wa.me/971545505407";
  const gmailLink = "mailto:fiftyfivecarrental@gmail.com";
  // const Facebook=" https://www.facebook.com/profile.php?id=61551860040920"
  // const Insta="https://www.instagram.com/fiftyfivecarrental/"
  // const twitter="https://twitter.com/FiftyFiveCar"
  // const pinterest=" https://www.pinterest.com/fiftyfivecarrental/"
  // const youtube=" https://www.youtube.com/@FIFTYFIVECARRENTAL"
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
                  &nbsp; (+971) 54 567 5505
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <i className="fa-solid fa-envelope" onClick={openGmail}></i>
                  &nbsp; fiftyfivecarrental@gmail.com
                </Link>
              </li>
            </ul>
            <ul className="footer-content-mid1">
              <li>
                <h2>Collections</h2>
              </li>
              <li>Luxury Cars</li>
              <li>Sports Cars</li>
              <li>Hybrid Cars</li>
              <li>Fully Electric Cars</li>
              <li>SUVs</li>
              <li>Sedan Cars</li>
              <li>All Cars</li>
            </ul>
            <ul className="footer-content-mid2">
              <li>
                <h2>Brands</h2>
              </li>
              <li>Ferrari</li>
              <li>Lamborghini</li>
              <li>Audi</li>
              <li>Bentley</li>
              <li>Rolls-Royce</li>
              <li>Range Rover</li>
              <li>Mercedes-Benz</li>
              <li>Porsche</li>
              <li>Ford</li>
            </ul>
            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun:24/7</li>
            </ul>
          </div>
        </div>
        <div className="linksContainer">
          <span className="links">
            <Link
              to={"https://www.youtube.com/@FIFTYFIVECARRENTAL"}
              target="_blank"
            >
              <i className="fa fa-youtube">
                <h4>Youtube</h4>
              </i>
            </Link>
          </span>
          <span className="links">
            <Link to={"https://twitter.com/FiftyFiveCar"} target="_blank">
              <i className="fa fa-twitter">
                <h4>Twitter</h4>
              </i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={"https://www.facebook.com/profile.php?id=61551860040920"}
              target="_blank"
            >
              <i className="fa fa-facebook">
                <h4>Facebook</h4>
              </i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={"https://www.instagram.com/fiftyfivecarrental/"}
              target="_blank"
            >
              <i className="fa fa-instagram">
                <h4>instagram</h4>
              </i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={" https://www.pinterest.com/fiftyfivecarrental/"}
              target="_blank"
            >
              <i className="fa fa-pinterest">
                <h4>Pinterest</h4>
              </i>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
