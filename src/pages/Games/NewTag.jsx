import React from "react";
import { motion } from "framer-motion";

export default function NewTag() {
  const handleLetterAnim = (text) => {
    const textArr = text.split("");

    const variants = {
      slide: {
        y: [0, -3, 3, 0],
      },
    };

    return textArr.map((e, i) => {
      return (
        <motion.span
          key={i}
          variants={variants}
          animate="slide"
          transition={{
            delay: i * 0.05,
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          {e}
        </motion.span>
      );
    });
  };

  return <div className="new-tag">{handleLetterAnim("NEW!")}</div>;
}
