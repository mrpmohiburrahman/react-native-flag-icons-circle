import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgLesotho(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#lesotho_svg__clip0_4:7202)">
        <Path
          d="M0 256.001c0 39.89 9.127 77.648 25.402 111.304L256 378.436l230.598-11.13C502.873 333.649 512 295.891 512 256.001s-9.127-77.648-25.402-111.304L256 133.566l-230.598 11.13C9.127 178.353 0 216.111 0 256.001z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 512.001c101.493 0 189.19-59.065 230.598-144.696H25.402C66.81 452.936 154.506 512.001 256 512.001z"
          fill="#6DA544"
        />
        <Path
          d="M256 .001C154.506.001 66.81 59.066 25.402 144.697h461.195C445.19 59.066 357.493.001 256 .001z"
          fill="#0052B4"
        />
        <Path
          d="M272.696 250.436v-61.217h-33.391v61.217l-40.33 40.331c11.729 19.2 32.88 32.017 57.026 32.017s45.296-12.817 57.026-32.017l-40.331-40.331z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="lesotho_svg__clip0_4:7202">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLesotho;
