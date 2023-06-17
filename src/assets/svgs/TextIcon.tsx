import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
const TextIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        // style={{ marginBottom: 2 }}
        width={RFValue(25)}
        height={RFValue(25)}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V6h-6v13h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V6H5v1a1 1 0 0 1-2 0V5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TextIcon
