import React, { useState } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import {
  default as RNPhoneInput,
  PhoneInputProps,
} from 'react-native-phone-number-input'
import { CountryCode } from 'react-native-country-picker-modal'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextRegular } from './Text'
import Colors from 'constants/Colors'
type TextInputProps = PhoneInputProps & {
  touched?: boolean
  error?: string
  containerStyle?: StyleProp<ViewStyle>
  phoneRef: any
  placeholderTextColor?: string
  countryCode?: CountryCode | string
  onBlur?: (e: any) => void
  onChangeCountry?: (country: any) => void
}

const PhoneInput = (props: TextInputProps) => {
  const [isVaild, setIsValid] = useState(true)
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, props.containerStyle]}>
        <RNPhoneInput
          ref={props.phoneRef}
          value={props.value}
          defaultCode={(props.countryCode as CountryCode) ?? 'AU'}
          layout="second"
          onChangeText={props.onChangeText}
          onChangeFormattedText={props.onChangeText}
          codeTextStyle={styles.codeTextStyle}
          textContainerStyle={{
            height: RFValue(55),
            backgroundColor: Colors.ui.white,
            paddingLeft: 15,
          }}
          // textInputProps={{
          //   onBlur: e => {
          //     if (props.value) {
          //       const checkValid = props.phoneRef.current?.isValidNumber(
          //         props.value,
          //       )
          //       setIsValid(checkValid ?? true)
          //     }
          //     props.onBlur && props.onBlur(e)
          //   },
          //   onFocus: () => setIsValid(true),
          //   placeholderTextColor:
          //     props.placeholderTextColor ?? Colors.text.placeholderColor,
          // }}
          textInputStyle={styles.textInputStyle}
          countryPickerButtonStyle={{ width: '22%' }}
          renderDropdownImage={<View style={styles.divider} />}
          {...props}
        />
      </View>

      {props.touched && props.error && (
        <TextRegular style={styles.errorMessage}>{props.error}</TextRegular>
      )}
      {props.touched && !props.error && !isVaild && (
        <TextRegular style={styles.errorMessage}>
          Number seems invalid
        </TextRegular>
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
    height: RFValue(55),
    borderRadius: 10,
    borderColor: Colors.ui.textInputBorder,
    flexDirection: 'row',
    borderWidth: 1,
    overflow: 'hidden',
  },
  textInputStyle: {
    fontSize: RFValue(14),
    color: Colors.text.black,
    fontFamily: 'Nex-Regular',
    height: RFValue(55),
  },

  codeTextStyle: {
    fontSize: RFValue(14),
    color: Colors.text.placeholderColor,
    fontFamily: 'Nexa-Regular',
  },

  divider: {
    height: '70%',
    width: 1,
    backgroundColor: Colors.ui.textInputBorder,
    position: 'absolute',
    right: 0,
  },

  errorMessage: {
    color: Colors.text.error,
    marginTop: 1,
    marginLeft: 5,
    fontSize: 12,
  },
})

export { PhoneInput }
