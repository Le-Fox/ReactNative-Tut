import React from 'react';
import {View,Text,SafeAreaView, StyleSheet} from 'react-native'

const App = ()=>{
return(
  <SafeAreaView style={styles.wrapper}>
     <View style={styles.container}>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <Text style={styles.highlow}>High: 8 Low: 6</Text> 
      
    </View>
 </SafeAreaView>
)
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"pink",
    flex:1,
    alignItems:'center'
  },wrapper:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
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
  }
})
export default App