import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
// import {BaseColor, useTheme, useFont} from '@config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Icon} from '@components';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//screen Stack
//Screen Front
import Home from '@screenFront/Home'
import Mall from '@screenFront/Mall'
import MallDetail from '@screenFront/MallDetail'
import ProdukList from '@screenFront/ProdukList'
import ProdukDetail from '@screenFront/ProdukDetail'
import Nego from '@screenFront/Nego'
import Banding from '@screenFront/Banding'
import Keranjang from '@screenFront/Keranjang'
import Checkout from '@screenFront/Checkout'
import FilterMall from '@screenFront/FilterMall'
import Cari from '@screenFront/Cari'

//screen Akun
import Dashboard from '@screenAkun/Dashboard'
import DataSekolah from '@screenAkun/DataSekolah'
import Komplain from '@screenAkun/Komplain'
import LokasiSekolah from '@screenAkun/LokasiSekolah'
import Pembandingan from '@screenAkun/RiwayatBelanja'
import Notifikasi from '@screenAkun/Notifikasi'
import RiwayatBelanja from '@screenAkun/RiwayatBelanja'
import Negosiasi from '@screenAkun/Negosiasi'
import Perbandingan from '@screenAkun/Perbandingan'
import Login from '@screenFront/Login'

const MainStack = createStackNavigator();
const Drawer =createDrawerNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      headerMode="none"
      // initialRouteName="DrawerNavigator"
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Mall" component={Mall} />
        <MainStack.Screen name="MallDetail" component={MallDetail} />
        <MainStack.Screen name="FilterMall" component={FilterMall} />
        <MainStack.Screen name="ProdukDetail" component={ProdukDetail} />
        <MainStack.Screen name="Nego" component={Nego} />
        <MainStack.Screen name="Keranjang" component={Keranjang} />
        <MainStack.Screen name="Cari" component={Cari} />
        <MainStack.Screen name="Login" component={Login} />

    </MainStack.Navigator>
  );
}




export default function Main(){
  return(
    <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          component={MainStackNavigator}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />


        <Drawer.Screen
          name="Dashboard"
          component={Dashboard} 
          options={{
            title: 'Dashboard',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />   

      <Drawer.Screen
          name="Login"
          options={{ drawerLabel: 'Login Sekolah' }}
          component={Login} 
          options={{
            title: 'Login Sekolah',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />


        <Drawer.Screen
          name="DataSekolah"
          options={{ drawerLabel: 'DataSekolah' }}
          component={DataSekolah} 
          options={{
            title: 'DataSekolah',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />   

        <Drawer.Screen
          name="LokasiSekolah"
          options={{ drawerLabel: 'LokasiSekolah' }}
          component={LokasiSekolah}
          options={{
            title: 'Lokasi Sekolah',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />
        
        <Drawer.Screen
          name="Notifikasi"
          options={{ drawerLabel: 'Notifikasi' }}
          component={Notifikasi}
          options={{
            title: 'Notifikasi',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          
          />

        <Drawer.Screen
          name="RiwayatBelanja"
          options={{ drawerLabel: 'RiwayatBelanja' }}
          component={RiwayatBelanja}
          options={{
            title: 'Riwayat Belanja',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          />

        <Drawer.Screen
          name="Negosiasi"
          options={{ drawerLabel: 'Negosiasi' }}
          component={Negosiasi}
          options={{
            title: 'Negosiasi',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          />
        

        <Drawer.Screen
          name="Perbandingan"
          options={{ drawerLabel: 'Perbandingan' }}
          component={Perbandingan} 
          options={{
            title: 'Perbandingan',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          />
        
        <Drawer.Screen
          name="Komplain"
          options={{ drawerLabel: 'Komplain' }}
          component={Komplain}
          options={{
            title: 'Komplain',
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
              name="home"
            ></FontAwesomeIcon>
            ),
          }}
          />

      </Drawer.Navigator>
  )
}


// function BottomTabNavigator() {
//   const {t} = useTranslation();
//   const {colors} = useTheme();
//   const font = useFont();
//   const auth = useSelector(state => state.auth);
//   const login = auth.login.success;
//   return (
//     <BottomTab.Navigator
//       initialRouteName="Home"
//       headerMode="none"
//       tabBarOptions={{
//         showIcon: true,
//         showLabel: true,
//         activeTintColor: colors.primary,
//         inactiveTintColor: BaseColor.grayColor,
//         style: {borderTopWidth: 1},
//         labelStyle: {
//           fontSize: 12,
//           fontFamily: font,
//         },
//       }}>
//       <BottomTab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: t('home'),
//           tabBarIcon: ({color}) => {
//             return <Icon color={color} name="home" size={20} solid />;
//           },
//         }}
//       />
//       <BottomTab.Screen
//         name="Booking"
//         component={Booking}
//         options={{
//           title: t('booking'),
//           tabBarIcon: ({color}) => {
//             return <Icon color={color} name="bookmark" size={20} solid />;
//           },
//         }}
//       />
//       <BottomTab.Screen
//         name="Messenger"
//         component={Messenger}
//         options={{
//           title: t('message'),
//           tabBarIcon: ({color}) => {
//             return <Icon solid color={color} name="envelope" size={20} solid />;
//           },
//         }}
//       />
//       <BottomTab.Screen
//         name="Post"
//         component={Post}
//         options={{
//           title: t('news'),
//           tabBarIcon: ({color}) => {
//             return <Icon color={color} name="copy" size={20} solid />;
//           },
//         }}
//       />
//       <BottomTab.Screen
//         name="Profile"
//         component={login ? Profile : Walkthrough}
//         options={{
//           title: t('account'),
//           tabBarIcon: ({color}) => {
//             return <Icon solid color={color} name="user-circle" size={20} />;
//           },
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }