import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgGuernsey(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#guernsey_svg__clip0_4:7170)">
        <Path
          d="M256 512.989c141.385 0 256-114.615 256-256s-114.615-256-256-256S0 115.604 0 256.99s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M509.833 223.598H289.392V3.156A258.556 258.556 0 00256 .99c-11.317 0-22.461.744-33.391 2.167v220.442H2.167A258.529 258.529 0 000 256.989c0 11.317.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V290.381h220.442A258.556 258.556 0 00512 256.989c0-11.317-.744-22.461-2.167-33.391z"
          fill="#D80027"
        />
        <Path
          d="M328.348 268.119l16.695 11.131v-44.522l-16.695 11.131H267.13v-61.218l11.131-16.695h-44.522l11.131 16.695v61.218h-61.218l-16.695-11.131v44.522l16.695-11.131h61.218v61.218l-11.131 16.695h44.522l-11.131-16.695v-61.218h61.218z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="guernsey_svg__clip0_4:7170">
          <Path fill="#fff" transform="translate(0 .99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgGuernsey;
