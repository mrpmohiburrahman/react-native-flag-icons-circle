import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBulgaria(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#bulgaria_svg__clip0_4:7111)">
        <Path
          d="M512.989 256c0-31.314-5.632-61.311-15.923-89.043l-240.077-11.131-240.077 11.13C6.622 194.689.99 224.686.99 256s5.633 61.311 15.923 89.043l240.077 11.131 240.077-11.13c10.291-27.733 15.923-57.73 15.923-89.044z"
          fill="#496E2D"
        />
        <Path
          d="M256.989 512c110.071 0 203.906-69.472 240.077-166.957H16.912C53.083 442.528 146.918 512 256.99 512z"
          fill="#D80027"
        />
        <Path
          d="M16.912 166.957h480.155C460.895 69.472 367.06 0 256.989 0S53.083 69.472 16.912 166.957z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="bulgaria_svg__clip0_4:7111">
          <Path fill="#fff" transform="translate(.99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBulgaria;
