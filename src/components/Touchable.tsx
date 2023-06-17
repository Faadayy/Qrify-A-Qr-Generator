import Colors from 'constants/Colors'
import React from 'react'
import {
  StyleProp,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ViewStyle,
  View,
} from 'react-native'


type Props = React.ComponentProps<typeof TouchableOpacity> &
  React.ComponentProps<typeof TouchableNativeFeedback> & {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    rippleEffect?: string
    useForeground?: boolean
  }
const Touchable = ({
  children,
  rippleEffect,
  useForeground = true,
  style,
  ...rest
}: Props) =>
  Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      style={style}
      {...rest}
      background={TouchableNativeFeedback.Ripple(
        rippleEffect ?? Colors.ui.rippleEffect,
        false,
      )}
      useForeground={useForeground}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity style={style} {...rest} >
      {children}
    </TouchableOpacity>
  )
export { Touchable }
