import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Pretplati se na naš newsletter kako bi dobili najnovije ponude u Vaš
          inbox.
        </p>
        <p className="footer-subscription-text">
          Možete se odjaviti kada god hoćete.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn-outline">Pretplati se</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
          <div className="footer-link-items">
            <h2>O nama</h2>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/servisi">Servisi</Link>
            <Link to="/proizvodi">Proizvodi</Link>
          </div>
        </div>
      </div>
      <section className="logo-media">
        <div className="footer-logo">
          <Link to="/" className="footer-logo">
            Booking <FontAwesomeIcon icon={faHotel} />
          </Link>
        </div>
        <small className="website-rights">Copyright Booking © 2022.</small>
      </section>
    </div>
  );
}

export default Footer;
