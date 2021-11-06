import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPoland(props) {
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
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgPoland;
