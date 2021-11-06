import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNewzealand(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#new_zealand_svg__clip0_4:7236)">
        <Path
          d="M512.988 256c0 141.384-114.616 256-256 256-141.384 0-256-114.616-256-256 0 .061 256-255.972 256-256 141.384 0 256 114.616 256 256z"
          fill="#0052B4"
        />
        <Path d="M256.303 256h.685v-.685l-.685.685z" fill="#F0F0F0" />
        <Path
          d="M256.988 133.565V0h-.043C115.58.024.988 114.629.988 256h133.565v-75.211L209.765 256h46.539l.685-.685v-46.537l-75.213-75.213h75.212z"
          fill="#F0F0F0"
        />
        <Path
          d="M130.503 33.391a257.224 257.224 0 00-96.124 96.124V256h66.783V100.174h155.826V33.391H130.503z"
          fill="#D80027"
        />
        <Path
          d="M256.988 224.519l-90.953-90.953s-31.481.002-31.481 0v.002L256.987 256h.001v-31.481zM444.318 189.959l5.525 17.006h17.881l-14.466 10.51 5.526 17.005-14.466-10.509-14.467 10.509 5.526-17.005-14.467-10.51h17.881l5.527-17.006zM380.399 312.393l8.289 25.51h26.821l-21.7 15.764 8.29 25.509-21.7-15.765-21.7 15.765 8.29-25.509-21.7-15.764h26.821l8.289-25.51zM382.813 112.046l6.908 21.259h22.351l-18.084 13.135 6.908 21.258-18.083-13.139-18.082 13.139 6.907-21.258-18.082-13.135h22.35l6.907-21.259zM321.31 189.217l8.288 25.51h26.822l-21.7 15.764L343.01 256l-21.7-15.765L299.61 256l8.29-25.509-21.7-15.764h26.821l8.289-25.51z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="new_zealand_svg__clip0_4:7236">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNewzealand;
