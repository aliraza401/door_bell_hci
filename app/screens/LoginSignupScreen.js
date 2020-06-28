import React from "react";
import { StyleSheet, Text, View, StatusBar, Button, Dimensions } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export default function LoginSignupScreen({navigation}) {
    console.log( Dimensions.get('screen') )
  return (
    <View style={styles.container}>
        <View style={styles.inner_centainer}>
            <FontAwesome5  name="user-alt" size={40} color="#212121" />
            <Text style={styles.text}>Smart Door Bell</Text>
            <View style={styles.btn_container}>
                <Button style={styles.btn} title='Signup' color='#1976D2' onPress={() => navigation.navigate('Signup')} />
                <View style={{marginTop:25}}></View>
                <Button style={styles.btn} title='login' color='#1976D2' onPress={() => navigation.navigate('Signin')} />
            </View>
        </View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inner_centainer:{
    height: '70%',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom:'auto',
  },
  text:{
      marginTop: 15,
    fontWeight:'Roboto',
    fontSize: 33,
    fontWeight: 'bold',
    color: '#212121'
  },
  btn_container:{
      marginTop: 50,
    width: '80%',
  },
  btn: {
    borderRadius: 20,
    marginTop: '50px',
  },
});
