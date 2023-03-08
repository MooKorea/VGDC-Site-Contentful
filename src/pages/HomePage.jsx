import React, { useRef, useEffect } from "react";

export default function HomePage() {
  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  const introVideo = useRef();

  useEffect(() => {
    const HomeHeader = document.querySelector(".home-heading");
    const H1TextLine = document.querySelectorAll("h1>span");
    async function videoIntro() {
      setTimeout(() => {
        introVideo.current.remove();
      }, 3000);

      await sleep(1684);
      HomeHeader.style.opacity = "1";
      for (let i = 0; i < H1TextLine.length; i++) {
        await sleep(i * 100);
        H1TextLine[i].style.marginLeft = `${i * 40}px`;
      }
    }

    window.addEventListener("load", videoIntro());
    return () => window.removeEventListener("load", videoIntro())

  }, []);

  return (
    <header>
      <video className="home-intro" autoPlay muted="muted" ref={introVideo}>
        <source
          src="/videos/vgdcWebMTest.hevc.mp4"
          type="video/mp4; codecs='hvc1'"
        />
        <source
          src="/videos/vgdcWebMTest.mkv"
          type="video/mp4"
        />
        "Your browser does not support the video tag."
      </video>
      <video className="home-video" autoPlay loop="loop" muted="muted">
        <source
          src="/videos/VGDCReelCut.mp4"
          type="video/mp4"
        />
        "Your browser does not support the video tag."
      </video>
      <img
        className="home-dark-bg"
        src="/images/home/Heading-Background.svg"
      />
      <img
        className="home-text-bg"
        src="/images/home/Heading-Text-BG.svg"
      />
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
    </header>
  );
}
