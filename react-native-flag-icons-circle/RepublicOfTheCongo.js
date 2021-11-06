import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgRepublicofthecongo(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#republic_of_the_congo_svg__clip0_4:7264)">
        <Path
          d="M138.771 483.645l188.065-156.808 156.808-188.065c-24.38-47.248-63.038-85.927-110.267-110.338L185.163 185.165 28.434 373.377c24.41 47.231 63.088 85.888 110.337 110.268z"
          fill="#FFDA44"
        />
        <Path
          d="M437.027 437.028c80.766-80.767 96.271-202.064 46.546-298.41L138.617 483.574c96.346 49.724 217.644 34.219 298.41-46.546z"
          fill="#D80027"
        />
        <Path
          d="M74.973 74.973c-80.766 80.766-96.27 202.064-46.547 298.41L373.383 28.427C277.037-21.298 155.739-5.792 74.973 74.973z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="republic_of_the_congo_svg__clip0_4:7264">
          <Path fill="#fff" d="M0 0h512.001v512.001H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgRepublicofthecongo;
