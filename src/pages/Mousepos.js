import React, { useState } from "react";

function Mousepos() {
  const [mousecor, setCor] = useState({ x_cor: 0, y_cor: 0 });

  const setCordinates = (e) => {
    var temp = {
      x: e.elementX,
      y: e.elementY
    };
    setCor((prevpos) => {
      return {
        x_cor: temp.x,
        y_cor: temp.y
      };
    });
  };

  window.addEventListener("mousemove", setCordinates);

  return (
    <div>
      <h1>
        x={mousecor.x_cor} y={mousecor.y_cor}
      </h1>
    </div>
  );
}

export default Mousepos;
