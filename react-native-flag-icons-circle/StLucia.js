import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgStlucia(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#st_lucia_svg__clip0_4:7295)">
        <Path
          d="M256.578 512c141.385 0 256-114.615 256-256S397.963 0 256.578 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#338AF3"
        />
        <Path
          d="M161.969 345.043h189.218l-94.609-222.608-94.609 222.608z"
          fill="#F3F3F3"
        />
        <Path
          d="M194.849 322.783l61.729-140.409 61.729 140.409H194.849z"
          fill="#333"
        />
        <Path
          d="M161.969 345.043h189.218L256.578 256l-94.609 89.043z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="st_lucia_svg__clip0_4:7295">
          <Path fill="#fff" transform="translate(.578)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgStlucia;
