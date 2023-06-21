import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const LockIcon = (props: SvgProps) => (
    <Svg viewBox="0 0 24 24" width={RFValue(25)} height={RFValue(25)} {...props}>
        <G
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <Rect width={16} height={10} x={4} y={11} rx={2} ry={2} />
            <Path d="M16.5 11V8h0c0-2.8-.5-5-4.5-5S7.5 5.2 7.5 8h0v3" />
        </G>
    </Svg>
)
export default LockIcon
