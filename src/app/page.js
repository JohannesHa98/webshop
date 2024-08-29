"use client";

import "./globals.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((module) => {})
      .catch((err) => {
        console.error("Failed to load Bootstrap JavaScript", err);
      });
  }, []);

  return (
    <main>
      <section
        id="carouselExampleIndicators" 
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class=""
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
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
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
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
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
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

      <section class="product-grid py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Nike Zoom Lebron Soldier 10</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Jordan Ultra Fly</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Lebron XIII Limited</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Jordan Ultra Fly</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Kyrie 2</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="placeholder-box"></div>
              <p>Lebron XIII Limited</p>
            </div>
          </div>
        </div>
      </section>

      <section class="features py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="feature-box">
                <div>
                  <h3>Fight Like a Spider</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="feature-box">
                <div>
                  <h3>Run Like a Cheetah</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
