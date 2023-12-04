import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Profile() {
  const {logout}=useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity style={{height:200, width:200}} onPress={()=>{logout()}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}