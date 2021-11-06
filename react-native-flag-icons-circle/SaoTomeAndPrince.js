import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSaotomeandprince(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#sao_tome_and_prince_svg__clip0_4:7273)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#FFDA44"
        />
        <Path
          d="M155.826 166.957h340.25C459.906 69.472 366.07 0 256 0 185.306 0 121.313 28.659 74.989 74.989l80.837 91.968zM155.826 345.043h340.25C459.906 442.528 366.07 512 256 512c-70.694 0-134.687-28.659-181.011-74.989l80.837-91.968z"
          fill="#6DA544"
        />
        <Path
          d="M74.98 74.98c-99.974 99.974-99.974 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#D80027"
        />
        <Path
          d="M325.074 211.478l11.051 34.012h35.762l-28.932 21.02 11.051 34.012-28.932-21.021-28.932 21.021 11.05-34.012-28.931-21.02h35.762l11.051-34.012zM436.379 211.478l11.05 34.012h35.762l-28.931 21.02 11.05 34.012-28.931-21.021-28.933 21.021 11.051-34.012-28.932-21.02h35.762l11.052-34.012z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="sao_tome_and_prince_svg__clip0_4:7273">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSaotomeandprince;
