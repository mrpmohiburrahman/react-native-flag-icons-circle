import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArmenia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M512 256c0-31.314-5.632-61.311-15.923-89.043L256 155.826l-240.077 11.13C5.633 194.689 0 224.686 0 256s5.633 61.311 15.923 89.043L256 356.174l240.077-11.13C506.368 317.311 512 287.314 512 256z"
        fill="#0052B4"
      />
      <Path
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.093 442.528 145.929 512 256 512z"
        fill="#FF9811"
      />
      <Path
        d="M15.923 166.957h480.155C459.906 69.472 366.071 0 256 0S52.094 69.472 15.923 166.957z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgArmenia;
