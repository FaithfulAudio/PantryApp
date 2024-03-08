import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/index';

function App(): React.JSX.Element {
  // Set transparent status bar color
  const setStatusBarColor = () => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
    }
  };

  // Call the function to set status bar color
  useEffect(() => {
    setStatusBarColor();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
