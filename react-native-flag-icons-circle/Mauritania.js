import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMauritania(props) {
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
        fill="#496E2D"
      />
      <Path
        d="M256 295.751c-42.626 0-78.236-29.958-86.973-69.963a89.373 89.373 0 00-2.07 19.081c0 49.179 39.865 89.043 89.043 89.043 49.178 0 89.043-39.865 89.043-89.043a89.39 89.39 0 00-2.07-19.082c-8.737 40.007-44.347 69.964-86.973 69.964z"
        fill="#FFDA44"
      />
      <Path
        d="M255.999 178.087l8.288 25.509h26.823l-21.699 15.765 8.288 25.509-21.7-15.766L234.3 244.87l8.289-25.509-21.699-15.765h26.821l8.288-25.509z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgMauritania;
