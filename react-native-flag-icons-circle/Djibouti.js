import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgDjibouti(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#djibouti_svg__clip0_4:7139)">
        <Path
          d="M233.739 278.261S75.131 74.945 74.981 74.981C121.306 28.654 185.306 0 256 0c141.384 0 256 114.616 256 256l-278.261 22.261z"
          fill="#338AF3"
        />
        <Path
          d="M233.739 256S75.131 437.055 74.981 437.019C121.306 483.346 185.306 512 256 512c141.384 0 256-114.616 256-256H233.739z"
          fill="#6DA544"
        />
        <Path
          d="M74.98 74.98c-99.975 99.974-99.975 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#F0F0F0"
        />
        <Path
          d="M103.61 189.217l16.575 51.016h53.646l-43.398 31.532 16.574 51.018-43.397-31.531-43.4 31.531 16.579-51.018-43.398-31.532h53.642l16.577-51.016z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="djibouti_svg__clip0_4:7139">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgDjibouti;
