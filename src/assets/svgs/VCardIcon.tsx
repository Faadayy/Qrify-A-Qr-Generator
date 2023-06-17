import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const VCardIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={RFValue(30)}
        height={RFValue(30)}
        style={{ marginBottom: -4 }}
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="nonzero"
            d="M19.75 4A2.25 2.25 0 0 1 22 6.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4h15.5Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75Zm-10 7a.75.75 0 0 1 .75.75v.493l-.008.108c-.163 1.113-1.094 1.65-2.492 1.65s-2.33-.537-2.492-1.65l-.008-.11v-.491a.75.75 0 0 1 .75-.75h3.5Zm3.502.496h4.498a.75.75 0 0 1 .102 1.493l-.102.007h-4.498a.75.75 0 0 1-.101-1.493l.101-.007h4.498-4.498ZM8 8.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.252.998h4.498a.75.75 0 0 1 .102 1.493L17.75 11h-4.498a.75.75 0 0 1-.101-1.493l.101-.007h4.498-4.498Z"
        />
    </Svg>
)
export default VCardIcon
