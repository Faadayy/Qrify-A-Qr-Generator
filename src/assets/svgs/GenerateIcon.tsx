import Colors from "constants/Colors"
import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
const GenerateIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width={props.isFocused ? RFValue(30) : RFValue(25)}
        height={props.isFocused ? RFValue(30) : RFValue(25)}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill={'#FFF'}
            d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2ZM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 9H5V5h4Z" />
    </Svg>
)
export default GenerateIcon
