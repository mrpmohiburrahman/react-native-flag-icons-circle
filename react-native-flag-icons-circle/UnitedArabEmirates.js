import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgUnitedarabemirates(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#united_arab_emirates_svg__clip0_4:7320)">
        <Path
          d="M256 511.999c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M144.696 345.042l22.261 151.036c27.732 10.291 57.729 15.921 89.043 15.921 110.07 0 203.906-69.472 240.076-166.957h-351.38z"
          fill="#000"
        />
        <Path
          d="M144.696 166.956L166.957 15.92C194.689 5.629 224.686-.001 256-.001c110.07 0 203.906 69.472 240.076 166.957h-351.38z"
          fill="#6DA544"
        />
        <Path
          d="M0 255.999C0 366.07 69.473 459.905 166.957 496.076V15.922C69.473 52.093 0 145.928 0 256z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="united_arab_emirates_svg__clip0_4:7320">
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

export default SvgUnitedarabemirates;
