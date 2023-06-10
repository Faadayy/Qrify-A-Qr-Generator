import { Toast, ToastType } from '@iqorlobanov/react-native-toast'

const SuccessToast = (message: string, time: number = 3000) => {
  Toast.show({
    title: 'SUCCESS',
    description: message,
    type: ToastType.SUCCESS,
    visibilityTime: time,
  })
}
const ErrorToast = (message: string, time: number = 3000) => {
  Toast.show({
    title: 'ERROR',
    description: message,
    type: ToastType.ERROR,
    visibilityTime: time,
  })
}
const InfoToast = (message: string, time: number = 3000) => {
  Toast.show({
    title: 'INFORMATION',
    description: message,
    type: ToastType.INFO,
    visibilityTime: time,
  })
}
const WarningToast = (message: string, time: number = 3000) => {
  Toast.show({
    title: 'WARNING',
    description: message,
    type: ToastType.WARNING,
    visibilityTime: time,
  })
}
export { SuccessToast, ErrorToast, InfoToast, WarningToast }
