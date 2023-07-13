import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path, SvgProps } from "react-native-svg"
const LinkedInIcon = (props: SvgProps) => (
    <Svg
        fill="none"
        viewBox="0 0 24 24"
        height={RFValue(27)}
        width={RFValue(27)}
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm5 5a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 10c.34 0 .64.17.82.428A3.51 3.51 0 0 1 14.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 1 1-2 0V13.57c0-.768-.66-1.571-1.5-1.571-.524 0-1.103.285-1.5.963V17a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { LinkedInIcon }
