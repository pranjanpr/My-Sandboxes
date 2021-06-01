import React, { useState, useEffect } from "react";
import useMeasure from "./useMeasure";
import "./loadstyle.css";
import { useSpring, animated } from "react-spring";

function Initprog() {
  // const [bgsize, setBgsize] = useState(1000);
  const [bind, { width }] = useMeasure();
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => {
  //   setOffsetY(window.pageYOffset);
  //   setBgsize(window.pageYOffset + 1000);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const props = useSpring({
    from: {
      strokeDashoffset: 440,
      stroke: "hotpink"
    },
    to: {
      strokeDashoffset: 440 - (146 * width) / 100,
      stroke: "turquoise"
    },
    config: { duration: 1000 }
  });

  const textstyle = useSpring({
    from: {
      color: "#0a192f"
    },
    to: {
      color: "turquoise"
    },
    config: { duration: 500 },
    delay: 1000
  });
  return (
    <div
      class="body"
      // style={{
      //   transform: `translateY(-${offsetY * 0.5}px)`,
      //   backgroundSize: `${bgsize}px`
      // }}
    >
      <div {...bind} class="box">
        <animated.div class="percent">
          <animated.svg>
            <animated.circle cx="70" cy="70" r="40"></animated.circle>
            <animated.circle
              cx="70"
              cy="70"
              r="40"
              style={props}
            ></animated.circle>
          </animated.svg>
          <animated.div class="number">
            <animated.h2 style={textstyle}>R</animated.h2>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}
export default Initprog;
