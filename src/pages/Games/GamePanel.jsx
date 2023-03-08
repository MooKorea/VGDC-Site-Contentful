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
    const fetchData = async () => {
      const res = await fetch("/wp-content/plugins/pull-games/fetched-games/Sheet1.html");
      const result = await res.text();
      parseHTML(result);

      //Sliding in Animation
      const panels = getPanels.current.children;
      for (let i = 0; i < panels.length; i++) {
        await sleep(70)
        panels[i].classList.add('panel-default')
      }
    };

    fetchData().catch(console.error);
  }, []);

  function parseHTML(response) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(response, "text/html");

    //remove divs
    const getTable = parsedDocument.querySelector("table");
    const getDivs = Array.from(getTable.querySelectorAll("div"));
    getDivs.forEach((e) => {
      e.insertAdjacentHTML("beforebegin", e.innerHTML);
      e.remove();
    });

    const getImgSrc = Array.from(parsedDocument.querySelectorAll("img"));
    getImgSrc.forEach((e) => {
      e.insertAdjacentHTML("beforebegin", e.getAttribute("src"));
      e.remove();
    });

    const getLinkHref = Array.from(parsedDocument.querySelectorAll("a"));
    getLinkHref.forEach((e) => {
      e.insertAdjacentHTML("beforebegin", e.getAttribute("href"));
      e.remove();
    });

    const gamesJSON = tableToJson(parsedDocument.querySelector("table"));
    setGames(gamesJSON);
  }

  function tableToJson(table) {
    const data = [];
    for (let i = 1; i < table.rows.length; i++) {
      const tableRow = table.rows[i];
      const rowData = [];
      for (let j = 0; j < tableRow.cells.length; j++) {
        rowData.push(tableRow.cells[j].innerHTML);
      }
      data.push(rowData);
    }
    return data;
  }

  if (games[2] !== undefined) {
    const panels = [];
    for (let i = games[2].length - 1; i >= 2; i--) {
      if (games[2][i] === "") continue;
      panels.push(
        <figure
          className="panel"
          data-title={games[1][i]}
          data-thumbnail={games[9][i]}
          data-buildLink={games[3][i]}
          data-description={games[4][i]}
          data-credits={games[5][i]}
          data-uploadDate={games[6][i]}
          data-date={games[7][i]}
          data-theme={games[8][i]}
          data-media1={games[10][i]}
          data-media2={games[11][i]}
          data-media3={games[12][i]}
          onClick={panelSelect}
        >
          <img className="thumbnail-image" src={games[9][i]}></img>
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
