import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image,Text, } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';



function Header(props) {
  const {title}=props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        title ==''
      ?
      <TouchableOpacity style={styles.buttonImage}>
        <Image
          source={require("../assets/images/ebhcom-header_new.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </TouchableOpacity>
      :
      <View style={styles.hLogo}>
        <TouchableOpacity>
        <FontAwesomeIcon
          name="chevron-left"
          style={styles.icon3}
        ></FontAwesomeIcon>
        </TouchableOpacity>
        <Text style={styles.mall}>{title}</Text>
      </View>
      }
      <View style={styles.hIcon}>
        <TouchableOpacity style={styles.buttonSearch}
        onPress={()=>{
          navigation.navigate('Cari')
        }}
        >
          <FontAwesomeIcon
            name="search"
            style={styles.iconSearch}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCart} 
          onPress={()=>{
            navigation.navigate('Keranjang')
          }}
        >
          <EntypoIcon name="shopping-cart" style={styles.iconCart}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNotif} 
          onPress={()=>{
            navigation.navigate('Notifikasi')
          }}
        >
          <EntypoIcon name="bell" style={styles.iconNotif}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMenu}
          onPress={() => navigation.openDrawer()}
        >
          <EntypoIcon name="menu" style={styles.iconMenu}></EntypoIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.propTypes={
  title:PropTypes.string

}

Header.defaultProps={
  title:''
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(14,51,109,1)",
    justifyContent: "space-between",
    width: '100%',
    height: 40
  },
  buttonImage: {
    flexDirection: "row",
    height: 36,
    alignSelf: "flex-end",
    marginLeft: 0,
    //margin: "null",
    paddingLeft: 15,
    flex: 1
  },
  logo: {
    width: 156,
    height: 31,
    alignSelf: "flex-end",
    left: 0,
    marginBottom: 5
  },
  hIcon: {
    flexDirection: "row",
    height: 36,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: 0,
    //margin: "null",
    marginLeft: 0,
    paddingRight: 10
  },
  buttonSearch: {
    alignSelf: "center",
    height: 18
  },
  iconSearch: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10
  },
  buttonCart: {
    alignSelf: "center",
    height: 18
  },
  iconCart: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10
  },
  buttonNotif: {
    alignSelf: "center",
    height: 18
  },
  iconNotif: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10
  },
  buttonMenu: {
    flexDirection: "row",
    height: 18,
    alignSelf: "center"
  },
  iconMenu: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10
  },

  hLogo: {
    flexDirection: "row",
    height: 36,
    alignSelf: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 15
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 0,
    marginRight: 10,
    marginLeft: 0,
    paddingLeft: 0,
    //padding: "null"
  },
  mall: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 17,
    flex: 1,
    marginBottom: 0,
    marginLeft: 0,
    //margin: "null",
    marginRight: 0
  },
});

export default Header;
