import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgFaroeislands(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#faroe_islands_svg__clip0_4:7152)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M500.87 256l8.959-33.391a255.712 255.712 0 00-6.647-33.391H233.739V.974a255.355 255.355 0 00-33.391 5.121l-44.522 27.296-22.261-2.247a256.297 256.297 0 00-33.391 21.751v136.322H8.819a255.712 255.712 0 00-6.647 33.391L11.13 256l-8.96 33.391a255.712 255.712 0 006.648 33.391h91.355v136.322a256.26 256.26 0 0033.391 21.751l33.391-2.247 33.391 27.296a255.745 255.745 0 0033.391 5.121V322.783h269.442a255.712 255.712 0 006.647-33.391L500.87 256z"
          fill="#0052B4"
        />
        <Path
          d="M509.833 222.609H200.348V6.085a254.257 254.257 0 00-66.783 25.042v191.481H2.167A258.556 258.556 0 000 256c0 11.317.744 22.461 2.167 33.391h131.398v191.481a254.258 254.258 0 0066.783 25.042V289.392h309.485A258.556 258.556 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="faroe_islands_svg__clip0_4:7152">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgFaroeislands;
