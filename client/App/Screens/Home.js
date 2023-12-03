import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'

export default function Home() {
  return (
    <View>
    <View style={styles.background}>
      <Header />
          </View>
          <View style={{
            padding:10,
            backgroundColor: '#ffffff',
            height:900,
            width:900}}>
            </View>
            </View>
  )
}
const styles = StyleSheet.create({
  background:{
    padding:10,
    backgroundColor: '#13111E',
    
  }
});