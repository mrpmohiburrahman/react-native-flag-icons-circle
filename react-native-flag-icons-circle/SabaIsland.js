import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSabaisland(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#saba_island_svg__clip0_4:7268)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 0C255.761-.18-.068 255.933 0 256 0 114.616 114.616 0 256 0zM256 0c.239-.18 256.068 255.932 256 256C512 114.616 397.384 0 256 0z"
          fill="#D80027"
        />
        <Path
          d="M256 512c-.239.18-256.068-255.932-256-256 0 141.384 114.616 256 256 256zM256 512c.239.18 256.068-255.932 256-256 0 141.384-114.616 256-256 256z"
          fill="#0052B4"
        />
        <Path
          d="M256 133.565l27.628 85.029h89.405l-72.331 52.55 27.628 85.03L256 303.623l-72.33 52.551 27.628-85.03-72.33-52.55h89.404L256 133.565z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="saba_island_svg__clip0_4:7268">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSabaisland;
