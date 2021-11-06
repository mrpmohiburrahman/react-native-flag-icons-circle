import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSlovenia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#slovenia_svg__clip0_4:7285)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M496.077 166.957H222.609v-66.783H89.043v66.783h-73.12C5.633 194.689 0 224.686 0 256c0 31.314 5.633 61.31 15.923 89.043L256 367.304l240.077-22.261C506.367 317.31 512 287.314 512 256c0-31.314-5.633-61.311-15.923-89.043z"
          fill="#0052B4"
        />
        <Path
          d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.093 442.528 145.929 512 256 512z"
          fill="#D80027"
        />
        <Path
          d="M89.043 166.957v22.26c0 51.121 66.783 66.784 66.783 66.784s66.783-15.663 66.783-66.784v-22.26l-22.261 22.261-44.522-33.391-44.522 33.391-22.261-22.261z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="slovenia_svg__clip0_4:7285">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSlovenia;
