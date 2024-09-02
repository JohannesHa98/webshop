"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";

async function fetchProducts() {
  const res = await fetch("https://webshop.wm3.se/api/v1/shop/products");
  const data = await res.json();
  return data.products;
}

async function searchProducts(query) {
  const res = await fetch(
    `https://webshop.wm3.se/api/v1/shop/products/search?q=${query}&media_file=true`
  );
  const data = await res.json();
  return data.products;
}

const barlowCondensedMedium = Barlow_Condensed({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");

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
    async function handleSearch() {
      try {
        if (searchQuery === "") {
          setFilteredProducts(products);
        } else {
          const data = await searchProducts(searchQuery);
          setFilteredProducts(data);
        }
      } catch (error) {
        console.error("Failed to search products", error);
      }
    }
    handleSearch();
  }, [searchQuery, products]);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY <= 200) {
        setBgColor("rgba(0, 0, 0, 0)");
      } else {
        setBgColor("black");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <main className={`${barlowCondensedMedium.className}`}>
      <nav
        className={`navbar navbar-expand navbar-dark fixed-top ${
          navbarVisible ? "visible" : "hidden"
        } ${bgColor === "black" ? "bg-active" : ""}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            SPORTSHOES.COM
          </a>
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              MEN
            </a>
            <a className="nav-link" href="#">
              WOMEN
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
          <div className="carousel-item active custom-slide custom-slide-1">
            <div className="carousel-content d-flex align-items-center justify-content-center">
              <div className="text-container">
                <h1 className="title">LEBRON XIII 25K</h1>
                <div className="subtitle">
                  <p>Started From</p>
                  <p className="subtitle-price">728$</p>
                </div>
                <div className="button-group">
                  <a href="#" className="btn btn-primary">
                    <span className="btn-text">BUY NOW</span>
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    LEARN MORE
                  </a>
                </div>
                <div className="image-container">
                  <Image
                    src="/images/shoepng.png"
                    alt="Shoe"
                    className="rotated-image"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item custom-slide custom-slide-2">
            <div className="carousel-content d-flex align-items-center justify-content-center">
              <div className="text-container">
                <h1 className="title title-color">LEBRON XIII 25K</h1>
                <div className="subtitle">
                  <p>Started From</p>
                  <p className="subtitle-price">728$</p>
                </div>
                <div className="button-group">
                  <a href="#" className="btn btn-primary">
                    <span className="btn-text">BUY NOW</span>
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    LEARN MORE
                  </a>
                </div>
                <div className="image-container">
                  <Image
                    src="/images/shoepng.png"
                    alt="Shoe"
                    className="rotated-image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item custom-slide custom-slide-3">
            <div className="carousel-content d-flex align-items-center justify-content-center">
              <div className="text-container">
                <h1 className="title">LEBRON XIII 25K</h1>
                <div className="subtitle">
                  <p>Started From</p>
                  <p className="subtitle-price">728$</p>
                </div>
                <div className="button-group">
                  <a href="#" className="btn btn-primary">
                    <span className="btn-text">BUY NOW</span>
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    LEARN MORE
                  </a>
                </div>
                <div className="image-container">
                  <Image
                    src="/images/shoepng.png"
                    alt="Shoe"
                    className="rotated-image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-grid-1">
        <div className="container-fluid">
          <div className="product-grid-container">
            <div className="search-bar mb-3 position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 6).map((product) => (
                  <a href="#" key={product.id} className="placeholder-box">
                    <img
                      src={product.product_image.url}
                      alt={product.name}
                      className="img-fluid mt-4"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                    <p className="product-name">{product.name.toUpperCase()}</p>
                  </a>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="feature-box">
              <div className="feature-text">
                <h3 className="feature-title">FIGHT LIKE A SPIDER</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="feature-link" href="#">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="feature-box-2">
              <div className="feature-text">
                <h3 className="feature-title">RUN LIKE A CHEETAH</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="feature-link" href="#">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
