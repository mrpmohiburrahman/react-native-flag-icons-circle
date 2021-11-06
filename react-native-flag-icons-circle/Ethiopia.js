import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgEthiopia(props) {
  return (
    <Svg
      width={512}
      height={513}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#ethiopia_svg__clip0_4:7150)">
        <Path
          d="M0 256.989c0 31.316 5.633 61.312 15.924 89.046L256 368.293l240.076-22.259C506.368 318.301 512 288.304 512 256.989c0-30.885-5.471-60.492-15.494-87.905L256 145.685l-240.506 23.4C5.471 196.497 0 226.104 0 256.989z"
          fill="#FFDA44"
        />
        <Path
          d="M256 512.989c110.071 0 203.906-69.472 240.077-166.957H15.923C52.093 443.517 145.929 512.989 256 512.989z"
          fill="#D80027"
        />
        <Path
          d="M256 .99C145.929.99 52.094 70.46 15.923 167.945h480.155C459.906 70.461 366.071.989 256 .989z"
          fill="#6DA544"
        />
        <Path
          d="M256 379.424c67.619 0 122.435-54.816 122.435-122.435S323.619 134.554 256 134.554 133.565 189.37 133.565 256.989 188.381 379.424 256 379.424z"
          fill="#0052B4"
        />
        <Path
          d="M255.974 162.18l22.102 68.022h71.637l-57.978 42.041 22.276 68.224-58.037-42.241-57.948 42.163 22.186-68.146-57.925-42.041h71.585l22.102-68.022z"
          fill="#FFDA44"
        />
        <Path
          d="M344.124 273.919l-70.116-22.784 43.333-59.64-18.008-13.086-43.335 59.644-43.331-59.643-18.01 13.084 43.332 59.645-70.113 22.779 6.878 21.173 70.116-22.781v73.722h22.26v-73.723l70.113 22.782 6.881-21.172z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="ethiopia_svg__clip0_4:7150">
          <Path fill="#fff" transform="translate(0 .99)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgEthiopia;
