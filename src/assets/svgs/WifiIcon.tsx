import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const WifiIcon = (props: any) => (
    <Svg xmlns="http://www.w3.org/2000/svg"
        width={RFValue(25)}
        height={RFValue(25)}
        viewBox="0 -1.5 13 13" {...props}>
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="m5.11 8.957.695.737a.942.942 0 0 0 1.39 0l.695-.737a1.886 1.886 0 0 0-2.78 0m-2.78-2.95L3.72 7.48c1.532-1.627 4.027-1.627 5.56 0l1.39-1.475c-2.303-2.445-6.037-2.445-8.34 0M12.712 3.84l-.652.691C8.99 1.271 4.011 1.271.94 4.53L.287 3.84a1.097 1.097 0 0 1 .086-1.566c3.574-3.03 8.678-3.03 12.252 0 .461.391.503 1.123.086 1.566"
        />
    </Svg>
)
export default WifiIcon
