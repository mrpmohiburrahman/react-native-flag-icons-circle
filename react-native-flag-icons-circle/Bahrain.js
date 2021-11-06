import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBahrain(props) {
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
        d="M256 0c-51.376 0-99.208 15.145-139.3 41.198l65.839 44.129-82.365 42.666 82.365 42.666-82.365 42.666 82.365 42.661-82.365 42.665 82.365 42.665-82.365 42.67 82.365 42.666-65.847 44.143C156.786 496.853 204.621 512 256 512c141.384 0 256-114.616 256-256C512 114.616 397.384 0 256 0z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgBahrain;
