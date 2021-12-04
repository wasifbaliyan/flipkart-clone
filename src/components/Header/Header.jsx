import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header_nav">
        <div className="header_logo">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
            alt="Flipkart Logo"
          />
        </div>
        <div className="header_search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="header_login">
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
}
