import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTurkey(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#turkey_svg__clip0_4:7314)">
        <Path
          d="M256 512.581c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#D80027"
        />
        <Path
          d="M245.518 209.767l21.005 28.945 34.017-11.03-21.038 28.92 21.002 28.944-34.005-11.072-21.037 28.92.022-35.761-34.006-11.072 34.018-11.03.022-35.764z"
          fill="#F0F0F0"
        />
        <Path
          d="M188.194 328.929c-39.956 0-72.348-32.392-72.348-72.348 0-39.956 32.392-72.348 72.348-72.348 12.458 0 24.18 3.151 34.414 8.696-16.055-15.702-38.012-25.392-62.24-25.392-49.178 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043 24.23 0 46.186-9.691 62.24-25.392-10.234 5.547-21.956 8.698-34.414 8.698z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="turkey_svg__clip0_4:7314">
          <Path fill="#fff" transform="translate(0 .581)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTurkey;
