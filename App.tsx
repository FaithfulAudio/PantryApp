import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/index';
import {AuthProvider} from './src/contexts/AuthContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
