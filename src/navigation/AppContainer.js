import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';

import { NavigationTheme } from './themes';
import * as RootNavigation from './RootNavigation';

const navigationRef = RootNavigation.navigationRef;

function AppContainer() {
  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <AppStack />
    </NavigationContainer>
  );
}

export default AppContainer;
