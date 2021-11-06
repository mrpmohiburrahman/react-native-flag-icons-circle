import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSyria(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#syria_svg__clip0_4:7302)">
        <Path
          d="M256.578 512c141.385 0 256-114.615 256-256S397.963 0 256.578 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256.578 0C146.507 0 52.672 69.472 16.501 166.957h480.155C460.484 69.472 366.649 0 256.578 0z"
          fill="#D80027"
        />
        <Path
          d="M256.578 512c110.071 0 203.906-69.472 240.077-166.957H16.501C52.672 442.528 146.507 512 256.578 512z"
          fill="#000"
        />
        <Path
          d="M153.54 194.783l13.813 42.512h44.703l-36.165 26.278 13.814 42.514-36.165-26.275-36.165 26.275 13.814-42.514-36.165-26.278h44.703l13.813-42.512zM359.616 194.783l13.813 42.512h44.704l-36.166 26.278 13.814 42.514-36.165-26.275-36.165 26.275 13.814-42.514-36.165-26.278h44.703l13.813-42.512z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="syria_svg__clip0_4:7302">
          <Path fill="#fff" transform="translate(.578)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSyria;
