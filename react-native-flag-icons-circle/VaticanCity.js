import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVaticancity(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 0c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256 0-11.13-33.391-256-33.391-256L256 0z"
        fill="#F0F0F0"
      />
      <Path
        d="M256 512C114.616 512 0 397.384 0 256 0 114.616 114.616 0 256 0"
        fill="#FFDA44"
      />
      <Path
        d="M354.03 222.765l48.111 63.646c-7.58 11.478-7.54 26.942 1.227 38.539 11.12 14.711 32.061 17.623 46.773 6.502 14.711-11.12 17.623-32.061 6.501-46.772-8.765-11.597-23.633-15.853-36.743-11.691l-74.981-99.193-17.758 13.424-26.64 20.134 26.848 35.515 26.662-20.104zm69.263 73.17c4.904-3.708 11.885-2.736 15.592 2.166 3.706 4.904 2.737 11.885-2.167 15.593-4.903 3.705-11.884 2.737-15.59-2.168-3.709-4.904-2.738-11.885 2.165-15.591z"
        fill="#ACABB1"
      />
      <Path
        d="M436.55 242.868l26.848-35.515-26.638-20.136-17.758-13.424-74.981 99.193c-13.108-4.162-27.977.095-36.743 11.691-11.122 14.712-8.21 35.652 6.501 46.772 14.712 11.12 35.652 8.209 46.772-6.502 8.766-11.597 8.806-27.061 1.227-38.539l48.111-63.646 26.661 20.106zm-93.757 68.657c-3.706 4.905-10.686 5.874-15.59 2.168-4.904-3.708-5.874-10.689-2.167-15.593 3.706-4.902 10.687-5.874 15.592-2.166 4.903 3.707 5.872 10.688 2.165 15.591z"
        fill="#FFDA44"
      />
    </Svg>
  );
}

export default SvgVaticancity;