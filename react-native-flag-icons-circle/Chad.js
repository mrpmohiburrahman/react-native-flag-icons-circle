import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgChad(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#chad_svg__clip0_4:7122)">
        <Path
          d="M256 .001c-31.314 0-61.311 5.633-89.043 15.923l-11.131 240.077 11.13 240.077c27.733 10.291 57.73 15.923 89.044 15.923s61.311-5.632 89.043-15.923l11.131-240.077-11.13-240.077C317.311 5.634 287.314.001 256 .001z"
          fill="#FFDA44"
        />
        <Path
          d="M512 256.001c0-110.071-69.472-203.906-166.957-240.077V496.08C442.528 459.907 512 366.072 512 256.001z"
          fill="#D80027"
        />
        <Path
          d="M166.957 496.078V15.924C69.472 52.095 0 145.93 0 256.001s69.472 203.906 166.957 240.077z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="chad_svg__clip0_4:7122">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgChad;
