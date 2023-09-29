import { View, Text,SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Lista from './src/components/Lista';




<SafeAreaView style={styles.container}>
<Text style={styles.text}>MY SONG</Text>
<ScrollView >

  
 <Lista />

</ScrollView>
</SafeAreaView>




const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'beige',
},
text:{
fontSize:40,
fontWeight:'bold',
textAlign:'center',
},


});