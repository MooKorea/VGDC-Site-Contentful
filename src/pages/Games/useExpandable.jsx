import { useEffect, useState } from "react";

export default function useExpandable(element, borderWidth) {
  let [m_pos, setM_pos] = useState();
  useEffect(() => {
    const BORDER_SIZE = borderWidth;
    const panel = element.current;
    function resize(e) {
      const dx = m_pos - e.x;
      console.log(e.x)
      setM_pos(e.x)
      console.log(m_pos);
      panel.style.minWidth = parseInt(getComputedStyle(panel, "").width) + dx + "px";
    }
    panel.addEventListener(
      "mousedown",
      function (e) {
        if (e.offsetX >= parseInt(getComputedStyle(panel, "").width) - BORDER_SIZE) {
          setM_pos(e.x)
          document.addEventListener("mousemove", resize, false);
          console.log("resizing");
        }
      },
      false
    );

    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", resize, false);
      },
      false
    );
  }, []);
}
