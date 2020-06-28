import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      {/* topbar */}
      <View style={{ flex: 5.5, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5
          name="user-alt"
          size={70}
          color="#1976D2"
        />

        <View style={styles.inner_cont}>
          <View>
            <Ionicons
              name="ios-add"
              size={55}
              color="black"
              style={styles.mini_icons}
            />
            <Text style={styles.text_style}>Add call</Text>
          </View>

          <View>
            <Entypo name="lock-open" color="black" style={styles.mini_icons} />
            <Text style={styles.text_style}>open door</Text>
          </View>

          <View>
            <MaterialCommunityIcons
              name="logout"
              color="black"
              style={styles.mini_icons}
            />
            <Text style={styles.text_style}>ignore</Text>
          </View>
        </View>
      </View>

      {/* bottom bar */}
      <View
        style={{
          flex: 0.5,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderTopColor: "grey",
            borderTopWidth: 1,
          }}
        >
          <View style={{ flex: 1 }}>
            <Ionicons
              style={{ textAlign: "center", paddingTop: 5 }}
              name="md-settings"
              size={40}
              color="black"
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Entypo
              style={{ textAlign: "center", paddingTop: 5 }}
              name="users"
              size={37}
              color="black"
              onPress={() => navigation.navigate('Trusted People')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <AntDesign
              style={{ textAlign: "center", paddingTop: 5 }}
              name="notification"
              size={40}
              color="#1976D2"
              onPress={() => navigation.navigate('Notification')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <MaterialIcons
              style={{ textAlign: "center", paddingTop: 5 }}
              name="do-not-disturb"
              size={40}
              color="black"
              onPress={() => navigation.navigate('Do Not Disturb')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo_design: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#410000",
  },
  heading_style: {
    fontSize: 15,
    backgroundColor: "pink",
    color: "black",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    // borderTopColor: "black",
    // borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  list_item_left: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginLeft: 5,
    height: 50,
    flex: 1,
  },
  list_item_right: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    borderBottomWidth: 1,
    height: 50,
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mini_icons: {
    fontSize: 50,
    marginLeft: 20,
    marginRight: 20,
    color: '#1976D2'
  },
  text_style: {
    textAlign: "center",
    fontSize: 12,
  },
  inner_cont: {
    flexDirection: "row",
    paddingTop: 40,
  },
});
