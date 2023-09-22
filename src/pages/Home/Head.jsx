import React from "react";
import { Helmet } from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      <title>Video Game Development Club</title>
      <meta name="title" content="Video Game Development Club" />
      <meta
        name="description"
        content="We are actors, artists, designers, musicians, programmers, writers, and more! All skill levels are welcome, and we’re always willing to teach."
      />
      <meta
        name="keywords"
        content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev"
      />
      <link rel="canonical" href="https://vgdc.club/" />
    </Helmet>
  );
}
