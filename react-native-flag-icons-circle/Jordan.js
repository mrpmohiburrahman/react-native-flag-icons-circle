import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgJordan(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#jordan_svg__clip0_4:7192)">
        <Path
          d="M256 512.001c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M155.826 166.958h340.25C459.906 69.473 366.07.001 256 .001 185.306.001 121.313 28.66 74.989 74.99l80.837 91.968z"
          fill="#000"
        />
        <Path
          d="M155.826 345.044h340.25C459.906 442.529 366.07 512.001 256 512.001c-70.694 0-134.687-28.659-181.011-74.989l80.837-91.968z"
          fill="#6DA544"
        />
        <Path
          d="M74.98 74.981c-99.974 99.974-99.974 262.065 0 362.04L256 256.001 74.98 74.981z"
          fill="#D80027"
        />
        <Path
          d="M101.605 200.349l14.049 29.379 31.729-7.333-14.21 29.301 25.515 20.234-31.767 7.159.088 32.564-25.404-20.373L76.2 311.653l.089-32.564-31.767-7.159 25.514-20.234-14.208-29.301 31.727 7.333 14.05-29.379z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="jordan_svg__clip0_4:7192">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgJordan;
