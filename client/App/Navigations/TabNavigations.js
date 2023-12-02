import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import{Ionicons, AntDesign, Feather, Fontisto} from '@expo/vector-icons';


export default function TabNavigations() {
  const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color , size})=>(
          <Ionicons name="home" color={color} size={size}/>
        )
      }}
      />
      <Tab.Screen name="Fav" component={Fav} 
      options={{
        tabBarLabel:'Fav',
        tabBarIcon:({color , size})=>(
          <Fontisto  name="favorite" color={color} size={size}/>
        )
      }}
      />
      <Tab.Screen name="Search" component={Search}
      options={{
        tabBarLabel:'Search',
        tabBarIcon:({color , size})=>(
          <Feather name="search" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel:'User',
        tabBarIcon:({color , size})=>(
          <AntDesign name="user" size={size} color={color}/>
        )
      }}
      />
    </Tab.Navigator>
  );
}