import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBotswana(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#botswana_svg__clip0_4:7105)">
        <Path
          d="M12.089 178.086C4.247 202.655 0 228.828.001 255.999 0 283.168 4.247 309.342 12.09 333.912l243.911 11.132 243.91-11.132C507.752 309.342 512 283.167 512 256c0-27.17-4.247-53.345-12.089-77.914L256 166.956l-243.911 11.13z"
          fill="#F0F0F0"
        />
        <Path
          d="M512 256c0-15.187-1.33-30.063-3.867-44.523H3.868A257.356 257.356 0 000 255.999c0 15.188 1.331 30.062 3.868 44.522h504.265A257.568 257.568 0 00512 256z"
          fill="#000"
        />
        <Path
          d="M256.001 511.999c114.216 0 210.946-74.803 243.91-178.088H12.09C45.055 437.195 141.786 511.997 256 511.999zM256.001.001C141.786.001 45.056 74.804 12.089 178.086l487.82.001C466.946 74.804 370.215-.001 256.001.001z"
          fill="#338AF3"
        />
      </G>
      <Defs>
        <ClipPath id="botswana_svg__clip0_4:7105">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBotswana;
