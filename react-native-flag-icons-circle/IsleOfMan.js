import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIsleofman(props) {
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
        d="M350.787 171.612l-18.094 64.571-54.29-10.025-34.946-72.035-94.407 33.501-7.445-20.98-24.7-3.043 18.611 52.449 64.969-16.615 18.463 52.029-44.912 66.282 76.217 65.006-14.446 16.937 9.714 22.914 36.118-42.344-46.874-47.957 35.827-42.003 79.858 5.754 18.189-98.51 21.891 4.043 14.989-19.87-54.732-10.104z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgIsleofman;
