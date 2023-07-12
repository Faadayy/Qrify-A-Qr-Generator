import {Linking, PermissionsAndroid, Platform} from 'react-native';

const hasCameraRollPermission = async () => {
  const permission =
    Platform.Version >= '33'
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  if (status === 'never_ask_again') {
    return await Linking.openSettings();
  }
  return status === 'granted';
};

export {hasCameraRollPermission};
