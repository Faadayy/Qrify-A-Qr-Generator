import * as React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Rect, Circle, Ellipse, Path } from "react-native-svg"
const URLIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        height={RFValue(30)}
        width={RFValue(30)}
        style={{ marginBottom: -3 }}
        {...props}
    >
        <Path
            fill="#fff"
            d="M30 53.5c-6.171 0-9.5-12.108-9.5-23.5S23.829 6.5 30 6.5s9.5 12.108 9.5 23.5-3.329 23.5-9.5 23.5Zm0-44c-2.714 0-6.5 7.8-6.5 20.5s3.786 20.5 6.5 20.5 6.5-7.8 6.5-20.5S32.714 9.5 30 9.5Z"
        />
        <Path
            fill="#fff"
            d="M50 23.5H10a1.5 1.5 0 0 1 0-3h40a1.5 1.5 0 0 1 0 3ZM50 39.5H10a1.5 1.5 0 0 1 0-3h40a1.5 1.5 0 0 1 0 3Z"
        />
        <Path
            fill="#fff"
            d="M30 53.5A23.5 23.5 0 1 1 53.5 30 23.527 23.527 0 0 1 30 53.5Zm0-44A20.5 20.5 0 1 0 50.5 30 20.523 20.523 0 0 0 30 9.5Z"
        />
        <Path
            fill="#fff"
            d="M8 31.5A1.5 1.5 0 0 1 6.5 30 23.527 23.527 0 0 1 30 6.5a1.5 1.5 0 0 1 0 3A20.523 20.523 0 0 0 9.5 30 1.5 1.5 0 0 1 8 31.5Z"
        />
    </Svg>
)
export default URLIcon
