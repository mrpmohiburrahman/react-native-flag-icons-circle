import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNetherlands(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#netherlands_svg__clip0_4:7235)">
        <Path
          d="M256.988 512c141.385 0 256-114.615 256-256S398.373 0 256.988 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256.988 0C146.917 0 53.082 69.472 16.911 166.957h480.155C460.894 69.472 367.059 0 256.988 0z"
          fill="#A2001D"
        />
        <Path
          d="M256.988 512c110.071 0 203.906-69.472 240.077-166.957H16.911C53.082 442.528 146.917 512 256.988 512z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="netherlands_svg__clip0_4:7235">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNetherlands;
