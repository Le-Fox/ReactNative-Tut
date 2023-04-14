import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather.js';
import {View,StyleSheet} from 'react-native'
import UpcomingWeather from './src/screens/UpcomingWeather.js';

const App = ()=>{
return(
  <View style={styles.container}>
    
    <CurrentWeather/>
    <UpcomingWeather/>
  </View>
)}
const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
export default App