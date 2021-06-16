import React, { Component,useState,useEffect  } from "react";
import { StyleSheet, View, TouchableOpacity,Text,Dimensions,ScrollView} from "react-native";
import FastImage from 'react-native-fast-image';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
const screenWidth = Math.round(Dimensions.get('screen').width);

import PropTypes from 'prop-types';
import Config from '@data/config.json';
import Mall from '@data/mall.json';

function ListHorizontal(props) {
  const {onPress,navigation}=props;
  const [listData,setListData]=useState([]);
  const [loading,setLoading]=useState(true);


  useEffect(() => {
    var url=Config.baseUrl+"mall?page=1&limit=10&keyword=&filter_province=&filter_city=&filter_district=";
    async function fetchData() {
      try {
        let response = await fetch(url);
        let result = await response.json();
        setLoading(false);
        console.log('tokopenyedia',JSON.stringify(result.data.items));
        setListData(result.data.items);
      } catch(err) {
        alert(Config.error);
      }
    }
    fetchData();


  },[]);



  let list = Mall.map(function (data, index) {
    return (
      <TouchableOpacity
            onPress={()=>{
              //this.props.navigation.navigate('MallDetail');
              //alert('asd');

            }}
            style={styles.buttonCard}
            key={data.id}
          >
            <View style={styles.groupImage}>
            <PlaceholderLine style={{height:100}} />
            </View>
            <View style={styles.groupTitle}>
              <PlaceholderLine />
            </View>
          </TouchableOpacity>
    );
  
  });

  if(loading==false){
    console.log('listData',JSON.stringify(listData));
    list = listData.map(function (data, index) {
      return (
        <TouchableOpacity
              //onPress={onPress}
              onPress={()=>{
                navigation.navigate('MallDetail',{data:data});
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


  }
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
  // listData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   onPress: PropTypes.func,
   navigation:PropTypes.func

}

ListHorizontal.defaultProps={
  // listData:[],
  onPress: () => {},
  navigation:() => {}

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
    marginRight: 0,
  },
  groupImage: {
    width: 120,
    height: 124,
    flexDirection: "row",
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:10
  },
  img: {
    width: 100,
    height: 100
  },
  groupTitle: {
    height: 24,
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal:10

  },
  tl: {
    ////fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "center",
    fontSize: 10,
    flex: 1,
    alignSelf: "flex-end"
  },
 
});

export default ListHorizontal;
