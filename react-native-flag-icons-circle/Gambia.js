import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgGambia(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#gambia_svg__clip0_4:7160)">
        <Path
          d="M256 512.989c141.385 0 256-114.615 256-256s-114.615-256-256-256S0 115.604 0 256.99s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 .99C150.165.99 59.337 65.214 20.348 156.814h471.305C452.664 65.215 361.835.989 256 .989z"
          fill="#A2001D"
        />
        <Path
          d="M256 512.989c105.835 0 196.664-64.226 235.652-155.826H20.348C59.337 448.763 150.165 512.989 256 512.989z"
          fill="#496E2D"
        />
        <Path
          d="M503.181 190.206H8.819C3.08 211.499 0 233.882 0 256.989s3.08 45.49 8.819 66.783h494.363c5.738-21.293 8.818-43.676 8.818-66.783s-3.08-45.49-8.819-66.783z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="gambia_svg__clip0_4:7160">
          <Path fill="#fff" transform="translate(0 .99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgGambia;
