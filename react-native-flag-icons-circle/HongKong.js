import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHongkong(props) {
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
        fill="#D80027"
      />
      <Path
        d="M282.429 193.668c-5.818 24.199-16.155 19.584-21.228 40.688-29.883-7.185-48.286-37.235-41.101-67.12 7.182-29.883 37.234-48.287 67.118-41.102-10.147 42.207.416 45.891-4.789 67.534zM204.887 211.6c21.217 13.01 13.633 21.417 32.135 32.764-16.068 26.201-50.333 34.416-76.535 18.349-26.201-16.067-34.418-50.334-18.35-76.535 37.006 22.692 43.771 13.785 62.75 25.422zM197.978 290.892c18.931-16.158 24.58-6.348 41.089-20.438 19.955 23.377 17.179 58.505-6.197 78.46-23.378 19.955-58.506 17.176-78.458-6.199 33.014-28.183 26.633-37.372 43.566-51.823zM271.254 321.965c-9.52-22.997 1.556-25.341-6.743-45.394 28.399-11.753 60.951 1.741 72.705 30.14 11.753 28.399-1.743 60.95-30.142 72.704-16.597-40.109-27.306-36.88-35.82-57.45zM323.45 261.876c-24.813 1.947-23.622-9.313-45.257-7.615-2.403-30.639 20.491-57.43 51.132-59.835 30.64-2.399 57.43 20.493 59.832 51.135-43.277 3.393-43.516 14.576-65.707 16.315z"
        fill="#F0F0F0"
      />
    </Svg>
  );
}

export default SvgHongkong;