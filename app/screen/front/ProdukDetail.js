import React, { Component,useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';
import ProdukDetailGroup1 from '@components/ProdukDetailGroup1';
import ProdukDetailGroup2 from '@components/ProdukDetailGroup2';
import ProdukDetailGroup3 from '@components/ProdukDetailGroup3';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

import Config from '@data/config.json';
import DataDetail from '@data/produkDetail.json';



import  InputSpinner from 'react-native-input-spinner';
function ProdukDetail({ route, navigation }) {
  const {data} = route.params;
  const [dataDetail,setDataDetail]=useState(DataDetail);
  const [loading,setLoading]=useState(true);


  useEffect(() => {
    var url=Config.baseUrl+"api/product/"+data.slug;
    const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        console.log('resultDetail',JSON.stringify(result));
        setLoading(false);
        setDataDetail(result.data);
    };

    fetchData();
  },[]);

  return (
    <Container>
        <Header />
        
            <View>
              <ScrollView
                contentContainerStyle={styles.scrollAreaContent}
              >
                  <ProdukDetailGroup1 dataDetail={dataDetail} loading={loading} />
                  {/* <ProdukDetailGroup2 dataDetail={dataDetail} loading={loading} /> */}
                  {/* <ProdukDetailGroup3 dataDetail={dataDetail} load={loading} /> */}
              </ScrollView>
            </View>
        
        <Footer  style={{backgroundColor:'white',paddingHorizontal:20}}>
            <View style={{flex:4,paddingTop:10}}>
              <InputSpinner
              max={10}
              min={2}
              step={2}
              value={4}
              onChange={(num)=>{console.log(num)}}
              rounded={false}
              height={40}
              width={120}
              colorMax={"#FFCC00"}
              colorMin={"#FFCC00"}
          />
          </View>


          {/* <View style={{flex:5,paddingTop:10,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                <Button onPress={() => navigation.navigate('Nego')}
                    style={{height:40,paddingVertical:5,alignSelf: 'flex-start',backgroundColor:'#0E336D'}}>
                    <Text style={{color:'white',fontSize:8}}> Masuk Keranjang </Text>
                </Button>
          </View>

          <View style={{flex:2,paddingTop:10}}>
                <Button onPress={() => navigation.navigate('Nego')}
                    style={{height:40,paddingVertical:5,alignSelf: 'flex-start',backgroundColor:'#0E336D'}}>
                    <Text style={{color:'white',fontSize:8}}> Nego </Text>
                </Button>
          </View> */}
            
        </Footer>
      </Container>


   
  );
}

const styles = StyleSheet.create({
  scrollAreaContent: {
    height: 'auto',
    flexGrow:1,
    paddingBottom:50
  },
});

export default ProdukDetail;
