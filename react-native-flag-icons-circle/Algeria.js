import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlgeria(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 0c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256 0-11.13-33.391-256-33.391-256L256 0z"
        fill="#F0F0F0"
      />
      <Path
        d="M256 512C114.616 512 0 397.384 0 256 0 114.616 114.616 0 256 0"
        fill="#496E2D"
      />
      <Path
        d="M311.003 206.896l-21.004 28.945-34.017-11.032 21.038 28.92-21.002 28.945 34.004-11.071 21.038 28.919-.022-35.761 34.005-11.072-34.016-11.03-.024-35.763z"
        fill="#D80027"
      />
      <Path
        d="M277.237 328.348c-39.956 0-72.348-32.392-72.348-72.348 0-39.956 32.392-72.348 72.348-72.348 12.458 0 24.181 3.15 34.415 8.696-16.056-15.701-38.012-25.392-62.241-25.392-49.178 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043 24.23 0 46.186-9.691 62.241-25.392-10.234 5.548-21.957 8.698-34.415 8.698z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgAlgeria;
