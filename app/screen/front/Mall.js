import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';
import Banner from '@components/Banner';
import ListHorizontal from '@components/ListHorizontal';
import ListVertical from '@components/ListVertical';
import TitleLeftRight from '@components/TitleLeftRight';
import ItemNav from '@components/ItemNav';
function Mall({navigation}) {
  const [dataList,setdataList]=useState([]);

  
  return (
    <View style={styles.container}>
        <Header />
        <View>
            <ScrollView
              contentContainerStyle={styles.scrollAreaContent}
            >
                <ItemNav 
                    title={'Cari Berdasarkan Wilayah'}
                    onPress={()=>navigation.navigate('FilterMall')}
                    
                />
                <TitleLeftRight 
                    titleLeft={'Toko Penyedia'}
                    titleRight={''}
                    onPress={()=>navigation.navigate('Mall')}
                />
                <ListVertical 
                    listData={dataList.mall} 
                    onPress={()=>navigation.navigate('ProdukDetail')}
                />
              
            </ScrollView>
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

export default Mall;
