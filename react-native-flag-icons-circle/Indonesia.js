import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIndonesia(props) {
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
        d="M0 256C0 114.616 114.616 0 256 0c141.384 0 256 114.616 256 256"
        fill="#A2001D"
      />
    </Svg>
  );
}

export default SvgIndonesia;
