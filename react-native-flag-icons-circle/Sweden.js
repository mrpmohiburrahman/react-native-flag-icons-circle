import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSweden(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#sweden_svg__clip0_4:7300)">
        <Path
          d="M256.578 511.999c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#FFDA44"
        />
        <Path
          d="M200.927 222.608h309.484C494.048 97.001 386.645-.001 256.578-.001a256.902 256.902 0 00-55.652 6.085v216.524h.001zM134.143 222.607V31.126C63.849 69.48 13.528 139.831 2.745 222.608h131.398v-.001zM134.142 289.39H2.745c10.783 82.777 61.104 153.128 131.398 191.481l-.001-191.481zM200.926 289.391v216.523a256.902 256.902 0 0055.652 6.085c130.067 0 237.47-97.002 253.833-222.609H200.926v.001z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="sweden_svg__clip0_4:7300">
          <Path
            fill="#fff"
            transform="translate(.578 -.001)"
            d="M0 0h512v512H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSweden;
