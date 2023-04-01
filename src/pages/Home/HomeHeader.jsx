import React, { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function HomeHeader() {
  const mediaQuery = useMediaQuery("lg");
  const mediaQueryMd = useMediaQuery("md");
  const handleMediaQuery = (big, small, size) => {
    let sizeSelect = mediaQuery;
    if (size === "medium") sizeSelect = mediaQueryMd;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  return (
    <div className="home-header">
      {handleMediaQuery(
        <>
          <img className="home-bg multiply" src="/images/home/Heading-Background.svg" />
          <img className="home-bg screen" src="/images/home/Heading-Text-BG.svg" />
        </>,
        <>
          <img
            className="home-mobile-bg multiply"
            src="/images/home/Mobile-Heading-Background-Shadow.svg"
          />
          <img
            className="home-mobile-bg screen"
            src="/images/home/Mobile-Heading-Background.svg"
          />
        </>,
        "medium"
      )}
      <a href="https://youtu.be/AQx_KMoCgJU?t=27" target="_blank" >
        <img className="home-bg landing-button" src="/images/home/Landing-Button.svg" />
      </a>

      <h1 className="home-heading">
        <span>
          <svg
            width="34"
            height="38"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 15.5359C34.6667 17.0755 34.6667 20.9245 32 22.4641L6.5 37.1865C3.83333 38.7261 0.499998 36.8016 0.499998 33.7224L0.5 4.27757C0.5 1.19837 3.83333 -0.726135 6.5 0.813465L32 15.5359Z"
              fill="#86FFF8"
            />
          </svg>
          CREATE
        </span>
        <br />
        <span className="heading-1">
          <svg
            width="34"
            height="38"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 15.5359C34.6667 17.0755 34.6667 20.9245 32 22.4641L6.5 37.1865C3.83333 38.7261 0.499998 36.8016 0.499998 33.7224L0.5 4.27757C0.5 1.19837 3.83333 -0.726135 6.5 0.813465L32 15.5359Z"
              fill="#D9C6F2"
            />
          </svg>
          DESIGN
        </span>
        <br />
        <span className="heading-2">
          <svg
            width="34"
            height="38"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 15.5359C34.6667 17.0755 34.6667 20.9245 32 22.4641L6.5 37.1865C3.83333 38.7261 0.499998 36.8016 0.499998 33.7224L0.5 4.27757C0.5 1.19837 3.83333 -0.726135 6.5 0.813465L32 15.5359Z"
              fill="#ff65f0"
            />
          </svg>
          P<span>L</span>AY
        </span>
      </h1>
    </div>
  );
}
