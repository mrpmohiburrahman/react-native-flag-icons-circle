import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSwitzerland(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#switzerland_svg__clip0_4:7301)">
        <Path
          d="M256.578 512c141.385 0 256-114.615 256-256S397.963 0 256.578 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#D80027"
        />
        <Path
          d="M390.143 211.479H301.1v-89.044h-89.044v89.044h-89.043v89.043h89.043v89.043H301.1v-89.043h89.043v-89.043z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="switzerland_svg__clip0_4:7301">
          <Path fill="#fff" transform="translate(.578)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSwitzerland;
