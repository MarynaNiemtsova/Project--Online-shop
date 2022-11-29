import { React, useEffect, useState } from "react";
import "./App.css";

import Products from "./services/Products";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Logo from "./logo.png";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-content">
          <h1>The Plants</h1>
        </div>
      </header>
      <main>
        <Products products={products} />;
      </main>
    </div>
  );
}

export default App;
