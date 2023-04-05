import React, { useRef, useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
        if (mediaQuery) {
          H1TextLine[i].style.marginLeft = `${i * 40}px`;
        } else {          
          H1TextLine[i].style.marginLeft = `${i * 20}px`;
        }
      }
      await sleep(2000)
      for (let i = 0; i < H1TextLine.length; i++) {
        H1TextLine[i].style.transition = 'none';
      }
      H1TextLine[0].parentNode.style.transition = 'none';
    }

    window.addEventListener("load", videoIntro());
    return () => window.removeEventListener("load", videoIntro());
  }, []);

  const bgVideo = useRef()

  const mediaQuery = useMediaQuery("md");
  const handleMediaQuery = (big, small, size) => {
    let sizeSelect = mediaQuery;
    const video = bgVideo.current?.children[0]
    video?.load();
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

console.log(mediaQuery)
  return (
    <header>
      <video className="home-intro" autoPlay muted playsInline ref={introVideo}>
        <source src="/videos/vgdcWebMTest.hevc.mp4" type="video/mp4; codecs='hvc1'" />
        <source src="/videos/vgdcWebMTest.mkv" type="video/mp4" />
      </video>
      <div ref={bgVideo}>
        {handleMediaQuery(
          <video className="home-video" autoPlay loop muted playsInline>
            <source src="/videos/VGDCReelCut.mp4" type="video/mp4" />
          </video>,
          <video className="home-video-mobile" autoPlay loop muted playsInline>
            <source src="/videos/VGDCReelCutMobile.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <HomeHeader />
    </header>
  );
}
