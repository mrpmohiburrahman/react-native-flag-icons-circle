import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgEquatorialguinea(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#equatorial_guinea_svg__clip0_4:7147)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M155.826 166.957h340.25C459.906 69.472 366.07 0 256 0 185.306 0 121.313 28.659 74.99 74.989l80.836 91.968z"
          fill="#6DA544"
        />
        <Path
          d="M155.826 345.043h340.25C459.906 442.528 366.07 512 256 512c-70.694 0-134.687-28.659-181.01-74.989l80.836-91.968z"
          fill="#D80027"
        />
        <Path
          d="M74.98 74.98c-99.975 99.974-99.975 262.065 0 362.04L256 256 74.98 74.98z"
          fill="#0052B4"
        />
        <Path
          d="M300.522 211.478v55.652c0 34.08 44.522 44.523 44.522 44.523s44.522-10.443 44.522-44.523v-55.652h-89.044z"
          fill="#DEDDE0"
        />
        <Path
          d="M333.913 257.113h22.261v32.278h-22.261v-32.278z"
          fill="#786145"
        />
        <Path
          d="M367.304 244.87c0-12.295-9.966-22.261-22.261-22.261s-22.261 9.966-22.261 22.261c-6.147 0-11.13 4.983-11.13 11.13 0 6.147 4.983 11.13 11.13 11.13h44.522c6.147 0 11.13-4.983 11.13-11.13 0-6.147-4.982-11.13-11.13-11.13z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="equatorial_guinea_svg__clip0_4:7147">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgEquatorialguinea;
