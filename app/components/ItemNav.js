import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import PropTypes from 'prop-types';
function ItemNav(props) {

  const {
    title,
    onPress
  }=props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text11}>{title}</Text>
        <Icon name="chevron-right" style={styles.icon2}></Icon>
      </TouchableOpacity>
    </View>
  );
}


ItemNav.propTypes={
  title:PropTypes.string,
  onPress:PropTypes.func
}


ItemNav.defaultProps={
  title:'',
  onPress:()=>{}
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: 'white',
    width: '100%',
    paddingVertical:5
    //height: 28
  },
  button: {
    flexDirection: "row",
    height: 28,
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 0
  },
  text11: {
    //fontFamily: "roboto-regular",
    color: "rgba(4,18,139,1)",
    height: 16,
    textAlign: "left",
    flex: 1,
    paddingLeft: 20,
    margin: 0,
    marginTop: 0,
    alignSelf: "center",
    width: 335
  },
  icon2: {
    color: "rgba(14,13,161,1)",
    fontSize: 20,
    marginRight: 20,
    marginTop: 0,
    alignSelf: "center"
  }
});

export default ItemNav;
