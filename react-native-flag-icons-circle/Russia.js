import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRussia(props) {
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
        d="M496.077 345.043C506.368 317.31 512 287.314 512 256c0-31.314-5.632-61.31-15.923-89.043H15.923C5.633 194.69 0 224.686 0 256c0 31.314 5.633 61.31 15.923 89.043L256 367.304l240.077-22.261z"
        fill="#0052B4"
      />
      <Path
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.094 442.528 145.93 512 256 512z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgRussia;
