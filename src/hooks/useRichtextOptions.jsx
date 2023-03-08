import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function useRichtextOptions() {
  const richtextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank">
            {children}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return richtextOptions;
}
