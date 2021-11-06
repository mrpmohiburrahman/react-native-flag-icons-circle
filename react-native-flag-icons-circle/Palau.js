import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPalau(props) {
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
        d="M200.348 367.304c61.472 0 111.304-49.832 111.304-111.304 0-61.471-49.832-111.304-111.304-111.304-61.471 0-111.304 49.833-111.304 111.304 0 61.472 49.833 111.304 111.304 111.304z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgPalau;
