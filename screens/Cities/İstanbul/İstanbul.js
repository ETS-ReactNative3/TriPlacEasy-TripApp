
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
 import ActionButton from 'react-native-circular-action-menu';
 import ImageViewer from 'react-native-image-zoom-viewer';
 import dbb from '../dbb.json'
 import database from '@react-native-firebase/database';
 import auth from '@react-native-firebase/auth'

 export default class iücdoluluk extends Component{
 

  constructor(props)
  {

    super(props)
    this.state={

 modalVisible3:false,
visible:false,
imageindex:0
 
    }
}
functionTwo(){
 console.log('navbar')
} 
_goToYosemite() {
  const {longitude2,latitude2,city} = this.props.route.params
  openMap({ latitude:latitude2, longitude:longitude2});
  createMapLink({ provider: 'google', end: dbb.item.cities['İstanbul'][city].name })
}
setModalVisible3 = (visible) => {
  this.setState({ modalVisible3: visible });
}



handleGetDirections = () => {
  const data = {
     source: {
      latitude: 41.99449778084676,
      longitude: 29.728089555825388
    },
    destination: {
      latitude: 41.98449778084676,
      longitude:29.788089555825388
    },
    params: [
      {
        key: "travelmode",
        value: "driving"        // may be "walking", "bicycling" or "transit" as well
      },
      {
        key: "dir_action",
        value: "navigate"       // this instantly initializes navigation using the given travel mode
      }
    ],

  }

  getDirections(data)
}

  componentDidMount() {
    database()
    .ref('/data'+'/'+auth().currentUser.uid)
    .on('value',snapshot => {
    
      this.setState({lang:snapshot.val().lang})
          
  
    fetch("https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&lang="+this.state.lang+"&appid=e856bec0ffe36d86b4d8af3ca4626e0a")
    .then(res=>{
      return res.json();
    }).then(responseData=>{
      this.setState({temp:Math.round(responseData.main.temp)-272},
      this.setState({icon:responseData.weather[0].description})) 
    })
  });
    const {city} = this.props.route.params
    const x='İstanbul'
    const y=city
   

  // console.log(dbb.item.cities[x][city])  
  }
  
  render(){
    
 const {temp,visible,icon,imageindex,modalVisible3,lang}=this.state



 


const abc=()=>{
return  (
  <View>
    {
      lang=='tr'?<Text style={{color:'white',alignSelf:'center'}}>Kapatmak İçin Aşağı Kaydır</Text>
      :<Text style={{color:'white',alignSelf:'center'}}>Scroll Down To Close</Text>
    }

  </View>
)}

const Item = ({ url,more }) => (
  <View style={{
    borderRadius:15,
    backgroundColor: color2,
    flexDirection: 'row',
    
    marginTop:60,
    padding: 2,
   
    marginHorizontal: 20,
  }}>

  



<TouchableOpacity  onPress={()=>this.setState({visible:true,imageindex:more})}>
<Image
        style={{width:55, height:55,borderRadius:15}}
        source={{
          uri:url
        }}
      />
<Modal visible={visible}  transparent={true}>


                <ImageViewer renderHeader={()=>abc()} enableSwipeDown={true}onSwipeDown={()=>this.setState({visible:false})} enableImageZoom={true} index={imageindex} imageUrls={dbb.item.cities['İstanbul'][city].DATA}>
              
  
                </ImageViewer>
            </Modal>
      </TouchableOpacity>
    
     
      
  </View>
);
const renderItem = ({ item }) => (
  <Item url={item.url} more={item.more} />
);
const {city,color,color2,fontfam} = this.props.route.params

return(
     
       <View style={{backgroundColor:'#1e1e01',width:'100%',height:'100%'}}>
<ImageBackground source={{ uri:dbb.item.cities['İstanbul'][city].backgroundPhoto}} resizeMode="cover" style={styles.image}>
    
     <View style={{alignItems:'center'}}> 
     <View style={{backgroundColor:`${color2}55`,borderRadius:5}}>
       {
         lang=='tr'
         ?
         <Text style={{padding:5,color:color,fontWeight:'bold',fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
  {dbb.item.cities['İstanbul'][city].name}
     </Text>
     :
     <Text style={{padding:5,color:color,fontWeight:'bold',fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
  {dbb.item.cities['İstanbul'][city].name3}
     </Text>
       }
   
     </View>
     </View>
     {lang=='tr' 
     ?
     dbb.item.cities['İstanbul'][city].name2=='-'
     ? <View></View>
 
 :  <View style={{alignItems:'center'}}> 
     <View style={{backgroundColor:`${color2}55`,borderRadius:5}}>
  
   <Text style={{padding:5,color:color,fontWeight:'bold',fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
  {dbb.item.cities['İstanbul'][city].name2}
     </Text>
  
     </View>
     </View>
     :
     dbb.item.cities['İstanbul'][city].name4=='-'
     ? <View></View>
 
 :  <View style={{alignItems:'center'}}> 
     <View style={{backgroundColor:`${color2}55`,borderRadius:5}}>
  
   <Text style={{padding:5,color:color,fontWeight:'bold',fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
  {dbb.item.cities['İstanbul'][city].name4}
     </Text>
  
     </View>
     </View>
     
     }
  {//HAVA DURUMU
}

<TouchableOpacity 
onPress={()=>Linking.openURL("https://www.accuweather.com/tr/tr/fatih/3558350/weather-forecast/3558350")} 

style={{alignSelf:'center',borderBottomColor:color,borderBottomWidth:3,borderLeftColor:color,borderLeftWidth:2,backgroundColor:`#00000070`,borderRadius:5,alignItems:'center',justifyContent:'center',marginTop:55}}> 
<View  style={{alignSelf:'flex-start',padding:10}}>
<Text style={{fontFamily:fontfam,color:color,fontSize:35}}>{temp+'°'}</Text>

</View>


   </TouchableOpacity >
   <TouchableOpacity 
onPress={()=>Linking.openURL("https://www.accuweather.com/tr/tr/fatih/3558350/weather-forecast/3558350")} 

 style={{alignSelf:'center',borderBottomColor:color,borderBottomWidth:3,borderLeftColor:color,borderLeftWidth:2,backgroundColor:`#00000070`,borderRadius:5,alignItems:'center',justifyContent:'center'}}> 

<View  style={{alignSelf:'flex-end',padding:5}}>
<Text style={{fontSize:35,textTransform:'uppercase',fontFamily:fontfam,color:color,fontSize:20}}>{icon}</Text>
 
</View>

   </TouchableOpacity >

<TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="white"
  size={55}/>
</TouchableOpacity>

<View style={{alignItems: 'center',marginTop:35}}>


<FlatList
        data={dbb.item.cities['İstanbul'][city].DATA}
        renderItem={renderItem}
        horizontal={true}
      />

  </View>
  <ActionButton buttonColor={color2} active={true} size={65}>

<ActionButton.Item   size={75} buttonColor={color} onPress={()=>this.setModalVisible3(true)}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "compass-outline"}
color="black"
size={45}>
</Icon>
</ActionButton.Item>

<ActionButton.Item  size={75}buttonColor={color}  onPress={()=>Linking.openURL(dbb.item.cities['İstanbul'][city].morePhoto)}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "image-outline"}
color="black"
size={45}>
</Icon>
</ActionButton.Item>

<ActionButton.Item  size={75}buttonColor={color}  onPress={()=>{lang=='tr' ? this.props.navigation.navigate(`İstanbulInfo`,{city:city,color:color,color2:color2,fontfam:fontfam}):Linking.openURL("https://en.wikipedia.org/wiki/"+dbb.item.cities['İstanbul'][city].name)}}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "information"}
color="black"
size={45}>
</Icon>
</ActionButton.Item>

</ActionButton>

        
        {
        //GOOGLE MAPS DİRECTİON
        }
      
     



        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={{
               backgroundColor: color,
               borderRadius: 20,
               padding: 15,
               alignItems: "center",
               shadowColor: "blue",
               shadowOffset: {
                 width: 0,
                 height: 2}
            }}>
              <Text style={styles.modalText}>Yol tarifine gitmek istiyor musunuz?</Text>
              <Pressable
                style={[styles.button3, styles.buttonClose1]}
                onPress={() => this.setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle2}>Hayır</Text>
              </Pressable>
              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>{this._goToYosemite(),this.setModalVisible3(!modalVisible3)}}
              >
                <Text style={styles.textStyle2}>Evet</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    
        </ImageBackground>

        </View>
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
    
    
  },
  tinyLogo: {
    width: 10,
    height: 10,
  },
  //MODAL STYLES
  modalView: {
    
    backgroundColor: "#687e9b",
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
    marginTop: 22,
    marginBottom:25
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
})