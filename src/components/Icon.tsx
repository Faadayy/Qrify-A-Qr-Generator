import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
export type IconType =
  | 'MaterialIcons'
  | 'FontAwesome'
  | 'Ionicons'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'Foundation'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'AntDesign'
interface Props {
  type: IconType | string
  name: string
  size: number
  color: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}
const ACTIVEOPACITY = 0.3
const DEACTIVEOPACITY = 1
const Icon = ({ type, name, size, color, onPress, style }: Props) => {
  return (
    <>
      {type === 'MaterialCommunityIcons' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <MaterialCommunityIcons
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'Feather' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <Feather
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'AntDesign' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <AntDesign
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'Entypo' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <Entypo
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'EvilIcons' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <EvilIcons
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'FontAwesome' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <FontAwesome
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'Ionicons' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <Ionicons
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'MaterialIcons' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <MaterialIcons
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'SimpleLineIcons' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <SimpleLineIcons
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'Fontisto' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <Fontisto
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'FontAwesome5' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <FontAwesome5
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : type === 'Foundation' ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={ACTIVEOPACITY}
          disabled={onPress === undefined ? true : false}>
          <Foundation
            name={`${name}`}
            size={size}
            color={`${color}`}
            style={style}
          />
        </TouchableOpacity>
      ) : null}
    </>
  )
}
export { Icon }
