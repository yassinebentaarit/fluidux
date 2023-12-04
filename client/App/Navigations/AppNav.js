import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import TabNavigations from './TabNavigations';
import AuthStack from './AuthStack';
import { AuthContext } from '../Context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AppNav() {
  const{isLoading, userToken} = useContext(AuthContext);

  if(isLoading){
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
  }
  

  return (
    <NavigationContainer>
      { userToken!==null? <TabNavigations/>: <AuthStack/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
}); 