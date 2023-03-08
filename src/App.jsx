import { useState, useEffect } from "react";
import "./assets/index.scss";
import useContentful from "./useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {BLOCKS, INLINES} from '@contentful/rich-text-types'

function App() {
  const [content, setContent] = useState([]);

  const { getContent } = useContentful();
  useEffect(() => {
    (async () => {
      const response = await getContent();
      console.log(response);
      setContent(response);
    })();
  }, []);

  const richtextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.data.uri}>{children}</a>
      },
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  }

  return (
    <div className="App">
      {content.map((content, index) => (
        <div key={index}>
          {content.title} <br />
          {content.author} <br />
          {content.date} <br />
          <img  src={content.headerImage.file.url} />
          {documentToReactComponents(content.content, richtextOptions)}
        </div>
      ))}
    </div>
  );
}

export default App;
