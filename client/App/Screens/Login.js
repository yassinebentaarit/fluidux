import { View, Text, Image, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginJPG from './../../assets/login/login.jpg';
import Colors from '../Shared/Colors';

export default function Login() {
  return (
    <View style={styles.background}>
      <View style={styles.backgroundBot}>
      <View style={styles.coloredScreen}>
        <Text style={{color:Colors.white, fontSize:40, fontWeight:'bold'}}>LOG IN</Text>
        <Image source={LoginJPG} style={{    
          height: 120,
          width: 230 , 
          borderRadius:20}}/>
      </View>
      
      <View style={{
        marginTop:10,
        backgroundColor:Colors.bluegrey,
        borderRadius:20,
        padding:10,
        marginRight:10,
        marginLeft:10
        
      }}>
        <Text style={{fontSize:22, fontWeight:'bold',color:Colors.white}}> Welcome back</Text>
        <Text style={{color:Colors.white, paddingTop:15}}>Username</Text>
        <TextInput placeholder='username' placeholderTextColor={Colors.grey} style={{
          borderColor:Colors.white, 
          borderWidth:1, 
          borderRadius:50, 
          width:Dimensions.get('screen').width*0.8,
          height: Dimensions.get('screen').height*0.05,
          marginBottom: 10,
          marginTop:10,
          padding:10
          }}/>
          <Text style={{color:Colors.white, paddingTop:10}}>Password</Text>
        <TextInput placeholder='password' placeholderTextColor={Colors.grey} secureTextEntry={true} style={{
          borderColor:Colors.white, 
          borderWidth:1, 
          borderRadius:50, 
          width:Dimensions.get('screen').width*0.8,
          height: Dimensions.get('screen').height*0.05,
          marginBottom: 10,
          padding:10
          }}/>
          <View style={{marginTop:20,justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{width:Dimensions.get('screen').width*0.5 ,backgroundColor:Colors.lightBlue,borderRadius:50, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color:Colors.white, fontWeight:'bold', fontSize:26}}>Sign In</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      </View>
      
      
    </View>
    
  )
};
const styles = StyleSheet.create({
  background:{
flex:1
  },
  coloredScreen: {
    height:Dimensions.get('screen').height*0.25,
    backgroundColor: Colors.lightBlue, // Set the background color of the screen
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    paddingBottom: 10,

  },
  backgroundBot:{
    backgroundColor:Colors.darkBlue,
    height:600
  }
});