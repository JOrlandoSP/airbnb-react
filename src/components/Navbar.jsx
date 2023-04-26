import React from "react";
import Logo from "../assets/airbnb-logo.png"

export default function Navbar() {
  return(
    <nav className="nav">
      <img src={Logo} className="nav--img" alt="Logo do AirBNB" />
    </nav>
  )
}
