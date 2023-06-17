import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
const WhatsAppIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={RFValue(30)}
        height={RFValue(30)}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M3.5 12a8.5 8.5 0 1 1 8.5 8.5 8.455 8.455 0 0 1-4.542-1.314 1 1 0 0 0-.821-.113l-2.88.859 1.085-2.537a1 1 0 0 0-.07-.92A8.456 8.456 0 0 1 3.5 12ZM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 0 0 1.206 1.351l4.5-1.342A10.456 10.456 0 0 0 12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5Zm2.293 12.682-1.315.926A9.338 9.338 0 0 1 11 13.585a10.202 10.202 0 0 1-1.624-2.114l.835-.709a1 1 0 0 0 .236-1.232l-1.064-2a1 1 0 0 0-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 0 0 9.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 0 0-.12-1.634l-1.678-1a1 1 0 0 0-1.088.041Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default WhatsAppIcon
