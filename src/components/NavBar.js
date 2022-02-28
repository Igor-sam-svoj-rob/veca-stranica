import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={clickHandler}>
            Booking <FontAwesomeIcon icon={faHotel} />
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/servisi"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servisi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/proizvodi"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Proizvodi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">Kontakt</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
