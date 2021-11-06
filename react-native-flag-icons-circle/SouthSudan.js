import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSouthsudan(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#south_sudan_svg__clip0_4:7291)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M492.029 156.753C453.26 64.662 362.188 0 256 0 185.306 0 121.313 28.659 74.989 74.989l64.11 81.764h352.93z"
          fill="#000"
        />
        <Path
          d="M139.826 354.32l-64.837 82.691C121.313 483.341 185.306 512 256 512c106.546 0 197.878-65.094 236.424-157.68H139.826z"
          fill="#496E2D"
        />
        <Path
          d="M55.652 188.29v134.492h447.53C508.924 301.491 512 279.107 512 256c0-23.442-3.158-46.142-9.061-67.71H55.652z"
          fill="#A2001D"
        />
        <Path
          d="M74.98 74.98c-99.974 99.974-99.974 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#0052B4"
        />
        <Path
          d="M83.386 192.352l31.245 43.601 51.128-16.245-31.811 43.193 31.245 43.603-50.908-16.907-31.812 43.192.35-53.643-50.91-16.909 51.124-16.244.349-53.641z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="south_sudan_svg__clip0_4:7291">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSouthsudan;
