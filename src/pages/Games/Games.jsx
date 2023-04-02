import React, { useState, useEffect, useRef } from "react";
import GamePanel from "./GamePanel";
import SidebarContent from "./SidebarContent";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Games() {
  const defaultSidebar = (
    <div className="defaultSidebar" key={1}>
      <p>No game selected</p>
    </div>
  );
  const [gameInfo, setGameInfo] = useState([defaultSidebar]);
  const mediaQuery = useMediaQuery("md");

  const panelSelect = (e) => {

    document.querySelector(".sticky").classList.remove("sidebar-collapse")

    const data = e.target.closest(".panel");
    const selected = document.getElementsByClassName("selected");
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }
    data.classList.add("selected");

    
    const markDisplay = document.querySelector(".sticky").childNodes;
    markDisplay.forEach((e) => e.setAttribute("data-display", "false"));

    setGameInfo((prevSidebar) => {
      return [...prevSidebar, <SidebarContent data={data} />];
    });

    const prevSidebarElement = document.querySelectorAll('[data-display="false"]');

    prevSidebarElement.forEach((e) => (e.style.opacity = "0"));

    let time = 700
    if (!mediaQuery) time = 0;
    setTimeout(() => {
      prevSidebarElement.forEach((e) => e.remove());
    }, time);
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

  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  return (
    <>
      <img className="games-background-triangles" src="/images/Triangle-Graphic.svg"/>
      <main className="games">
        <aside
          className="games-sidebar"
          ref={getSidebar}
          style={handleMediaQuery(null, { minWidth: "100vw", pointerEvents: "none" })}
        >
          <div
            className={handleMediaQuery("sticky", "sticky sidebar-collapse")}
            ref={getSticky}
            style={handleMediaQuery(null, { width: "100vw", pointerEvents:"all" })}
          >
            {gameInfo}
          </div>
        </aside>
        <GamePanel panelSelect={panelSelect} />
      </main>
    </>
  );
}
