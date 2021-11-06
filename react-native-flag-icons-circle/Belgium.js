import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBelgium(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M345.043 15.923C317.31 5.633 287.314 0 256 0c-31.314 0-61.31 5.633-89.043 15.923L144.696 256l22.261 240.077C194.69 506.368 224.686 512 256 512c31.314 0 61.31-5.632 89.043-15.923L367.304 256 345.043 15.923z"
        fill="#FFDA44"
      />
      <Path
        d="M512 256c0-110.07-69.472-203.906-166.957-240.076v480.155C442.528 459.906 512 366.072 512 256z"
        fill="#D80027"
      />
      <Path
        d="M0 256c0 110.072 69.472 203.906 166.957 240.078V15.924C69.472 52.094 0 145.93 0 256z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgBelgium;
