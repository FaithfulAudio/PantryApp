import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/index';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import mobileAds from 'react-native-google-mobile-ads';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

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

  const checkPermissions = async () => {
    const result = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    if (result === RESULTS.DENIED) {
      await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    }
  };

  useEffect(() => {
    setStatusBarColor();
    checkPermissions();
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
