import React, { Component } from "react";

import { StyleSheet, View, TouchableOpacity, Image, Text,Dimensions} from "react-native";
import CardProduct from '@components/CardProduct';
import PropTypes from 'prop-types';
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);

const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

function ListVertical(props) {
  const {listData,onPress}=props;
  return (
    <View style={styles.container}>
      <CardProduct
        onPress={props.onPress}
      />


    </View>
  );
}


ListVertical.prototype={
  listData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,

}

ListVertical.defaultProps={
  listData:[],
  onPress: () => {},
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // margin: 20,
    // marginRight: 20,
    marginTop: 10,
    justifyContent: "space-between",
    width: '100%',
    height: 'auto',
    paddingHorizontal:20
  },
  
});

export default ListVertical;
