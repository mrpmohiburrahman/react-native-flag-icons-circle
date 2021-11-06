import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgCzechrepublic(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#czech_republic_svg__clip0_4:7136)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M233.739 256S75.131 437.055 74.981 437.019C121.306 483.346 185.306 512 256 512c141.384 0 256-114.616 256-256H233.739z"
          fill="#D80027"
        />
        <Path
          d="M74.98 74.98c-99.975 99.974-99.975 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="czech_republic_svg__clip0_4:7136">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgCzechrepublic;
