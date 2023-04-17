import React,{useState,useEffect} from 'react';
import { ActivityIndicator, View ,StyleSheet} from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs.js'
import * as Location from 'expo-location'
import {API_KEY} from '@env'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator()
const App =()=>{
  const [loading,setLoading]= useState(true)
  const [error,setError]=useState(null)
  const [weather,setWeather]=useState([])
  const [lat,setLat]= useState([])
  const [lon,setLon]= useState([])

  const fetchWeatherData = async () =>{

    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError("Couldn't fetch weather data")
    }finally {
      setLoading(false)
    }

  }
  useEffect(() =>{
    (async () =>{
      let {status} = await Location.requestForegroundPermissionsAsync()
      console.log(status,'s')
      if (status !=='granted'){
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    
      await fetchWeatherData()
    })()
  },[lat,lon])



  if (loading){
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }


return(
  <NavigationContainer>
    <Tabs/>
  </NavigationContainer>
)}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1

  }
})
export default App