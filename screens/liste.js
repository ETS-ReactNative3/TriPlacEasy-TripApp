import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  Modal,
  Pressable
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Touchable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-circular-action-menu';
import {API_URL} from '../config/system';
import axios from 'axios';
import getDirections from 'react-native-google-maps-directions'
import { withRadialActionMenu } from 'react-native-radial-context-menu'
import SelectDropdown from 'react-native-select-dropdown'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
  sitem:'',
  modalVisible3:false,
  color:'',
  color2:'',fontfam:'sans-serif-light',lang:''
    };
  }


componentDidMount(){
  
  database()
  .ref('/data'+'/'+auth().currentUser.uid)
  
  .on('value',snapshot => {
    this.setState({color:snapshot.val().color})
    this.setState({color2:snapshot.val().color2})
    this.setState({lang:snapshot.val().lang})

        
  });
   
}

setModalVisible3 = (visible) => {
  this.setState({ modalVisible3: visible });
}

  render() {
    const {modalVisible3}=this.state

    const {sitem,color,color2,fontfam,lang}=this.state
    const countries = ["Aksaray","Amasya","İstanbul","Nevşehir","Trabzon"]
 
    return (
      <View style={{flex:1,backgroundColor:'#80cbc4', alignItems:'center',width:'100%',height:'100%',justifyContent: 'center'}}>
   
  
   <ImageBackground   blurRadius={3} source={{uri:'https://c1.wallpaperflare.com/preview/1015/975/787/turkey-eastern-black-sea-rize-ayder.jpg'}} resizeMode="cover" style={styles.image}>
        <View style={{flex:1,alignItems:'center',justifyContent:'flex-start',borderRadius:5,padding:3}}>
          <Text style={{fontFamily:fontfam,fontSize:35,color:color2,fontWeight:'700'}}>
           {lang=='tr'?'Lütfen İl Seçiniz':'Please Select a Cİty'}
          </Text>   
          </View>
<View style={{flex:1}}>


        <SelectDropdown
	data={countries}
  defaultButtonText={lang=='tr'?"İLLER":'CITIES'}
  rowStyle={{backgroundColor:color,height:75}}
  rowTextStyle={{fontFamily:fontfam,color:color2,fontWeight:'600',fontSize:25}}
  buttonStyle={{height:100,width:250,backgroundColor:color2,marginBottom:75,marginTop:15,borderRadius:25,opacity:0.8}}
  buttonTextStyle={{fontFamily:fontfam,fontWeight:'700',color:'white',fontSize: 30}}
  
  dropdownStyle={{borderRadius:25,height:250}}
  //Ekran Boyutuna göre ayar
  //dropdownStyle={{borderRadius:25,height:windowHeight*3/5}}
	onSelect={(selectedItem, index) => {
    this.setState({ sitem:selectedItem});
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
   
		
    
    console.log(selectedItem)
   return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

</View>
  <TouchableOpacity style={{padding:10,flex:1}} onPress={()=> 
    this.state.sitem==''
    ?    this.setModalVisible3(true)
    :this.props.navigation.navigate(`liste${sitem.slice(0,3)}`,{color:color,color2:color2,fontfam:fontfam}
    )}>
      
          <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-circle-outline"}
  color={color}
  size={125}/>
  </TouchableOpacity>

        </ImageBackground>

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
              <Text style={styles.modalText}>{lang=='tr'?'Lütfen Şehir Seçiniz':'Please Select a City'}</Text>
              
            

              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>{this.setModalVisible3(!modalVisible3)}}
              >
                <Text style={styles.textStyle2}>{lang=='tr'?'Tamam':'Ok'}</Text>
              </Pressable>

            </View>
          </View>
        </Modal> 
  

        </View>
    );
  }
}
const styles = StyleSheet.create({
 
  
  image1: {
   
    
    
    flex: 1,
    width:'100%'
    
  },
   
  image2: {
    
   
   
    flex:1,
    width:'100%'
    
  },
  image: {
    flex: 1,
    alignItems: 'center'
    ,width:'100%',
    height:'100%',
    justifyContent:'center'
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
    color:'black',fontWeight:'bold'
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
});
