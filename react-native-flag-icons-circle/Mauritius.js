import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMauritius(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.127 133.565L256 155.826l224.873-22.261C437.454 53.989 353.035 0 256 0S74.546 53.989 31.127 133.565z"
        fill="#D80027"
      />
      <Path
        d="M31.127 378.435L256 400.696l224.873-22.261C500.717 342.064 512 300.35 512 256l-256-22.261L0 256c0 44.35 11.283 86.064 31.127 122.435z"
        fill="#FFDA44"
      />
      <Path
        d="M31.127 133.565C11.283 169.936 0 211.65 0 256h512c0-44.35-11.283-86.064-31.127-122.435H31.127z"
        fill="#0052B4"
      />
      <Path
        d="M256 512c97.035 0 181.454-53.989 224.873-133.565H31.127C74.546 458.011 158.965 512 256 512z"
        fill="#6DA544"
      />
    </Svg>
  );
}

export default SvgMauritius;
