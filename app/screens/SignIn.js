import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Dimensions,
  TextInput,
  Alert
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export default function SignIn({navigation}) {
  const signMeIn = () => {
    Alert.alert( 'Success','Signin success')
    navigation.navigate('Settings')
  } 

  return (
    <View style={styles.container}>

      <View style={styles.inner_container}> 
        <FontAwesome5 name="user-alt" size={38} color="#212121" style={{ textAlign:'center' }} />
        <Text style={styles.signin_text}>Signin Smart Bell</Text>
        <TextInput
          style={styles.input}
          autoFocus
          maxLength={55}
          placeholder=" Enter username: "
          defaultValue={""}
        />
        <TextInput
          style={styles.input}
          autoFocus
          maxLength={55}
          placeholder=" Enter password: "
          defaultValue={""}
        />

        <View>
          <Button title="Sign In" color="#1976D2" onPress={signMeIn} />
          <Text style={styles.signup_style}>
            Dont have a account?{" "}
            <Text style={{ fontWeight: "bold" }} onPress={() => navigation.navigate('Signup')}>SignUp</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.footer_text}> @copyright BCSE6B FURC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer_text: {
    fontSize: 10,
    marginBottom: 5,
  },
  signin_text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  inner_container: {
    width: "80%",
  },
  signup_style: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
    color:'#212'
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
  },
});
