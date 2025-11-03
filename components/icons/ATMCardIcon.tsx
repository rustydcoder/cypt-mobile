import React from "react";
import Svg, { Path } from "react-native-svg";

type ATMCardIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const ATMCardIcon = ({
  color = "black",
  width = 20,
  height = 16,
  ...props
}: ATMCardIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 16" fill="none" {...props}>
    <Path
      d="M19.2857 15.9375H0.714286C0.319196 15.9375 0 15.6138 0 15.2131V11.5909H20V15.2131C20 15.6138 19.6808 15.9375 19.2857 15.9375ZM0 0.724432C0 0.32373 0.319196 0 0.714286 0H19.2857C19.6808 0 20 0.32373 20 0.724432V9.59872H0V0.724432ZM12.9241 4.88991C12.9241 4.98952 13.0045 5.07102 13.1027 5.07102H16.7857C16.8839 5.07102 16.9643 4.98952 16.9643 4.88991V3.25994C16.9643 3.16033 16.8839 3.07884 16.7857 3.07884H13.1027C13.0045 3.07884 12.9241 3.16033 12.9241 3.25994V4.88991Z"
      fill={color}
    />
  </Svg>
);

export default ATMCardIcon;
