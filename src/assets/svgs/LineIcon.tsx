import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path, SvgProps } from "react-native-svg"
const LineIcon = (props: SvgProps) => (
    <Svg
        fill="none"
        width={RFValue(30)}
        height={RFValue(30)}
        stroke={props.color ? props.color : "#213555"}
        viewBox="0 0 24 24"
        style={{ marginRight: -5 }}
        {...props}
    >
        <Path
            stroke={props.color ? props.color : "#213555"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19V5"
        />
    </Svg>

)
export { LineIcon }

