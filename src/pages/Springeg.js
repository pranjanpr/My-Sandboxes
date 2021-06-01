import React from "react";
import { useSpring, animated } from "react-spring";

function Springeg() {
  const styles = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" }
    ],
    from: { opacity: 0, color: "red" }
  });
  // ...
  return (
    <animated.div style={styles}>
      <h1>I will fade in and out </h1>
    </animated.div>
  );
}

export default Springeg;
