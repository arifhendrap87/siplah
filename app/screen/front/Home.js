import React, { Component,useState,useEffect  } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar
} from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from "react-native-responsive-screen";
import Header from '@components/Header';
import Banner from '@components/Banner';
import ListHorizontalToko from '@components/ListHorizontalToko';
import ListVerticalProduk from '@components/ListVerticalProduk';
import TitleLeftRight from '@components/TitleLeftRight';
import { BaseStyle, BaseColor} from "@config";
import CButton from '@components/atom/CButton';
import CIcon from '@components/atom/CIcon';
import CDataEmpty from '@components/atom/CDataEmpty';
import CText from '@components/atom/CText';
import CImage from '@components/atom/CImage';
import CTag from '@components/atom/CTag';
import CItemList from '@components/atom/CItemList';
import CCard from '@components/atom/CCard';
import CPanel from '@components/atom/CPanel';


// import Text from '@components/atom/Text';

function Home({navigation}) {

  
  useEffect(() => {
  
  }, []);
 


  return (
    <View style={styles.container}>
        <Header />
          <View>
          <ScrollView
            contentContainerStyle={styles.scrollAreaContent}
          >
            <CButton
                
                ><CText caption2>Gunakan Kupon</CText>
              </CButton>
            <CIcon
              name={'hotel'}
              size={20}
              color={BaseColor.primaryColor}
              solid
            />
            {/* <CDataEmpty /> */}
            <CText style={{color:BaseColor.primaryColor}}>asdasdas</CText>
            <CImage
                                    style={{ width: 100, height: 100, marginRight: 10, borderRadius: 16 }}
                                    resizeMode="contain"
                                    source={{uri: 'https://reactnativeelements.com/img/card.png'}}
                                    // source={image}
                                />
            <CTag
                style={{ marginRight: 10, width: 100,borderRadius:5 }}
                primary
            >
            asdas
            </CTag>
            <CItemList 
                            title={'Profile'}
                            subtitle={'Edit Profile'}
                            icon={'user'}
                            onPress={() => {
                                
                            }}
                        
            />

            <CCard
                propImage={{height:wp("30%"),url:'https://masterdiskon.com/assets/upload/promotion/popup/vt%202021ver-2-08-min.jpg'}}
                propTitle={{text:'product name'}}
                propPrice={{price:2000,startFrom:true}}
                propPriceCoret={{price:'',discount:'',discountView:true}}

                propInframe={{top:'top',bottom:'bottom'}}
                propDesc={{text:'desc'}}

                propStar={{rating:4,enabled:true}}
                propLeftRight={{left:'left',right:'right'}}
                onPress={() =>{ 
                }
                }
                loading={false}
                propOther={{inFrame:true,horizontal:false,width:'100%'}}
                propIsCampaign={{}}
                propPoint={0}       

                style={
                  [
                    {marginVertical:10}
                ]
                                                        
                }
                sideway={true}
                />


              <CCard
                propImage={{height:wp("30%"),url:'https://masterdiskon.com/assets/upload/promotion/popup/vt%202021ver-2-08-min.jpg'}}
                propTitle={{text:'product name'}}
                propPrice={{price:2000,startFrom:true}}
                propPriceCoret={{price:'',discount:'',discountView:true}}

                propInframe={{top:'top',bottom:'bottom'}}
                propDesc={{text:'desc'}}

                propStar={{rating:4,enabled:true}}
                propLeftRight={{left:'left',right:'right'}}
                onPress={() =>{ 
                }
                }
                loading={false}
                propOther={{inFrame:true,horizontal:false,width:wp("40%")}}
                propIsCampaign={{}}
                propPoint={0}       

                style={
                  [
                    {marginVertical:10}
                ]
                                                        
                }
                sideway={false}
                />  


            {/* <Banner />
            <TitleLeftRight 

              titleLeft={'Toko Penyedia'}
              titleRight={'Selengkapnya'}
              onPress={()=>navigation.navigate('Mall')}

            />
            <ListHorizontalToko
              navigation={navigation}
              onPress={()=>navigation.navigate('MallDetail')}
              
            
            /> */}

            {/* <TitleLeftRight 
              titleLeft={'Produk Terbaru'}
              titleRight={'Selengkapnya'}
              onPress={()=>navigation.navigate('Mall')}

            />
            <ListVerticalProduk
              // listData={dataProduk} 
              // onPress={()=>navigation.navigate('Mall')}
            /> */}
          </ScrollView>
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

export default Home;
