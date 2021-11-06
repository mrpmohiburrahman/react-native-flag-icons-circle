import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBenin(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#benin_svg__clip0_4:7099)">
        <Path
          d="M166.957 233.739l22.261 269.442C210.511 508.92 232.893 512 256 512c141.384 0 256-114.616 256-256l-345.043-22.261z"
          fill="#D80027"
        />
        <Path
          d="M166.957 256l22.26-247.181C210.511 3.08 232.893 0 256 0c141.384 0 256 114.616 256 256H166.957z"
          fill="#FFDA44"
        />
        <Path
          d="M0 256c0 118.279 80.221 217.805 189.217 247.181V8.819C80.221 38.195 0 137.72 0 256z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="benin_svg__clip0_4:7099">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBenin;
