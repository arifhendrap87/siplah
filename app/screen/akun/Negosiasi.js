import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';
import CardNegosiasi from '@components/CardNegosiasi';

function Notifikasi({navigation}) {
  const [dataList,setdataList]=useState([]);

  
  return (
    <View style={styles.container}>
        <Header />
        
          <View>
            <CardNegosiasi />
          </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  scrollAreaContent: {
    height: 'auto'
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
});

export default Notifikasi;
