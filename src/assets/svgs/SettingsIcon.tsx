import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { G, Path } from "react-native-svg"
const SettingsIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={props.isFocused ? RFValue(30) : RFValue(25)}
        height={props.isFocused ? RFValue(30) : RFValue(25)}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill={'#FFF'}
            d="M20.1 9.221c-1.81 0-2.55-1.28-1.65-2.85.52-.91.21-2.07-.7-2.59l-1.73-.99c-.79-.47-1.81-.19-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.641 1.641 0 0 0-2.26-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85-.52.91-.21 2.07.7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76a1.92 1.92 0 0 0-1.91-1.9Zm-8.1 6.03c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z"
        />
    </Svg>
)
export default SettingsIcon
