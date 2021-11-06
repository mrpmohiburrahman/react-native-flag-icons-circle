import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNortherncyprus(props) {
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
        d="M61.94 89.043a256.91 256.91 0 00-24.367 33.391h436.852a256.75 256.75 0 00-24.366-33.391H61.939zM61.94 422.957h388.12a256.91 256.91 0 0024.366-33.391H37.574a256.878 256.878 0 0024.365 33.391zM223.24 209.186l21.004 28.945 34.017-11.03-21.037 28.92 21.002 28.944-34.005-11.072-21.037 28.92.021-35.761L189.2 255.98l34.018-11.03.022-35.764z"
        fill="#D80027"
      />
      <Path
        d="M165.915 328.348c-39.956 0-72.348-32.392-72.348-72.348 0-39.956 32.392-72.348 72.348-72.348 12.458 0 24.181 3.15 34.415 8.696-16.055-15.701-38.012-25.392-62.241-25.392-49.178 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043 24.229 0 46.186-9.691 62.241-25.392-10.234 5.548-21.956 8.698-34.415 8.698z"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgNortherncyprus;
