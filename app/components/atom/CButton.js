import React, { Component } from "react";
import { StyleSheet,TouchableOpacity,Dimensions} from "react-native";
import { BaseColor,Typography, FontWeight} from "@config";
import PropTypes from 'prop-types';
import CText from '@components/atom/CText';


function CButton(props) {
  const {
    style,
    styleText,
    icon,
    outline,
    full,
    round,
    loading,
    ...rest
} = props;
  return (
          <TouchableOpacity
           {...rest}
          style={StyleSheet.flatten([
              styles.default,
              outline && styles.outline,
              full && styles.full,
              round && styles.round,
              style
          ])}
          activeOpacity={0.9}
      >
          {icon ? icon : null}
          <CText
              style={StyleSheet.flatten([
                  styles.textDefault,
                  outline && styles.textOuline,
                  styleText
              ])}
              caption1
              numberOfLines={1}
          >
              {props.children || "Button"}
          </CText>
          {loading ? (
              <ActivityIndicator
                  size="small"
                  color={
                      outline
                          ? BaseColor.primaryColor
                          : BaseColor.whiteColor
                  }
                  style={{ paddingLeft: 5 }}
              />
          ) : null}
      </TouchableOpacity>
    
  );
}



CButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.node,
  outline: PropTypes.bool,
  full: PropTypes.bool,
  round: PropTypes.bool,
  loading: PropTypes.bool
};

CButton.defaultProps = {
  style: {},
  icon: null,
  outline: false,
  full: false,
  round: false,
  loading: false
};


const styles = StyleSheet.create({
  default: {
    height: 56,
    borderRadius: 8,
    backgroundColor: BaseColor.secondColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,

     borderRadius: 18,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
    marginVertical:10
    },
    textDefault: {
        ...Typography.headline,
        color: BaseColor.primaryColor,
        fontWeight: FontWeight.semibold
    },
    outline: {
        backgroundColor: BaseColor.whiteColor,
        borderWidth: 1,
        borderColor: BaseColor.primaryColor
    },
    textOuline: {
        color: BaseColor.primaryColor
    },
    full: {
        width: "100%",
        alignSelf: "auto"
    },
    round: {
        borderRadius: 28
    }
});

export default CButton;
