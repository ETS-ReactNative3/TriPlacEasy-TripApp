import React, { useEffect,useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators,HeaderStyleInterpolators} from  '@react-navigation/stack';
import { View, Text,Image } from 'react-native';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'
import { createDrawerNavigator } from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

import Login from '../screens/Login';

import map from '../screens/map'

import liste from'../screens/liste'
import Profile from '../screens/Profile/Profile'



import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../screens/Auth/login'

import Register from '../screens/Auth/register'


import Aksaray from '../screens/Cities/Aksaray/Aksaray'
import listeAks from '../screens/Cities/Aksaray/listeAks'
import AksarayInfo from '../screens/Cities/Aksaray/AksarayInfo'

import İstanbul from '../screens/Cities/İstanbul/İstanbul'
import listeİst from '../screens/Cities/İstanbul/listeİst'
import İstanbulInfo from '../screens/Cities/İstanbul/İstanbulInfo'

import Nevsehir from '../screens/Cities/Nevsehir/Nevsehir'
import listeNev from '../screens/Cities/Nevsehir/listeNev'
import NevsehirInfo from '../screens/Cities/Nevsehir/NevsehirInfo'

import Trabzon from '../screens/Cities/Trabzon/Trabzon'
import listeTra from '../screens/Cities/Trabzon/listeTra'
import TrabzonInfo from '../screens/Cities/Trabzon/TrabzonInfo'

import Amasya from '../screens/Cities/Amasya/Amasya'
import listeAma from '../screens/Cities/Amasya/listeAma'
import AmasyaInfo from '../screens/Cities/Amasya/AmasyaInfo'
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
const Tab=createBottomTabNavigator()


const AuthStack=()=>{
  return(
      <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen name="login" component={Login} 
           options={{headerShown: false,...TransitionPresets.RevealFromBottomAndroid}}
          />
  <Stack.Screen name="Giriş Ekranı" component={login}
  options={{headerShown: false,...TransitionPresets.RevealFromBottomAndroid}}
/>
  <Stack.Screen name="Kayıt Ekranı" component={Register}
  options={{headerShown: false,...TransitionPresets.RevealFromBottomAndroid}}
/> 

      </Stack.Navigator>
  )
  
  }






const AppTabs=()=>{
  const [color,setColor]=useState('red')
    const [color2,setColor2]=useState('red')
    const [lang,setLang]=useState('tr')
database()
.ref('/data'+'/'+auth().currentUser.uid)

.on('value',snapshot => {
  setColor(snapshot.val().color)
  setColor2(snapshot.val().color2)
  setLang(snapshot.val().lang)
      
});


const customTabBarStyle={
  
  headerShown:false,
  activeTintColor:'black',
  inactiveTintColor:'white',
 activeBackgroundColor:color,
  inactiveBackgroundColor:color2,
  labelPosition: 'below-icon',
  showLabel:true,
  labelStyle: {
      fontSize: 13,
      margin: 0,
      padding: 0,
    },
tabStyle:{

},

}   
return(
    <Tab.Navigator
    tabBarOptions={customTabBarStyle}
    >
        
        <Tab.Screen name=" " component={Navigation}
        options={{
            tabBarIcon:({color})=>(

  
    color === "white"
  ?
    <Image
                source={require('../assets/TripLogo3.png')}
                resizeMode="center"
                style={{width:45,marginTop:15}}
              
              />
            :
            <Image
                source={require('../assets/TripLogo2.png')}
                resizeMode="center"
                style={{width:45,marginTop:15}}
              
              />
            
            
             
)
        }}
        />
        <Tab.Screen name={lang=='tr'?'Liste':'List'} component={liste}
        options={{
            tabBarIcon:({color})=>(
                <Icon  name={Platform.OS === "ios" ? "ios-add" : "list-outline"}
  color={color}
  size={30}/>
)
        }}
        />
      <Tab.Screen name={lang=='tr'?'Harita':'Map'} component={map}
        options={{
            tabBarIcon:({color})=>(
                <Icon  name={Platform.OS === "ios" ? "ios-add" : "map-outline"}
  color={color}
  size={30}/>
)
        }}
        />
       
    
        
    </Tab.Navigator>
)


}

const Navigation = () => {
    return (
      
     
      
      
        
        
     
            <Stack.Navigator >
                 <Stack.Screen name="Profile" component={Profile} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false,...TransitionPresets.RevealFromBottomAndroid}} />
                <Stack.Screen name="map" component={map} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
            
                <Stack.Screen name="Aksaray" component={Aksaray} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="listeAks" component={listeAks} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="AksarayInfo" component={AksarayInfo} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
            
                <Stack.Screen name="İstanbul" component={İstanbul} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="listeİst" component={listeİst} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="İstanbulInfo" component={İstanbulInfo} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
               
                <Stack.Screen name="Amasya" component={Amasya} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="listeAma" component={listeAma} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="AmasyaInfo" component={AmasyaInfo} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
            
                <Stack.Screen name="Trabzon" component={Trabzon} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="listeTra" component={listeTra} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="TrabzonInfo" component={TrabzonInfo} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
            
                <Stack.Screen name="Nevsehir" component={Nevsehir} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="listeNev" component={listeNev} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="NevsehirInfo" component={NevsehirInfo} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
            
            </Stack.Navigator>

   
    );
    
};

export default function Appp() {
  const[isSignedIn,setIsSignedIn]=useState(false)
    
  useEffect(()=>{
auth().onAuthStateChanged(user=>{
 if(user){
     setIsSignedIn(true)
 }
 else{
  setIsSignedIn(false)
 }
})
  }
      
  ,[])
    return (
      <NavigationContainer>
  {isSignedIn ? <AppTabs/> : <AuthStack/>}
      </NavigationContainer>
    );
  }

