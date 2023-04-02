import React from "react";

export default function OptionalData({ data, field, placeholder }) {
  if (data === "---" || data === "") {
    if (placeholder === null) return null;
    return placeholder;
  }
  switch (field) {
    case "link":
      return (
        <a href={data} target="_blank" className="play-button-link" title="Play Game!">
        <img src="/images/PlayButtonTriangle.svg"/>
          Link to Game
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
}
