import React, { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import useRichtextOptions from "../hooks/useRichtextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default function About() {
  const [content, setContent] = useState([]);
  const { getContent } = useContentful('faqPage');
  useEffect(() => {
    (async () => {
      const response = await getContent();
      setContent(documentToReactComponents(response, richtextOptions));
    })();
  }, []);

  const richtextOptions = useRichtextOptions()

  return (
    <main className="FAQ">
      {content}
    </main>
  )
}
