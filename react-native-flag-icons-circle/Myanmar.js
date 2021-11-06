import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMyanmar(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M496.077 345.043C506.368 317.311 512 287.314 512 256c0-31.314-5.632-61.311-15.923-89.043L256 144.696 15.923 166.957C5.633 194.689 0 224.686 0 256c0 31.314 5.633 61.311 15.923 89.043L256 367.304l240.077-22.261z"
        fill="#6DA544"
      />
      <Path
        d="M496.077 166.957C459.906 69.472 366.071 0 256 0S52.094 69.472 15.923 166.957h480.154z"
        fill="#FFDA44"
      />
      <Path
        d="M256 512c110.071 0 203.906-69.472 240.077-166.957H15.923C52.094 442.528 145.929 512 256 512z"
        fill="#D80027"
      />
      <Path
        d="M431.549 216.586H297.442L256 89.043l-41.442 127.543H80.451l108.495 78.826-41.442 127.545L256 345.043l108.496 77.913-41.441-127.545 108.494-78.825z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgMyanmar;
