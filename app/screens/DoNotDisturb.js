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
        <View style={styles.inner_container}>
          <View>
            <MaterialIcons
              style={{ textAlign: "center", paddingTop: 5 }}
              name="do-not-disturb"
              size={40}
              color="black"
            />
            <Text
              style={{
                textAlign: "center",
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                paddingBottom: 5,
              }}
            >
              Do Not Disturb
            </Text>
          </View>
          <Text style={styles.list_item_right}>For 1 hour</Text>
          <Text style={styles.list_item_right}>Until evening</Text>
          <Text style={styles.list_item_right}>Until i leave this location</Text>
          <Text style={styles.list_item_right}>sleeping time</Text>

          <Button title="Shedule" color="#1976D2" />
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
              color="black"
              onPress={() => navigation.navigate('Notification')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <MaterialIcons
              style={{ textAlign: "center", paddingTop: 5 }}
              name="do-not-disturb"
              size={40}
              color="#1976D2"
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
  inner_container: {
    width: "70%",
    // height: "70%",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  list_item_right: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    height: 50,
    borderBottomColor: "grey",
    paddingLeft: 5,
  },
});
