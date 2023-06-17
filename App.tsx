import { useEffect, useState } from "react";
import * as React from 'react'
import 'react-native-gesture-handler';
import { WithSplashScreen } from "./src/screens/splashScreen/SplashScreen";
import RootNavigator from './src/navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  setTimeout(() => {
    setIsAppReady(true)
  }, 1000);



  return (
    <NavigationContainer>
      <WithSplashScreen isAppReady={isAppReady}>
        <RootNavigator />
      </WithSplashScreen>
    </NavigationContainer>
  );

}
