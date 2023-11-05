import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo/logoo.png";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  const brands = [
    "Mercedes",
    "BMW",
    "Lamborghini",
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

  const categories = [
    {
      id: 1,
      name: "SUVs",
      createdAt: "2023-11-04T17:20:41.000Z",
      updatedAt: "2023-11-04T17:20:41.000Z",
    },
    {
      id: 2,
      name: "Luxury Cars",
      createdAt: "2023-11-04T17:32:11.000Z",
      updatedAt: "2023-11-04T17:32:11.000Z",
    },
    {
      id: 3,
      name: "Hybrid Cars",
      createdAt: "2023-11-04T17:36:41.000Z",
      updatedAt: "2023-11-04T17:36:41.000Z",
    },
    {
      id: 4,
      name: "Sport Cars",
      createdAt: "2023-11-04T17:38:13.000Z",
      updatedAt: "2023-11-04T17:38:13.000Z",
    },
    {
      id: 5,
      name: "Sedan Cars",
      createdAt: "2023-11-04T17:59:45.000Z",
      updatedAt: "2023-11-04T17:59:45.000Z",
    },
    {
      id: 6,
      name: "Electric Cars",
      createdAt: "2023-11-04T18:02:23.000Z",
      updatedAt: "2023-11-04T18:02:23.000Z",
    },
    {
      id: "",
      name: "All",
    },
  ];

  const [showList, setShowList] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef(null);

  const brandsRef = useRef(null);
  const handleClickOutside = (event) => {
    if (brandsRef.current && !brandsRef.current.contains(event.target)) {
      setShowList(false);
    }
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target)
    ) {
      setShowCategories(false);
    }
  };

  const handleCategoriesHover = () => {
    setShowCategories(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const Brands = ({ isMobile }) => {
    return (
      <div
        className={!isMobile ? "brands-card" : "mobile-brands-card"}
        onMouseLeave={() => setShowList(false)}
      >
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

  const Categories = ({ isMobile }) => {
    return (
      <div
        className={!isMobile ? "categories-card" : "mobile-brands-card"}
        onMouseLeave={() => setShowCategories(false)}
      >
        {categories.map((category) => {
          return (
            <li key={category.id} style={{ zIndex: 50 }}>
              <Link
                className="about-link"
                onClick={() => {
                  setShowCategories(false);
                  isMobile && openNav();
                }}
                to={`cars/${category.id}`}
              >
                {category.name}
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
              <Link
                onClick={(e) => {
                  e.stopPropagation();
                  setShowList(!showList);
                }}
                to=""
              >
                Brands
              </Link>
              {showList && <Brands isMobile />}
            </li>
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
            <li onMouseEnter={() => setShowList(true)}>
              {" "}
              <Link className="about-link" ref={brandsRef}>
                Brands
                {showList && <Brands />}
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li onMouseEnter={handleCategoriesHover}>
              <Link className="models-link" ref={categoriesRef}>
                Our Fleet
                {showCategories && <Categories isMobile={false} />}
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
                className="navbar_buttons_sign-in"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  window.location.reload();
                }}
                to="/"
              >
                Sign Out
              </Link>
            ) : (
              <Link className="navbar_buttons_sign-in" to="/login">
                Sign In
              </Link>
            )}
            <Link className="navbar_buttons_register" to="/signUp">
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
