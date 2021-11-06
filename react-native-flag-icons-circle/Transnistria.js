import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTransnistria(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#transnistria_svg__clip0_4:7311)">
        <Path
          d="M503.181 189.217C473.805 80.221 374.279 0 256 0 137.721 0 38.195 80.221 8.819 189.217L256 200.348l247.181-11.131zM8.819 322.783C38.195 431.778 137.721 512 256 512c118.279 0 217.805-80.221 247.181-189.217L256 311.652 8.819 322.783z"
          fill="#A2001D"
        />
        <Path
          d="M503.181 189.217H8.819C3.08 210.51 0 232.893 0 256s3.08 45.49 8.819 66.783h494.363C508.92 301.49 512 279.107 512 256s-3.08-45.49-8.819-66.783z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="transnistria_svg__clip0_4:7311">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTransnistria;
