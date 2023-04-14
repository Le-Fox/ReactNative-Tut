import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View,Text,SafeAreaView, StyleSheet} from 'react-native'

const CurrentWeather = ()=>{
return(
  <SafeAreaView style={styles.wrapper}>
     <View style={styles.container}>
      <Feather name='sun' size={100} color="black"/>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <View style={styles.highlow_wrapper}>
        <Text style={styles.highlow}>high: 8</Text> 
        <Text style={styles.highlow}>Low: 6</Text> 
      </View>
    </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's Perfect T-shirt weather</Text>
      </View>  
 </SafeAreaView>
)
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },wrapper:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor:"pink",
  },
  temp:{
    color:"black",
    fontSize:48,
  },
  feels:{
    color:"black",
    fontSize:30
  },
  highlow:{
    color:"black",
    fontSize:20
  },
  highlow_wrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:"flex-start",
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})
export default CurrentWeather