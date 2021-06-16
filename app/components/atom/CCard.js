import React, { Component } from "react";
import { View, TouchableOpacity,StyleSheet,ImageBackground,TouchableWithoutFeedback,Dimensions,Clipboard} from "react-native";
//import { Image, CText,StarRating,Icon} from "@components";
import CText from '@components/atom/CText';
import CImage from '@components/atom/CImage';
import { BaseColor,Images } from "@config";
import PropTypes from "prop-types";
import * as Utils from "@utils";

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import FastImage from 'react-native-fast-image';

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 30) / 2;


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



function CCard(props) {
  const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));

  const {
   
      style,
      propImage,
      propInframe,
      propTitle,
      propDesc,
      propPrice,
      propPriceCoret,
      propStar,
      propLeftRight,
      propPoint,
      propIsCampaign,
      propDarkMode,
      onPress,
      propOther,
      loading,
      sideway,
      propCopyPaste
  } =props;


  
  var contentImage=<View></View>
  var contentStar=<View></View>
  var contentText=<View></View>
  
  var contenInframeBottom=<View></View>
  var contenInframeTop=<View></View>
  
  var contentTextTitle=<View></View>
  var contentTextTitleDesc=<View></View>
  var contentTextTitlePrice=<View></View>
  var contentStartFrom=<View></View>
  var contentPrice=<View></View>
  var contentPriceCoret=<View></View>
  
  var contentTextTitleLeftRight=<View></View>
  var contentLeft=<View></View>
  var contentRight=<View></View>
  var contentStar=<View></View>
  var contentPoint=<View></View>
  var contentCampaingn=<View />

  var colorText={}
  var colorTextYellow={}
  var discount=<View />
  
  if(propDarkMode==true){
    colorText={color:BaseColor.whiteColor}
  }

  if(propDarkMode==true){
    colorTextYellow={color:BaseColor.secondColor}
  }

  //--------contentCampaign---------//
  if(propIsCampaign.active=="1"){
    contentCampaingn=<View style={{backgroundColor:BaseColor.primaryColor,paddingHorizontal:5,borderRadius:5,marginRight:10,width:'auto'}}>
    <CText caption2 style={[{color:BaseColor.whiteColor}]}>
       {propIsCampaign.name_campaign}
    </CText>
    </View>

  }

  if(propPoint != 0){
    contentPoint=<View style={{flexDirection:'row',paddingVertical:5}}>
      
      {/* <Icon
                          name="user"
                          size={10}
                          color={BaseColor.primaryColor}
                          style={{marginRight:10}}
                      /> */}
                      <CText overline style={[colorText]}>
       Dapatkan point diskon {propPoint} poin
    </CText>
    </View>

  }
    
//---------content untuk inframe---------//
if(propInframe.top != ""){
  contenInframeTop=<View style={{margin:10,position: "absolute",top: 0,padding: 2,backgroundColor:BaseColor.primaryColor,width:'auto',borderRadius:5,flexDirection: 'row', justifyContent: 'flex-end'}}
                                
                          >
                          <CText
                              caption1
                              bold
                              style={{color:BaseColor.whiteColor}}
                          >
                        {propInframe.top}
                    </CText>
                  </View>
  }
  
  
  if(propInframe.bottom != ""){
    contenInframeBottom=<View style={{margin:10,position: "absolute",bottom: 0,padding: 2,backgroundColor:'yellow',width:'auto',borderRadius:5}}>
                            <CText
                                caption2
                                bold
                            >
                          {(capitalize(propInframe.bottom.replace(/_/gi, ' ')))}
                      </CText>
                    </View>
    }
    
  //---------content untuk inframe---------//
  
  
  //---------content untuk image-----------//
  if(loading==true){
    contentImage=<Placeholder
            Animation={Fade}
            style={{marginTop: 5}}
          >
              <PlaceholderLine width={100} height={Utils.scaleWithPixel(propImage.height)} style={{marginTop: 2,marginBottom:0,borderRadius: 5}} />
          </Placeholder>
  }else{
    var styleCustomImage={
                        borderRadius: 0,
                        height: Utils.scaleWithPixel(propImage.height),
                        width: "100%",
                        backgroundColor:BaseColor.lightPrimaryColor
    }
 
    if(sideway==true){
    styleCustomImage.width=(width - 30) / 3;
    }
    
   
  
    contentImage=<View style={{}}>
        <FastImage
        style={styleCustomImage}
        //source={this.state.img}
        source={{
          uri:propImage.url,
          headers:{ Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
        cacheControl={FastImage.cacheControl.cacheOnly}
        resizeMethod={'scale'}
      //   onLoad={evt =>{
      //     this.setState({img:{
      //       uri:propImage.url,
      //       headers:{ Authorization: 'someAuthToken' },
      //       priority: FastImage.priority.normal,
      //     }
        

      //     })
      //   }
      // }
      >
      </FastImage>
        
        {contenInframeTop}
        {contenInframeBottom}
        </View>
  }
  
  
  //---------content untuk image-----------//
  
  
  
  //---------content untuk text-----------//
  if(loading==true){
    contentText=<Placeholder
                  Animation={Fade}
                  style={{marginTop: 5}}
                >
                    <PlaceholderLine width={50} style={{marginTop: 2,marginBottom:0,borderRadius: 0}} />
                    <PlaceholderLine width={100} style={{marginTop: 2,marginBottom:0}} />
                    <PlaceholderLine width={50} style={{marginTop: 2,marginBottom:0}} />
                </Placeholder>
  }else{
    
    if(propTitle.text != ""){
      contentTextTitle=<View style={{marginTop: 10}}>
                      <CText
                          caption1
                          bold
                          numberOfLines={1}
                          style={colorText}
                      >
                          {propTitle.text}
                      </CText>
                    </View>
    }
    if(propDesc.text != ""){
      contentTextTitleDesc=<View style={{marginTop: 0}}>
                      <CText
                          caption2 grayColor
                          numberOfLines={2}
                      >
                          {propDesc.text}
                      </CText>
                    </View>
    }
    

    if(propPriceCoret.price != 0){
      if(propPriceCoret.discount !=0){
      var discount=<View style={{backgroundColor:BaseColor.secondColor,paddingHorizontal:5,borderRadius:5,marginRight:10}}>
                      <CText caption2 style={[{color:'black'}]}>
                        {propPriceCoret.discount} %
                      </CText>
                    </View>

      }
      contentPriceCoret=<View style={{flex:1,flexDirection:'row'}}>
                        {
                          propPriceCoret.discountView==true ?
                          discount : <View />
                        }
                                            
      
      <CText caption1 bold
      style={[{textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginRight:5},colorText]}
                      >
                          Rp {propPriceCoret.price}
      </CText>
      {
        propPriceCoret.discountView==false ?
        <CText caption1 bold
        style={[{color:'green'},colorText]}
                        >
                            Rp {propPriceCoret.priceDisc}
        </CText> : <View />
      }
      
                      
                      </View>
    }
   
    
    
   
    if(propPrice.startFrom == true){
      

      if(propPrice.price != 0){
        contentStartFrom=<CText
                          overline
                          style={[{marginTop:2},colorText]}
                      >
                          Start From
                      </CText>
      }
                    
    }
    
    
    //if(propPrice.price != ""){
      var styles={}
      if(propPrice.startFrom == true){

        if(propPrice.price != 0){
          styles={marginLeft:10,color:BaseColor.primaryColor}
        }else{
          styles={marginLeft:0,color:BaseColor.thirdColor}
        }
        
      }else{
        styles={marginLeft:0,color:BaseColor.thirdColor}
      }

      // if(propPrice.price=='Kamar Penuh'){
      // contentPrice=<CText
      //   footnote
      //                     bold
      //                     style={[styles,colorText]}
      //                 >
      //                    Kamar Penuh
      //                 </CText>
      // }else if(propPrice.price=='loading'){
      //   contentPrice=<View style={{flexDirection:'row'}}>
      //                 <CText
      //                     footnote
      //                     bold
      //                     style={[styles,colorTextYellow,{marginRight:20}]}
      //                 >
      //                     Rp
      //                 </CText>
      //                 <DotIndicator color={BaseColor.primaryColor} size={5} />
      //     </View>
      
      // }else{
      //   contentPrice=<CText
      //   footnote
      //                     bold
      //                     style={[styles,colorTextYellow]}
      //                 >
      //                     Rp {propPrice.price}
      //                 </CText>

      // }
      
    
      
    //}

    if(propPrice.price==0){
      contentPrice=<CText
        footnote
                          bold
                          style={[styles,colorTextYellow]}
                      >
                          Kamar Penuh
                      </CText>
    }else if(propPrice.price=='loading'){
      contentPrice=<CText
        footnote
                          bold
                          style={[styles,colorTextYellow]}
                      >
                          Loading ...
                      </CText>
    }else if(propPrice.price=='empty'){
      contentPrice=<View />
    }else{
      contentPrice=<CText
        footnote
                          bold
                          style={[styles,colorTextYellow]}
                      >
                          Rp {priceSplitter(propPrice.price)}
                      </CText>
    }
    
    
  contentTextTitlePrice=<View style={{flex: 1,flexDirection: "row"}}>{contentStartFrom}{contentPrice}</View>
    
    if(propLeftRight.left != ""){
      contentLeft=<View style={{flex: 5,
                                  alignItems: "flex-start",
                                  justifyContent: "center",}}
                                  
                            >
                            <CText
                                caption1
                                bold
                            >
                          {propLeftRight.left}
                      </CText>
                    </View>
    }
    
    
    if(propLeftRight.right != ""){
      contentRight=<View style={{flex: 5,
                                  alignItems: "flex-end",
                                  justifyContent: "center",}}
                                  
                            >
                            <CText
                                caption1
                                bold
                            >
                          {propLeftRight.right}
                      </CText>
                    </View>
    }


    var contentCopyPaste=<View />
    // if(propCopyPaste.enabled == true){
    //   contentCopyPaste=<View style={{flexDirection:'row'}}>
                  
    //               <View style={{
    //                 flex: 1,
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //               }}
                    
    //                       >

    //                                           <TouchableOpacity 
    //                                           style={{flexDirection:'row',backgroundColor:BaseColor.thirdColor,width:'100%',alignItems:'center',justifyContent: "center",paddingVertical:3,borderRadius:5}}
    //                                           onPress={() => 
    //                                               {

    //                                                   Clipboard.setString(propCopyPaste.left);
    //                                                   //  this.dropdown.alertWithType('success', 'Copy CText Invoice', propCopyPaste.left);

    //                                               }}>
    //                                           <View style={{flexDirection:'row'}}>
    //                                           <CText whiteColor>{propCopyPaste.left}</CText>
    //                                           <Icon
    //                                               name="copy"
    //                                               size={16}
    //                                               style={{marginLeft:10,color:BaseColor.whiteColor}}
                                                  
    //                                           />
    //                                           </View>
    //                                           </TouchableOpacity>


    //                                           {/* <DropdownAlert ref={ref => this.dropdown = ref} messageNumOfLines={10} closeInterval={200} /> */}

                  
    //               </View>
    //               </View>
    // }
    
    
  contentTextTitleLeftRight=<View style={{flex: 1,flexDirection: "row"}}>{contentLeft}{contentRight}</View>
  
  // if(propStar.enabled==true){
  // contentStar=<View style={{flexDirection: "row",
  //                         justifyContent: "space-between"}}>
  //               <StarRating
  //                   disabled={true}
  //                   starSize={12}
  //                   maxStars={5}
  //                   rating={propStar.rating}
  //                   //selectedStar={rating => {}}
  //                   fullStarColor={BaseColor.yellowColor}
  //               />
  //           </View>
  // }
  
  var styleCustomText={flex:1,marginTop:-5}
  if(propOther.inFrame==true){
    styleCustomText.paddingHorizontal=10;
    styleCustomText.borderTopWidth=0;
    styleCustomText.paddingBottom=20;
    styleCustomText.backgroundColor=BaseColor.whiteColor;
  }

  if(propOther.inCard==false){
    styleCustomText.paddingHorizontal=0;
    styleCustomText.borderTopWidth=0;
    styleCustomText.paddingBottom=0;
    //styleCustomText.backgroundColor=BaseColor.whiteColor;
  }
  contentText=<View style={[styleCustomText,{flex:1}]}>
              {contentTextTitle}
              {contentTextTitleDesc}
              {contentPriceCoret}
              {contentTextTitlePrice}
              {contentStar}
              {contentTextTitleLeftRight}
              {contentCopyPaste}
              {contentPoint}
              {contentCampaingn}
              
              </View>
  
  }
  
  //---------content untuk text-----------//
  var marginBottom=0;
  var styleCustom={};
 styleCustom.width=propOther.width;
  var card=<View />

  if(propOther.sideway==true){
    card=<View />
  }else{
    card
  }
  var flex='column';
  if(sideway==true){
    flex='row';
  }
  return (
    <View style={{flex:1}}>
          <TouchableOpacity activeOpacity={0.7} style={[styleCustom,{flex:1,flexDirection:flex},style]} onPress={onPress}>
              
                {contentImage}
                {
                propOther.inFrame==true ?
                contentText
                :
                <View />
                }
             
              
          </TouchableOpacity>    
          </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      
  );
}



CCard.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propImage :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propInframe :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propTitle :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propDesc :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propPrice :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propPriceCoret :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propLeftRight :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propCopyPaste :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propStar :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propOther:PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propIsCampaign :PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propDarkMode:PropTypes.bool,
  propPoint:PropTypes.number,
  propIsFlashsale:PropTypes.bool,
  onPress : PropTypes.func,
  loading : PropTypes.bool,
  grid: PropTypes.bool,
  sideway: PropTypes.bool,
};

CCard.defaultProps = {
  style: {},
    propImage :{},
    propInframe :{},
    propTitle :{},
    propDesc :{},
    propPrice :{},
    propPriceCoret :{price:0,priceDisc:0,discount:0,discountView:true},
    propLeftRight :{},
    propCopyPaste :{},
    propStar : {},
    propOther : {},
    onPress: () => {},
    propPoint:0,
    propIsFlashsale:false,
    propDarkMode:false,
    propIsCampaign:{
      "name_campaign": "0",
      "slug_campaign": "0",
      "valid_end": "0",
      "active": "0",
      "type": "0",
      "type_product": "0",
      "value": "0",
      "price": "235000"
  },
    loading : true,
    grid: false,
    sideway:false
};


const styles = StyleSheet.create({
  contain: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    width: "100%"
},
packageTitleContent: {
    flexDirection: "row",
    justifyContent: "space-between"
},
contentPrice: {
    flexDirection: "row",
    alignItems: "flex-start"
},
containItem: {
    padding: 10,
    alignItems: "center",
    borderTopColor: BaseColor.textSecondaryColor,
    borderTopWidth: 1
},
contentTopIcon: {
    alignItems: "center",
    backgroundColor: BaseColor.fieldColor,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: 10,
    paddingTop: 10
},
icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: BaseColor.lightPrimaryColor
},
lineIcon: {
    width: 48,
    height: 2,
    borderRadius: 1,
    backgroundColor: "#B1ADAD",
    marginTop: 10,
    marginBottom: 10
},
serviceContentIcon: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20
},
priceContentIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
}
    
});

export default CCard;
