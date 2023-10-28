import { Link } from "react-router-dom";

function Footer() {
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

  const brands = [
    "Mercedes",
    "BMW",
    "Audi",
    "Lexus",
    "Tesla",
    "Bentley",
    "Toyota",
    "Cadillac Escalade",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "GMC",
    "Jeep",
    "Mini Cooper",
    "Nissan",
    "Porsche",
    "Range Rover",
    "Rolls Royce",
    "KIA",
    "Maserati",
    "Yachts",
    "Lamborghini"
  ];

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Fifty Five Car Rental</span> LLC
              </li>
              <li>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>

              <li onClick={openPhone}>
                <Link to={""}>
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "black" }}
                  ></i>{" "}
                  &nbsp; (+971) 54 550 5358
                </Link>
              </li>

              <li onClick={openWhatsApp}>
                <Link to={""}>
                  <i
                    className="fa fa-whatsapp"
                    style={{ color: "#25D366" }}
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
            <div className="brands-categories">
              <ul className="footer-content-mid1">
                <li>
                  <h2>Collections</h2>
                </li>
                <li>SUVs</li>
                <li>Luxury Cars</li>
                <li>Sports Cars</li>
                <li>Hybrid Cars</li>
                <li>Sedan Cars</li>
                <li>Electric Cars</li>
                <li>All Cars</li>
              </ul>
              <ul className="footer-content-mid2">
                <li>
                  <h2>Brands</h2>
                </li>
                {brands.map((brand, index) =>
                  <li>
                    <Link to={`/models/${brand}`}>
                      {brand}
                    </Link>
                  </li>)}
              </ul>
            </div>
            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun</li>
              <li>24/7</li>
            </ul>
          </div>
        </div>
        <div className="linksContainer">
          <span className="links">
            <Link
              to={"https://www.youtube.com/@FIFTYFIVECARRENTAL"}
              target="_blank"
            >
              <i className="fa fa-youtube fa-2xl"></i>
            </Link>
          </span>
          <span className="links">
            <Link to={"https://twitter.com/FiftyFiveCar"} target="_blank">
              <i className="fa fa-twitter fa-2xl">{/* <h4>Twitter</h4> */}</i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={"https://www.facebook.com/profile.php?id=61551860040920"}
              target="_blank"
            >
              <i className="fa fa-facebook fa-2xl">{/* <h4>Facebook</h4> */}</i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={"https://www.instagram.com/fiftyfivecarrental/"}
              target="_blank"
            >
              <i className="fa fa-instagram fa-2xl">
                {/* <h4>instagram</h4> */}
              </i>
            </Link>
          </span>
          <span className="links">
            <Link
              to={" https://www.pinterest.com/fiftyfivecarrental/"}
              target="_blank"
            >
              <i className="fa fa-pinterest fa-2xl">
                {/* <h4>Pinterest</h4> */}
              </i>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
