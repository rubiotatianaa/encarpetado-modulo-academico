import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear}  Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
