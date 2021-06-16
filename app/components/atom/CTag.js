import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text,Dimensions,View,Image} from "react-native";
import { BaseColor,Typography, FontWeight,Images} from "@config";
import PropTypes from 'prop-types';


function CTag(props) {
  const {
    style,
            textStyle,
            icon,
            primary,
            primaryIcon,
            outline,
            outlineIcon,
            outlineSecondary,
            outlineSecondaryIcon,
            small,
            light,
            gray,
            chip,
            status,
            rate,
            rateSmall,
            sale,
            children,
            ...rest
} = props;
  
  return (
    <TouchableOpacity
        {...rest}
        style={StyleSheet.flatten([
            styles.default,
            primary && styles.primary,
            primaryIcon && styles.primary,
            outline && styles.outline,
            outlineIcon && styles.outline,
            outlineSecondary && styles.outlineSecondary,
            outlineSecondaryIcon && styles.outlineSecondary,
            small && styles.small,
            light && styles.light,
            gray && styles.gray,
            chip && styles.chip,
            status && styles.status,
            rate && styles.rate,
            rateSmall && styles.rateSmall,
            sale && styles.sale,
            style
        ])}
        activeOpacity={0.9}
    >
        {icon ? icon : null}
        <Text
            style={StyleSheet.flatten([
                primary && styles.textPrimary,
                primaryIcon && styles.textPrimary,
                outline && styles.textOutline,
                outlineIcon && styles.textOutline,
                outlineSecondary && styles.textOutlineSecondary,
                outlineSecondaryIcon && styles.textOutlineSecondary,
                small && styles.textSmall,
                light && styles.textLight,
                gray && styles.textGray,
                chip && styles.textChip,
                status && styles.textStatus,
                rate && styles.textRate,
                rateSmall && styles.textRateSmall,
                sale && styles.textSale,
                textStyle
            ])}
            numberOfLines={1}
        >
            {children || "Tag"}
        </Text>
    </TouchableOpacity>
    
  );
}



CTag.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.node,
  primary: PropTypes.bool,
  primaryIcon: PropTypes.bool,
  outline: PropTypes.bool,
  outlineIcon: PropTypes.bool,
  outlineSecondary: PropTypes.bool,
  outlineSecondaryIcon: PropTypes.bool,
  small: PropTypes.bool,
  light: PropTypes.bool,
  gray: PropTypes.bool,
  chip: PropTypes.bool,
  rate: PropTypes.bool,
  rateSmall: PropTypes.bool,
  status: PropTypes.bool,
  sale: PropTypes.bool
};

CTag.defaultProps = {
  style: {},
  textStyle: {},
  icon: null,
  primary: false,
  primaryIcon: false,
  outline: false,
  outlineIcon: false,
  outlineSecondary: false,
  outlineSecondaryIcon: false,
  small: false,
  light: false,
  gray: false,
  chip: false,
  status: false,
  rate: false,
  rateSmall: false,
  sale: false
};


const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    borderWidth: 0
},
primary: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 17,
    backgroundColor: BaseColor.primaryColor,
    borderColor: BaseColor.primaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textPrimary: StyleSheet.flatten([
    Typography.caption2,
    { color: BaseColor.whiteColor }
]),
outline: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 17,
    backgroundColor: BaseColor.whiteColor,
    borderColor: BaseColor.primaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textOutline: StyleSheet.flatten([
    Typography.caption1,
    { color: BaseColor.primaryColor }
]),
outlineSecondary: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 17,
    backgroundColor: BaseColor.whiteColor,
    borderColor: BaseColor.accentColor,
    alignItems: "center",
    justifyContent: "center"
},
textOutlineSecondary: StyleSheet.flatten([
    Typography.caption1,
    { color: BaseColor.accentColor }
]),
small: {
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: BaseColor.primaryColor,
    borderColor: BaseColor.primaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textSmall: StyleSheet.flatten([
    Typography.caption2,
    { color: BaseColor.whiteColor }
]),
light: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: BaseColor.primaryColor,
    borderColor: BaseColor.primaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textLight: StyleSheet.flatten([
    Typography.caption2,
    { color: BaseColor.lightPrimaryColor }
]),
gray: {
    padding: 5,
    backgroundColor: BaseColor.fieldColor,
    borderColor: BaseColor.fieldColor,
    alignItems: "center",
    justifyContent: "center"
},
textGray: StyleSheet.flatten([Typography.caption2]),
chip: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: BaseColor.fieldColor,
    borderColor: BaseColor.fieldColor,
    alignItems: "center",
    justifyContent: "center"
},
textChip: StyleSheet.flatten([
    Typography.overline,
    { color: BaseColor.accentColor }
]),
status: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: BaseColor.primaryColor,
    borderColor: BaseColor.primaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textStatus: StyleSheet.flatten([
    Typography.caption2,
    { color: BaseColor.whiteColor, fontWeight: FontWeight.bold }
]),
rate: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: BaseColor.lightPrimaryColor,
    borderColor: BaseColor.lightPrimaryColor,
    alignItems: "center",
    justifyContent: "center"
},

textRate: StyleSheet.flatten([
    Typography.headline,
    { color: BaseColor.whiteColor, fontWeight: FontWeight.bold }
]),
rateSmall: {
    borderRadius: 3,
    paddingHorizontal: 5,
    backgroundColor: BaseColor.lightPrimaryColor,
    borderColor: BaseColor.lightPrimaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textRateSmall: StyleSheet.flatten([
    Typography.caption2,
    { color: BaseColor.whiteColor, fontWeight: FontWeight.bold }
]),
sale: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: BaseColor.lightPrimaryColor,
    borderColor: BaseColor.lightPrimaryColor,
    alignItems: "center",
    justifyContent: "center"
},
textSale: StyleSheet.flatten([
    Typography.headline,
    { color: BaseColor.whiteColor, fontWeight: FontWeight.bold }
])
    
});

export default CTag;
