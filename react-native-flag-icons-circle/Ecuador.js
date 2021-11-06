import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEcuador(props) {
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
      <Path
        d="M256 345.043c49.177 0 89.043-39.866 89.043-89.043 0-49.177-39.866-89.043-89.043-89.043-49.177 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043z"
        fill="#FFDA44"
      />
      <Path
        d="M256 311.652c-30.687 0-55.652-24.966-55.652-55.652v-33.391c0-30.687 24.966-55.652 55.652-55.652s55.652 24.966 55.652 55.652V256c0 30.687-24.965 55.652-55.652 55.652z"
        fill="#338AF3"
      />
      <Path
        d="M345.043 122.435H278.26c0-12.294-9.967-22.261-22.261-22.261-12.294 0-22.261 9.967-22.261 22.261h-66.783c0 12.295 10.709 22.261 23.002 22.261h-.741c0 12.295 9.966 22.261 22.261 22.261 0 12.295 9.966 22.261 22.261 22.261h44.522c12.295 0 22.261-9.966 22.261-22.261 12.295 0 22.261-9.966 22.261-22.261h-.741c12.294 0 23.002-9.967 23.002-22.261z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgEcuador;