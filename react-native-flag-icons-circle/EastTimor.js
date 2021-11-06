import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgEastTimor(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#East_Timor_svg__clip0_4:7142)">
        <Path
          d="M256 512.001c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#FFDA44"
        />
        <Path
          d="M256 .001c-62.677 0-120.083 22.537-164.585 59.934l275.889 196.066L91.415 452.067c44.502 37.397 101.908 59.934 164.585 59.934 141.384 0 256-114.616 256-256 0-141.384-114.616-256-256-256z"
          fill="#D80027"
        />
        <Path
          d="M74.98 74.981c-99.974 99.974-99.974 262.065 0 362.04L256 256.001 74.98 74.981z"
          fill="#000"
        />
        <Path
          d="M70.98 197.356l38.959 36.872 47.108-25.664-23.025 48.45 38.961 36.873-53.194-6.928-23.028 48.449-9.847-52.732-53.194-6.93 47.106-25.661-9.847-52.729z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="East_Timor_svg__clip0_4:7142">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgEastTimor;
