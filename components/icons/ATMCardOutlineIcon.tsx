import React from "react";
import Svg, { Path } from "react-native-svg";

type ATMCardOutlineIconProps = {
  color?: string;
  size?: number;
};

const ATMCardOutlineIcon = ({
  color = "black",
  size = 20,
  ...props
}: ATMCardOutlineIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M16.875 3.95831H3.125C2.43464 3.95831 1.875 4.51796 1.875 5.20831V14.7916C1.875 15.482 2.43464 16.0416 3.125 16.0416H16.875C17.5654 16.0416 18.125 15.482 18.125 14.7916V5.20831C18.125 4.51796 17.5654 3.95831 16.875 3.95831Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.4583 14.375V13.5417M1.875 6.875H18.125M13.9583 14.375V13.5417M15.2083 14.375V13.5417"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ATMCardOutlineIcon;
