import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLuxembourg(props) {
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
        d="M256 0C145.929 0 52.094 69.472 15.923 166.957h480.155C459.906 69.472 366.071 0 256 0z"
        fill="#D80027"
      />
      <Path
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.094 442.528 145.93 512 256 512z"
        fill="#338AF3"
      />
    </Svg>
  );
}

export default SvgLuxembourg;
