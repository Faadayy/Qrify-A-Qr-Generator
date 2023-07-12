import {Platform} from 'react-native';
import {hasCameraRollPermission} from './Permissions';
import Share from 'react-native-share';

const ShareQr = async ref => {
  if (Platform.OS === 'android' && !(await hasCameraRollPermission())) {
    return;
  }
  const uri = await ref?.current?.capture();
  const shareOptions = {
    title: 'Share image',
    url: 'file://' + uri,
    failOnCancel: false,
  };
  try {
    await Share.open(shareOptions);
  } catch (error) {
    console.log('Error sharing image:', error);
  }
};
export {ShareQr};
