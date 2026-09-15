"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/assets/images/backgrounds/essential-oil.webp", alt: "Essential Oil" },
  { src: "/assets/images/backgrounds/carrier-oil.webp", alt: "Carrier Oil" },
  { src: "/assets/images/backgrounds/saw-palmetto.jpg", alt: "Black Seed Oil and Saw Palmetto Oil" },
  { src: "/assets/images/backgrounds/pharma-grade-oil.webp", alt: "Pharma Grade Oil" },
];

const INTERVAL_MS = 5000;
const SLIDE_MS = 600;
const LAST = SLIDES.length;
const TRACK = [SLIDES[LAST - 1], ...SLIDES, SLIDES[0]];

export function HomeHeroCarousel() {
  const [pos, setPos] = useState(1);
  const [animating, setAnimating] = useState(true);
  const lock = useRef(false);

  const finishMove = useCallback((current: number) => {
    if (current === 0) {
      setAnimating(false);
      setPos(LAST);
    } else if (current === LAST + 1) {
      setAnimating(false);
      setPos(1);
    }
    lock.current = false;
  }, []);

  const go = useCallback((dir: number) => {
    if (lock.current) return;
    lock.current = true;
    setAnimating(true);
    setPos((current) => current + dir);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => finishMove(pos), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [pos, finishMove]);

  useEffect(() => {
    let timer = 0;

    const start = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => go(1), INTERVAL_MS);
    };

    const onVisibility = () => {
      if (document.hidden) window.clearInterval(timer);
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [go, pos]);

  return (
    <section className="main-slider">
      <div id="homeCarousel" className="carousel slide home-hero-carousel">
        <div className="home-hero-carousel__viewport">
          <div
            className={`home-hero-carousel__track${animating ? " is-animating" : ""}`}
            style={{ transform: `translate3d(-${pos * 100}%, 0, 0)` }}
            onTransitionEnd={(event) => {
              if (event.propertyName === "transform") finishMove(pos);
            }}
          >
            {TRACK.map((slide, i) => (
              <div key={`${slide.src}-${i}`} className="home-hero-carousel__slide">
                <img src={slide.src} alt={slide.alt} className="d-block w-100" />
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
