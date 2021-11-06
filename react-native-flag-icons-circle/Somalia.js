import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSomalia(props) {
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
        fill="#338AF3"
      />
      <Path
        d="M256 133.565l27.628 85.029h89.404l-72.33 52.55 27.628 85.03L256 303.623l-72.33 52.551 27.628-85.03-72.331-52.55h89.405L256 133.565z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgSomalia;
