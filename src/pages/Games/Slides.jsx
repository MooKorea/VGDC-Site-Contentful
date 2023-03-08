import React, { useState, useEffect } from "react";

export default function useSlides({ thumbnail, media1, media2, media3 }) {
  let mediaObj = Object.fromEntries(
    Object.entries({ thumbnail, media1, media2, media3 }).filter(([_, v]) => v != null)
  );
  const mediaArr = Object.values(mediaObj);

  const [media, setMedia] = useState([<img src={mediaArr[0]}></img>]);
  let [slide, setSlide] = useState(0);
  let [direction, setDirection] = useState();

  useEffect(() => {
    setSlide(0);
    setDirection("");
  }, [thumbnail]);

  useEffect(() => {
    if (slide < 0 && direction === "left") {
      setSlide(mediaArr.length - 1);
    } else if (slide > mediaArr.length - 1 && direction === "right") {
      setSlide(0);
    }

    setMedia(<img src={mediaArr[slide]}></img>);
  }, [slide]);

  function handleSlideLeft() {
    setDirection("left");
    setSlide(--slide);
  }
  function handleSlideRight() {
    setDirection("right");
    setSlide(++slide);
  }

  const scrollButtons = () => {
    if (mediaArr.length <= 1) return;
    return (
      <div className="buttons">
        <div className="button-left" onClick={handleSlideLeft}>
          <svg
            style={{ marginRight: 2 }}
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999998 14.732C-0.333336 13.9622 -0.333334 12.0377 0.999999 11.2679L19 0.875642C20.3333 0.105841 22 1.06809 22 2.60769L22 23.3923C22 24.9319 20.3333 25.8942 19 25.1244L0.999998 14.732Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="button-right" onClick={handleSlideRight}>
          <svg
            style={{ marginLeft: 1 }}
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 11.2679C22.3333 12.0378 22.3333 13.9622 21 14.732L3 25.1244C1.66666 25.8942 6.86406e-07 24.9319 7.53704e-07 23.3923L1.66223e-06 2.60769C1.72953e-06 1.06809 1.66667 0.105844 3 0.875644L21 11.2679Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="media">
      {scrollButtons()}
      {media}
    </div>
  );
}
