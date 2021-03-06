import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBhutan(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#bhutan_svg__clip0_4:7101)">
        <Path
          d="M437.019 437.02c-99.974 99.974-262.064 99.974-362.04 0-99.974-99.974-99.974-262.065 0-362.04.037 0 230.059-67.967 330.034 32.007 99.975 99.974 32.075 329.963 32.006 330.033z"
          fill="#FFDA44"
        />
        <Path
          d="M437.019 437.02c99.974-99.974 99.974-262.065 0-362.04-99.974-99.975-262.064-99.974-362.038 0l362.038 362.04z"
          fill="#D80027"
        />
        <Path
          d="M322.916 322.941c-10.516 4.13-22.735 3.692-33.336-2.257-18.73-10.512-25.416-34.306-14.901-53.039l-3.192-1.79c32.071-7.733 55.798-36.843 55.382-71.195-.258-21.357-9.801-40.464-24.728-53.538l-23.373 23.946c8.836 7.042 14.565 17.844 14.712 29.997.26 21.48-17.002 39.167-38.481 39.426l.045 3.657c-22.733-23.906-59.805-29.899-89.346-12.363-18.366 10.904-30.14 28.72-34.001 48.185l32.424 8.27c1.681-11.174 8.17-21.536 18.621-27.741 18.471-10.965 42.419-4.857 53.384 13.613l3.148-1.867c-9.338 31.638 4.007 66.741 33.966 83.557 18.626 10.454 39.942 11.743 58.73 5.354l-9.054-32.215zm-67.648-66.194l-.002.001.002-.001z"
          fill="#FF9811"
        />
        <Path
          d="M350.786 173.381l-18.094 64.571-54.29-10.025-34.946-72.035-94.407 33.501-7.445-20.98-24.7-3.043 18.611 52.449 64.969-16.616 18.463 52.029-44.912 66.281 76.217 65.006-14.447 16.937 9.715 22.915 36.118-42.344-46.874-47.957 35.827-42.003 79.858 5.754 18.189-98.51 21.891 4.043 14.989-19.87-54.732-10.103zm-94.805 84.361v.002-.002z"
          fill="#FFEACF"
        />
      </G>
      <Defs>
        <ClipPath id="bhutan_svg__clip0_4:7101">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgBhutan;
