import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMadagascar(props) {
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
        d="M166.957 256v240.077C194.689 506.368 224.686 512 256 512c141.384 0 256-114.616 256-256 0-141.384-345.043 0-345.043 0z"
        fill="#6DA544"
      />
      <Path
        d="M256 0c-31.314 0-61.311 5.633-89.043 15.923V256H512C512 114.616 397.384 0 256 0z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgMadagascar;
