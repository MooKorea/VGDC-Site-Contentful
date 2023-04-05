import React, { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import useRichtextOptions from "../hooks/useRichtextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Helmet } from "react-helmet";

export default function blogExample() {
  const [content, setContent] = useState([]);

  const { getContent } = useContentful("blogPost");
  useEffect(() => {
    (async () => {
      const response = await getContent();
      setContent(response);
    })();
  }, []);

  const richtextOptions = useRichtextOptions();
  const parseDate = (ISOdate) => {
    const date = new Date(ISOdate);
    const parsedDate = date.toLocaleDateString();
    return `${parsedDate}`;
  };

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="title" content="About Us" />
        <meta
          name="description"
          content="We are actors, artists, designers, musicians, programmers, writers, and more! All skill levels are welcome, and we’re always willing to teach."
        />
        <meta
          name="keywords"
          content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev, blog, blog post"
        />
      </Helmet>
      <div className="header-spacer"></div>
      <main className="blog">
        {content.map((content, index) => (
          <article key={index}>
            <h2>{content.title}</h2>
            <div className="author">By {content.author}</div>
            <div className="date">{parseDate(content.date)}</div>
            <img src={content.headerImage.file.url} className="thumbnail-img" />
            {documentToReactComponents(content.content, richtextOptions)}
          </article>
        ))}
      </main>
    </>
  );
}
