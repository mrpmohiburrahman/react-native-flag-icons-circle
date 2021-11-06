import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgAmericansamoa(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#american_samoa_svg__clip0_4:7078)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M380.196 32.112C343.412 11.664 301.07 0 256 0 114.626 0 .018 114.598 0 255.97l178.087-89.013L380.196 32.112zM0 256.03C.018 397.402 114.626 512 256 512c45.07 0 87.412-11.662 124.196-32.112L178.087 345.043 0 256.03z"
          fill="#0052B4"
        />
        <Path
          d="M401.53 45.382a256.293 256.293 0 00-21.343-13.266L0 255.97v.06l380.188 223.853a256.723 256.723 0 0021.343-13.266L43.822 256 401.53 45.382z"
          fill="#D80027"
        />
        <Path
          d="M445.217 246.453h-30.494c7.929-9.52 7.44-23.683-1.493-32.614 9.462-9.461 9.462-24.802 0-34.265l-.57.572c9.461-9.461 10.032-25.374.57-34.835L276.174 282.367c9.462 9.463 24.534 9.35 33.995-.112l2.638-2.411 65.628-5.966v28.226h22.261v-30.25l33.391-3.035 11.13-22.366z"
          fill="#A2001D"
        />
        <Path
          d="M278.269 311.652L256 300.522l22.269-11.131h144.695v22.261H278.269z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="american_samoa_svg__clip0_4:7078">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgAmericansamoa;
