import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image'
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('screen').width);
const screenHeight = Math.round(Dimensions.get('screen').height);

function ListHorizontal(props) {
  const {listData,onPress}=props;

  let list = listData.map(function (data, index) {
    return (
      <TouchableOpacity
            onPress={()=>{
              alert(index);

            }}
            style={styles.buttonCard}
            key={data.id}
          >
            <View style={styles.groupImage}>
                <FastImage
                    style={styles.img}
                    source={{
                        uri: data.image.primary,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={styles.groupTitle}>
              <Text style={styles.tl}>
                {data.companyName}
              </Text>
            </View>
          </TouchableOpacity>
    );
  
  });
  return (
    <View style={styles.container}>
      <View style={styles.groupList}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollView}
        >
          {list}
          
        </ScrollView>
      </View>
    </View>
  );
}

ListHorizontal.prototype={
  listData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,

}

ListHorizontal.defaultProps={
  listData:[],
  onPress: () => {},

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  scrollView: {
    width: 491,
    height: 175,
    flexDirection: "row",
    padding: 10
  },
  buttonCard: {
    width: 120,
    height: 165,
    marginRight: 0
  },
  groupImage: {
    width: 120,
    height: 124,
    flexDirection: "row",
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 100,
    height: 100
  },
  groupTitle: {
    height: 24,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  tl: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "center",
    fontSize: 10,
    flex: 1,
    alignSelf: "flex-end"
  },
 
});

export default ListHorizontal;
