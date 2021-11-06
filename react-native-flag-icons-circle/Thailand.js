import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgThailand(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#thailand_svg__clip0_4:7306)">
        <Path
          d="M256 512.001c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M496.077 166.958H15.923C5.632 194.691 0 224.687 0 256.001c0 31.314 5.632 61.31 15.923 89.043h480.155C506.368 317.311 512 287.315 512 256.001c0-31.314-5.632-61.31-15.923-89.043z"
          fill="#0052B4"
        />
        <Path
          d="M256 .001c-77.591 0-147.114 34.524-194.061 89.043H450.06C403.114 34.525 333.591.001 256 .001zM450.061 422.958H61.939c46.947 54.519 116.47 89.043 194.061 89.043 77.591 0 147.114-34.524 194.061-89.043z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="thailand_svg__clip0_4:7306">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgThailand;
