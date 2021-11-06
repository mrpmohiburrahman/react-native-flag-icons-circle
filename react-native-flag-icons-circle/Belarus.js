import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBelarus(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#belarus_svg__clip0_4:7096)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#FCFCFC"
        />
        <Path
          d="M105.739 237.449l-27.826-50.483 27.826-49.691 27.826 49.691-27.826 50.483zM50.087 237.449L22.26 186.966l27.826-49.691 27.826 49.691-27.826 50.483zM105.739 374.725l-27.826-50.483 27.826-49.691 27.826 49.691-27.826 50.483zM50.087 374.725L22.26 324.242l27.826-49.691 27.826 49.691-27.826 50.483zM133.565 49.692l-7.878-14.068a256.7 256.7 0 00-39.594 28.909l19.646 35.641 27.826-50.482zM105.739 411.826l-19.854 35.456a256.713 256.713 0 0039.568 28.955l8.113-14.719-27.827-49.692z"
          fill="#A2001D"
        />
        <Path
          d="M155.826 322.783v168.863C186.595 504.743 220.448 512 256 512c110.071 0 203.906-69.472 240.077-166.957l-340.251-22.26z"
          fill="#6DA544"
        />
        <Path
          d="M496.077 345.043C506.368 317.31 512 287.314 512 256 512 114.616 397.384 0 256 0c-35.549 0-69.405 7.253-100.174 20.348v324.696h340.251v-.001z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="belarus_svg__clip0_4:7096">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBelarus;
