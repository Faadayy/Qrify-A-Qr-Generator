import { useState } from "react";
import * as React from 'react'
import 'react-native-gesture-handler';
import { WithSplashScreen } from "./src/screens/splashScreen/SplashScreen";
import RootNavigator from './src/navigation/TabNavigator'
import { ToastComponent } from "@iqorlobanov/react-native-toast";


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
