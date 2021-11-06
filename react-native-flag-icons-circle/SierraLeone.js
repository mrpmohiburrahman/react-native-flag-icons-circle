import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSierraleone(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#sierra_leone_svg__clip0_4:7280)">
        <Path
          d="M496.077 345.042C506.368 317.309 512 287.313 512 255.999c0-31.314-5.632-61.31-15.923-89.043L256 144.695 15.923 166.956C5.632 194.689 0 224.685 0 255.999c0 31.314 5.632 61.31 15.923 89.043L256 367.303l240.077-22.261z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 511.999c110.07 0 203.906-69.472 240.076-166.957H15.922C52.094 442.527 145.928 511.999 256 511.999z"
          fill="#338AF3"
        />
        <Path
          d="M256-.001c-110.072 0-203.906 69.472-240.078 166.957h480.155C459.906 69.471 366.07-.001 256-.001z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="sierra_leone_svg__clip0_4:7280">
          <Path
            fill="#fff"
            transform="translate(0 -.001)"
            d="M0 0h512v512H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSierraleone;
