import React from "react";
import { checkout } from "./checkout";

const Product = ({ priceId, image, name, description, price }) => {
  const onClick = () => {
    checkout(priceId);
  };

  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <div className="product">
        <h2>{name}</h2>
        <h3>NZ {price}</h3>
      </div>
      <p>{description}</p>
      <button onClick={onClick}>Buy now</button>
    </li>
  );
};

export default Product;
