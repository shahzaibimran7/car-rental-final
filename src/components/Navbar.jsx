import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo/logoo.png";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  const [cars, setCars] = useState([]);
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
  ];
  const [showList, setShowList] = useState(false);
  const brandsRef = useRef(null);
  const handleClickOutside = (event) => {
    if (brandsRef.current && !brandsRef.current.contains(event.target)) {
      setShowList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const Brands = ({ isMobile }) => {
    return (
      <div className={!isMobile ? "brands-card" : "mobile-brands-card"}>
        {brands.map((brand) => {
          return (
            <li key={brand} style={{ zIndex: 50 }}>
              <Link
                className="about-link"
                onClick={() => {
                  setShowList(false);
                  isMobile && openNav();
                }}
                to={`models/${brand}`}
              >
                {brand}
              </Link>
            </li>
          );
        })}
      </div>
    );
  };

  const isLoggedIn = localStorage.getItem("token");
  const admin = localStorage.getItem("role") === "ADMIN";
  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark" />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowList(!showList)}>Brands</Link>
            </li>
            {showList && <Brands isMobile />}
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
            {admin && (
              <li>
                <Link onClick={openNav} to="/bookings">
                  Bookings
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link onClick={openNav} to="/create-car">
                  Add Car
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="about-link"
                onClick={() => setShowList(!showList)}
                ref={brandsRef}
              >
                Brands
              </Link>
            </li>
            {showList && <Brands />}
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Our Fleet
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
            {admin && (
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/create-car">Add Car</Link>
              </li>
            )}
          </ul>
          <div className="navbar__buttons">
            {isLoggedIn ? (
              <Link
                className="navbar__buttons__sign-in"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                to="/"
              >
                Sign Out
              </Link>
            ) : (
              <Link className="navbar__buttons__sign-in" to="/login">
                Sign In
              </Link>
            )}
            <Link className="navbar__buttons__register" to="/signUp">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
