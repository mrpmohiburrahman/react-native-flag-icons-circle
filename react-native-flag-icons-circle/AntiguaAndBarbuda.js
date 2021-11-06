import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgAntiguaandbarbuda(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#antigua_and_barbuda_svg__clip0_4:7082)">
        <Path
          d="M0 256a257.1 257.1 0 005.127 51.2L256 322.783 506.874 307.2A257.027 257.027 0 00512 256c0-17.535-1.768-34.657-5.126-51.2L256 189.217 5.127 204.8A257.1 257.1 0 000 256z"
          fill="#0052B4"
        />
        <Path
          d="M506.874 307.2H5.127C28.846 424.05 132.151 512 256 512c123.849 0 227.154-87.95 250.874-204.8z"
          fill="#F0F0F0"
        />
        <Path
          d="M5.127 204.8h501.748C483.154 87.95 379.851 0 256 0S28.846 87.95 5.127 204.8z"
          fill="#000"
        />
        <Path
          d="M367.304 204.8H144.696l45.48-21.394-24.219-44.045 49.385 9.445 6.26-49.889L256 135.611l34.4-36.694 6.256 49.889 49.387-9.445-24.217 44.047 45.478 21.392z"
          fill="#FFDA44"
        />
        <Path
          d="M0 256c0 141.384 114.616 256 256 256L51.196 102.391C19.052 145.18 0 198.363 0 256zM256 512c141.384 0 256-114.616 256-256 0-57.637-19.052-110.82-51.196-153.609L256 512z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="antigua_and_barbuda_svg__clip0_4:7082">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgAntiguaandbarbuda;
