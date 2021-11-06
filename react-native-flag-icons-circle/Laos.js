import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgLaos(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#laos_svg__clip0_4:7199)">
        <Path
          d="M486.598 144.696C445.19 59.065 357.494 0 256 0S66.81 59.065 25.402 144.696L256 166.957l230.598-22.261zM25.402 367.304C66.81 452.935 154.506 512 256 512s189.19-59.065 230.598-144.696L256 345.043 25.402 367.304z"
          fill="#D80027"
        />
        <Path
          d="M486.598 144.696H25.402C9.128 178.351 0 216.109 0 256c0 39.891 9.128 77.649 25.402 111.304h461.195C502.873 333.649 512 295.891 512 256c0-39.891-9.127-77.649-25.402-111.304z"
          fill="#0052B4"
        />
        <Path
          d="M256 345.043c49.177 0 89.043-39.866 89.043-89.043 0-49.177-39.866-89.043-89.043-89.043-49.177 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="laos_svg__clip0_4:7199">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLaos;
