import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNigeria(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#nigeria_svg__clip0_4:7239)">
        <Path
          d="M256.988 512c141.385 0 256-114.615 256-256S398.373 0 256.988 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M.988 256c0 110.072 69.472 203.906 166.957 240.078V15.924C70.46 52.094.988 145.93.988 256zM512.988 256c0-110.07-69.472-203.906-166.957-240.076V496.08C443.516 459.906 512.988 366.072 512.988 256z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="nigeria_svg__clip0_4:7239">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNigeria;
