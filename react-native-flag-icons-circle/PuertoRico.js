import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgPuertorico(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#puerto_rico_svg__clip0_4:7260)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 0C172.248 0 97.893 40.223 51.189 102.4h409.622C414.107 40.223 339.752 0 256 0zM256 512c83.752 0 158.107-40.223 204.811-102.4H51.189C97.893 471.777 172.248 512 256 512zM0 256a257.1 257.1 0 005.127 51.2h501.748A257.1 257.1 0 00512 256c0-17.535-1.768-34.657-5.126-51.2H5.127A257.1 257.1 0 000 256z"
          fill="#D80027"
        />
        <Path
          d="M74.98 74.98c-99.974 99.974-99.974 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#0052B4"
        />
        <Path
          d="M103.61 189.217l16.575 51.016h53.646l-43.398 31.532 16.574 51.018-43.397-31.531-43.399 31.531 16.578-51.018-43.398-31.532h53.642l16.577-51.016z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="puerto_rico_svg__clip0_4:7260">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgPuertorico;
