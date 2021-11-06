import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTogo(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#togo_svg__clip0_4:7308)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#FFDA44"
        />
        <Path
          d="M256 0c-.186.002-11.13 102.4-11.13 102.4h215.942C414.107 40.223 339.752 0 256 0zM256 512c83.752 0 158.107-40.223 204.811-102.4H51.189C97.893 471.777 172.248 512 256 512zM506.874 204.8H244.87L256 307.2h250.874A257.027 257.027 0 00512 256c0-17.535-1.768-34.657-5.126-51.2z"
          fill="#496E2D"
        />
        <Path
          d="M256 307.2V0C114.616 0 0 114.616 0 256c0 17.535 1.768 34.657 5.126 51.2H256z"
          fill="#D80027"
        />
        <Path
          d="M141.257 122.435l16.576 51.015h53.645l-43.397 31.533L184.655 256l-43.398-31.53L97.859 256l16.577-51.017-43.397-31.533h53.643l16.575-51.015z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="togo_svg__clip0_4:7308">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTogo;
