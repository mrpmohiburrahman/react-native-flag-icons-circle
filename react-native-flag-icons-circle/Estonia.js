import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEstonia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 256c0 31.314 5.633 61.31 15.923 89.043L256 356.174l240.077-11.13C506.368 317.31 512 287.314 512 256s-5.632-61.31-15.923-89.043L256 155.826l-240.077 11.13C5.633 194.69 0 224.686 0 256z"
        fill="#000"
      />
      <Path
        d="M256 0C145.929 0 52.094 69.472 15.923 166.957h480.155C459.906 69.472 366.071 0 256 0z"
        fill="#0052B4"
      />
      <Path
        d="M496.077 345.043H15.923C52.093 442.527 145.929 512 256 512s203.906-69.473 240.077-166.957z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgEstonia;
