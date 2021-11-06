import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgFinland(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#finland_svg__clip0_4:7155)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M509.833 222.609H200.348V6.085a254.257 254.257 0 00-66.783 25.042v191.481H2.167A258.2 258.2 0 000 256c0 11.317.742 22.461 2.167 33.391h131.398v191.481a254.258 254.258 0 0066.783 25.042V289.392h309.485A258.556 258.556 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="finland_svg__clip0_4:7155">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgFinland;
