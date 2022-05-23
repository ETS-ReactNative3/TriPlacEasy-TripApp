import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Circle,
} from 'react-native-maps';
//import MapView from "react-native-map-clustering";
import MapViewDirections from 'react-native-maps-directions';
import {check,checkMultiple, PERMISSIONS,request,requestMultiple,openSettings,checkNotifications,requestNotifications} from 'react-native-permissions';


export default class istGezilecek extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }}

  render() {
    
    const {color,color2,fontfam} = this.props.route.params
   
    return (
      <View style={{
        flex:1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor:color,
      }}>
    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:0}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color={"white"}
  size={55}/>
</TouchableOpacity>
     
    <TouchableOpacity
            onPress={() => this.props.navigation.navigate('homepage')}
            style={{position: 'absolute', right: '0%', top: '0%'}}>
           <Image
            source={require('../../../assets/TripLogo2.png')}
            resizeMode="center"
            style={styles.image2}
          />
          </TouchableOpacity>
          <View style={{alignItems: 'center',justifyContent: 'center',marginBottom:'5%'}}>
          <Text style={({fontFamily:fontfam,marginTop:'5%',color:color2, fontSize: 45})}>
          NEVŞEHİR
          </Text>
          </View>
          
        
       
          <View style={{marginBottom:'5%',alignItems: 'center'}}>
          <Text style={(styles.textBody, {color: color2,fontFamily:'sans-serif-light',fontWeight:'700', fontSize: 35})}>
            Lütfen Gezilecek Yerleri 
          </Text>
          </View>
          <View style={{marginBottom:'5%',alignItems: 'center'}}>
          <Text style={(styles.textBody, {color: color2,fontFamily:'sans-serif-light',fontWeight:'700', fontSize: 35})}>
             Nasıl Görüntülemek 
          </Text>
          </View>
          <View style={{marginBottom:'5%',alignItems: 'center'}}>
          <Text style={(styles.textBody, {color: color2,fontFamily:'sans-serif-light',fontWeight:'700', fontSize: 35})}>
            İstediğinizi Seçin
          </Text>
          </View>
          
          <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('mapNev',{color:color,color2:color2})}
                    style={styles.button}>
                    <Text style={{color: color2,fontWeight:'700', fontSize: 30}}>Haritadan </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('listeNev',{color:color,color2:color2})}
                    style={styles.button}>
                    <Text style={{color: color2,fontWeight:'700', fontSize: 30}}>Listeden</Text>
                  </TouchableOpacity>
                </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  container: {
    flex:1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#adf6d6',
  },button: {
    marginTop:'5%',
    backgroundColor: '#eeee',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    
  }, image2: {
    
    resizeMode: 'contain',
    width: 80,
    height: 80,
    marginTop:'5%'
 
}
  
});
