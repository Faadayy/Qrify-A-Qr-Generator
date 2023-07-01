import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const ShareIcon = (props: SvgProps) => (
    <Svg
        fill="none"
        viewBox="0 -0.5 25 25"
        {...props}
        width={37}
        height={37}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.5 17.234a1.693 1.693 0 1 0-1.692 1.75c.95-.016 1.708-.8 1.692-1.75ZM11.577 11.984a2.583 2.583 0 0 1-2.539 2.625A2.583 2.583 0 0 1 6.5 11.984 2.583 2.583 0 0 1 9.038 9.36a2.583 2.583 0 0 1 2.54 2.625ZM16.654 6.734a1.693 1.693 0 1 1-3.385 0 1.693 1.693 0 1 1 3.385 0Z"
            clipRule="evenodd"
        />
        <Path
            fill="#000"
            d="M14.105 16.688a.75.75 0 0 0 .867-1.224l-.867 1.224Zm-2.633-3.705a.75.75 0 1 0-.867 1.224l.867-1.224Zm2.729-4.54a.75.75 0 1 0-1.025-1.095L14.2 8.443ZM10.53 9.825a.75.75 0 0 0 1.025 1.095L10.53 9.825Zm4.442 5.64-3.5-2.482-.867 1.224 3.5 2.481.867-1.224Zm-1.796-8.117L10.53 9.825l1.025 1.095L14.2 8.443l-1.025-1.095Z"
        />
    </Svg>
)

export default ShareIcon
