import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBalearicislands(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#balearic_islands_svg__clip0_4:7092)">
        <Path
          d="M256.001.001c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256-141.384 0-256-114.616-256-256"
          fill="#FFDA44"
        />
        <Path
          d="M250.436 113.779H468.88a257.411 257.411 0 00-51.987-56.889H250.436v56.889zM250.436 227.557h259.985a254.547 254.547 0 00-13.006-56.888H250.436v56.888zM14.588 341.335h482.825a254.566 254.566 0 0013.007-56.89H1.582a254.375 254.375 0 0013.006 56.89zM95.108 455.112h321.784a257.434 257.434 0 0051.987-56.889H43.123a257.447 257.447 0 0051.985 56.889z"
          fill="#D80027"
        />
        <Path
          d="M256.001.001C114.616.001-.001 114.617 0 256.003c58.426-.002 114.616 0 256 0L256.001.001z"
          fill="#4A1F63"
        />
        <Path
          d="M211.479 133.566v22.261h-11.13v-22.261h-22.261v22.261h-11.13v-44.522h-44.522v44.522h-11.131v-22.261h-22.26v22.261H77.914v-22.261H55.652v66.782H233.74v-66.782h-22.261z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="balearic_islands_svg__clip0_4:7092">
          <Path fill="#fff" d="M0 0h512.001v512.001H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBalearicislands;
