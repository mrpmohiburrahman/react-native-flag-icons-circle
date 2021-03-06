import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBermuda(props) {
  return (
    <Svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M512 256c0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256 0 256.061 256 .028 256 0c141.384 0 256 114.616 256 256z"
        fill="#D80027"
      />
      <Path
        d="M256 122.435v86.343l-89.043-86.343H256zM133.565 256h75.211l-75.211-100.174-11.13 77.913L133.565 256z"
        fill="#0052B4"
      />
      <Path d="M255.315 256H256v-.685l-.685.685z" fill="#F0F0F0" />
      <Path
        d="M256 133.565V0h-.043C114.591.024 0 114.629 0 256h133.565v-75.211L208.776 256h46.54l.685-.685v-46.537l-75.213-75.213H256z"
        fill="#F0F0F0"
      />
      <Path
        d="M129.515 33.391a257.213 257.213 0 00-96.124 96.124V267.13h66.783V100.174H267.13V33.391H129.515z"
        fill="#D80027"
      />
      <Path
        d="M266.176 234.694L165.044 133.565h-31.48v.002l132.609 132.609h.002c.001.001.001-21.706.001-31.482z"
        fill="#D80027"
      />
      <Path
        d="M289.391 133.565v122.434c0 59.64 155.826 59.64 155.826 0V133.565H289.391z"
        fill="#F3F3F3"
      />
      <Path
        d="M289.391 256v-.001c0 59.64 77.913 77.914 77.913 77.914s77.913-18.274 77.913-77.914V256H289.391z"
        fill="#6DA544"
      />
      <Path
        d="M367.304 207.026l-36.174 15.583V256l36.174 22.261L403.478 256v-33.391l-36.174-15.583z"
        fill="#A2001D"
      />
      <Path d="M331.13 189.217h72.348v33.391H331.13v-33.391z" fill="#338AF3" />
    </Svg>
  );
}

export default SvgBermuda;
