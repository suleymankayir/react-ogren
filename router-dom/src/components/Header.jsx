import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link className="link" to="/">Anasayfa</Link>
      </div>
      <div>
        <Link className="link" to="/about">Hakkında</Link>
        <Link className="link" to="/products">Ürünlerimiz</Link>
        <Link className="link" to="/contact">İletişim</Link>
      </div>
    </div>
  );
}

export default Header;
