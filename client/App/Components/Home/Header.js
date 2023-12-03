import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors';

export default function Header() {
  return (
    <View style={{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between',
      gap:10,
      alignItems:'center',
      height: Dimensions.get('screen').height*0.05,
      backgroundColor:Colors.darkBlue
    }}>
      <Image source={require ('./../../../assets/IEEE/logo_sight_white.png')}
        style={styles.logoSight}
      />
      <View>
        <TextInput 
          placeholder='Search'
          placeholderTextColor={Colors.grey} 
          style={styles.searchBar}
        />
      </View>
      <Image source={require('./../../../assets/IEEE/IEEEWhiteColor.png')} style={styles.logoIEEE}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logoSight:{
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width*0.16,
    height: Dimensions.get('screen').height*0.05
  },
  background:{
    backgroundColor:Colors.darkBlue
  },
  logoIEEE:{
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width*0.13,
    height: Dimensions.get('screen').height*0.05
  },
  searchBar:{
    borderWidth:1,
    borderColor:Colors.white,
    padding:4,
    borderRadius:50,
    paddingLeft:10,
    width: Dimensions.get('screen').width*0.65,
    height: Dimensions.get('screen').height*0.04
  },
  userImage:{
    width:50,
    height:50,
    borderRadius:100
  }
});