import React,{useState,useEffect} from 'react';
import { ActivityIndicator, View ,StyleSheet} from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs.js'
import { useGetWeather } from './src/hooks/useGetWeather.js';


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator()
const App =()=>{

  const [loading, error, weather] =useGetWeather()


  if(weather&&weather.list){
    return(
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }

    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )


}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1

  }
})
export default App