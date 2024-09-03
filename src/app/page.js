"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";

async function fetchProducts() {
  const res = await fetch("https://webshop.wm3.se/api/v1/shop/products");
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
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JavaScript", err);
      });
  }, []);

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
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const debouncedSearch = debounce(async (query) => {
      try {
        if (query.trim() === "") {
          setFilteredProducts(products);
        } else {
          const res = await fetch(
            `https://webshop.wm3.se/api/v1/shop/products/search?q=${query}&media_file=true`,
            { signal }
          );

          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await res.json();
          setFilteredProducts(data.products);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to search products", error);
        }
      }
    }, 300);

    debouncedSearch(searchQuery);

    return () => {
      controller.abort();
      clearTimeout(debouncedSearch);
    };
  }, [searchQuery, products]);

  function debounce(func, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY <= 100) {
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
          <a
            className="navbar-brand fw-light fs-1 fs-md-3 fs-sm-4 ms-2 ps-2 ms-md-5 ps-md-5"
            href="#"
          >
            SPORTSHOES.COM
          </a>
          <div className="navbar-nav me-2 pe-2 me-md-5 pe-md-5">
            <a
              className="nav-link text-white ms-3 fs-5 position-relative"
              href="#"
            >
              MEN
            </a>
            <a
              className="nav-link text-white ms-3 fs-5 position-relative"
              href="#"
            >
              WOMEN
            </a>
          </div>
        </div>
      </nav>

      <section
        id="carouselIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="0"
              className="active rounded-circle"
              aria-label="Slide 1"
              aria-current="true"
              style={{ width: "12px", height: "12px" }}
            ></button>
            <div
              style={{
                width: "15px",
                height: "2px",
                backgroundColor: "#ddd",
                marginLeft: "-3px",
                opacity: 0.6,
              }}
            ></div>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "15px",
                height: "2px",
                backgroundColor: "#ddd",
                marginRight: "-3px",
                opacity: 0.6,
              }}
            ></div>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="1"
              className="rounded-circle"
              aria-label="Slide 2"
              style={{ width: "12px", height: "12px" }}
            ></button>
            <div
              style={{
                width: "15px",
                height: "2px",
                backgroundColor: "#ddd",
                marginLeft: "-3px",
                opacity: 0.6,
              }}
            ></div>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "15px",
                height: "2px",
                backgroundColor: "#ddd",
                marginRight: "-3px",
                opacity: 0.6,
              }}
            ></div>
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="2"
              className="rounded-circle"
              aria-label="Slide 3"
              style={{ width: "12px", height: "12px" }}
            ></button>
          </div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active custom-slide custom-slide-1">
            <div className="carousel-content d-flex align-items-center justify-content-start">
              <div className="button-group d-flex">
                <a href="#" className="btn btn-primary">
                  <span className="btn-text">BUY NOW</span>
                </a>
                <a href="#" className="btn btn-outline-primary">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item custom-slide custom-slide-2"></div>
          <div className="carousel-item custom-slide custom-slide-3"></div>
        </div>
      </section>

      <section className="product-grid-1">
        <div className="container-lg pt-5">
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
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 6).map((product) => (
                <div className="col" key={product.id}>
                  <a href="#" className="text-decoration-none">
                    <div className="card ratio ratio-1x1">
                      <img
                        src={product.product_image.url}
                        alt={product.name}
                        className="scaled-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          {product.name.toUpperCase()}
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>

      <section className="banners py-5 my-5">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center gx-0 gy-0">
            <div className="col-12 col-md-6 mb-md-0">
              <div
                className="banner-box d-flex align-items-end text-white p-3"
                style={{
                  backgroundImage: 'url("/images/muay.jpg")',
                  height: "750px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="banner-text ps-3 pb-5 mb-3">
                  <h3 className="banner-title fs-1 position-relative">
                    FIGHT LIKE A SPIDER
                  </h3>
                  <p className="banner-description fs-5 text-secondary mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    className="banner-link fs-4 text-white text-decoration-underline position-relative"
                    href="#"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="banner-box-2 d-flex align-items-end text-white p-3"
                style={{
                  backgroundImage: 'url("/images/sprint.jpg")',
                  height: "750px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="banner-text ps-3 pb-5 mb-3">
                  <h3 className="banner-title fs-1 position-relative">
                    RUN LIKE A CHEETAH
                  </h3>
                  <p className="banner-description fs-5 text-secondary mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    className="banner-link fs-4 text-white text-decoration-underline position-relative"
                    href="#"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
