import React from "react";

const SubTitle = ({
  radius,
  fill,
  textAnchor,
  subTitle1,
  subTitle2,
  currency
}) => {
  return (
    <text x={radius} y={radius} fill={fill} textAnchor={textAnchor}>
      <tspan style={{fontSize : '18px', fontWeight : 'bold', color : '#E2E8F0'}}>
        {subTitle2}
      </tspan>
      <tspan x={radius} y={radius + 20}>{subTitle1}</tspan>
    </text>
  );
};

export default SubTitle;
