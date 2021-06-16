import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text
} from "react-native";
import Header from '@components/Header';
import CardRiwayatBelanja from '@components/CardRiwayatBelanja';
import {TabView, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };
function RiwayatBelanja({navigation}) {
  const [dataList,setdataList]=useState([]);
  const [index, setIndex] = useState(0);
  const [routes,setRoutes] = useState([
    {key: '0',title:'Pesanan Baru'},
    {key: '2',title:'Proses Pesanan'},
    {key: '3',title:'Pesanan Dikirim'},
    {key: '4',title:'Pesanan Sampai'},
  ]);
  
  // const FirstRoute = () => (
  //   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  // );
   
  // const SecondRoute = () => (
  //   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  // );

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case '0':
        return <CardRiwayatBelanja />;
      case '2':
        return <CardRiwayatBelanja />;
      case '3':
          return <CardRiwayatBelanja />;
      case '4':
          return <CardRiwayatBelanja />;
    }
  };

    // Customize UI tab bar
    const renderTabBar = props => (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={[styles.indicator, {backgroundColor: '#0E336D'}]}
        style={[styles.tabbar, {backgroundColor: '#FFCC00'}]}
        tabStyle={styles.tab}
        inactiveColor={'grey'}
        activeColor={'black'}
        renderLabel={({route, focused, color}) => (
          <View style={{flex: 1, width: 130, alignItems: 'center'}}>
            <Text headline semibold={focused} style={{color:'black'}}>
              {route.title}
            </Text>
          </View>
        )}
      />
    );
  

  return (
    <View style={styles.container}>
        <Header />
        
          <View>
          
          <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={renderTabBar}
            />
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
  tabbar: {
    height: 40
  },
  tab: {
    width: 130
  },
 
 
});

export default RiwayatBelanja;
