import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSrilanka(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#sri_lanka_svg__clip0_4:7293)">
        <Path d="M.001 44.522H0v422.955h.001V44.522z" fill="#FF9811" />
        <Path
          d="M255.999 511.998c141.384 0 255.999-114.615 255.999-255.999C511.998 114.615 397.383 0 255.999 0 114.615 0 0 114.615 0 255.999c0 141.384 114.615 255.999 255.999 255.999z"
          fill="#FFDA44"
        />
        <Path
          d="M200.349 44.522h-88.635a257.755 257.755 0 00-11.539 8.373l-22.26 203.104 22.26 203.104a256.178 256.178 0 0011.539 8.373h88.635V44.522z"
          fill="#FF9811"
        />
        <Path
          d="M.001 256.001c0 82.745 39.268 156.307 100.174 203.104V52.896C39.269 99.694.001 173.256.001 256.001z"
          fill="#6DA544"
        />
        <Path d="M411.826 156.064v6.405l.238.036-.238-6.441z" fill="#FFDA44" />
        <Path
          d="M491.595 322.782h-48.233l-20.405 22.261v44.522h-44.522v-22.261h22.261v-44.522H300.522v27.826h-22.261v-53.031c-6.83-6.114-11.13-14.995-11.13-24.882V128c0-18.441 14.95-33.391 33.391-33.391v205.913h44.522l15.276-12.731a53.245 53.245 0 01-4.146-20.66V233.74h-33.391v-66.782h66.782c0-11.13 16.696-22.261 16.696-22.261s16.696 11.13 16.696 22.261v66.783c12.383.147 32.057-.174 53.312 0-5.584-9.76-8.791-21.341-8.791-33.391 0-19.641 8.48-37.299 21.978-49.519C470 107.716 438.954 70.954 400.287 44.522H233.74v422.956h166.548c47.019-32.141 82.768-79.552 100.112-135.09l-8.805-9.606z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="sri_lanka_svg__clip0_4:7293">
          <Path fill="#fff" d="M0 0h511.999v511.999H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSrilanka;
