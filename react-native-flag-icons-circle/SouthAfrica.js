import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSouthafrica(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#south_africa_svg__clip0_4:7289)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M74.98 437.02c-99.974-99.975-99.974-262.065 0-362.04C74.973 74.991 222.609 256 222.609 256L74.98 437.02z"
          fill="#000"
        />
        <Path
          d="M222.609 256L33.953 128.513a255.118 255.118 0 00-15.439 31.763l95.509 95.725-95.506 95.73a254.82 254.82 0 0015.426 31.741L222.609 256z"
          fill="#FFDA44"
        />
        <Path
          d="M509.833 222.609H222.602L74.978 74.984a256.992 256.992 0 00-41.025 53.53L161.192 256 33.943 383.47a256.966 256.966 0 0041.035 53.545l147.624-147.624h287.231A258.529 258.529 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"
          fill="#6DA544"
        />
        <Path
          d="M100.138 459.077C143.307 492.259 197.344 512 256 512c118.279 0 217.805-80.221 247.181-189.217H236.433L100.138 459.077z"
          fill="#0052B4"
        />
        <Path
          d="M503.181 189.217C473.805 80.221 374.279 0 256 0c-58.656 0-112.693 19.741-155.862 52.923l136.294 136.294h266.749z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="south_africa_svg__clip0_4:7289">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSouthafrica;
