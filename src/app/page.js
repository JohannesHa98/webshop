"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

async function fetchProducts() {
  const res = await fetch("https://webshop.wm3.se/api/v1/shop/products");
  const data = await res.json();
  return data.products;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    loadProducts();

    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((module) => {})
      .catch((err) => {
        console.error("Failed to load Bootstrap JavaScript", err);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <main>
      <nav className="navbar navbar-expand navbar-dark fixed-top">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            SPORTSHOES.COM
          </a>
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              Men
            </a>
            <a className="nav-link" href="#">
              Women
            </a>
          </div>
        </div>
      </nav>

      <section
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="460"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: First slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text
                x="50%"
                y="50%"
                fill="#555"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                ONE
              </text>
            </svg>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="460"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Second slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#666"></rect>
              <text
                x="50%"
                y="50%"
                fill="#444"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                TWO
              </text>
            </svg>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="460"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Third slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#555"></rect>
              <text
                x="50%"
                y="50%"
                fill="#333"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                THREE
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="product-grid pt-5">
        <div className="container">
          <div className="search-bar mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              filteredProducts.slice(0, 6).map((product) => (
                <div key={product.id} className="placeholder-box">
                  <img
                    src={product.product_image.url}
                    alt={product.name}
                    className="img-fluid mt-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                  <p className="product-name">{product.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="feature-box">
              <div>
                <h3>Fight Like a Spider</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="feature-box-2">
              <div>
                <h3>Run Like a Cheetah</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
