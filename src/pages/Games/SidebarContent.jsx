import React from "react";
import Slides from "./Slides";
import OptionalData from "./OptionalData";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function SidebarContent({ data, setSidebarClose }) {
  const mediaQuery = useMediaQuery("md");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  return (
    <motion.div
      className="sidebar-content"
      key={data.title}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {handleMediaQuery(
        null,
        <button className="close-button" onClick={() => {
          setSidebarClose(true)
        }}>
          BACK
        </button>
      )}
      <div
        className="blurredBackground"
        style={{ backgroundImage: `url(${data.thumbnail})` }}
      ></div>
      <Slides
        thumbnail={data.thumbnail}
        media1={data.media1}
        media2={data.media2}
        media3={data.media3}
      />
      <div className="gameInfo">
        <div className="header">
          <h2>{data.title}</h2>
          <OptionalData
            field="date"
            data={data.date}
          />
          <div className="graphic">
            <img className="triangles" src="/images/Triangle-Graphic.svg"></img>
            <div className="playbutton-background"></div>
            <OptionalData
              field="link"
              data={data.buildLink}
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
            data={data.description}
          />
          <OptionalData field="theme" data={data.theme} />
          <OptionalData field="credits" data={data.credits} />
        </div>
      </div>
    </motion.div>
  );
}
