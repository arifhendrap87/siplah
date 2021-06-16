import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function CardDataSekolah2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group22}>
        <Image
          source={require("../assets/images/001-international.png")}
          resizeMode="stretch"
          style={styles.image5}
        ></Image>
        <Text style={styles.kepalaSekolah}>Kepala Sekolah</Text>
        <Text style={styles.kepalaSekolah2}>Kepala Sekolah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginTop: 20,
    margin: 0,
    marginLeft: 20,
    width: 320,
    height: 'auto'
  },
  group22: {
    flex: 1,
    justifyContent: "space-between",
    width: 300,
    marginLeft: 10
  },
  image5: {
    width: 91,
    height: 90,
    alignSelf: "center",
    marginBottom: 10
  },
  kepalaSekolah: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    alignSelf: "center",
    textAlign: "center"
  },
  kepalaSekolah2: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 10
  }
});

export default CardDataSekolah2;
