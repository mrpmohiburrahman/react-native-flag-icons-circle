import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgElsalvador(props) {
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
        d="M256 0C154.506 0 66.81 59.065 25.402 144.696h461.195C445.19 59.065 357.493 0 256 0zM256 512c101.493 0 189.19-59.065 230.598-144.696H25.402C66.81 452.935 154.506 512 256 512z"
        fill="#0052B4"
      />
      <Path
        d="M204.59 267.13L256 178.087l51.41 89.043H204.59z"
        fill="#FFDA44"
      />
      <Path
        d="M322.783 296.531L256 329.923l-66.783-33.392V252.01h133.566v44.521z"
        fill="#6DA544"
      />
      <Path
        d="M318.963 181.907l-23.611 23.611c10.071 10.071 16.301 23.984 16.301 39.352 0 30.736-24.917 55.652-55.652 55.652s-55.652-24.917-55.652-55.652c0-15.368 6.23-29.281 16.301-39.352l-23.611-23.611c-16.115 16.112-26.081 38.373-26.081 62.963 0 49.178 39.866 89.043 89.043 89.043 49.177 0 89.043-39.866 89.043-89.043-.001-24.59-9.967-46.851-26.081-62.963z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgElsalvador;
