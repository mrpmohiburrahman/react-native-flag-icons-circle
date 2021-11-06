import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgGuyana(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#guyana_svg__clip0_4:7173)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 0c-45.261 0-87.769 11.762-124.661 32.372v447.256C168.232 500.238 210.739 512 256 512c141.384 0 256-114.616 256-256C512 114.616 397.384 0 256 0z"
          fill="#6DA544"
        />
        <Path
          d="M132.092 31.95a256.545 256.545 0 00-40.676 27.984L287.481 256 91.415 452.066a256.636 256.636 0 0040.676 27.983L512 256 132.092 31.95z"
          fill="#F0F0F0"
        />
        <Path
          d="M110.47 45.382a257.598 257.598 0 00-22.45 17.44L256 256 88.019 449.178a257.404 257.404 0 0022.45 17.44L468.178 256 110.47 45.382z"
          fill="#FFDA44"
        />
        <Path
          d="M91.415 59.934A257.758 257.758 0 0074.981 74.98L233.739 256 74.981 437.02a256.605 256.605 0 0016.434 15.046L287.481 256 91.416 59.934z"
          fill="#000"
        />
        <Path
          d="M74.98 74.98c-99.975 99.974-99.975 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="guyana_svg__clip0_4:7173">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgGuyana;
