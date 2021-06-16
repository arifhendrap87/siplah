import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';

import CardDataSekolah1 from '@components/CardDataSekolah1';
import CardDataSekolah2 from '@components/CardDataSekolah2';
import TitleLeftRight from '@components/TitleLeftRight';

function DataSekolah({navigation}) {
  const [dataList,setdataList]=useState([]);

  
  return (
    <View style={styles.container}>
        <Header />
        
          <View>
            <TitleLeftRight 
                    titleLeft={'Data Sekolah'}
                    titleRight={''}
                    onPress={()=>navigation.navigate('Mall')}
                />
            <CardDataSekolah1 />


            <TitleLeftRight 
                    titleLeft={'Kepala Sekolah'}
                    titleRight={''}
                    onPress={()=>navigation.navigate('Mall')}
                />
            <CardDataSekolah1 />

            <TitleLeftRight 
                    titleLeft={'Bendahara Sekolah'}
                    titleRight={''}
                    onPress={()=>navigation.navigate('Mall')}
                />
            <CardDataSekolah1 />
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

export default DataSekolah;
