import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgMozambique(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#mozambique_svg__clip0_4:7229)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M138.371 356.174l-63.382 80.837C121.313 483.341 185.306 512 256 512c105.83 0 196.644-64.229 235.631-155.826h-353.26z"
          fill="#FFDA44"
        />
        <Path
          d="M492.029 156.753C453.26 64.662 362.188 0 256 0 185.306 0 121.313 28.659 74.989 74.989l64.11 81.764h352.93z"
          fill="#496E2D"
        />
        <Path
          d="M55.652 188.29v134.492h447.53C508.924 301.491 512 279.107 512 256c0-23.442-3.158-46.142-9.061-67.71H55.652z"
          fill="#000"
        />
        <Path
          d="M74.98 74.98c-99.974 99.974-99.974 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#A2001D"
        />
        <Path
          d="M103.61 189.217l16.575 51.016h53.646l-43.398 31.532 16.574 51.018-43.397-31.531-43.399 31.531 16.578-51.018-43.398-31.532h53.642l16.577-51.016z"
          fill="#FFDA44"
        />
        <Path d="M55.107 256h97.024v44.522H55.107V256z" fill="#F0F0F0" />
        <Path
          d="M170.5 204.959l-15.741-15.742-51.148 51.148-51.148-51.148-15.741 15.742 51.193 51.102-51.193 51.194 15.741 15.528 51.148-51.056 51.148 51.056 15.741-15.528-51.193-51.194 51.193-51.102z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="mozambique_svg__clip0_4:7229">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgMozambique;