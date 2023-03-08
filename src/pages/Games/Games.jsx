import React, { useState, useEffect, useRef } from "react";
import GamePanel from "./GamePanel";
import Slides from "./Slides";
import useExpandable from "./useExpandable";

export default function Games() {
  const defaultSidebar = (
    <div className="defaultSidebar">
      <p>No game selected</p>
    </div>
  );
  const [gameInfo, setGameInfo] = useState([defaultSidebar]);

  const optionalData = (field, data) => {
    if (data === "---" || data === "") return;
    switch (field) {
      case "link":
        return (
          <a href={data} target="_blank">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26.5" r="26.5" fill="url(#paint0_radial_182_356)" />
              <path
                d="M39 25.2679C40.3333 26.0378 40.3333 27.9623 39 28.7321L21 39.1244C19.6667 39.8942 18 38.9319 18 37.3923L18 16.6077C18 15.0681 19.6667 14.1058 21 14.8756L39 25.2679Z"
                fill="white"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_182_356"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(5.5 -7) rotate(63.5911) scale(82.064)"
                >
                  <stop stop-color="#D236BE" />
                  <stop offset="1" stop-color="#6652DD" />
                </radialGradient>
              </defs>
            </svg>
            PLAY
          </a>
        );
      case "description":
        return <p dangerouslySetInnerHTML={{ __html: data }}></p>;
      case "credits":
        return (
          <>
            <h3>Credits</h3>
            <p dangerouslySetInnerHTML={{ __html: data }}></p>
          </>
        );
      case "date":
        return <p>{data}</p>;
      case "theme":
        return (
          <>
            <h3>Theme</h3>
            <p>{data}</p>
          </>
        );
    }
  };

  const panelSelect = (e) => {
    const markDisplay = document.querySelector('.sticky').childNodes
    markDisplay.forEach(e => e.setAttribute('data-display','false'))

    const data = e.target.closest(".panel");
    const selected = document.getElementsByClassName("selected");
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }
    data.classList.add("selected");

    const thumbnail = data.getAttribute("data-thumbnail");
    const title = data.getAttribute("data-title");
    const buildLink = optionalData("link", data.getAttribute("data-buildLink"));
    const description = optionalData(
      "description",
      data.getAttribute("data-description")
    );
    const credits = optionalData("credits", data.getAttribute("data-credits"));
    const date = optionalData("date", data.getAttribute("data-date"));
    const theme = optionalData("theme", data.getAttribute("data-theme"));

    let gameData = (
      <div className="sidebar-content">
        <div
          className="blurredBackground"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <Slides
          thumbnail={data.getAttribute("data-thumbnail")}
          media1={data.getAttribute("data-media1")}
          media2={data.getAttribute("data-media2")}
          media3={data.getAttribute("data-media3")}
        />
        <div className="gameInfo">
          <div className="header">
            <h2>{title}</h2>
            {date}
            <div className="triangles-graphic">
              <img src="/wp-content/themes/vgdc-theme/src/images/Triangle-Graphic.svg"></img>
            </div>
          </div>
          <div className="body">
            {buildLink}
            {description}
            {theme}
            {credits}
          </div>
        </div>
      </div>
    );

    setGameInfo((prevSidebar) => {
      return [...prevSidebar, gameData];
    });

    const prevSidebarElement = document.querySelectorAll('[data-display="false"]')
    
    prevSidebarElement.forEach(e => e.style.opacity = '0')
    setTimeout(() => {
      prevSidebarElement.forEach(e => e.remove())
    }, 700);
  };

  const getSidebar = useRef();
  const getSticky = useRef();
  useEffect(() => {
    const panel = getSidebar.current;
    const panelsticky = getSticky.current;
    let previousMousePosition;
    function resize(e) {
      const changeInX = previousMousePosition - e.x;
      previousMousePosition = e.x;
      panel.style.minWidth = parseInt(getComputedStyle(panel).width) - changeInX + "px";
      panelsticky.style.width =
        parseInt(getComputedStyle(panel).width) - changeInX + "px";
    }

    panel.addEventListener("mousedown", function (e) {
      if (e.offsetX >= parseInt(getComputedStyle(panel, "").width) - 15) {
        panelsticky.style.userSelect = "none";
        previousMousePosition = e.x;
        document.addEventListener("mousemove", resize, false);
      }
    });

    document.addEventListener("mouseup", function () {
      panelsticky.style.userSelect = "text";
      document.removeEventListener("mousemove", resize, false);
    });
  }, []);

  return (
    <>
      <aside className="games-sidebar" ref={getSidebar}>
        <div className="sticky" ref={getSticky}>
          {gameInfo}
        </div>
      </aside>
      <GamePanel panelSelect={panelSelect} />
    </>
  );
}
