import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import EnterCodeScreen from '../screens/auth/EnterCodeScreen'
import EditProfileScreen from '../screens/tabs/EditProfileScreen';
import GoalsScreen from '../screens/tabs/GoalsScreen';
import TodoScreen from '../screens/tabs/TodoScreen';

import { StackStyle } from './themes'

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterCode"
        component={EnterCodeScreen}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Goals"
        component={GoalsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Todo"
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
