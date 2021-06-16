import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';

/* Main Stack Navigator */
import Main from 'app/navigation/Main';
/* Modal Screen only affect iOS */
//screen Modal
// import Filter from '@screenFront/Filter';
// import Cari from '@screenFront/Cari'


const RootStack = createStackNavigator();

export default function Nav() {
 

  useEffect(() => {
    StatusBar.setBackgroundColor('red', true);
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
  }, []);

  return (
      <NavigationContainer>
        <Main />
   
      </NavigationContainer>
  );
}
