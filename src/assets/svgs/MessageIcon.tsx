import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const MessageIcon = (props: any) => (
    <Svg xmlns="http://www.w3.org/2000/svg"
        width={RFValue(25)}
        height={RFValue(25)}
        viewBox="0 0 20 20" {...props}>
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M16.873 9.94a2 2 0 1 1-4 .001 2 2 0 0 1 4-.001m-5 0a2 2 0 1 1-4 .001 2 2 0 0 1 4-.001m-5 0a2 2 0 1 1-4 .001 2 2 0 0 1 4-.001M17.442 18s-2.616-.743-4.423-.743c-1.474 0-1.81.261-3.061.261-4.08 0-7.376-3.01-7.882-6.667C1.404 5.997 5.269 1.999 9.958 2c3.943 0 7.045 2.703 7.775 6.083a7.637 7.637 0 0 1-.078 3.643c-.38 1.405-.363 2.985.049 4.568.21.809.599 1.706-.262 1.706m2.476-1.141-.278-1.069c-.303-1.16-.368-2.385-.055-3.542a9.645 9.645 0 0 0 .103-4.588C18.768 3.405 14.862 0 9.958 0 4-.001-.735 5.127.095 11.125c.642 4.641 4.776 8.393 9.863 8.393 1.469 0 1.765-.261 3.062-.261 1.564 0 3.776.662 3.776.662 1.888.473 3.604-1.209 3.122-3.06"
        />
    </Svg>
)
export default MessageIcon
