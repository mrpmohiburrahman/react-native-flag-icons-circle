import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgTurksandcaicos(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#turks_and_caicos_svg__clip0_4:7316)">
        <Path
          d="M512 256.001c0 141.384-114.616 256-256 256-141.384 0-256-114.616-256-256 0 .061 256-255.972 256-256 141.384 0 256 114.616 256 256z"
          fill="#0052B4"
        />
        <Path d="M255.315 256.001H256v-.685l-.685.685z" fill="#F0F0F0" />
        <Path
          d="M256 133.566V.001h-.043C114.591.025 0 114.63 0 256.001h133.565V180.79l75.211 75.211h46.54l.685-.685v-46.537l-75.213-75.213H256z"
          fill="#F0F0F0"
        />
        <Path
          d="M129.515 33.392a257.216 257.216 0 00-96.124 96.124v126.485h66.783V100.175H256V33.392H129.515z"
          fill="#D80027"
        />
        <Path
          d="M256 224.52l-90.955-90.953h-31.48v.002l122.433 122.432H256V224.52z"
          fill="#D80027"
        />
        <Path
          d="M289.391 133.566V256c0 59.64 77.913 77.914 77.913 77.914S445.217 315.64 445.217 256V133.566H289.391z"
          fill="#FFDA44"
        />
        <Path
          d="M356.174 178.088c0 12.295-9.966 44.522-22.261 44.522s-22.261-32.227-22.261-44.522c0-12.295 22.261-22.261 22.261-22.261s22.261 9.966 22.261 22.261z"
          fill="#FF9811"
        />
        <Path
          d="M415.245 202.333c3.592-8.765 6.386-21.577 6.386-27.955 0-10.246-13.357-18.551-13.357-18.551s-13.357 8.306-13.357 18.551c0 6.378 2.794 19.19 6.386 27.955l-7.711 17.41a38.9 38.9 0 0014.681 2.866 38.9 38.9 0 0014.681-2.866l-7.709-17.41z"
          fill="#A2001D"
        />
        <Path
          d="M350.609 256.001s-11.13 22.261-11.13 44.522h55.652C395.13 278.262 384 256.001 384 256.001l-16.696-11.13-16.695 11.13z"
          fill="#6DA544"
        />
        <Path
          d="M384 256.001v-5.565c0-9.22-7.475-16.696-16.696-16.696-9.22 0-16.696 7.475-16.696 16.696v5.565H384z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="turks_and_caicos_svg__clip0_4:7316">
          <Path fill="#fff" transform="translate(0 .001)" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgTurksandcaicos;