import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

function CardDataSekolah1(props) {
  return (
    <View style={{paddingHorizontal:20}}>
    <View style={styles.container}>
      
   
        <View style={styles.row}>
          <Text style={styles.coloumn1}>Nama Sekolah</Text>
          <Text style={styles.coloumn2}>:</Text>
          <Text style={styles.coloumn3}>SMK Taruna Bangsa Bekasi</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.coloumn1}>Email Sekolah </Text>
          <Text style={styles.coloumn2}>:</Text>
          <Text style={styles.coloumn3}>admin@smktarunabangsa.sch.id</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.coloumn1}>Email Sekolah </Text>
          <Text style={styles.coloumn2}>:</Text>
          <Text style={styles.coloumn3}>admin@smktarunabangsa.sch.id</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.coloumn1}>Email Sekolah </Text>
          <Text style={styles.coloumn2}>:</Text>
          <Text style={styles.coloumn3}>admin@smktarunabangsa.sch.id</Text>
        </View>

 
        

        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
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
    margin: 0,
    //marginLeft: 20,
    width: '100%',
    height: 'auto',
    paddingHorizontal:20
  },
 
  row: {
    flexDirection: "row",
    width: '100%',
    paddingHorizontal:5,
    paddingVertical:5,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,

  },
  coloumn1: {
    flex:4,
    ////fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 0,
    //backgroundColor:'yellow'
  },
  coloumn2: {
    flex:1,
    ////fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 0,
    //backgroundColor:'red'
  },
  coloumn3: {
    flex:7,
    ////fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 0,
    //backgroundColor:'blue'
  },
 
});

export default CardDataSekolah1;
