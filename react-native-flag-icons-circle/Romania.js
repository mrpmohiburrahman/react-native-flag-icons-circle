import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgRomania(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#romania_svg__clip0_4:7265)">
        <Path
          d="M345.043 15.922C317.309 5.633 287.314 0 256 0c-31.314-.001-61.31 5.633-89.043 15.922l-22.261 240.077 22.261 240.077C194.689 506.368 224.685 512 256 512c31.313 0 61.31-5.632 89.043-15.924L367.303 256l-22.26-240.078z"
          fill="#FFDA44"
        />
        <Path
          d="M512 256c0-110.07-69.472-203.907-166.957-240.077v480.156C442.528 459.905 511.999 366.072 512 256z"
          fill="#D80027"
        />
        <Path
          d="M0 255.999c0 110.073 69.472 203.906 166.955 240.079l.001-480.154C69.472 52.094 0 145.928 0 255.999z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="romania_svg__clip0_4:7265">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgRomania;
