import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTonga(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#tonga_svg__clip0_4:7310)">
        <Path
          d="M256 511.999c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M166.957 133.564v-33.391h-33.392v33.391h-33.391v33.392h33.391v33.391h33.392v-33.391h33.391v-33.392h-33.391z"
          fill="#D80027"
        />
        <Path
          d="M256-.001v256L0 256c0 141.383 114.616 255.999 256 255.999 141.384 0 256-114.616 256-256 0-141.384-114.616-256-256-256z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="tonga_svg__clip0_4:7310">
          <Path
            fill="#fff"
            transform="translate(0 -.001)"
            d="M0 0h512v512H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTonga;
