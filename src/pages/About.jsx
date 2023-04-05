import React, { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import useRichtextOptions from "../hooks/useRichtextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Helmet } from "react-helmet";

export default function About() {
  const [content, setContent] = useState([]);
  const { getContent } = useContentful("aboutPage");
  useEffect(() => {
    (async () => {
      const response = await getContent();
      setContent(documentToReactComponents(response, richtextOptions));
    })();
  }, []);

  const richtextOptions = useRichtextOptions();

  return (
    <main className="About-Us">
      <Helmet>
        <title>About Us</title>
        <meta name="title" content="About Us" />
        <meta
          name="description"
          content="We are actors, artists, designers, musicians, programmers, writers, and more! All skill levels are welcome, and we’re always willing to teach."
        />
        <meta
          name="keywords"
          content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev, about us"
        />
      </Helmet>
      {content}
    </main>
  );
}
