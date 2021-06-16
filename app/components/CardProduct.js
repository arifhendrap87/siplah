import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text,Dimensions} from "react-native";
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);
function CardProduct(props) {
  return (
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.button1}
      >
        <View style={styles.group3}>
          <Image
            source={require("../assets/images/001-international.png")}
            resizeMode="stretch"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.group4}>
          <Text style={styles.bantuanPemerintah1}>
            RAMBUT BARU APARTEMEN-SERI LINGKUNGAN SEHAT
          </Text>
        </View>
        <View style={styles.group5}>
          <Text style={styles.rp1}>Rp. 660000</Text>
        </View>
        <View style={styles.group6}>
          <Text style={styles.stok1}>Stok : 500</Text>
        </View>
        <View style={styles.group7}>
          <Text style={styles.stok2}>BIMA (BANTEN INSPIRASI MANDIRI)</Text>
        </View>
        <View style={styles.group8}>
          <Text style={styles.kabLebak1}>Kab. Lebak</Text>
        </View>
      </TouchableOpacity>

  );
}


const styles = StyleSheet.create({
 
  button1: {
    width: (screenWidth/2)-25,
    marginRight: 0,
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
    marginTop: 0,
    marginBottom: 10,
    alignSelf: "flex-start"
  },
  group3: {
    alignSelf: "stretch",
    marginBottom: 10,
    height: 153,
    width: '100%',
  },
  image1: {
    width: '100%',
    height: 120,
    marginTop: 20,
  },
  group4: {
    height: 31,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  bantuanPemerintah1: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 10,
    flex: 1
  },
  group5: {
    height: 13,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0,
    marginBottom: 5
  },
  rp1: {
    //fontFamily: "lato-700",
    color: "rgba(208,2,27,1)",
    textAlign: "left",
    fontSize: 12,
    flex: 1
  },
  group6: {
    height: 14,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  stok1: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 8,
    flex: 1
  },
  group7: {
    height: 14,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  stok2: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 8,
    flex: 1
  },
  group8: {
    height: 14,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  kabLebak1: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 8,
    flex: 1
  }
});

export default CardProduct;
