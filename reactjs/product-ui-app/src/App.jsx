import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      {products.map(function (product) {
        return (
          <div className="card">
            <div className="card-header">
              <img src={product.images[0]} alt="" />
            </div>

            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="row">
              <h3>Price : {product.price}$</h3>
              <h4>Stock : {product.stock}</h4>
            </div>
            <button type="button">BUY NOW</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
