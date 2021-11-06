import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgGermany(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#germany_svg__clip0_4:7162)">
        <Path
          d="M15.923 345.044C52.093 442.528 145.929 512.001 256 512.001s203.906-69.473 240.077-166.957L256 322.784l-240.077 22.26z"
          fill="#FFDA44"
        />
        <Path
          d="M256 .001C145.929.001 52.094 69.473 15.923 166.958L256 189.218l240.077-22.261C459.906 69.473 366.071.001 256 .001z"
          fill="#000"
        />
        <Path
          d="M15.923 166.958C5.633 194.691 0 224.687 0 256.001c0 31.314 5.633 61.31 15.923 89.043h480.155C506.368 317.311 512 287.315 512 256.001c0-31.314-5.632-61.31-15.923-89.043H15.923z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="germany_svg__clip0_4:7162">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgGermany;
