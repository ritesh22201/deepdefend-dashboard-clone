import React from "react";

import Item from "./Item";

export default function Doughnut() {
  const data = [5, 12, 8, 3, 10],
    subTitle1 = "Critical assets at risk",
    subTitle2 = "498",
    currency = "\u20B9",
    showLabel = false,
    colors = ["#43A19E", "#7B43A1", "#d10855", "#FF9824", "#51f16c"],
    radius = 76,
    hole = 65,
    stroke = 1,
    strokeWidth = 10;

  return (
    <div className="doughnut" style={{fontSize : '13px'}}>
      <div className="ui two column grid ">
        <div className="row ">
          <div className="ui items">
            <div className="column">
              <div className="item">
                <Item
                  data={data}
                  subTitle1={subTitle1}
                  subTitle2={subTitle2}
                  colors={colors}
                  radius={radius}
                  hole={hole}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  showLabel={showLabel}
                  currency={currency}
                />
              </div>
              <div className="column">
                <div className="content">
                  <div className="description">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
