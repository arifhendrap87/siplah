import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from '@components/Header';
import CardAkunDashboard1 from '@components/CardAkunDashboard1';
import CardAkunDashboard2 from '@components/CardAkunDashboard2';
import TitleLeftRight from '@components/TitleLeftRight';
function Dashboard({navigation}) {
  const [dataList,setdataList]=useState([]);

  
  return (
    <View style={styles.container}>
        <Header />
          <View>
           <CardAkunDashboard1 />
       
           <CardAkunDashboard2 />
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

export default Dashboard;
