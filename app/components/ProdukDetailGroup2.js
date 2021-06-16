import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import FastImage from 'react-native-fast-image';

function ProdukDetailGroup2(props) {
  const {dataDetail,loading}=props;
  console.log('dataDetail',JSON.stringify(loading));


  var content=<View style={styles.container}>
              <View style={styles.rect4}>
                <PlaceholderLine style={{height:50}} />
              </View>
              <View style={styles.group16}>
              <PlaceholderLine />
                <View style={styles.group17}>
                <PlaceholderLine />
                </View>
                <View style={styles.group18}>
                <PlaceholderLine />
                </View>
              </View>
              </View>
  
  if(loading==false){
    content=<View style={styles.container}>
                <View style={styles.rect4}>
                  <FastImage
                    style={styles.image1}
                    source={{
                        uri: dataDetail.images[0],
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
              />
                </View>
                <View style={styles.group16}>
                  <Text style={styles.ptGa}>{dataDetail.mall.name}</Text>
                  <View style={styles.group17}>
                    <MaterialCommunityIconsIcon
                      name="checkbox-multiple-blank-circle"
                      style={styles.icon2}
                    ></MaterialCommunityIconsIcon>
                    <Text style={styles.total16Produk}>Total 16 Produk</Text>
                  </View>
                  <View style={styles.group18}>
                    <MaterialCommunityIconsIcon
                      name="checkbox-multiple-blank-circle"
                      style={styles.icon3}
                    ></MaterialCommunityIconsIcon>
                    <Text style={styles.aktif}>Aktif</Text>
                  </View>
                </View>
              </View>

  }



  return (
    <View style={{paddingHorizontal:20}}>
      {content}
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
  rect4: {
    marginBottom: 10,
    height: 50,
    width: 50,
    marginRight: 10
  },
  image2: {
    flex: 1,
    width:'100%'
  },
  group16: {
    marginBottom: 10,
    height: 50,
    width: 271
  },
  ptGa: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 263,
    marginBottom: 5
  },
  group17: {
    height: 16,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(8,6,187,1)",
    fontSize: 9,
    alignSelf: "center"
  },
  total16Produk: {
    //fontFamily: "roboto-regular",
    color: "rgba(17,0,231,1)",
    height: 11,
    width: 263,
    fontSize: 9,
    alignSelf: "center"
  },
  group18: {
    height: 16,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(8,6,187,1)",
    fontSize: 9,
    alignSelf: "center"
  },
  aktif: {
    //fontFamily: "roboto-regular",
    color: "rgba(17,0,231,1)",
    height: 11,
    width: 263,
    fontSize: 9,
    alignSelf: "center"
  }
});

export default ProdukDetailGroup2;
