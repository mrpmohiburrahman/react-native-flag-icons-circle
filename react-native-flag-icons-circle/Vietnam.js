import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVietnam(props) {
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
        fill="#D80027"
      />
      <Path
        d="M256 133.565l27.628 85.029h89.405l-72.331 52.55 27.628 85.03L256 303.623l-72.33 52.551 27.628-85.03-72.33-52.55h89.404L256 133.565z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgVietnam;
