import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgJapan(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#japan_svg__clip0_4:7189)">
        <Path
          d="M256 512.989c141.385 0 256-114.615 256-256s-114.615-256-256-256S0 115.604 0 256.99s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 368.293c61.472 0 111.304-49.832 111.304-111.304 0-61.471-49.832-111.304-111.304-111.304-61.471 0-111.304 49.833-111.304 111.304 0 61.472 49.833 111.304 111.304 111.304z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="japan_svg__clip0_4:7189">
          <Path fill="#fff" transform="translate(0 .99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgJapan;
