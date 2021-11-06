import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSuriname(props) {
  return (
    <Svg
      width={513}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#suriname_svg__clip0_4:7298)">
        <Path
          d="M256.578 512c141.385 0 256-114.615 256-256S397.963 0 256.578 0s-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M496.654 166.957H16.5C6.211 194.691.578 224.686.578 256c0 31.314 5.633 61.311 15.922 89.043h480.155c10.291-27.732 15.923-57.729 15.923-89.043 0-31.314-5.632-61.309-15.924-89.043z"
          fill="#A2001D"
        />
        <Path
          d="M257.319 512c87.682 0 165.058-44.092 211.196-111.304H46.124C92.262 467.908 169.636 512 257.319 512zM257.319.002c87.682 0 165.058 44.092 211.196 111.304H46.124C92.262 44.094 169.636.002 257.319.002z"
          fill="#6DA544"
        />
        <Path
          d="M256.578 166.957l22.101 68.02h71.525l-57.864 42.044 22.103 68.022-57.865-42.039-57.865 42.039 22.104-68.022-57.865-42.044h71.525l22.101-68.02z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="suriname_svg__clip0_4:7298">
          <Path fill="#fff" transform="translate(.578)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSuriname;
