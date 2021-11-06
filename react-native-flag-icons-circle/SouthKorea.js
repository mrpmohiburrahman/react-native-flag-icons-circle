import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgSouthkorea(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#south_korea_svg__clip0_4:7290)">
        <Path
          d="M256 511.999c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M345.043 255.999c0 22.261-39.866 77.913-89.043 77.913-49.177 0-89.043-55.652-89.043-77.913 0-49.178 39.866-89.043 89.043-89.043 49.177 0 89.043 39.865 89.043 89.043z"
          fill="#D80027"
        />
        <Path
          d="M345.043 255.999c0 49.178-39.866 89.043-89.043 89.043-49.177 0-89.043-39.865-89.043-89.043"
          fill="#0052B4"
        />
        <Path
          d="M350.375 334.707l23.607-23.608 15.739 15.739-23.608 23.607-15.738-15.738zM311.017 374.054l23.608-23.607 15.738 15.738-23.607 23.608-15.739-15.739zM397.593 381.92l23.608-23.608 15.738 15.739-23.607 23.607-15.739-15.738zM358.237 421.273l23.607-23.607 15.739 15.738-23.607 23.608-15.739-15.739zM373.983 358.315l23.607-23.607 15.739 15.739-23.608 23.607-15.738-15.739zM334.636 397.662l23.608-23.607 15.738 15.738-23.607 23.608-15.739-15.739zM397.698 177.334l-62.954-62.953 15.739-15.739 62.953 62.954-15.738 15.738zM334.732 161.602l-23.607-23.607 15.738-15.738 23.607 23.607-15.738 15.738zM374.078 200.958l-23.607-23.608 15.738-15.737 23.607 23.607-15.738 15.738zM381.943 114.379l-23.608-23.608 15.739-15.738 23.607 23.607-15.738 15.739zM421.31 153.739l-23.607-23.607 15.738-15.739 23.608 23.608-15.739 15.738zM90.754 358.271l62.954 62.953-15.739 15.739-62.953-62.954 15.738-15.738zM153.705 373.997l23.607 23.607-15.738 15.738-23.607-23.607 15.738-15.738zM114.355 334.658l23.608 23.608-15.739 15.738-23.607-23.607 15.738-15.739zM137.965 311.044l62.954 62.954-15.739 15.738-62.953-62.953 15.738-15.739zM153.701 90.723l-62.953 62.953-15.739-15.739 62.954-62.953 15.738 15.739zM177.309 114.328l-62.954 62.953-15.738-15.739 62.953-62.953 15.739 15.739zM200.939 137.949l-62.954 62.954-15.738-15.738 62.954-62.953 15.738 15.737z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="south_korea_svg__clip0_4:7290">
          <Path
            fill="#fff"
            transform="translate(0 -.001)"
            d="M0 0h512v512H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSouthkorea;