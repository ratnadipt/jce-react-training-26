import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  let searchText = useRef("");
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    stock: 0,
    description: "",
    images: ["lajdfalsdfj"],
  });

  useEffect(function () {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleTest() {
    axios
      .get("https://dummyjson.com/products/13")
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleSearch() {
    axios
      .get(
        "https://dummyjson.com/products/search?q=" + searchText.current.value,
      )
      .then(function (res) {
        setProducts(res.data.products);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/products/add", formData)
      .then(function (res) {
        // console.log(res);
        setProducts(function (old) {
          return [res.data, ...old];
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleDelete(id) {
    axios
      .delete("https://dummyjson.com/products/" + id)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (e) {
        console.log(e);
      });

    let newProducts = products.filter(function (product) {
      return product.id != id;
    });

    setProducts(newProducts);
  }
  return (
    <div className="app">
      <div>
        <button type="button" onClick={handleTest}>
          Testing
        </button>
      </div>

      <div className="search">
        <input type="text" ref={searchText} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="title" onChange={handleChange} />
          </div>
          <div className="row">
            <input type="text" name="description" onChange={handleChange} />
          </div>
          <div className="row">
            <input type="text" name="price" onChange={handleChange} />
          </div>
          <div className="row">
            <input type="text" name="stock" onChange={handleChange} />
          </div>
          <div className="row">
            <button type="submit">ADD PRODUCT</button>
          </div>
        </form>
      </div>
      <div className="container">
        {isLoading && <h1>Loading..........</h1>}
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
              <button
                type="button"
                onClick={function () {
                  handleDelete(product.id);
                }}
              >
                DELETE PRODUCT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
