import React from 'react'
import { TextProps, Text as Text } from 'react-native'
import Animated from 'react-native-reanimated'

type TextProp = TextProps & { children: React.ReactNode; animated?: boolean; numberOfLines?: number | undefined; }



const RNText = ({ animated, ...props }: TextProp) =>
  animated === true ? (
    <Animated.Text
      {...props}
      style={[{ fontFamily: 'Jost-Bold' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  ) : (
    <Text {...props} style={[{ fontFamily: 'Jost-Bold' }, props.style]} />
  )

const TextRegular = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Jost-Regular' }, props.style]}
      numberOfLines={props.numberOfLines}

    />
  )
}
const TextBold = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Jost-Bold' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextMedium = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Jost-Medium' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextThin = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Jost-Thin' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
const TextItalic = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Jost-Italic' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}
export { TextRegular, TextBold, TextMedium, TextThin, TextItalic }
