import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text,Dimensions,View,Image} from "react-native";
import { BaseColor,Typography, FontWeight,Images} from "@config";
import PropTypes from 'prop-types';


function CDataEmpty(props) {
    const {
        title
    } = props;
  
  return (
        <View
            style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',padding: 50
            }}
            >       
            <Image
                source={Images.dataempty}
                style={{ 
                    height: 255,
                width: 255,
                }}
                resizeMode="cover"
            />
            <View><Text>{title}</Text></View>
            
                
        </View>  
    
  );
}



CDataEmpty.propTypes = {
    title: PropTypes.string,
};

CDataEmpty.defaultProps = {
    title:'Data Kosong'
};


const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',padding: 50
    },
    
});

export default CDataEmpty;
