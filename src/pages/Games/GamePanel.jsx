import React, { useState, useEffect, useRef } from "react";

export default function GamePanel({ panelSelect }) {
  const [games, setGames] = useState([]);
  const getPanels = useRef();

  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  useEffect(() => {
    const spreadsheet_id = "1TavkbXHhw3hrDaRKhhNsevyRCM_UG8VD0x-d5eZnHZE";
    const tab_name = "Sheet1";
    const api_key = import.meta.env.VITE_GOOGLE_SHEETS_API;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${tab_name}?alt=json&key=${api_key}`;
    const newFetchData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setGames(result.values);
    };
    newFetchData().catch(console.error);
    
  }, []);


  if (games[1] !== undefined) {
    const panels = [];
    for (let i = games[1].length - 1; i >= 1; i--) {
      if (games[1][i] === "") continue;
      panels.push(
        <figure
          className="panel"
          key={i}
          style={{animationDelay: ((games[1].length - 1) - i)/10 + 's'}}
          data-title={games[1][i]}
          data-thumbnail={games[9][i]}
          data-buildlink={games[3][i]}
          data-description={games[4][i]}
          data-credits={games[5][i]}
          data-uploaddate={games[6][i]}
          data-date={games[7][i]}
          data-theme={games[8][i]}
          data-media1={games[10][i]}
          data-media2={games[11][i]}
          data-media3={games[12][i]}
          onClick={panelSelect}
        >
          <div className="thumbnail-image-container">
            <img className="thumbnail-image" src={games[9][i]}></img>
          </div>
          <figcaption className="title">{games[1][i]}</figcaption>
        </figure>
      );
    }

    return (
      <div className="img-container" ref={getPanels}>
        {panels}
      </div>
    );
  } else {
    return null;
  }
}
