import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Dimensions,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export default function TermsScreen() {
  const { width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Terms and Services</Text>

      <Text style={styles.terms_inner_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimr incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim.
        <Text>
        incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim
        </Text>
      </Text>
      <View style={styles.btn_container}><Button title="Accpet" color="#1976D2" /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  title_text: {
    width: "100%",
    height: 40,
    color: "#212121",
    fontSize: 20,
    backgroundColor: "#2196F3",
    textAlign: "center",
    paddingTop: 4,
  },
  terms_inner_text: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    color:'#757575'
  },
  btn_container: {
    width: "80%",
    marginBottom: 15
  },
});
