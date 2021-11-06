import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChile(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
        fill="#F0F0F0"
      />
      <Path
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256c0-141.384 256 0 256 0h256z"
        fill="#D80027"
      />
      <Path d="M0 256C0 114.616 114.616 0 256 0v256H0z" fill="#0052B4" />
      <Path
        d="M152.389 89.043l16.577 51.018h53.643l-43.398 31.53 16.576 51.018-43.398-31.531-43.398 31.531 16.576-51.018-43.398-31.53h53.643l16.577-51.018z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgChile;
