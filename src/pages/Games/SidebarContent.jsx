import React from "react";
import Slides from "./Slides";
import OptionalData from "./OptionalData";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SidebarContent({ data }) {
  const thumbnail = data.getAttribute("data-thumbnail");
  const title = data.getAttribute("data-title");

  const mediaQuery = useMediaQuery('md')
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  const handleClose = () => {
    document.querySelector(".sticky").classList.add("sidebar-collapse")
  }

  return (
    <>
      <div className="sidebar-content" key={title}>
      {handleMediaQuery(null, <button className="close-button" onClick={handleClose}>BACK</button>)}
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
            <OptionalData
              field="date"
              data={data.getAttribute("data-date")}
              placeholder={<p>Solo Project</p>}
            />
            <div className="graphic">
              <img className="triangles" src="/images/Triangle-Graphic.svg"></img>
              <div className="playbutton-background"></div>
              <OptionalData
                field="link"
                data={data.getAttribute("data-buildLink")}
                placeholder={
                  <a
                    className="play-button-greyed-out"
                    style={{ background: "gray" }}
                    title="Game Unavailable"
                  >
                    <img src="/images/PlayButtonTriangle.svg" />
                  </a>
                }
              />
            </div>
          </div>
          <div className="body">
            <OptionalData
              field="description"
              data={data.getAttribute("data-description")}
            />
            <OptionalData field="theme" data={data.getAttribute("data-theme")} />
            <OptionalData field="credits" data={data.getAttribute("data-credits")} />
          </div>
        </div>
      </div>
    </>
  );
}
