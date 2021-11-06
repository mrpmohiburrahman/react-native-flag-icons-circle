import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgLiberia(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#liberia_svg__clip0_4:7203)">
        <Path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F0F0F0"
        />
        <Path
          d="M58.516 93.092h394.968a257.414 257.414 0 00-50.277-46.545H108.793a257.353 257.353 0 00-50.277 46.545zM0 256c0 7.847.373 15.605 1.064 23.273h509.872A259.157 259.157 0 00512 256c0-7.847-.373-15.605-1.064-23.272H1.064A259.117 259.117 0 000 256zM27.916 372.363h456.168a254.3 254.3 0 0018.276-46.544H9.64a254.268 254.268 0 0018.276 46.544zM108.793 465.455h294.413a257.414 257.414 0 0050.277-46.545H58.516a257.506 257.506 0 0050.277 46.545zM9.64 186.182H502.36a254.256 254.256 0 00-18.277-46.545H27.916A254.33 254.33 0 009.64 186.182z"
          fill="#F0F0F0"
        />
        <Path
          d="M122.435 46.545h280.772C361.567 17.227 310.797 0 256 0c-33.391 0-91.925 17.227-133.565 46.545zM244.87 139.637h239.214a256.315 256.315 0 00-30.6-46.545H244.87v46.545zM244.87 232.728h266.066a255.13 255.13 0 00-8.575-46.545H244.87v46.545zM9.64 325.819h492.72a255.03 255.03 0 008.576-46.545H1.064a255.045 255.045 0 008.576 46.545zM58.516 418.908h394.968a256.41 256.41 0 0030.6-46.545H27.916a256.306 256.306 0 0030.6 46.545zM256 512c54.797 0 105.567-17.227 147.207-46.545H108.793C150.433 494.773 201.203 512 256 512z"
          fill="#D80027"
        />
        <Path
          d="M9.639 186.182c-4.242 15-7.135 30.563-8.575 46.545H256V0C138.82 0 40.031 78.732 9.639 186.182z"
          fill="#0052B4"
        />
        <Path
          d="M152.388 66.783l16.575 51.015h53.646l-43.398 31.532 16.574 51.018-43.397-31.53-43.399 31.53 16.578-51.018-43.398-31.532h53.643l16.576-51.015z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="liberia_svg__clip0_4:7203">
          <Path fill="#fff" d="M0 0h512v512H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLiberia;
