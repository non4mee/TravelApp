import { Platform } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

import platform from '../helpers/platform';

export const StackStyle = {
  headerTitleAlign: 'center',
  headerTitle: '',
  headerBackTitleVisible: false,
  gestureEnabled: false,
  swipeEnabled: false,
  headerForceInset: Platform.OS === 'ios' ? true : undefined,
  headerShadowVisible: true,
  headerBackTitleStyle: { color: platform.black },
  headerTintColor: platform.black,
  headerStyle: {
    backgroundColor: platform.defaultBackgroundColor
  },
  headerTitleStyle: {
    color: platform.black,
    fontWeight: '900'
  }
};


export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: platform.defaultBackgroundColor
  }
};
