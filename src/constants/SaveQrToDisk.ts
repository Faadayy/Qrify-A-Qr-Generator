import {Platform} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {ErrorToast, SuccessToast} from 'components';
import {hasCameraRollPermission} from './Permissions';

const saveQrToDisk = async svgRef => {
  if (Platform.OS === 'android' && !(await hasCameraRollPermission())) {
    return;
  }
  try {
    const uri = await svgRef?.current?.capture();

    CameraRoll.save(uri, {album: 'QRify'});
    SuccessToast('Saved to gallery !');
  } catch (error) {
    ErrorToast('Failed to Download !');
  }
};

export {saveQrToDisk};
