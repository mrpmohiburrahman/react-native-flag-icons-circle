import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBurkinafaso(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#burkina_faso_svg__clip0_4:7112)">
        <Path
          d="M.988 256.001c0-141.384 114.616-256 256-256 141.384 0 256 114.616 256 256-11.13 0-256 33.391-256 33.391l-256-33.391z"
          fill="#D80027"
        />
        <Path
          d="M512.988 256.001c0 141.384-114.616 256-256 256-141.384 0-256-114.616-256-256"
          fill="#6DA544"
        />
        <Path
          d="M256.987 166.958l19.337 59.518h62.587l-50.632 36.786 19.338 59.522-50.63-36.785-50.631 36.785 19.341-59.522-50.633-36.786h62.584l19.339-59.518z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="burkina_faso_svg__clip0_4:7112">
          <Path
            fill="#fff"
            transform="translate(.988 .001)"
            d="M0 0h512v512H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBurkinafaso;
