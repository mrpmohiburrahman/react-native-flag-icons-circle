import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIvorycoast(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 512c31.314 0 61.311-5.632 89.043-15.923L356.174 256l-11.13-240.077C317.311 5.633 287.314 0 256 0s-61.311 5.633-89.043 15.923L155.826 256l11.13 240.077C194.689 506.368 224.686 512 256 512z"
        fill="#F0F0F0"
      />
      <Path
        d="M0 256c0 110.071 69.472 203.906 166.957 240.077V15.923C69.472 52.094 0 145.93 0 256z"
        fill="#FF9811"
      />
      <Path
        d="M345.043 15.923v480.155C442.528 459.906 512 366.071 512 256S442.528 52.094 345.043 15.923z"
        fill="#6DA544"
      />
    </Svg>
  );
}

export default SvgIvorycoast;
