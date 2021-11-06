import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgLatvia(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#latvia_svg__clip0_4:7200)">
        <Path
          d="M256 512.989c141.385 0 256-114.615 256-256s-114.615-256-256-256S0 115.604 0 256.99s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 .99C137.721.99 38.195 81.21 8.82 190.205h494.362C473.805 81.21 374.279.989 256 .989zM256 512.989c118.279 0 217.805-80.221 247.181-189.217H8.819C38.195 432.767 137.721 512.989 256 512.989z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="latvia_svg__clip0_4:7200">
          <Path fill="#fff" transform="translate(0 .99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLatvia;
