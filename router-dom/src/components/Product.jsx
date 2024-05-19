import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;

  const navigate = useNavigate(); // tıklandığında bir url'e yönlendirmek için kullanılır.

  return (
    <div style={{ marginBottom: "40px" }}>
      <div>Ürün detayı</div>
      <h3>İsim : {name}</h3>
      <h3>Fiyat : {price}</h3>
      <button onClick={()=> navigate("/product-details/" + id)}>Detayına git</button>
    </div>
  );
}

export default Product;
