import React, { useState } from "react";
import GamePanel from "./GamePanel";
import SidebarContent from "./SidebarContent";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function Games() {
  const defaultSidebar = (
    <div className="defaultSidebar" key={1}>
      <p>No game selected</p>
    </div>
  );

  const [gameInfo, setGameInfo] = useState([defaultSidebar]);
  const mediaQuery = useMediaQuery("md");
  const [games, setGames] = useState([]);
  const [sidebarClose, setSidebarClose] = useState(true);
  const [activeItem, setActiveItem] = useState();

  const panelSelect = (e, index) => {
    setActiveItem(index);
    setSidebarClose(false);
    setGameInfo(<SidebarContent data={games[index]} setSidebarClose={setSidebarClose} />);
  };

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
      <img className="games-background-triangles" src="/images/Triangle-Graphic.svg" />
      <main className="games">
        <aside
          className="games-sidebar"
          style={handleMediaQuery(null, { minWidth: "100vw", pointerEvents: "none" })}
        >
          <motion.div
            className={"sticky"}
            animate={handleMediaQuery(
              { x: 0, opacity: 1 },
              { x: sidebarClose ? "-100vw" : 0, opacity: sidebarClose ? 0 : 1 }
            )}
            transition={{ ease: "circOut", opacity: { ease: "linear" } }}
            style={handleMediaQuery(null, { width: "100vw", pointerEvents: "all" })}
          >
            {gameInfo}
          </motion.div>
        </aside>
        <GamePanel
          panelSelect={panelSelect}
          activeItem={activeItem}
          games={games}
          setGames={setGames}
        />
      </main>
    </>
  );
}
