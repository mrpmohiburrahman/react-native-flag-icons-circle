import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgGuinea(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#guinea_svg__clip0_4:7172)">
        <Path
          d="M345.046 15.925C317.312 5.634 287.315.001 256 .001c-31.313 0-61.309 5.633-89.041 15.922l-11.131 240.078 11.13 240.078c27.733 10.29 57.729 15.922 89.042 15.922 31.316 0 61.312-5.632 89.046-15.924l11.13-240.076-11.13-240.076z"
          fill="#FFDA44"
        />
        <Path
          d="M0 256.001c0 110.07 69.472 203.906 166.957 240.076V15.923C69.472 52.095 0 145.929 0 256.001z"
          fill="#D80027"
        />
        <Path
          d="M512 256.001c0-110.072-69.472-203.906-166.957-240.078v480.155C442.528 459.907 512 366.071 512 256.001z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="guinea_svg__clip0_4:7172">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgGuinea;
