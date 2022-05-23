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
  Linking,
  Pressable,
  ActivityIndicator
} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings'
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import  {
  MAP_TYPES,
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  UrlTile,
  Circle,
} from 'react-native-maps';
import MapView from "react-native-map-clustering";
import MapViewDirections from 'react-native-maps-directions';
import {check,checkMultiple, PERMISSIONS,request,requestMultiple,openSettings,checkNotifications,requestNotifications} from 'react-native-permissions';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import map from '../screens/map.json'

export default class mapIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'',
      color2:'',fontfam:'sans-serif-light',
      latitude: '',
      longitude: '',
      lang:'',
      modalVisible3:false,
      modalVisible4:false,
      mapStyle:2
    
     
      
    };
  }
  setModalVisible3 = (visible) => {
    this.setState({ modalVisible3: visible });
  }
  setModalVisible4 = (visible) => {
    this.setState({ modalVisible4: visible });
  }


  componentDidMount() {
    this.setState({modalVisible4:false})
    // setTimeout(() => {
    //   this.setState({modalVisible4:false})
    //    }, 7500);
    database()
    .ref('/data'+'/'+auth().currentUser.uid)

.on('value',snapshot => {
  this.setState({color:snapshot.val().color})
  this.setState({color2:snapshot.val().color2})
  this.setState({lang:snapshot.val().lang})
  
      
});
    const {modalVisible3} = this.state;
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
   if(res=='granted'){
  console.log(res)
   }
   else{
    
  
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
        this.setModalVisible4(true)
      },
      error => {
        if(error.code==2){
          this.setModalVisible3(true)
          console.log(error)
        }
      },
      {enableHighAccuracy: true, timeout: 20000,maximumAge:100000000},
      //options methodları :

      //timeout=>konum alma süresi 20 saniye desek 20 saniye boyunca uğraşır
      //maximumAge
      //enableHighAccuraccy:true GPS kullanılacağı anlamına gelir
    );
  }
 
  render() {
    // KONUM ALMA
    const {latitude, longitude, lang,carParks, carPark1,modalVisible3,modalVisible4,color,color2,fontfam,mapStyle} = this.state;
   const longitude1 =longitude
   const latitude1 =latitude
   const color3="white"
  // {console.log(latitude1)}
  // const {color,color2,fontfam} = this.props.route.params
  const INITIAL_REGION = {
    latitude: 40.58,
    longitude: 34.50,
    latitudeDelta: 18.58,
    longitudeDelta: 18.2581,
  };
    return (
      <View style={styles.container}>
    
        <View style={{width: '100%', height:48,backgroundColor:color,flexDirection:'row',justifyContent:'space-between'}}>

        <View   style={{justifyContent:'center',marginLeft:15}}>
      
        
          <Text style={({fontFamily:fontfam,marginTop:-5,color:'black', fontSize: 15})}>
   (52)
          </Text>
        
          </View>
          <View   style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={({fontFamily:fontfam,marginTop:-5,color: color2, fontSize: 40})}>
         {lang=='tr'?'Harita':'Map'}
          </Text>
          </View>
        
          <View
          style={{justifyContent:'center'}}
       >
           <Image
            source={require('../assets/TripLogo2.png')}
            resizeMode="center"
            style={styles.image2}
          />
          </View>
        </View>
        {/* {alert( longitude, latitude)} */}

             
{/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
           
          }}
        >
          <View style={styles.centeredView}>
            <View style={{
               backgroundColor: 'black',
               width:100,height:100,
               borderRadius: 20,
               padding: 15,
               alignItems: "center",
               shadowColor: "blue",
               alignItems:'center',
               justifyContent:'center',
               shadowOffset: {
                 width: 0,
                 height: 2}
            }}>
              
              <ActivityIndicator size="large" color={color} />
            </View>
          </View>
        </Modal> */}
        
        <MapView
          style={styles.map}
        showsMyLocationButton={true}
          zoomControlEnabled={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          showsUserLocation={true}
  provider={PROVIDER_GOOGLE}
  followsUserLocation={true}
  userInterfaceStyle={'dark'}
minZoomLevel={3}
clusterFontFamily={'san-serif'}

clusterColor={color}
clusterTextColor={color2}

initialRegion={INITIAL_REGION}
  mapType={mapStyle==1?'hybrid':'standard'}
          // region={{
         
          //   latitude: Number(latitude),
          //   longitude: Number(longitude),
          //   latitudeDelta: 0.258,
          //   longitudeDelta: 0.2581,
            
          // }}
          // region={{
         
          //   latitude: 40.58,
          //   longitude: 34.50,
          //   latitudeDelta: 18.58,
          //   longitudeDelta: 18.2581,
            
          // }}
         
          //KONUM ALMA
          // provider={PROVIDER_GOOGLE}
          //         style={styles.map}
          //         region={{
          //             latitude:Number(latitude),
          //             longitude:Number(longitude),
          //             longitudeDelta:0.015,
          //             latitudeDelta:0.0121
          //         }}
          //         showsUserLocation={true}
        >
         
          {/* <MapViewDirections
            origin={{latitude:40.99449778084676,longitude:28.728089555825388}}
            destination={{latitude:40.98449778084676,longitude: 28.788089555825388}}
            apikey={'AIzaSyDQLdDbN44L1Im9dAHu06Fm_nt0qL5qxeA'}
            strokeWidth={2}
            strokeColor="blue"
           
           
           
          /> */}
          
          {/* <Marker
            pinColor={'blue'}
            title={lang=='tr'?'KONUMUNUZ':'Your Location'}
            opacity={1.5}
            
            
            coordinate={{
              latitude: Number(latitude),
              longitude: Number(longitude),
              latitudeDelta: 0.315,
              longitudeDelta: 0.3121,
            }}
          >
            <View style={{width:45,height:45,borderWidth:1,borderColor:color2}}>
            <Image
                source={require('../assets/TripLogo2.png')}
                resizeMode="center"
                style={{width:45,height:45}}
              
              />
            </View>
         
          </Marker> */}
 
    
{
map.item.map((val,index)=>{
  

return(
  <Marker
            pinColor={color}
            onPress={() =>this.props.navigation.navigate(val.sehir,{city:val.city,latitude2:latitude1,longitude2:longitude1,color:color,color2:color2,fontfam:fontfam})}
            title={lang=='tr'?val.name:val.name2}
            opacity={1.5}
            description={lang=='tr'?val.name2:val.name}
            coordinate={{
              latitude: val.latitude,
              longitude: val.longitude,
              latitudeDelta: 0.115,
              longitudeDelta: 0.1121,
            }}
          >
            <View style={{alignItems:'center'}}> 
            {lang=='tr'?
             <Text style={{
              color:'#F4EFC0',padding:3,borderWidth:1,borderColor:'white',fontSize:10,fontWeight:'700',backgroundColor:color2
          }}>{val.name}</Text>
          :
          <Text style={{
            color:'#F4EFC0',padding:3,borderWidth:1,borderColor:'white',fontSize:10,fontWeight:'700',backgroundColor:color2
        }}>{val.name2}</Text>
            }
           
              <Icon  name={Platform.OS === "ios" ? "ios-add" : "location"}
 color={color2}
 
  size={28}/>
</View>

          </Marker>
          
)

})

}




         
          {/* 
           //CIRCLE


<Circle
center={{latitude:40.990109430171354,longitude: 28.72716037211094}}
strKAPATeWidth={3}
strKAPATeColor={"red"}
fillColor={"#246E73"}
radius={300}
/> */}

{/*           
           //DRAGGABLE MARKERS */}
{/* 
 <Marker 
 draggable={true}
 onDrag={(e)=>console.log(e.nativeEvent.coordinate)}
 onDragStart={(e)=>console.log(`start:${e}`)}
 onDragEnd={(e)=>alert(`Şu anki konum:${e.nativeEvent.coordinate.latitude} ${e.nativeEvent.coordinate.longitude}`)}
 title={"İÜC PARK"}
             
              description={"Otopark"}              coordinate={
                  {
                     latitude:40.99449778084676
                     ,longitude:28.728089555825388
                   ,latitudeDelta:0.115
                   ,longitudeDelta:0.1121
                 }              }>

 <View style={{justifyContent:'center',alignItems:'center',width:30,height:30,backgroundColor:'red',borderRadius:50}}>
 <Text style={{color:'white',padding:5,fontSize:15,justifyContent:'center',alignItems:'center'}}> 1 </Text>
 </View>

              </Marker> */}
             
        </MapView>

        
{
 //GOOGLE DIRECTIONS ÜCRETLENDİRMESİ
}


{/* <MapViewDirections apikey={"AIzaSyD5C0XB2nisaTgPaqeHzvwlzrN8gl19Hq4"}

origin={{latitude:40.99449778084676,longitude: 28.728089555825388}}
destination={{latitude:40.94449778084676,longitude: 28.735089555825388}}
/> */}
 <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            
            this.setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={{
              backgroundColor:color,
               borderRadius: 20,
               
               padding: 15,
               alignItems: "center",
               shadowColor: "blue",
               shadowOffset: {
                 width: 0,
                 height: 2
               },
               shadowOpacity: 0.25,
               shadowRadius: 4,
               elevation: 5
            }}>
              <Text style={{
                  marginBottom: 15,
                  fontSize:20,
                  textAlign: "center",
                  color:color2,fontWeight:'bold'
              }}>Lütfen Konumunuzu Açın</Text>
              
              <Pressable
                style={[styles.button3, styles.buttonClose1]}
                onPress={() => {this.props.navigation.goBack(),this.setModalVisible3(!modalVisible3)}}
              >
                <Text style={styles.textStyle2}>Geri Dön</Text>
              </Pressable>

              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>{this.props.navigation.goBack(),AndroidOpenSettings.locationSourceSettings(),this.setModalVisible3(!modalVisible3)}}
              >
                <Text style={styles.textStyle2}>Tamam</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
        <View style={{position:'absolute',left:5,bottom:5}}>
          <TouchableOpacity style={{backgroundColor:'#081026',padding:1,borderRadius:15,marginBottom:15,justifyContent:'center',alignItems:'center'}}onPress={()=>this.setState({ mapStyle:2})}>
          <Image
            source={require('../assets/normal.png')}
            resizeMode="cover"
            style={{width:50,height:50,borderRadius:15}}
          />
  
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#081026',padding:1,borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={()=>this.setState({ mapStyle:1})}>
          <Image
            source={require('../assets/uydu.png')}
            resizeMode="cover"
            style={{width:50,height:50,borderRadius:15}}
          />
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
    
  },
  image2: {
    
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop:5
 
},
//MODAL
//MODAL STYLES
modalView: {
    
  
  borderRadius: 20,
  padding: 15,
  alignItems: "center",
  shadowColor: "blue",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
modalText: {
  marginBottom: 15,
  fontSize:20,
  textAlign: "center",
  color:'white',fontWeight:'bold'
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  
},
button3: {
  borderRadius: 20,
  padding: 10,
  marginTop:20,
  width:80
},

buttonOpen: {
  backgroundColor: "#008ba3",
},
buttonClose2: {
  backgroundColor: "green",
},
buttonClose1: {
  backgroundColor: "red",
},
textStyle2: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
icon:{
  color:'white',padding:3,borderWidth:1,borderColor:'white',fontWeight:'700',backgroundColor:'#161a1d'
}
});
