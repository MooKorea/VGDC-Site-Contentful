import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function GamePanel({ panelSelect, activeItem, games, setGames }) {
  const fetchData = async (url) => {
    const res = await fetch(url);
    const result = await res.json();
    const sanitizedEntries = [];
    for (let i = 1; i < result.values[1].length; i++) {
      const r = result.values;
      if (r[1][i] === "") continue;
      const game = {};
      game.title = r[1][i];
      game.thumbnail = r[9][i];
      game.buildLink = r[3][i];
      game.description = r[4][i];
      game.credits = r[5][i];
      game.uploadDate = r[6][i];
      game.date = r[7][i];
      game.theme = r[8][i];
      game.media1 = r[10][i];
      game.media2 = r[11][i];
      game.media3 = r[12][i];
      sanitizedEntries.push(game);
    }
    console.log(sanitizedEntries.reverse())
    setGames(sanitizedEntries.reverse());
  };

  useEffect(() => {
    const spreadsheet_id = "1TavkbXHhw3hrDaRKhhNsevyRCM_UG8VD0x-d5eZnHZE";
    const tab_name = "Sheet1";
    const api_key = import.meta.env.VITE_GOOGLE_SHEETS_API;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${tab_name}?alt=json&key=${api_key}`;
    fetchData(url).catch(console.error);
  }, []);

  return (
    <div className="img-container">
      {games?.map((e, i) => {
        return (
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i / 14, duration: 0.4 }}
            className={activeItem === i ? "panel selected" : "panel"}
            key={i}
            onClick={(e) => {
              panelSelect(e, i);
            }}
          >
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={e.thumbnail}></img>
            </div>
            <figcaption className="title">{e.title}</figcaption>
          </motion.figure>
        );
      })}
    </div>
  );
}
