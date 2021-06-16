import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Index(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/larangan-bos1.png")}
        resizeMode="stretch"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal:20,
    // marginRight: 20,
    // marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 0.1,
    shadowRadius: 7,
    flexDirection: "row",
    width: '100%',
    height: 148
  },
  image: {
    width: 320,
    height: 148,
    borderRadius: 10,
    flex: 1
  }
});

export default Index;
