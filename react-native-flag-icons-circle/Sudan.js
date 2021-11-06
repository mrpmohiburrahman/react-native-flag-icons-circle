import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSudan(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#sudan_svg__clip0_4:7297)">
        <Path
          d="M25.98 144.696C9.706 178.352.578 216.109.578 256c0 39.891 9.128 77.648 25.402 111.304l230.598 22.261 230.598-22.261c16.274-33.656 25.402-71.413 25.402-111.304 0-39.891-9.128-77.648-25.402-111.304l-230.598-22.261L25.98 144.696z"
          fill="#F0F0F0"
        />
        <Path
          d="M25.989 367.304C67.395 452.935 155.084 512 256.578 512s189.183-59.065 230.589-144.696H25.989z"
          fill="#000"
        />
        <Path
          d="M25.989 144.696h461.178C445.761 59.065 358.072 0 256.578 0S67.395 59.065 25.989 144.696z"
          fill="#D80027"
        />
        <Path
          d="M75.558 74.98c-99.974 99.974-99.974 262.065 0 362.04L256.578 256 75.558 74.98z"
          fill="#496E2D"
        />
      </G>
      <Defs>
        <ClipPath id="sudan_svg__clip0_4:7297">
          <Path fill="#fff" transform="translate(.578)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSudan;
