import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from "react-native";
import Header from '@components/Header';
import Banner from '@components/Banner';
import ListHorizontal from '@components/ListHorizontal';
import ListVertical from '@components/ListVertical';
import TitleLeftRight from '@components/TitleLeftRight';
import ItemNav from '@components/ItemNav';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

function MallDetail({route,navigation}) {
  const [dataList,setdataList]=useState([]);
  const [data,setData]=useState(route.params.data);
  console.log('data',JSON.stringify(data));
  
  return (
    <View style={styles.container}>
        <Header />
                  
                
        <View>
            <ScrollView
              contentContainerStyle={styles.scrollAreaContent}
            >

                  <View style={styles.headerToko}>
                  
                    <FastImage
                      style={{width:'100%',heght:'100%'}}
                        source={{
                            uri: data.image.header,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                    
                  </View>
                  
                  <View style={styles.headerTokoDesc}>
                      <Text style={[styles.text1]}>{data.name}</Text>
                      <Text style={[styles.text2]}>{data.location.address}, 
                      {data.location.province}, 
                      {data.location.city}
                      </Text>
                    </View>
                <ItemNav 
                    title={'Pencarian Nama Produk'}
                    onPress={()=>navigation.navigate('FilterMall')}
                    
                />


                <ItemNav 
                    title={'Filter Sumber Dana'}
                    onPress={()=>navigation.navigate('FilterMall')}
                    
                />

                <ItemNav 
                    title={'Cari Berdasarkan Kategori'}
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
headerToko:{
  paddingVertical:10,
  backgroundColor:'#ffffff',
  flexDirection: "row",
    width: '100%',
    height: 148,
    //borderColor:'grey',
   
},
headerTokoDesc:{
  paddingHorizontal:20,
  backgroundColor:'#ffffff',
  // borderBottomColor:'grey',
  // borderBottomWidth:1,
  marginBottom:10,
  paddingBottom:10

},
scrollAreaContent: {
    height: 'auto'
},
container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
},
text1:{
  fontSize:14,
  fontWeight:'bold'
}
,
text2:{
  fontSize:12,
  fontWeight:'normal'
} ,
text3:{
  fontSize:11,
  fontWeight:'bold'
},
text4:{
  fontSize:10,
  fontWeight:'bold'
}
});

export default MallDetail;
