import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNiger(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#niger_svg__clip0_4:7238)">
        <Path
          d="M26.39 144.696C10.116 178.352.988 216.109.988 256c0 39.891 9.128 77.648 25.402 111.304l230.598 22.261 230.598-22.261c16.274-33.656 25.402-71.413 25.402-111.304 0-39.891-9.128-77.648-25.402-111.304l-230.598-22.261L26.39 144.696z"
          fill="#F0F0F0"
        />
        <Path
          d="M26.4 367.304C67.804 452.935 155.493 512 256.987 512s189.183-59.065 230.589-144.696H26.399z"
          fill="#6DA544"
        />
        <Path
          d="M26.4 144.696h461.177C446.171 59.065 358.481 0 256.988 0S67.805 59.065 26.399 144.696zM256.988 345.043c49.177 0 89.043-39.866 89.043-89.043 0-49.177-39.866-89.043-89.043-89.043-49.177 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043z"
          fill="#FF9811"
        />
      </G>
      <Defs>
        <ClipPath id="niger_svg__clip0_4:7238">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNiger;
