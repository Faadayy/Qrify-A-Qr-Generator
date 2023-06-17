import Colors from 'constants/Colors'
import React from 'react'
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { default as RNModal } from 'react-native-modal'

import { widthPercentageToDP } from 'react-native-responsive-screen'
// import { Colors } from 'constants'

interface Props {
  visible: boolean
  children: React.ReactNode
  mainContainerStyle?: StyleProp<ViewStyle>
  subContainerStyle?: StyleProp<ViewStyle>
  overlayStyle?: StyleProp<ViewStyle>
  handleCloseModal: () => void
  avoidKeyboard?: boolean
  onModalHide?: () => void
}
const Modal = ({
  visible,
  children,
  mainContainerStyle,
  subContainerStyle,
  overlayStyle,
  handleCloseModal,
  ...props
}: Props) => {
  return (
    <RNModal {...props} isVisible={visible} >
      <View style={[styles.mainContainer, mainContainerStyle]}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <Animated.View
            style={[styles.modalOverlay, overlayStyle, { opacity: 1 }]}
          />
        </TouchableWithoutFeedback>
        <View style={[styles.subContainer, subContainerStyle]}>{children}</View>
      </View>
    </RNModal>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: Colors.ui.white,
    borderRadius: 5,
    width: widthPercentageToDP(90),
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})
export { Modal }
