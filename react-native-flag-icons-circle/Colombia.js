import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgColombia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 256C0 114.616 114.616 0 256 0c141.384 0 256 114.616 256 256l-256 22.261L0 256z"
        fill="#FFDA44"
      />
      <Path
        d="M34.256 384C78.52 460.516 161.245 512 256 512s177.479-51.484 221.744-128L256 367.304 34.256 384z"
        fill="#D80027"
      />
      <Path
        d="M477.744 384C499.526 346.346 512 302.631 512 256H0c0 46.631 12.474 90.346 34.256 128h443.488z"
        fill="#0052B4"
      />
    </Svg>
  );
}

export default SvgColombia;
