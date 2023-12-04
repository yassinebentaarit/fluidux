import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import Colors from '../Shared/Colors';

export default function Home() {
  return (
    <View>
    
      <Header />
      <View style={styles.background}>
      </View>
          
    </View>
  )
}
const styles = StyleSheet.create({
  background:{
    padding:10,
    backgroundColor: Colors.blue,
    height:900,
    width:900
    
  }
});