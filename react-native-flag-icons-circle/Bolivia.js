import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBolivia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#bolivia_svg__clip0_4:7102)">
        <Path
          d="M512 256.001c0-31.314-5.632-61.311-15.923-89.043L256 155.827l-240.077 11.13C5.632 194.69 0 224.687 0 256.001s5.632 61.311 15.923 89.043L256 356.175l240.077-11.13C506.368 317.312 512 287.315 512 256.001z"
          fill="#FFDA44"
        />
        <Path
          d="M256 512.001c110.071 0 203.906-69.472 240.077-166.957H15.923C52.093 442.529 145.929 512.001 256 512.001z"
          fill="#6DA544"
        />
        <Path
          d="M15.923 166.958h480.155C459.906 69.473 366.071.001 256 .001S52.094 69.473 15.923 166.958z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="bolivia_svg__clip0_4:7102">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBolivia;
