import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCostarica(props) {
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
        d="M496.077 166.957H15.923C5.633 194.69 0 224.686 0 256c0 31.314 5.633 61.31 15.923 89.043h480.155C506.368 317.31 512 287.314 512 256c0-31.314-5.632-61.31-15.923-89.043z"
        fill="#D80027"
      />
      <Path
        d="M256 0C178.409 0 108.886 34.524 61.94 89.043h388.12C403.114 34.524 333.591 0 256 0zM450.061 422.957H61.94C108.886 477.476 178.409 512 256 512c77.591 0 147.114-34.524 194.061-89.043z"
        fill="#0052B4"
      />
    </Svg>
  );
}

export default SvgCostarica;
