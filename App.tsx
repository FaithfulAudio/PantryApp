import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/index';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import mobileAds from 'react-native-google-mobile-ads';

function App(): React.JSX.Element {
  const unitId =
    Platform.OS === 'android'
      ? 'ca-app-pub-9341306803073768/4726842716'
      : 'ca-app-pub-9341306803073768/4778813606';

  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      console.log(adapterStatuses, 'adapter statuses here');
    });

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
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={unitId}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </NavigationContainer>
  );
}

export default App;
