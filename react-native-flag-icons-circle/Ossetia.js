import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOssetia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M496.077 345.043C506.368 317.31 512 287.314 512 256c0-31.314-5.632-61.31-15.923-89.043L256 144.696 15.923 166.957C5.633 194.69 0 224.686 0 256c0 31.314 5.633 61.31 15.923 89.043L256 367.304l240.077-22.261z"
        fill="#D80027"
      />
      <Path
        d="M256 512c110.07 0 203.906-69.472 240.076-166.957H15.922C52.094 442.528 145.928 512 256 512z"
        fill="#FFDA44"
      />
      <Path
        d="M256 0C145.928 0 52.094 69.472 15.922 166.957h480.155C459.906 69.472 366.07 0 256 0z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgOssetia;
