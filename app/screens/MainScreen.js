import React from "react";
import { StyleSheet, Text, View, StatusBar, Image, Button } from "react-native";

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.8,
        }}
      >
        <Image
          fadeDuration={500}
          source={require("../assets/splash_s.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 0.4,
        }}
      >
        <View style={styles.text_block}>
          <Text style={styles.heading}>Accept user Agreement</Text>
          <Text style={styles.text_style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </Text>
        </View>

        <View style={styles.btn_view}>
          <Button 
            title="NEXT" 
            color="#1976D2" 
            onPress={() => navigation.navigate('Loginsignup')}
          
          />
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text_block: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    color: '#212121'
  },
  text_style: {
    fontSize: 15,
    textAlign: "center",
    color: '#757575'
  },
  btn_view: {
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    width: "100%",
  },
});
