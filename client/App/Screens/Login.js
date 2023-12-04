import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  
} from "react-native";
import React, { useContext, useState } from "react";
import LoginJPG from "./../../assets/login/login.jpg";
import Colors from "../Shared/Colors";
import { AuthContext } from "../Context/AuthContext";

export default function Login({ navigation }) {
  const { username, setUsername } = useState(null);
  const { password, setPassword } = useState(null);
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.backgroundBot}>
        <View style={styles.coloredScreen}>
          <Text
            style={{ color: Colors.darkBlue, fontSize: 32, fontWeight: "bold" }}
          >
            LOG IN
          </Text>
          <Image
            source={LoginJPG}
            style={{
              height: 100,
              width: 200,
              borderRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            backgroundColor: Colors.blue,
            borderRadius: 20,
            padding: 10,
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width * 0.885,
              backgroundColor: Colors.white,
              borderRadius: 50,
              height: Dimensions.get("screen").height * 0.05,
              marginBottom: 10,
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.lightblue,
                  width: Dimensions.get("screen").width * 0.45,
                  borderRadius: 50,
                  height: Dimensions.get("screen").height * 0.05,
                }}
              >
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: Dimensions.get("screen").width * 0.45,
                }}
                onPress={() => navigation.navigate("Registre")}
              >
                <Text style={{ color: Colors.black, fontWeight: "bold" }}>
                  Registre
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.white,
              marginTop: 15,
              marginBottom: 20,
            }}
          >
            {" "}
            Welcome back
          </Text>
          <Text
            style={{ color: Colors.white, paddingTop: 15 }}
            value={username}
            onChangeText={(text) => setUsername(text)}
            onChange
          >
            Username
          </Text>

          <TextInput
            placeholder="username"
            placeholderTextColor={Colors.grey}
            style={styles.username}
          />
          <Text
            style={{ color: Colors.white, paddingTop: 10 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderColor: Colors.white,
              borderWidth: 1,
              borderRadius: 50,
            }}
          >
            <TextInput
              placeholder="password"
              placeholderTextColor={Colors.grey}
              secureTextEntry={true}
              style={{
                width: Dimensions.get("screen").width * 0.7,
                height: Dimensions.get("screen").height * 0.05,
                padding: 10,
              }}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                placeholderTextColor: Colors.blue,
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text>Forgot?</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                login(username, password);
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  coloredScreen: {
    height: Dimensions.get("screen").height * 0.2,
    backgroundColor: Colors.lightblue, // Set the background color of the screen
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 10,
  },
  backgroundBot: {
    backgroundColor: Colors.darkBlue,
    height: 600,
  },
  signUp: {
    width: Dimensions.get("screen").width * 0.5,
    backgroundColor: Colors.darkBlue,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    paddingBottom: 5,
  },
  username: {
    width: Dimensions.get("screen").width * 0.885,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 50,
    height: Dimensions.get("screen").height * 0.05,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
});
