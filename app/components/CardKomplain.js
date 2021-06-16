import React, { Component } from "react";
import { StyleSheet, View,  Image } from "react-native";
function CardKomplain(props) {
  return (
    <View style={{paddingHorizontal:20}}>
      

      <View style={styles.container}>
        
        <Text style={styles.tanggal}>16 Agustus 2021</Text>

        <Text style={{marginTop:10,color: "#121212",fontSize: 10,flex: 1}}>No Invoice</Text>
        <Text style={{color: "#121212",fontSize: 10,flex: 1,fontWeight:'bold'}}>INV08123423478</Text>

        <Text style={{marginTop:10,color: "#121212",fontSize: 10,flex: 1}}>Komplain</Text>
        <Text style={{fontFamily: "roboto-regular",color: "#121212",fontSize: 10,flex: 1,fontWeight:'bold'}}>INV08123423478</Text>


        <View style={styles.group3}>
          <View style={styles.group5}>
            <Image
              source={require("../assets/images/001-international.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.group4}>
            <Text style={styles.ptBumiRahayu}>Toko eureka</Text>

            <Text style={styles.ptBumiRahayu}>HP Slim S01-pD0106d SFF (i5-8400, 4GB, 1TB, 18.5 Inch, Integrated, Win10Home, 1Yr) [7XD25AA]</Text>
          </View>
        </View>



        <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                <View>
                    {/* <Button small rounded primary style={{marginTop:10}}>
                        <Text>Detail</Text>
                    </Button> */}
                </View>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
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
 
  tanggal: {
    flex: 1,
    width: 412,
    color: "rgba(96,96,96,1)",
    fontSize: 12
  },
  noInvoice: {
    marginTop:10,
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    flex: 1,
    width: 412
  },
  invoice: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    flex: 1,
    width: 412,
    fontWeight:'bold'

  },
  pemesan: {
    marginTop:10,
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    flex: 1,
    width: 412,
  },
  sekolah: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    flex: 1,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight:'bold'

  },
  status: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    flex: 1,
    textAlign: "right",
    fontSize: 12,
    width: 412,
    alignSelf: "flex-end"
  },
  selesai: {
    //fontFamily: "roboto-regular",
    color: "rgba(4,125,15,1)",
    alignSelf: "flex-end",
    flex: 1,
    textAlign: "right",
  },
  line: {
    marginVertical:10,
    height: 1,
    backgroundColor: "#E6E6E6",
    alignSelf: "stretch"
  },
  group3: {
    marginTop:10,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  group5: {
    width: 44,
    height: 44,
    marginRight:10
  },
  image: {
    width: 44,
    height: 44
  },
  group4: {
    flex: 1,
    justifyContent: "space-between"
  },
  ptBumiRahayu: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    flex: 1,
    alignSelf: "stretch"
  },
  ptBumiRahayu2: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    flex: 1,
    alignSelf: "stretch"
  },
  total: {
    marginTop:10,
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    flex: 1,
    width: 412
  },
  harga: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontWeight:'bold',
    fontSize: 14,
    flex: 1,
    width: 412,
  }
});

export default CardKomplain;
