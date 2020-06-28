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

export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      {/* topbar */}
      <View style={{ flex: 5.5 }}>
        <View style={styles.logo_design}>
          <FontAwesome5
            name="user-alt"
            size={50}
            color="#212"
            style={{ textAlign: "center" }}
          />
        </View>

        <ScrollView>
          <Text style={styles.heading_style}>PROFILE</Text>

          <View style={styles.content}>
            <Text style={styles.list_item_left}>Username</Text>
            <Text style={styles.list_item_right}>Abdullah213</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.list_item_left}>First Name</Text>
            <Text style={styles.list_item_right}>Abdullah</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.list_item_left}>Last Name</Text>
            <Text style={styles.list_item_right}>Khan</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.list_item_left}>Email</Text>
            <Text style={styles.list_item_right}>abdullah@gmail.com</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.list_item_left}>Secret Key</Text>
            <Text style={styles.list_item_right}>21463263224</Text>
          </View>

          <Text style={styles.heading_style}>ACCOUNT</Text>
          <View style={styles.content}>
            <Text style={styles.list_item_right}>Change Password</Text>
          </View>

          <View style={styles.content}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text style={styles.list_item_right} onPress={() => navigation.navigate('Signin')}> Logout</Text>
          </View>
        </ScrollView>
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
              color="#1976D2"
              onPress={() => navigation.navigate('Setting')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Entypo
              style={{ textAlign: "center", paddingTop: 5 }}
              name="users"
              size={37}
              onPress={() => navigation.navigate('Trusted People')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <AntDesign
              style={{ textAlign: "center", paddingTop: 5 }}
              name="notification"
              size={40}
              color="black"
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
    backgroundColor: "#2196F3",
  },
  heading_style: {
    fontSize: 15,
    backgroundColor: "#BBDEFB",
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
});
