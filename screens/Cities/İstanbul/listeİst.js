import React, {useState,useEffect,Component} from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,
  TouchableOpacity,FlatList,
  Shape,
  ImageBackground,
  Modal,
  Linking,
  Pressable
 } from 'react-native';
 import axios from "axios"
 import DrawerActions from "react-navigation"
 import Icon from "react-native-vector-icons/Ionicons"
 import LinearGradient from 'react-native-linear-gradient';
 import getDirections from 'react-native-google-maps-directions'
 import openMap from 'react-native-open-maps';
 import createMapLink from 'react-native-open-maps';
 import {check,checkMultiple, PERMISSIONS,request,requestMultiple,openSettings,checkNotifications,requestNotifications} from 'react-native-permissions';
 import Geolocation from '@react-native-community/geolocation';
 import database from '@react-native-firebase/database';
 import auth from '@react-native-firebase/auth'
 export default class iücdoluluk extends Component{
 

  constructor(props)
  {

    super(props)
    this.state={
      latitude: '',
      longitude: '',
      color3:'',
      lang:''
    }
}



  componentDidMount() {
    const {color,color2,fontfam} = this.props.route.params
    database()
    .ref('/data'+'/'+auth().currentUser.uid)
    .on('value',snapshot => {
    
      this.setState({lang:snapshot.val().lang})
          
    });
    color=='#a7f6d3' ? 
    this.setState({color3:color}) :
    this.setState({color3:color2})

    const LocationPer=( 
      Platform.select({
  
          android:PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
          ,ios:PERMISSIONS.IOS.ACCESS_FINE_LOCATION })
      )
  
     
      requestMultiple([LocationPer]).then((status)=>{
console.log('Location',status[LocationPer])

})
       
check(Platform.select({

    android:PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    ,ios:PERMISSIONS.IOS.ACCESS_FINE_LOCATION
}))
.then((res)=>{
//İZİN ALMAK İÇİN AYARLARA YÖNLENDİRME
   if(res=='blocked'){
    
  openSettings().catch((e)=>console.log(e))
   }
})
.catch((e)=>{
    console.log(e)
    
})
    //KONUM
    ;
    Geolocation.getCurrentPosition(
      position => {
        const {
          coords: {latitude, longitude},
        } = position;
        this.setState({latitude, longitude});
        console.log(position);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 10000,maximumAge:10000},
      //options methodları :

      //timeout=>konum alma süresi 20 saniye desek 20 saniye boyunca uğraşır
      //maximumAge
      //enableHighAccuraccy:true GPS kullanılacağı anlamına gelir
    );
  }
  render(){
    const {latitude, longitude,lang} = this.state;
   const longitude1 =longitude
   const latitude1 =latitude
   const {color,color2,fontfam} = this.props.route.params
const more='Other Photos..'
 const DATA = [
 
  {
    name:'Ayasofya Camii',
    name2:'Hagia Sophia Mosque',
    photo:'https://arkeofili.com/wp-content/uploads/2020/07/ayasofya1.jpg',
    more:'Ayasofya'
  },
  {
   name:'Galata Kulesi',
   name2:'Galata Tower',
    photo:'https://ist01.mncdn.com/ist_items/attraction/galata-towercover-5d72021412237.jpg',
    more:'galataTower'
  },
 
  {
    name:'Sultanahmet Camii',
    name2:'Blue Mosque',
    photo:'https://www.carwiz.rent/data/public/2019-07/blue_mosque_15db837b846c60.jpg',
    more:'Sultanahmet'
  },
  {
    name:'Topkapı Sarayı',
    name2:'Topkapi Palace',
    photo:'https://www.fotometrik360.com/wp-content/uploads/2019/08/Topkap%C4%B1-Saray%C4%B1-360-sanal-tur.jpg',
    more:'Topkapi'
  },
  {
    name:'Fethi Pasa Korusu',
    name2:'Fethi Pasa Grove',
    photo:'https://gezentianne.com/wp-content/uploads/2018/11/fethi_pasa_korusu.jpg',
    more:'FethiPasa'
  },
  {
   name:'Dolmabahçe Sarayı',
   name2:'Dolmabahce Palace',
    photo:'https://i4.hurimg.com/i/hurriyet/75/866x494/618b9cc94e3fe01b0cc64b17.jpg',
    more:'Dolmabahce'
  },
  {
    name:'Kapalıçarşı G. Bazaar',
    name2:'Kapalicarsı G. Bazaar',
    photo:'https://www.kulturportali.gov.tr/contents/images/20171009155855147_ist_kapalicarsi%20copy.jpg',
    more:'Kapali'
  },
  {
    name:'Kız Kulesi',
    name2:'Kiz Tower',
    photo:'https://kizkulesi-11743.web.app/asset/img/meta-image.jpg',
    more:'KizKulesi'
  },
  {
   name:'Taksim Meydanı',
   name2:'Taksim Square',
    photo:'https://cdnntr1.img.sputniknews.com/img/102809/51/1028095128_705:0:2794:2297_1920x0_80_0_0_03a9157db0bfa9fa443b6798b9198bf9.jpg',
    more:'Taksim'
  },
  
  {
    name:'Eyüp ',
    name2:'Eyup Mosque',
    photo:'https://www.eyupsultan.bel.tr/fotograf/fotoGaleri/212285-eyup-sultan-camii-eyup-fotogaleri_800x535.JPG',
    more:'Eyup'
  },
  {
   name:'Ortaköy Camii',
   name2:'Ortakoy Mosque',
    photo:'https://seyahatdergisi.com/wp-content/uploads/2017/12/Ortakoy-camii.jpg',
    more:'Ortakoy'
  },
  {
    name:'Pierre Loti Tepesi',
    name2:'Pierre Loti Hill',
    photo:'https://istanbeautiful.com/tr/wp-content/uploads/pierre-loti-hill.jpg',
    more:'PierreLoti'
  },
  {
    name:'Sent Antuan Kilisesi',
    name2:'Sent Antuan Church',
    photo:'http://www.sentantuan.com/wp-content/uploads/2017/06/a5-470x340.jpeg',
    more:'SentAntuan'
  },
  {
   name:'Rumeli Hisarı',
   name2:'Rumeli Fortress',
    photo:'https://istanbeautiful.com/tr/wp-content/uploads/rumeli-hisari2-1068x813.jpg',
    more:'Rumeli'
  },
];

const Item = ({ photo,more,name,name2 }) => (
  <ScrollView>


    <TouchableOpacity style={styles.item2} onPress={() => this.props.navigation.navigate('İstanbul',{city:more,color:color,color2:color2,fontfam:fontfam,latitude2:latitude1,longitude2:longitude1})}>
    <ImageBackground source={{uri:photo}} resizeMode="cover" style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'flex-end'}}>

    
   
    <View style={{backgroundColor:color2,alignItems:'flex-start',justifyContent:'flex-end',width:'100%',opacity:0.6}}>
   
    {  lang=='tr'?
   <Text style={{
       
   marginLeft:'5%',fontWeight:'700',fontFamily:'sans-serif-medium',fontSize:35,color:'white',textAlign: 'center'}}>
       {name}

     </Text>
     :
     <Text style={{
       
      marginLeft:'5%',fontWeight:'700',fontFamily:'sans-serif-medium',fontSize:35,color:'white',textAlign: 'center'}}>
          {name2}
   
        </Text>
     }
     </View>
    
     </ImageBackground>
      </TouchableOpacity>
      
  </ScrollView>
);
const renderItem = ({ item }) => (
  <Item photo={item.photo} more={item.more} name={item.name} name2={item.name2} />
);

return(
     
       <ScrollView style={{backgroundColor:color,width:'100%',height:'100%'}}>
       <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor:'black',opacity:0.7}}>
     <ImageBackground blurRadius={15} source={{uri:'https://www.carwiz.rent/data/public/2019-07/blue_mosque_15db837b846c60.jpg'}} resizeMode="cover" style={{width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>

     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color={this.state.color3}
  size={55}/>
</TouchableOpacity>





<TouchableOpacity onPress={()=> this.props.navigation.navigate('İstGezilecek') } >

          <Text style={({fontFamily:fontfam,color: this.state.color3, fontSize: 45})}>
          İSTANBUL
          </Text>
          </TouchableOpacity>
          </ImageBackground>
          </View>


        
          <View style={{alignItems: 'center'}}>


<FlatList
        data={DATA}
        renderItem={renderItem}
        
      />

  </View>

      
      




       


    

        </ScrollView>
       )}
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    
  },
  item2: {
    flexDirection: 'row',
    flex:1,
    width:'100%', height:300,
   
     alignItems:'center',
    
  },
  tinyLogo: {
    width: 10,
    height: 10,
  },
  
})