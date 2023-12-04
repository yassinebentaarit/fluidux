import React from 'react'
import Login from '../Screens/Login'
import Registre from '../Screens/Registre'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigations from './TabNavigations';

const Stack=createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Registre" component={Registre}/>
      <Stack.Screen name="TabNavigations" component={TabNavigations}/>
    </Stack.Navigator>
  )
}