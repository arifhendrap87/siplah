import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text,Dimensions,View,Image} from "react-native";
import { BaseColor,Typography, FontWeight,Images} from "@config";
import PropTypes from 'prop-types';
import FastImage from "react-native-fast-image";

function CImage(props) {
    const {
        style, resizeMode, ...rest
    } = props;
    let resize = FastImage.resizeMode.cover;
    switch (resizeMode) {
        case "contain":
            resize = FastImage.resizeMode.contain;
            break;
        case "stretch":
            resize = FastImage.resizeMode.stretch;
            break;
        case "center":
            resize = FastImage.resizeMode.center;
            break;
        default:
            break;
    }
  
  return (
    <FastImage
    style={StyleSheet.flatten([style && style])}
    {...rest}
    resizeMode={resize}
/>  
    
  );
}



CImage.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

CImage.defaultProps = {
    style: {},
    resizeMode: "cover"
};


const styles = StyleSheet.create({
  content: {
    
    },
    
});

export default CImage;
