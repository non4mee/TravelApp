import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackStyle } from './themes'

import EditProfileScreen from '../screens/tabs/EditProfileScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      
    </Stack.Navigator>
  );
};

export default MainStack;
