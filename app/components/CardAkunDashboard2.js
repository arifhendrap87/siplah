import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CardAkunDashboard2(props) {
  return (
    <View style={{paddingHorizontal:20}}>
    <View style={styles.container}>
      
      <View style={styles.group16}>
        <Text style={styles.title}>Data Sekolah</Text>
        <Text style={styles.namaSekolah}>Data Sekolah</Text>
        <Text style={styles.alamat}>Alamat</Text>
        <Text style={styles.lokasi}>Alamat</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    flexDirection: "row",
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
    //marginLeft: 20,
    width: '100%',
    height: 80,
    paddingHorizontal:20
  },
  

  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 263,
    marginBottom: 5
  },
  namaSekolah: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    width: 263,
    marginBottom: 5
  },
  alamat: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    width: 263,
    marginBottom: 5
  },
  lokasi: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    width: 263,
    marginBottom: 5
  },
 
});

export default CardAkunDashboard2;
