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
    color=='#a7f6d3' ||color=='#e1bcff' ? 
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
    name:'Acemhöyük',
    name2:'Acemhoyuk',
    photo:'https://www.kulturportali.gov.tr/contents/images/acemhoyuk-2007-2_0.jpg',
    more:'Acemhoyuk'
  },
  {
   name:'Hasandağı',
   name2:'Hasandagi Mountain',
    photo:'https://www.kulturportali.gov.tr/contents/images/hasandagi(1).jpg',
    more:'Hasandagi'
  },
 
  {
    name:'Ihlara Vadisi',
    name2:'Ihlara Valley',
    photo:'https://www.kulturportali.gov.tr/contents/images/20190729120158797_yy20171003144329765_%20%20%20%20%20AKSARAY%20SERVET%20UYGUN%20(41)(2).jpg',
    more:'Ihlara'
  },
  {
    name:'Manastır Vadisi',
    name2:'Monastery Valley',
    photo:'https://i.pstimaj.com/img/78/0x482/60bcd639ae298b87c976a53b.jpg',
    more:'Manastirlar'
  },
  {
    name:'Narlı Göl',
    name2:'Narlı Lake',
    photo:'https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180910134430606_narligol%20logolu.jpg?format=jpg&quality=50',
    more:'NarliGol'
  },
  {
   name:'Nora Antik Kenti',
   name2:'Nora Ancient City',
    photo:'https://cdnuploads.aa.com.tr/uploads/PhotoGallery/2020/10/21/thumbs_b2_ea4fe42e6d4da13270782c6b716d9a38.jpg',
    more:'NoraAntik'
  },
  {
    name:'Sultanhanı',
    name2:'Sultanhani',
    photo:'https://i.pstimaj.com/img/78/740x1200/5accd6abae298b8e030db389.jpg',
    more:'Sultanhani'
  },
  {
    name:'Tuz Gölü',
    name2:'Salt Lake',
    photo:'https://i.pinimg.com/originals/b0/e3/f6/b0e3f6dbc42cbf420ce094a947d796a5.jpg',
    more:'TuzGolu'
  },
  
 
  
];

const Item = ({ photo,more,name,name2 }) => (
  <ScrollView>


    <TouchableOpacity style={styles.item2} onPress={() => this.props.navigation.navigate('Aksaray',{city:more,color:color,color2:color2,fontfam:fontfam,latitude2:latitude1,longitude2:longitude1})}>
    <ImageBackground source={{uri:photo}} resizeMode="cover" style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'flex-end'}}>

    
   
    <View style={{backgroundColor:color2,alignItems:'flex-start',justifyContent:'flex-end',width:'100%',opacity:0.6}}>

{lang=='tr'
?
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
     <ImageBackground blurRadius={25} source={{uri:'https://img.piri.net/mnresize/720/2000/resim/imagecrop/2021/11/18/12/42/resized_e6eea-a1737a539.jpg'}} resizeMode="cover" style={{width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>

     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color={this.state.color3}
  size={55}/>
</TouchableOpacity>






          <Text style={({fontFamily:'sans-serif-medium',color: this.state.color3, fontSize: 45})}>
          AKSARAY
          </Text>
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