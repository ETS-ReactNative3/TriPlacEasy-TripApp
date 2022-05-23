

import React,{Component}from "react";
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  Modal,
  Button
 } from 'react-native';
 import { NavigationContainer } from "@react-navigation/native";

 import Appp from './Navigation/Navigation';

 export default class App extends Component{
  render(){
  return (
    <SafeAreaView style={{flex:1}}>

<Appp/>
    </SafeAreaView>
   );
  }
   }
 const styles = StyleSheet.create({
   
 });
 
 