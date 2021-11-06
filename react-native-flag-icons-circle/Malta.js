import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMalta(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
        fill="#F0F0F0"
      />
      <Path
        d="M256 0c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256"
        fill="#D80027"
      />
      <Path
        d="M178.087 100.174v-33.39h-33.391v33.39h-33.392v33.391h33.392v33.392h33.391v-33.392h33.391v-33.391h-33.391z"
        fill="#ACABB1"
      />
    </Svg>
  );
}

export default SvgMalta;
