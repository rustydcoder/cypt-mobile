import React from "react";
import Svg, { Ellipse } from "react-native-svg";

const MastercardIcon = ({
  width = 54,
  height = 37,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} viewBox="0 0 54 37" fill="none">
    <Ellipse
      cx="36.5"
      cy="18.4211"
      rx="17.5"
      ry="18.4211"
      fill="#E1AC25"
      fillOpacity={0.6}
    />
    <Ellipse
      cx="17.5"
      cy="18.4211"
      rx="17.5"
      ry="18.4211"
      fill="#E72E2E"
      fillOpacity={0.93}
    />
  </Svg>
);

export default MastercardIcon;
