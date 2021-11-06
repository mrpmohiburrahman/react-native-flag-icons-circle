import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGreenland(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 256C0 114.616 114.616 0 256 0c141.384 0 256 114.616 256 256-11.13 0-256 33.391-256 33.391L0 256z"
        fill="#F0F0F0"
      />
      <Path
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256"
        fill="#D80027"
      />
      <Path
        d="M178.087 378.435c67.619 0 122.435-54.816 122.435-122.435s-54.816-122.435-122.435-122.435S55.652 188.381 55.652 256s54.816 122.435 122.435 122.435z"
        fill="#F0F0F0"
      />
      <Path
        d="M55.652 256c0-67.617 54.816-122.435 122.435-122.435 67.62 0 122.435 54.817 122.435 122.435"
        fill="#D80027"
      />
    </Svg>
  );
}

export default SvgGreenland;
