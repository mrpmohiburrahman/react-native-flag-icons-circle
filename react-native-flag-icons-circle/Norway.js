import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNorway(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#norway_svg__clip0_4:7245)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M8.819 322.783c14.812 54.959 47.457 102.593 91.355 136.322V322.783H8.819zM233.739 511.026A259.29 259.29 0 00256 512c118.279 0 217.805-80.221 247.181-189.217H233.739v188.243zM503.181 189.217C473.805 80.221 374.279 0 256 0c-7.502 0-14.923.342-22.261.974v188.243h269.442zM100.174 52.895c-43.898 33.73-76.543 81.363-91.355 136.322h91.355V52.895z"
          fill="#D80027"
        />
        <Path
          d="M509.833 222.609H200.348V6.085a254.26 254.26 0 00-66.783 25.042v191.481H2.167A258.2 258.2 0 000 256c0 11.317.742 22.461 2.167 33.391h131.398v191.481a254.258 254.258 0 0066.783 25.042V289.392h309.485A258.556 258.556 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="norway_svg__clip0_4:7245">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNorway;
