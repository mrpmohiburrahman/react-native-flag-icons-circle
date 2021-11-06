import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPeru(props) {
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
        d="M512 256c0-110.07-69.472-203.906-166.957-240.076v480.155C442.528 459.906 512 366.072 512 256zM0 256c0 110.072 69.472 203.906 166.957 240.078V15.924C69.472 52.094 0 145.93 0 256z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgPeru;
