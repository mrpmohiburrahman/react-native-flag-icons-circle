import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLithuania(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M496.077 345.043C506.368 317.311 512 287.314 512 256c0-31.314-5.632-61.311-15.923-89.043L256 144.696 15.923 166.957C5.632 194.689 0 224.686 0 256c0 31.314 5.632 61.311 15.923 89.043L256 367.304l240.077-22.261z"
        fill="#6DA544"
      />
      <Path
        d="M496.077 166.957C459.906 69.472 366.071 0 256 0S52.094 69.472 15.923 166.957h480.154z"
        fill="#FFDA44"
      />
      <Path
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.094 442.528 145.93 512 256 512z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgLithuania;
