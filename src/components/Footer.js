import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          Kapcsolat:    valaki@gmail.com
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SZTE Kottatár | Minden jog fentartva 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;