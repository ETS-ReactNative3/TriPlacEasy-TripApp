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
    const {latitude, longitude, lang} = this.state;
   const longitude1 =longitude
   const latitude1 =latitude
   const {color,color2,fontfam} = this.props.route.params
const more='Other Photos..'
 const DATA = [
  {
    name:'Aşıklar Tepesi Sunset P.',
    name2:'Lovers Hill Sunset P.',
    photo:'https://www.journeyera.com/wp-content/uploads/2019/07/LOVERS-HILL-SUNSET-POINT-GOREME-CAPPADOCIA-00275.jpg',
    more:'Sunset'
  },
  {
    name:'Aşıklar Vadisi',
    name2:'Lover Valley',
    photo:'https://live.staticflickr.com/1967/45468490862_129ce2a83a_b.jpg',
    more:'Asiklar'
  },
  {
   name:'Derinkuyu Yeraltı Ş.',
   name2:'Derinkuyu Underground City',
    photo:'https://staticb.yolcu360.com/blog/wp-content/uploads/2020/03/12171827/5624226956_e1a7f7ea0d_k-1.jpg',
    more:'Derinkuyu'
  },
 
  {
    name:'Göreme Açık Hava M.',
    name2:'Goreme Open Air Museum',
    photo:'https://www.kulturportali.gov.tr/contents/images/001%20g%c3%b6reme%20a%c3%a7%c4%b1k%20hava%20m%c3%bczesi.jpg',
    more:'GoremeAcik'
  },
  {
    name:'Göreme Panaroma',
    name2:'Göreme Panaroma',
    photo:'https://cappadocia4u.com/wp-content/uploads/esentepe-hill-cappadocia.jpg',
    more:'GoremePan'
  },
  {
    name:'Güvercinlik Vadisi',
    name2:'Guvercinlik Valley',
    photo:'http://www.nevsehir.gov.tr/kurumlar/nevsehir.gov.tr/NevsehirGaleri/Guvercinlik_Vadisi/guvercinlik1.png',
    more:'Guvercinlik'
  },
  {
   name:'(3 Güzeller) Peri Bacaları',
   name2:'Fairy Chimneys',
    photo:'https://i.pinimg.com/564x/49/91/23/4991230cfd0627110e74bc57c35ab8df.jpg',
    more:'PeriBacalari'
  },
 
  {
    name:'Zelve Açık Hava Müzesi',
    name2:'Zelve Open Air Museum',
    photo:'https://kapadokyatanitim.com/wp-content/uploads/2018/12/zelve-vadisi-acik-hava-muzesi-tatil-kapadokyada.jpg',
    more:'ZelveAcik'
  },
  
 
  
];

const Item = ({ photo,more,name,name2 }) => (
  <ScrollView>


<TouchableOpacity style={styles.item2} onPress={() => this.props.navigation.navigate('Nevsehir',{city:more,color:color,color2:color2,fontfam:fontfam,latitude2:latitude1,longitude2:longitude1})}>
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
     <View style={{alignItems: 'center',justifyContent: 'center'}}>
     <ImageBackground blurRadius={10} source={{uri:'https://cappadocia4u.com/wp-content/uploads/esentepe-hill-cappadocia.jpg'}} resizeMode="cover" style={{width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>

<TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
//name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
color={this.state.color3}
size={55}/>
</TouchableOpacity>





<TouchableOpacity onPress={()=> this.props.navigation.navigate('NevGezilecek') } >

     <Text style={({fontFamily:'sans-serif-medium',color:this.state.color3, fontSize: 45})}>
    NEVŞEHİR
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