import React from "react";
import Main from "./Main";
import { Helmet } from "react-helmet";

export default function Games() {
  return (
    <>
      <Helmet>
        <title>Games</title>
        <meta name="title" content="Games" />
        <meta name="description" content="View the games made from VGDC!" />
        <meta
          name="keywords"
          content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev, about us"
        />
      </Helmet>
      <Main />
    </>
  );
}
