import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArgentina(props) {
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
        fill="#338AF3"
      />
      <Path
        d="M332.515 256l-31.265 14.707 16.649 30.279-33.95-6.495-4.302 34.296L256 303.563l-23.648 25.224-4.301-34.296-33.95 6.494 16.648-30.279L179.485 256l31.265-14.707-16.649-30.278 33.949 6.494 4.303-34.296L256 208.437l23.648-25.224 4.301 34.296 33.951-6.494-16.649 30.279L332.515 256z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgArgentina;