import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIsrael(props) {
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
        d="M352.393 200.348H288.13L256 144.696l-32.129 55.652h-64.264L191.741 256l-32.134 55.652h64.264L256 367.304l32.13-55.652h64.263L320.259 256l32.134-55.652zM295.475 256l-19.736 34.188h-39.475L216.525 256l19.738-34.188h39.475L295.475 256zM256 187.623l7.346 12.724h-14.69L256 187.623zm-59.214 34.189h14.692l-7.346 12.724-7.346-12.724zm0 68.376l7.347-12.724 7.346 12.724h-14.693zM256 324.376l-7.345-12.724h14.691L256 324.376zm59.214-34.188h-14.692l7.347-12.724 7.345 12.724zm-14.692-68.376h14.692l-7.346 12.724-7.346-12.724zM415.357 55.652H96.643a257.294 257.294 0 00-59.069 66.783h436.852a257.347 257.347 0 00-59.069-66.783zM96.643 456.348h318.713a257.293 257.293 0 0059.069-66.783H37.575a257.346 257.346 0 0059.068 66.783z"
        fill="#0052B4"
      />
    </Svg>
  );
}

export default SvgIsrael;
