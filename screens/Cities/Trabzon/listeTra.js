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
    name:'Atatürk Köşkü',
    name2:'Ataturk Mansion',
    photo:'https://www.hepsiemlak.com/emlak-yasam/wp-content/uploads/2018/09/ataturk-kosku-ndeki-gizemli-gecit-2-768x576.jpg',
    more:'AtatürkK'
  },
  {
   name:'Ayasofya Müzesi',
   name2:'Hagia Sophia Museum',
    photo:'https://cdn.otelleri.net/landing/trabzon/gezi-rehberi/trabzon-ayasofya-muzesi-2267-ea.jpg',
    more:'AyasofyaTra'
  },
 
  {
    name:'Sümela Manastırı',
    name2:'Sumela Monastery',
    photo:'https://kvmgm.ktb.gov.tr/Resim/139358,sumelajpg.png?0"',
    more:'Sümela'
  },
  {
    name:'Hamsiköy',
    name2:'Hamiskoy(Village)',
    photo:'https://www.bizevdeyokuz.com/wp-content/uploads/hamsikoy-trabzon-.jpg',
    more:'Hamsiköy'
  },
  {
    name:'Uzungöl',
    name2:'Uzungol',
    photo:'https://c1.wallpaperflare.com/preview/1015/975/787/turkey-eastern-black-sea-rize-ayder.jpg',
    more:'Uzungöl'
  },
  {
   name:'Şahinkaya',
   name2:'Sahinkaya',
    photo:'https://www.atlasdergisi.com/wp-content/uploads/2020/01/kaya-tirmanisi-sahinkaya-4-1024x685.jpg',
    more:'Sahinkaya'
  },
  {
    name:'Çal Mağarası',
    name2:'Çal Cave',
    photo:'https://cdn.otelleri.net/landing/trabzon/gezi-rehberi/cal-magarasi-2267-4c.jpg',
    more:'CalMag'
  },
  {
    name:'Boztepe',
    name2:'Boztepe',
    photo:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/92/b7/d3/boztepe.jpg?w=900&h=-1&s=1',
    more:'Boztepe'
  },
  {
    name:'Hıdırnebi Yaylası',
    name2:'Hıdırnebi Plateau',
    photo:'https://www.akcaabat.bel.tr/uploads/PROJELER/16/dji-0114.jpg',
    more:'Hıdırnebi'
  },
  {
    name:'Küçük Ayvasıl Kilisesi',
    name2:'Little Ayvasil Church',
    photo:'https://cdn.otelleri.net/landing/trabzon/gezi-rehberi/kucuk-ayvasil-kilisesi-2267-80.jpg',
    more:'Ayvasil'
  },
  {
   name:'Şolma Yaylası',
   name2:'Solma Plateau',
    photo:'https://www.yaz-tatili.com/wp-content/uploads/Mavura-Yaylas%C4%B1.jpg',
    more:'Solma'
  },
  {
    name:'Tonya Erikbeli Yaylası',
    name2:'Tonya Erikbeli Plateau',
    photo:'https://www.yaz-tatili.com/wp-content/uploads/Tonya-Erikbeli-Hakk%C4%B1nda-Bilgiler.jpg',
    more:'Erikbeli'
  },
  {
    name:'Sis Dağı Yaylası',
    name2:'Fog Mountan Plateau',
    photo:'https://seyyahdefteri.com/wp-content/uploads/2019/05/Sis-Da%C4%9F%C4%B1-Yaylas%C4%B1-1-1024x683.jpg',
    more:'SisDag'
  },
  
 
  
];

const Item = ({ photo,more,name,name2 }) => (
  <ScrollView>


    <TouchableOpacity style={styles.item2} onPress={() => this.props.navigation.navigate('Trabzon',{city:more,color:color,color2:color2,fontfam:fontfam,latitude2:latitude1,longitude2:longitude1})}>
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
  <Item photo={item.photo} more={item.more} name={item.name}name2={item.name2} />
);

return(
     
       <ScrollView style={{backgroundColor:color,width:'100%',height:'100%'}}>
      <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}colors={["#750d02","#699ec3","#750d02","#699ec3"]}style={{alignItems: 'center',justifyContent: 'center',backgroundColor:'red'}}>

     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color={"white"}
  size={55}/>
</TouchableOpacity>






          <Text style={({fontFamily:'sans-serif-medium',color:"white", fontSize: 45})}>
          TRABZON
          </Text>
          
          </LinearGradient >
         
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