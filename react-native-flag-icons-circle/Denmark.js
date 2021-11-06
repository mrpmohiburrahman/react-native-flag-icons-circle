import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDenmark(props) {
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
        d="M200.349 222.609h309.484C493.47 97.002 386.067 0 256 0a256.902 256.902 0 00-55.652 6.085v216.524h.001zM133.565 222.608V31.127C63.272 69.481 12.95 139.832 2.167 222.609h131.398v-.001zM133.564 289.391H2.167c10.783 82.777 61.105 153.128 131.398 191.481l-.001-191.481zM200.348 289.392v216.523A256.902 256.902 0 00256 512c130.067 0 237.47-97.002 253.833-222.609H200.348v.001z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgDenmark;
