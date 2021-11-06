import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLebanon(props) {
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
        fill="#D80027"
      />
      <Path
        d="M322.783 300.522L256 178.087l-66.783 122.435h50.087v33.391h33.392v-33.391h50.087z"
        fill="#6DA544"
      />
    </Svg>
  );
}

export default SvgLebanon;
