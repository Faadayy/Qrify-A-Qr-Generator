import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TorchOnIcon = (props: SvgProps) => (
    <Svg
        fill="#000"
        viewBox="0 -0.5 25 25"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.759 5 7.5 11.222h3.259L8.315 19 18.5 11.222h-4.481L16.463 5h-5.704Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { TorchOnIcon }
