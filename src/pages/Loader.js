import React, { useState } from "react";
import useMeasure from "./useMeasure";
import "./styler.css";
import { useSpring, animated } from "react-spring";

function Loader() {
  const [bind, { width }] = useMeasure();
  const props = useSpring({
    from: {
      backgroundColor: "hotpink",
      width: 0
    },
    to: {
      backgroundColor: "turquoise",
      width: width
    },
    config: { duration: 1000 }
  });

  return (
    <div {...bind} class="main">
      <animated.div class="fill" style={props} />
      <animated.div class="content">
        {props.width.interpolate((x) =>
          Math.floor((x.toFixed(0) * 100) / width)
        )}
      </animated.div>
    </div>
  );
}
export default Loader;
