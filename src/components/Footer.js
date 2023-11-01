import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram></Instagram>
        <Facebook></Facebook>

        <a href="https://www.linkedin.com/in/arezki-kroun-0666b4237/">
          <LinkedIn></LinkedIn>
        </a>
      </div>
      <p>&copy: 2023 Arezki.kroun</p>
    </div>
  );
}

export default Footer;
