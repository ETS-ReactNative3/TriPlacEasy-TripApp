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
    name:'Amasya Kalesi',
    name2:'Amasya Castle',
    photo:'https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180626151143792_AMASYA%20KALE%20GULCAN%20ACAR%20(0).jpg?format=jpg&quality=50',
    more:'AmasKale'
  },
  {
    name:'Borabay Gölü',
    name2:'Borabay Lake',
    photo:'https://www.gezipedia.net/uploads/posts/2020-03/1584438809_borabay-golu.jpg',
    more:'Borabay'
  },
  {
    name:'Ferhat ile Şirin Aşıklar Müzesi',
    name2:'Ferhat and Şirin Love Museum',
    photo:'https://amasya.ktb.gov.tr/Resim/357060,amasyaferhatsirinasiklarmuze.png?0',
    more:'FerhatSirin'
  },
 
  {
   name:'Harşena Dağı ve Kral Kaya Mezarları',
   name2:'Harşena Monuntain and King Rock Tombs',
    photo:'http://1.bp.blogspot.com/-3X9zOVbTHtk/T7EQFu7VScI/AAAAAAAAAEE/Smg9zUEjVjo/s1600/kral_kaya_mezarlari_442074%5B1%5D.jpg',
    more:'HarsenaKaya'
  },
  
  
 
  {
    name:'Hazeranlar Konağı',
    name2:'Harezanlar Mansion',
    photo:'https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20211020143520152_Hazeranlar%20KOnagi%20Muze%20ev%20(4).jpg?format=jpg&quality=50',
    more:'Hazeranlar'
  },
  {
    name:'Saraydüzü Kışla Binası-Kongre Merkezi',
    name2:'Sarayduzu Barracks',
    photo:'https://amasya.ktb.gov.tr/Resim/153995,amasyasarayduzukislabinasi.png?0',
    more:'Sarayduzu'
  },
  {
   name:'Şehzadeler Müzesi',
   name2:'Ottoman Princes Museum',
    photo:'https://blog.biletbayi.com/wp-content/uploads/2019/09/sehzadeler-muzesi-scaled.jpg',
    more:'Sehzadeler'
  },
 
  
  {
    name:'Yalıboyu Evleri',
    name2:'Yaliboyu Houeses',
    photo:'https://ayder.com.tr/uploads/p/o/KdB82rvfIRqJ.jpg',
    more:'Yalıboyu'
  },
  {
    name:'Yedi Kuğular Kuş Cenneti',
    name2:'Seven Swans Bird Sanctuary',
    photo:'http://medya.gezenek.com/Files/2636185213040425283.jpg',
    more:'Yedikugu'
  },
  {
    name:'II. Bayezid Külliyesi',
    name2:'II. Bayezid Complex',
    photo:'https://amasya.ktb.gov.tr/Resim/355682,amasyasultanbayezidkulliyesi.png?0',
    more:'Bayezid'
  },
  
 
  
 
  
];

const Item = ({ photo,more,name,name2 }) => (
  <ScrollView>


    <TouchableOpacity style={styles.item2} onPress={() => this.props.navigation.navigate('Amasya',{city:more,color:color,color2:color2,fontfam:fontfam,latitude2:latitude1,longitude2:longitude1})}>
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
     <ImageBackground blurRadius={25} source={{uri:'https://img.piri.net/mnresize/720/2000/resim/imagecrop/2021/11/18/12/42/resized_e6eea-a1737a539.jpg'}} resizeMode="cover" style={{width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>

     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color={this.state.color3}
  size={55}/>
</TouchableOpacity>






          <Text style={({fontFamily:'sans-serif-medium',color: this.state.color3, fontSize: 45})}>
          AMASYA
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