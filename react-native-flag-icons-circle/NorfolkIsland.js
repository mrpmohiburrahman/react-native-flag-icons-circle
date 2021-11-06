import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgNorfolkisland(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#norfolk_island_svg__clip0_4:7241)">
        <Path
          d="M368.292 25.402C334.636 9.128 296.879 0 256.988 0c-39.891 0-77.648 9.128-111.304 25.402L123.423 256l22.261 230.598C179.34 502.872 217.097 512 256.988 512c39.891 0 77.648-9.128 111.304-25.402L390.553 256 368.292 25.402z"
          fill="#F0F0F0"
        />
        <Path
          d="M145.684 25.41C60.054 66.818.988 154.507.988 256s59.065 189.183 144.696 230.589V25.411zM368.292 25.41V486.59C453.923 445.183 512.988 357.493 512.988 256S453.923 66.817 368.292 25.41zM323.771 333.913l-66.783-211.478-66.783 211.478h50.087v55.652h33.392v-55.652h50.087z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="norfolk_island_svg__clip0_4:7241">
          <Path fill="#fff" transform="translate(.988)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNorfolkisland;
