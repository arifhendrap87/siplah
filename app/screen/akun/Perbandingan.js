import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';
import CardPerbandingan from '@components/CardPerbandingan';

function Perbandingan({navigation}) {
  const [dataList,setdataList]=useState([]);

  
  return (
    <View style={styles.container}>
        <Header />
        
          <View>
            <CardPerbandingan />
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

export default Perbandingan;
