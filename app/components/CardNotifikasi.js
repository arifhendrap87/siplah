import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

function CardNotifikasi(props) {
  return (
    <View style={{paddingHorizontal:20}}>
      <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.coloumn1}>
              <Text style={{fontWeight:'bold'}}>Pesanan Dikonirmasi</Text>
              <Text style={{fontSize:10}}>Pesanan anda dengan invoice: 2012040027 telah dikonfirmasi oleh penjual</Text>
            </View>
            <View style={styles.coloumn2}>
              <Text style={styles.coloumn2}>3 Jam Lalu</Text>
            </View>
          </View>
      </View>

      <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.coloumn1}>
              <Text style={{fontWeight:'bold'}}>Pesanan Dikonirmasi</Text>
              <Text style={{fontSize:10}}>Pesanan anda dengan invoice: 2012040027 telah dikonfirmasi oleh penjual</Text>
            </View>
            <View style={styles.coloumn2}>
              <Text style={styles.coloumn2}>3 Jam Lalu</Text>
            </View>
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
    paddingHorizontal:20,
    marginTop:10,
  },
 
  row: {
    flexDirection: "row",
    width: '100%',
    borderBottomColor: '#f2f2f2',
    // borderBottomWidth: 1,

  },
  coloumn1: {
    flex:9,
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 0,
    //backgroundColor:'yellow'
  },
  coloumn2: {
    flex:3,
    //fontFamily: "lato-regular",,
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 0,
    //backgroundColor:'red'
  },

 
});

export default CardNotifikasi;
