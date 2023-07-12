import { useState } from "react";
import * as React from 'react'
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/TabNavigator'
import { ToastComponent } from "@iqorlobanov/react-native-toast";
import { WithSplashScreen } from "screens/splashScreen/SplashScreen";
import { LogBox } from "react-native";
LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native'])

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  setTimeout(() => {
    setIsAppReady(true)
  }, 1000);



  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <RootNavigator />
      <ToastComponent />
    </WithSplashScreen>
  );

}
