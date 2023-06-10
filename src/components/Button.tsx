import React from 'react'
import {
  View,
  StyleSheet,
  Button as RNButton,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  TextStyle,
} from 'react-native'
import { ACTIVEOPACITY, Colors } from '@constants'
import { TextBold, TextRegular } from './Text'
import { Touchable } from './Touchable'

type Props = React.ComponentProps<typeof RNButton> & {
  mainContainerStyle?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  loading?: boolean
  primary?: boolean
  warning?: boolean
  regularText?: boolean
  textStyle?: StyleProp<TextStyle>
  rippleEffect?: string
}
const BORDERRADUIS = 15
const Button = ({
  title,
  style,
  primary = true,
  warning = false,
  regularText = false,
  loading = false,
  textStyle,
  rippleEffect,
  mainContainerStyle,
  containerStyle,
  ...restProps
}: Props) => {
  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <View style={[styles.container, containerStyle]}>
        <Touchable
          activeOpacity={ACTIVEOPACITY}
          disabled={restProps.disabled ?? loading}
          onPress={restProps.onPress}
          rippleEffect={
            rippleEffect ?? primary
              ? Colors.ui.inactiveButton
              : Colors.ui.rippleEffect
          }>
          <View
            style={[
              {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                backgroundColor:
                  restProps.disabled && !primary
                    ? Colors.ui.disabledInactiveButton
                    : restProps.disabled
                    ? Colors.ui.inactiveButton
                    : primary
                    ? Colors.ui.activeButton
                    : warning
                    ? Colors.ui.red
                    : Colors.ui.white,
              },
              style,
            ]}>
            {loading ? (
              <ActivityIndicator
                color={
                  primary || warning ? Colors.text.white : Colors.text.black
                }
              />
            ) : (
              <>
                {regularText ? (
                  <TextRegular
                    style={[
                      styles.title,
                      {
                        color: restProps.disabled
                          ? Colors.text.disableText
                          : primary || warning
                          ? Colors.text.white
                          : Colors.text.black,
                      },
                      textStyle,
                    ]}>
                    {title}
                  </TextRegular>
                ) : (
                  <TextBold
                    style={[
                      styles.title,
                      {
                        color: restProps.disabled
                          ? Colors.text.disableText
                          : primary || warning
                          ? Colors.text.white
                          : Colors.text.black,
                      },
                      textStyle,
                    ]}>
                    {title}
                  </TextBold>
                )}
              </>
            )}
          </View>
        </Touchable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    borderColor: Colors.ui.black,
    shadowColor: Colors.ui.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: BORDERRADUIS,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  container: {
    width: '100%',
    height: 55,
    borderRadius: BORDERRADUIS,
    overflow: 'hidden',
  },
  title: {
    color: Colors.text.white,
    textAlign: 'center',
    fontSize: 16,
  },
})
export { Button }
