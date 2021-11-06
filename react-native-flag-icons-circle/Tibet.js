import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTibet(props) {
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
        d="M111.713 44.522C152.798 16.436 202.476 0 256 0s103.202 16.436 144.287 44.522L256 55.652l-144.287-11.13z"
        fill="#FFDA44"
      />
      <Path
        d="M74.994 437.006l118.042-118.04L256 211.478l62.957 107.481 118.049 118.047C483.336 390.682 512 326.693 512 256c0-87.861-44.269-165.375-111.713-211.478H111.713C44.269 90.625 0 168.139 0 256c0 70.693 28.664 134.682 74.994 181.006z"
        fill="#D80027"
      />
      <Path
        d="M492.552 354.021l-187.17-77.558 13.566 42.484 118.058 118.058c23.572-23.569 42.57-51.711 55.546-82.984zM512 256c0-34.725-6.921-67.83-19.448-98.021L256 256h256zM437.006 74.994a257.432 257.432 0 00-36.719-30.472h-56.655L256 256 437.006 74.994zM256 44.522h-87.631L256 256V44.522zM74.994 74.994c-23.572 23.57-42.569 51.711-55.545 82.984L256 256 74.994 74.994zM0 256c0 34.725 6.921 67.83 19.448 98.021L256 256H0z"
        fill="#0052B4"
      />
      <Path
        d="M111.713 467.478C152.797 495.564 202.476 512 256 512s103.202-16.436 144.287-44.522H111.713zM256 256l62.963 62.963c16.115-16.114 26.081-38.374 26.081-62.963 0-49.178-39.866-89.043-89.043-89.043-49.177 0-89.044 39.865-89.044 89.043 0 24.588 9.966 46.849 26.081 62.963L256 256zM294.957 384c0 21.515-17.443 27.826-38.957 27.826s-38.957-6.311-38.957-27.826 17.443-38.957 38.957-38.957 38.957 17.442 38.957 38.957z"
        fill="#FFDA44"
      />
      <Path
        d="M294.957 384c0 21.515-17.443 38.957-38.957 38.957S217.043 405.515 217.043 384"
        fill="#0052B4"
      />
    </Svg>
  );
}

export default SvgTibet;