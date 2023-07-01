import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const DownloadIcon = (props: SvgProps) => (
    <Svg
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        width={35}
        height={35}
    >
        <Path
            fill="#000"
            d="M5.625 15a.75.75 0 0 0-1.5 0h1.5Zm-.75 1h-.75.75Zm14.4-1a.75.75 0 0 0-1.5 0h1.5Zm-8.166.539a.75.75 0 0 0 1.182.922l-1.182-.922Zm5.082-4.078a.75.75 0 0 0-1.182-.922l1.182.922Zm-5.082 5a.75.75 0 0 0 1.182-.922l-1.182.922ZM8.39 10.54a.75.75 0 0 0-1.182.922l1.182-.922ZM10.95 16a.75.75 0 0 0 1.5 0h-1.5Zm1.5-11a.75.75 0 0 0-1.5 0h1.5ZM4.125 15v1h1.5v-1h-1.5Zm0 1c0 2.053 1.628 3.75 3.675 3.75v-1.5c-1.183 0-2.175-.99-2.175-2.25h-1.5ZM7.8 19.75h7.8v-1.5H7.8v1.5Zm7.8 0c2.047 0 3.675-1.697 3.675-3.75h-1.5c0 1.26-.992 2.25-2.175 2.25v1.5ZM19.275 16v-1h-1.5v1h1.5Zm-6.984.461 3.9-5-1.182-.922-3.9 5 1.182.922Zm0-.922-3.9-5-1.182.922 3.9 5 1.182-.922Zm.159.461V5h-1.5v11h1.5Z"
        />
    </Svg>
)

export default DownloadIcon
