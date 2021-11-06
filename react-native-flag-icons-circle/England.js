import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgEngland(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#england_svg__clip0_4:7146)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.317 0-22.461.744-33.391 2.167v220.441H2.167A258.533 258.533 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.319-.744-22.461-2.167-33.391z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="england_svg__clip0_4:7146">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgEngland;
