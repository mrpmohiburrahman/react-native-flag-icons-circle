import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTrinidadandtobago(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#trinidad_and_tobago_svg__clip0_4:7312)">
        <Path
          d="M138.616 28.426C115.698 40.255 94.185 55.76 74.973 74.972c-19.213 19.213-34.718 40.726-46.546 63.644l164.607 180.349 180.349 164.607c22.919-11.829 44.432-27.334 63.644-46.545 19.213-19.213 34.717-40.726 46.546-63.644l-164.607-180.35-180.35-164.607z"
          fill="#F0F0F0"
        />
        <Path
          d="M437.027 437.027a257.55 257.55 0 0028.749-34.217L109.191 46.224a257.466 257.466 0 00-34.217 28.748 257.5 257.5 0 00-28.749 34.218L402.81 465.774a257.521 257.521 0 0034.217-28.747z"
          fill="#000"
        />
        <Path
          d="M74.972 437.027c80.767 80.767 202.064 96.271 298.41 46.545L28.427 138.616C-21.298 234.962-5.791 356.26 74.972 437.027zM437.027 74.973c-80.767-80.766-202.064-96.27-298.41-46.547l344.955 344.958c49.726-96.346 34.222-217.645-46.545-298.411z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="trinidad_and_tobago_svg__clip0_4:7312">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTrinidadandtobago;
