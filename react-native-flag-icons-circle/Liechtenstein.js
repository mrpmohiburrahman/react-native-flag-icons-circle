import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLiechtenstein(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256c11.13 0 256-33.391 256-33.391L512 256z"
        fill="#D80027"
      />
      <Path
        d="M0 256C0 114.616 114.616 0 256 0c141.384 0 256 114.616 256 256"
        fill="#0052B4"
      />
      <Path
        d="M189.217 178.087c0-18.441-14.95-33.391-33.391-33.391-8.555 0-16.352 3.22-22.261 8.509v-19.64h11.13v-22.261h-11.13v-11.13h-22.261v11.13h-11.13v22.261h11.13v19.64c-5.909-5.289-13.706-8.509-22.261-8.509-18.441 0-33.391 14.95-33.391 33.391 0 9.887 4.3 18.767 11.13 24.882v19.64h111.304v-19.64c6.831-6.115 11.131-14.995 11.131-24.882z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgLiechtenstein;
