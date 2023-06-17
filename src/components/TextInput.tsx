import React, { useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from 'constants/Colors'
import { Icon } from './Icon'
import { TextRegular } from './Text'
type TextInputProps = React.ComponentProps<typeof RNTextInput> & {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  touched?: boolean
  error?: string
  containerStyle?: StyleProp<ViewStyle>
  optionalText?: string
}

const TextInput = (props: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    props.secureTextEntry || false,
  )
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, props.containerStyle]}>
        {props.leftIcon && (
          <View style={[styles.leftIconContainer]}>
            <View style={styles.leftIconSubContainer}>{props.leftIcon}</View>
            <View style={styles.divider} />
          </View>
        )}
        <View style={[styles.textInputContainer]}>
          <RNTextInput
            {...props}
            secureTextEntry={secureTextEntry}
            style={[styles.textInput, props.style]}
            placeholderTextColor={
              props.placeholderTextColor || Colors.text.placeholderColor
            }
            autoCorrect={props.autoCorrect ?? false}
          />
        </View>
        {props.secureTextEntry ? (
          <View style={[styles.rightIconContainer]}>
            {
              <Icon
                type="FontAwesome"
                name={secureTextEntry ? 'eye-slash' : 'eye'}
                size={RFValue(20)}
                color={Colors.icon.textInputIcon}
                onPress={() => {
                  setSecureTextEntry(prev => !prev)
                }}
              />
            }
          </View>
        ) : (
          props.rightIcon && (
            <View style={[styles.rightIconContainer]}>{props.rightIcon}</View>
          )
        )}
      </View>
      {props.touched && props.error && (
        <TextRegular style={styles.errorMessage}>{props.error}</TextRegular>
      )}
      {props.optionalText && (
        <View style={styles.optionalContainer}>
          <TextRegular style={styles.optionalMessage}>
            {props.optionalText}
          </TextRegular>
          <TextRegular style={styles.optionalMessage}>
            {`${props.value?.length}/${props.maxLength}`}
          </TextRegular>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 15,
  },
  container: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    borderColor: Colors.ui.textInputBorder,
    flexDirection: 'row',
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: Colors.ui.white,
  },
  textInput: {
    height: '100%',
    fontSize: RFValue(14),
    color: Colors.text.black,
    fontFamily: 'Jost-Regular',
  },
  leftIconContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: '70%',
    width: 1,
    backgroundColor: Colors.ui.textInputBorder,
  },
  leftIconSubContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  rightIconContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: Colors.text.error,
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
  },
  optionalContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  optionalMessage: {
    color: Colors.text.black,
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
  },
})

export { TextInput }
