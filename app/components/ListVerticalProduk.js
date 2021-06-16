import React, { Component,useState,useEffect  } from "react";
import { StyleSheet, View, TouchableOpacity,Text,Dimensions} from "react-native";
import FastImage from 'react-native-fast-image';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Config from '@data/config.json';
import Produk from '@data/produk.json';

const screenWidth = Math.round(Dimensions.get('screen').width);

function ListVerticalProduk(props) {
  const navigation = useNavigation();
  const [listData,setListData]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
 

    var url=Config.baseUrl+"api/product/buku-referensi?page=1&limit=10&keyword=&filter_price=&filter_manufacturer=&filter_province=&sort=";
    async function fetchData() {
      try {
        let response = await fetch(url);
        let result = await response.json();
        setLoading(false);
        setListData(result.data.items);
      } catch(err) {
        alert(Config.error);
      }
    }
    fetchData();


  },[]);


      let list = Produk.map(function (data, index) {
        return (
          <TouchableOpacity
            style={styles.button1}
            key={index}
          >
            <View style={styles.group3}>
            <PlaceholderLine style={{height:120}} />
                  
            </View>
            <View style={styles.group4}>
              <PlaceholderLine />
            </View>
            <View style={styles.group5}>
              <PlaceholderLine />
            </View>
            <View style={styles.group6}>
              <PlaceholderLine />
            </View>
            <View style={styles.group7}>
            <PlaceholderLine />
            </View>
            <View style={styles.group8}>
            <PlaceholderLine />
            </View>
          </TouchableOpacity>
        );
      
      });
    
    if(loading==false){
      list = listData.map(function (data, index) {
        return (
          <TouchableOpacity
            onPress={()=>{
              navigation.navigate('ProdukDetail',{
                data:data
              })}}
            style={styles.button1}
            key={index}
          >
            <View style={styles.group3}>
              <FastImage
                    style={styles.image1}
                    source={{
                        uri: data.images[0],
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
              />
                  
            </View>
            <View style={styles.group4}>
              <Text style={styles.bantuanPemerintah1}>
                {data.name}
              </Text>
            </View>
            <View style={styles.group5}>
              <Text style={styles.rp1}>{data.primaryCurrencyFormat}</Text>
            </View>
            <View style={styles.group6}>
              <Text style={styles.stok1}>Stok : {data.stock}</Text>
            </View>
            <View style={styles.group7}>
              <Text style={styles.stok2}>{data.mall.name}</Text>
            </View>
            <View style={styles.group8}>
              <Text style={styles.kabLebak1}>{data.mall.city}</Text>
            </View>
          </TouchableOpacity>
        );
      
      });
    
    }
    

  return (
    <View style={styles.container}>
      {list}
    </View>
  );
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
    fontFamily: "lato-700",
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

export default ListVerticalProduk;
