import React from 'react'
import { TextProps, Text as Text } from 'react-native'
import Animated from 'react-native-reanimated'

type TextProp = TextProps & { children: React.ReactNode; animated?: boolean; numberOfLines?: number | undefined; }



const RNText = ({ animated, ...props }: TextProp) =>
  animated === true ? (
    <Animated.Text
      {...props}
      style={[{ fontFamily: 'Nexa-Bold' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  ) : (
    <Text {...props} style={[{ fontFamily: 'Nexa-Bold' }, props.style]} />
  )

const TextRegular = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Nexa-Regular' }, props.style]}
      numberOfLines={props.numberOfLines}

    />
  )
}
const TextBold = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Nexa-Bold' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}

const TextLight = (props: TextProp) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Nexa-Light' }, props.style]}
      numberOfLines={props.numberOfLines}
    />
  )
}

export { TextRegular, TextBold, TextLight }
