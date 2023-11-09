import React from "react";
import Slice from "./Path";

const Pie = ({ radius, data, colors, hole, strokeWidth, ...props }) => {
  let colorsLength = colors.length,
    diameter = radius * 2,
    sum,
    startAngle;

  sum = data.reduce(function (carry, current) {
    return carry + current;
  }, 0);

  startAngle = 0;

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={"0 0 " + diameter + " " + diameter}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {data.map((item, itemIndex) => {
        let angle, nextAngle, percent;

        nextAngle = startAngle;
        angle = (item / sum) * 360;
        percent = (item / sum) * 100;
        startAngle += angle;

        return (
          <Slice
            key={itemIndex}
            value={item}
            percent={percent}
            percentValue={percent.toFixed(1)}
            startAngle={nextAngle}
            angle={angle}
            radius={radius}
            hole={radius - hole}
            trueHole={hole}
            fill={colors[itemIndex % colorsLength]}
            Width={strokeWidth}
            {...props}
          />
        );
      })}
    </svg>
  );
};

export default Pie;
