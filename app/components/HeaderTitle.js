import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function HeaderTitle(props) {
  return (
    <View style={styles.container}>
      <View style={styles.hLogo}>
        <FontAwesomeIcon
          name="chevron-left"
          style={styles.icon3}
        ></FontAwesomeIcon>
        <Text style={styles.mall}>Mall</Text>
      </View>
      <View style={styles.hIcon}>
        <FontAwesomeIcon
          name="search"
          style={styles.iconCari}
        ></FontAwesomeIcon>
        <EntypoIcon name="shopping-cart" style={styles.iconCart}></EntypoIcon>
        <EntypoIcon name="bell" style={styles.iconNotif}></EntypoIcon>
        <EntypoIcon name="menu" style={styles.iconMenu}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(14,51,109,1)",
    justifyContent: "space-between",
    width: '100%',
    //height: 50,
    paddingBottom:10
  },
  hLogo: {
    flexDirection: "row",
    height: 36,
    alignSelf: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 5
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 0,
    marginRight: 10,
    marginLeft: 0,
    paddingLeft: 0,
    //padding: "null"
  },
  mall: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 17,
    flex: 1,
    marginBottom: 0,
    marginLeft: 0,
    //margin: "null",
    marginRight: 0
  },
  hIcon: {
    flexDirection: "row",
    width: 175,
    height: 36,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20
  },
  iconCari: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 10,
    //margin: "null"
  },
  iconCart: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 10,
    //margin: "null"
  },
  iconNotif: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 10,
    //margin: "null"
  },
  iconMenu: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 10,
    //margin: "null"
  }
});

export default HeaderTitle;
