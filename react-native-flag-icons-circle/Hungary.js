import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHungary(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.923 166.957C5.633 194.691 0 224.686 0 256c0 31.314 5.633 61.311 15.923 89.043L256 367.304l240.077-22.261C506.367 317.311 512 287.314 512 256c0-31.314-5.633-61.309-15.923-89.043L256 144.696 15.923 166.957z"
        fill="#F0F0F0"
      />
      <Path
        d="M256 0C145.93 0 52.094 69.472 15.924 166.957h480.155C459.906 69.472 366.072 0 256 0z"
        fill="#D80027"
      />
      <Path
        d="M256 512c110.072 0 203.906-69.472 240.078-166.957H15.924C52.094 442.528 145.93 512 256 512z"
        fill="#6DA544"
      />
    </Svg>
  );
}

export default SvgHungary;
