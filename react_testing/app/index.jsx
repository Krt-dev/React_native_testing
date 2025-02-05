import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import bg1 from "@/assets/images/usjr_newbg.jpg";

import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg1} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>A Nice App</Text>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us!</Text>
          </Pressable>
        </Link>
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  button: {
    height: 80,
    width: 95,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.75)",
    paddding: 15,
    justifyContent: "center",
    marginBottom: 20
  },
});
