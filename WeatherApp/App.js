import React from 'react';
import CurrentWeather from './src/components/CurrentWeather.js';
import {View,StyleSheet} from 'react-native'
import UpcomingWeather from './src/components/UpcomingWeather.js';

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