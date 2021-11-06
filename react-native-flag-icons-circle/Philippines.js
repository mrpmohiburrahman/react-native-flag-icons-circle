import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhilippines(props) {
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
        d="M256 0v256L74.98 437.02C121.307 483.346 185.307 512 256 512c141.384 0 256-114.616 256-256C512 114.616 256 0 256 0z"
        fill="#D80027"
      />
      <Path
        d="M256 0C185.307 0 121.307 28.654 74.98 74.98L256 256h256C512 114.616 397.384 0 256 0z"
        fill="#0052B4"
      />
      <Path
        d="M175.291 256l-31.264-14.706 16.649-30.279-33.95 6.495-4.302-34.297-23.648 25.224-23.647-25.224-4.303 34.297-33.949-6.496 16.649 30.28L22.261 256l31.265 14.706-16.649 30.279 33.952-6.494 4.299 34.296 23.648-25.224 23.648 25.224 4.302-34.296 33.948 6.495-16.648-30.279L175.291 256zM68.273 100.174l10.404 14.543 17.045-5.399-10.618 14.388 10.404 14.543-16.966-5.651-10.617 14.387.133-17.88-16.965-5.652 17.048-5.399.132-17.88zM68.273 365.015l10.404 14.543 17.045-5.4-10.618 14.389 10.404 14.543-16.966-5.651-10.617 14.387.133-17.88-16.965-5.652 17.048-5.399.132-17.88zM216.666 232.595l-10.403 14.543-17.046-5.401 10.618 14.389-10.404 14.544 16.966-5.652 10.618 14.387-.134-17.879 16.965-5.652-17.047-5.399-.133-17.88z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgPhilippines;
