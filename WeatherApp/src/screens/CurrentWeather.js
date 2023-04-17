import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View,Text,SafeAreaView, StyleSheet} from 'react-native'
import RowText from '../components/RowText';
import { weatherType } from '../utilities/WeatherType';

const CurrentWeather = ()=>{
  const{wrapper,container,temp,feels,highlow,highlow_wrapper,message,description,bodyWrapper}= styles
return(
  <SafeAreaView style={wrapper}>
     <View style={container}>
      <Feather name={weatherType["Thunderstorm"].icon} size={100} color="black"/>
      <Text style={temp}>6</Text>
      <Text style={feels}>Feels like 5</Text>
      
      <RowText messageOne={'High: 8'} 
      messageTwo={'Low: 6'} 
      containerStyles={highlow_wrapper} 
      messageOneStyles={highlow} 
      messageTwoStyles={highlow}/>
    </View>

    <RowText messageOne={"It's Sunny"} 
     messageTwo={weatherType['Thunderstorm'].message} 
     containerStyles={bodyWrapper} 
     messageOneStyles={description} 
     messageTwoStyles={message}/> 
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