import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgUruguay(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#uruguay_svg__clip0_4:7324)">
        <Path
          d="M256 512.581c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M256 189.798h247.181a254.559 254.559 0 00-28.755-66.783H256v66.783zM96.643 456.929h318.713a257.293 257.293 0 0059.069-66.783H37.575a257.346 257.346 0 0059.068 66.783zM256 .581v55.652h159.357C371.627 21.405 316.249.581 256 .581z"
          fill="#338AF3"
        />
        <Path
          d="M256 189.798h247.181a254.559 254.559 0 00-28.755-66.783H256v66.783zM0 256.581c0 23.107 3.08 45.489 8.819 66.783h494.363C508.92 302.07 512 279.688 512 256.581H0z"
          fill="#338AF3"
        />
        <Path
          d="M222.609 150.402l-31.266 14.707 16.649 30.28-33.95-6.494-4.302 34.295-23.646-25.224-23.648 25.224-4.301-34.295-33.95 6.492 16.648-30.279-31.264-14.706 31.265-14.705-16.649-30.28 33.949 6.494 4.303-34.295 23.647 25.224 23.647-25.224 4.301 34.295 33.951-6.494-16.649 30.281 31.265 14.704z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="uruguay_svg__clip0_4:7324">
          <Path fill="#fff" transform="translate(0 .581)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgUruguay;