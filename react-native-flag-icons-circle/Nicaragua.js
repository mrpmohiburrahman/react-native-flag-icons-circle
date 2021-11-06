import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNicaragua(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#nicaragua_svg__clip0_4:7237)">
        <Path
          d="M256.988 512c141.385 0 256-114.615 256-256S398.373 0 256.988 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256.988 0C155.494 0 67.798 59.065 26.39 144.696h461.195C446.178 59.065 358.481 0 256.988 0zM256.988 512c101.493 0 189.19-59.065 230.598-144.696H26.39C67.798 452.935 155.494 512 256.988 512z"
          fill="#338AF3"
        />
        <Path
          d="M256.988 178.087c-43.03 0-77.913 34.883-77.913 77.913 0 43.03 34.883 77.913 77.913 77.913 43.03 0 77.913-34.883 77.913-77.913 0-43.03-34.883-77.913-77.913-77.913zm0 122.435c-24.588 0-44.522-19.932-44.522-44.522s19.933-44.522 44.522-44.522S301.51 231.41 301.51 256s-19.934 44.522-44.522 44.522z"
          fill="#FFDA44"
        />
        <Path
          d="M295.546 267.13L256.988 256l-38.558 11.13-12.852 22.261h102.819l-12.851-22.261z"
          fill="#0052B4"
        />
        <Path
          d="M256.988 200.348l-25.705 44.522L256.988 256l25.705-11.13-25.705-44.522z"
          fill="#338AF3"
        />
        <Path
          d="M218.43 267.13h77.116l-12.853-22.26h-51.41l-12.853 22.26z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="nicaragua_svg__clip0_4:7237">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNicaragua;
