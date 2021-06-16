import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';

function Keranjang({navigation}) {
  
  return (
    <Container>
        <Header />
        
        <View>
            <ScrollView
              contentContainerStyle={styles.scrollAreaContent}
            >
                <ItemNav 
                    title={'Cari Berdasarkan Wilayah'}
                    onPress={()=>navigation.navigate('FilterKeranjang')}
                    
                />
                <TitleLeftRight 
                    titleLeft={'Toko Penyedia'}
                    titleRight={''}
                    onPress={()=>navigation.navigate('Keranjang')}
                />
                <ListVertical 
                    listData={dataList.Keranjang} 
                    onPress={()=>navigation.navigate('ProdukDetail')}
                />
              
            </ScrollView>
          </View>
        
      </Container>
  );
}

const styles = StyleSheet.create({

 
});

export default Keranjang;
