import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function TrustedPeople( {navigation} ) {
  return (
    <View style={styles.container}>
      {/* topbar */}

      <View style={{ flex: 5.5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            autoFocus
            maxLength={55}
            placeholder=" Search for user "
            defaultValue={""}
          />
          <FontAwesome
            style={styles.searchIcon}
            name="search"
            size={23}
            color="black"
          />
        </View>

        <ScrollView>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Zeeshan</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Raza</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Capt America</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Groot</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Spiderman</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Batman</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> King Kong</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Capt Mervel</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Dr Strange</Text>
          </View>
          <View style={styles.content}>
            <FontAwesome style={styles.user_logo} name="user" size={30} color="#ccc" />
            <Text style={styles.list_item_right}> Venom</Text>
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
              color="black"
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Entypo
              style={{ textAlign: "center", paddingTop: 5 }}
              name="users"
              size={37}
              color="#1976D2"
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
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    backgroundColor: "white",
    textAlign: "center",
    height: 47,
    flex: 7,
  },
  searchIcon: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth:1,
    borderBottomColor: 'grey'
  },
  list_item_right: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    height: 50,
    justifyContent:'center',
    flex: 1,
    marginLeft:20
  },
  user_logo: {
      marginLeft:10,
      paddingBottom:4,
  }

});
