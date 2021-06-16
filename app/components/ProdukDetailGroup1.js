import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import Produk from '@data/produk.json';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import FastImage from 'react-native-fast-image';

function ProdukDetailGroup1(props) {
  const {dataDetail,loading}=props;

  var content=<View style={styles.container}>
                <View style={styles.gambarProduk}>
                  <PlaceholderLine style={{height:316}} />
                </View>
                <View style={styles.namaProduk}>
                 <PlaceholderLine />
                </View>
                <View style={styles.dijualOleh}>
                  <PlaceholderLine />
                </View>

                <View style={{flexDirection:'row',width:'100%',marginTop:5}}>
                  <View style={{flex:6,paddingRight:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                  <View style={{flex:6,paddingLeft:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                </View>

                <View style={{flexDirection:'row',width:'100%'}}>
                  <View style={{flex:6,paddingRight:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                  <View style={{flex:6,paddingLeft:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                </View>

                <View style={{flexDirection:'row',width:'100%'}}>
                  <View style={{flex:6,paddingRight:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                  <View style={{flex:6,paddingLeft:10}}>
                  <PlaceholderLine width={100} />
                  </View>
                </View>
            
               
              </View>
  if(loading==false){
    content=<View style={styles.container}>
                <View style={styles.gambarProduk}>
                 
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
                <View style={styles.namaProduk}>
                  <Text style={styles.text3}>
                    {dataDetail.name}
                  </Text>
                </View>
                <View style={styles.dijualOleh}>
                  <Text style={styles.textInput2}>
                    Dijual Oleh {dataDetail.mall.name}
                  </Text>
                </View>
                <View style={styles.hargaProduk}>
                  <Text style={styles.hargaSatuan}>Harga Satuan</Text>
                  <View style={styles.group9}>
                    <Text style={styles.rp1}>{dataDetail.price.primaryCurrencyFormat}</Text>
                    <Text style={styles.unit}>/ {dataDetail.specification.unitType}</Text>
                  </View>
                </View>
                <View style={styles.group10}>
                  <Text style={styles.textInput3}>Kuantitas</Text>
                  <Text style={styles.unit2}>{dataDetail.stock} / {dataDetail.specification.unitType}</Text>
                  <Text style={styles.tersedia}>{dataDetail.stock != 0 ? 'Tersedia' : 'Kosong'}</Text>
                </View>
                <View style={styles.group11}>
                  <View style={styles.group12}>
                    <Text style={styles.brand}>Brand</Text>
                    <Text style={styles.acer}>{dataDetail.manufacturer.name}</Text>
                  </View>
                  <View style={styles.group13}>
                    <Text style={styles.stok}>Stok</Text>
                    <Text style={styles.text14}>{dataDetail.stock}  {dataDetail.specification.unitType}</Text>
                  </View>
                </View>
                <View style={styles.group14}>
                  <View style={styles.rect2}>
                    <Text style={styles.lokasi}>Kota</Text>
                    <Text style={styles.text15}>
                    {dataDetail.mall.city}
                    </Text>
                  </View>
                  <View style={styles.rect3}>
                    <Text style={styles.lamaKirim}>Provinsi</Text>
                    <Text style={styles.text16}>{dataDetail.mall.province}</Text>
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
    height: 482,
    paddingHorizontal:20
  },
  gambarProduk: {
    alignSelf: "stretch",
    marginBottom: 10,
    height: 316,
    width:'100%'
  },
  image1: {
    flex: 1,
    width:'100%'
  },
  namaProduk: {
    height: 31,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  text3: {
    fontFamily: "lato-700",
    color: "#121212",
    textAlign: "left",
    fontSize: 10,
    width: 315,
    height: 31,
    flex: 1
  },
  dijualOleh: {
    height: 14,
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0
  },
  textInput2: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 8,
    width: 315,
    height: 14,
    flex: 1
  },
  hargaProduk: {
    alignSelf: "stretch",
    paddingLeft: 0,
    marginLeft: 0,
    marginBottom: 5,
    backgroundColor: "rgba(230, 230, 230,1)",
    padding: 0,
    paddingBottom: 5,
    paddingTop: 5
  },
  hargaSatuan: {
    //fontFamily: "lato-regular",,
    color: "#121212",
    textAlign: "left",
    fontSize: 8,
    alignSelf: "stretch",
    margin: 0,
    marginLeft: 10,
    marginTop: 0,
    height: 10
  },
  group9: {
    height: 14,
    flexDirection: "row"
  },
  rp1: {
    fontFamily: "lato-700",
    color: "rgba(208,2,27,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "stretch",
    marginLeft: 10,
    width: 67
  },
  unit: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "flex-end",
    width: 74,
    marginLeft: 0,
    height: 10
  },
  group10: {
    height: 14,
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 0
  },
  textInput3: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    marginLeft: 0,
    width: 67,
    height: 14
  },
  unit2: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 10
  },
  tersedia: {
    //fontFamily: "lato-regular",,
    color: "rgba(31,11,189,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 10
  },
  group11: {
    height: 14,
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 0
  },
  group12: {
    flexDirection: "row",
    width: 177,
    height: 14
  },
  brand: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  acer: {
    //fontFamily: "lato-regular",,
    color: "rgba(13,23,168,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  group13: {
    flexDirection: "row",
    width: 177,
    height: 14
  },
  stok: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  text14: {
    //fontFamily: "lato-regular",,
    color: "rgba(13,23,168,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  group14: {
    height: 14,
    flexDirection: "row",
    marginTop: 0
  },
  rect2: {
    flexDirection: "row",
    width: 177,
    height: 14
  },
  lokasi: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  text15: {
    //fontFamily: "lato-regular",,
    color: "rgba(13,23,168,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  rect3: {
    flexDirection: "row",
    width: 177,
    height: 14
  },
  lamaKirim: {
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  },
  text16: {
    //fontFamily: "lato-regular",,
    color: "rgba(13,23,168,1)",
    textAlign: "left",
    fontSize: 9,
    alignSelf: "center",
    width: 74,
    marginLeft: 0,
    height: 13
  }
});

export default ProdukDetailGroup1;
