import React from "react";
import Product from "./Product";
import formatAmount from "./formatAmount";

const Products = ({ products }) => {
  return (
    <ul className="product-grid">
      {products.map((product) => {
        return (
          <Product
            priceId={product.prices[0].id}
            image={product.images}
            name={product.name}
            description={product.description}
            price={formatAmount(product.prices[0].unit_amount)}
          />
        );
      })}
    </ul>
  );
};

export default Products;
