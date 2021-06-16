import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImagePropTypes
} from "react-native";
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);
import PropTypes from 'prop-types';

function TitleForm(props) {

  const {
    title,
    titleRight,
    onPress
  }=props;
  return (
    <View style={styles.container}>
      <View style={styles.groupTitleList}>
        <Text style={styles.titleList}>{title}</Text>
      </View>
    </View>
  );
}

TitleForm.prototype={
  title:PropTypes.string,
}

TitleForm.defaultProps={
  title:'',
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  groupTitleList: {
    alignSelf: "stretch",
    margin: 0,
    //marginTop: 10,
    //marginBottom: 10,
    flexDirection: "row",
    width:'100%',
    //paddingHorizontal:20
  },
  titleList: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    flex:6,
    fontWeight:'bold',
  },
  moreList: {
    height: 20,
    flex:6,
    alignSelf: "flex-end",
    textAlign:'right',
    color:'blue',
    fontSize:12
  },
 
  groupList: {
    height: 175,
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 21,
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
});

export default TitleForm;
