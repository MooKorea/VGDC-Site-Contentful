import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function useSlides({ thumbnail, media1, media2, media3 }) {
  let mediaObj = Object.fromEntries(
    Object.entries({ thumbnail, media1, media2, media3 }).filter(([_, v]) => v != null)
  );
  const mediaArr = Object.values(mediaObj).filter((n) => n);

  const [media, setMedia] = useState([<img src={mediaArr[0]} />]);
  let [slide, setSlide] = useState(0);
  const [direction, setdirection] = useState(-200);

  useEffect(() => {
    setSlide(0);
  }, [thumbnail]);

  useEffect(() => {
    const cycle = Math.abs(slide % mediaArr.length);
    setMedia(
      <motion.img
        key={mediaArr[cycle]}
        src={mediaArr[cycle]}
        initial={{ opacity: 0, x: direction }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "backOut" }}
      />
    );
  }, [slide]);

  const scrollButtons = () => {
    if (mediaArr.length <= 1) return;
    return (
      <div className="buttons">
        <div
          className="button-left"
          onClick={() => {
            setSlide(--slide);
            setdirection(-400);
          }}
        >
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
        <div
          className="button-right"
          onClick={() => {
            setSlide(++slide);
            setdirection(400);
          }}
        >
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
