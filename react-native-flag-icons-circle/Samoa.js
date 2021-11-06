import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSamoa(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256L256 0c141.384 0 256 114.616 256 256z"
        fill="#D80027"
      />
      <Path d="M256 256V0C114.616 0 0 114.616 0 256h256z" fill="#0052B4" />
      <Path
        d="M205.054 166.957l4.145 12.755h13.41l-10.85 7.881 4.145 12.755-10.85-7.883-10.85 7.883 4.145-12.755-10.85-7.881h13.41l4.145-12.755zM137.698 66.783l6.907 21.259h22.352l-18.084 13.135 6.909 21.258-18.084-13.139-18.083 13.139 6.908-21.258-18.083-13.135h22.35l6.908-21.259zM204.481 89.043l6.907 21.26h22.351l-18.083 13.135 6.907 21.258-18.082-13.139-18.083 13.139 6.908-21.258-18.083-13.135h22.35l6.908-21.26zM151.693 178.087l6.908 21.259h22.35l-18.083 13.135 6.908 21.258-18.083-13.138-18.083 13.138 6.908-21.258-18.083-13.135h22.351l6.907-21.259zM93.176 122.435l6.908 21.259h22.351l-18.084 13.135 6.908 21.258-18.083-13.138-18.082 13.138 6.907-21.258-18.082-13.135h22.35l6.907-21.259z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgSamoa;
