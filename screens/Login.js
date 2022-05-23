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
  Animated,
  Modal,
  Pressable,
  Linking
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Touchable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

import {API_URL} from '../config/system';
import axios from 'axios';
import getDirections from 'react-native-google-maps-directions'
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
      fadeAnim2: new Animated.Value(0),
      fadeAnim3: new Animated.Value(0),
      modalVisible3:false,  
      modalVisible4:false,
      modalVisible5:false,     
      modalVisible6:false,
      modalVisible7:false,
      modalVisible8:false,     
      modalVisible9:false,   
    }
  }
componentDidMount(){
  setTimeout(() => {
   this.setState({modalVisible3:true})
    }, 1750);

  this.fadeIn()
   this.fadeIn2()
   this.fadeIn3()
}
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 1 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      
    }).start();
  };
  fadeIn2 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim2, {
      toValue: 1,
      duration: 1000
    }).start();
  };
  fadeIn3 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim3, {
      toValue: 1,
      duration: 3000
    }).start();
  };


  setModalVisible3 = (visible) => {
    this.setState({ modalVisible3: visible });
  }
  setModalVisible4 = (visible) => {
    this.setState({ modalVisible4: visible });
  }
  
  setModalVisible5 = (visible) => {
    this.setState({ modalVisible5: visible });
  }
  setModalVisible6 = (visible) => {
    this.setState({ modalVisible6: visible });
  }
  setModalVisible7 = (visible) => {
    this.setState({ modalVisible7: visible });
  }
  
  setModalVisible8 = (visible) => {
    this.setState({ modalVisible8: visible });
  }
  setModalVisible9 = (visible) => {
    this.setState({ modalVisible9: visible });
  }
  render() {
    const {fadeAnim,fadeAnim2,fadeAnim3,modalVisible3,modalVisible4,modalVisible5,modalVisible6,modalVisible7,modalVisible8,modalVisible9} = this.state;
  
    const color='#a7f6d3'
    const color2='#47856d'
    const fontfam='san-serif-light'

    const anon =()=>{

      auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
    
        console.error(error);
      });
    }

    return (
      <AnimatedBackgroundColorView  color={color} duration={8000} 
        initialColor={color2}style={{ flex:1,alignItems: 'center',backgroundColor:color,width:'100%',height:'100%',justifyContent: 'center'}} > 
      
      
    
     <Animated.View
        style={[
          
          {
            flex:2,
          alignItems:'center',
         
        
          width: '75%',
          height: 165,
          
      
            // Bind opacity to animated value
            opacity: fadeAnim3
          }
        ]}
      >
       <Image
            source={require('../assets/TripLogo4.png')}
            resizeMode="center"
            style={styles.image2}
          />
          </Animated.View>
         

       
         

          <View style={{flex:2}}>
          
          <TouchableOpacity style={{marginBottom:0}} onPress={() => this.setState({modalVisible3:true})}>
           
          <Icon  name={Platform.OS === "ios" ? "ios-add" : "caret-forward-outline"}
  color={color2}
  size={105}/>
 </TouchableOpacity>
 
        </View>
        
        <View style={{flex:2}} >
          
          <TouchableOpacity style={{}} onPress={() =>  this.setState({modalVisible4:true})}>
           
          <Icon  name={Platform.OS === "ios" ? "ios-add" : "information-circle-outline"}
  color={color2}
  size={105}/>
 </TouchableOpacity>
 
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <TouchableOpacity onPress={()=>this.setState({modalVisible3:false})} style={{zIndex:999,position:'absolute',right:15,top:0,width:35,height:35,backgroundColor:'black',borderRadius:70,alignItems:'center',justifyContent:'center'}}>
<Text style={{position:'absolute',zIndex:0,fontSize:20,fontWeight:'700',color:'white'}}>X</Text>


     </TouchableOpacity>
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              width:350,
              height:400,
              backgroundColor:'black',
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
            
              
              <Pressable
                style={[styles.button3]}
                onPress={() => {this.props.navigation.navigate('Giriş Ekranı'),this.setModalVisible3(!modalVisible3)}}
              > 
              <Icon  name={Platform.OS === "ios" ? "ios-add" : "log-in-outline"}
              color={color2}
              size={45}/>
               <Text style={styles.textStyle2}>Giriş Yap</Text>
              </Pressable>
              
              
              <Text style={{
                  marginTop:5,
                  fontSize:15,
                  textAlign: "center",
                  color:'white',fontFamily:'san-serif-medium'
              }}>Hesabınız Yoksa Kayıt Olabilirsiniz</Text>
               <Text style={{
                  marginTop:5,
                  fontSize:15,
                  textAlign: "center",
                  color:'white',fontFamily:'san-serif-medium'
              }}> Veya </Text>
               <Text style={{
                  marginTop:5,
                  fontSize:15,
                  textAlign: "center",
                  color:'white',fontFamily:'san-serif-medium'
              }}> Misafir Olarak Giriş Yapabilirsiniz</Text>
               
             
              <View style={{flexDirection:'row'}}> 

              <Pressable
                style={[styles.button3]}
                onPress={() =>{this.props.navigation.navigate('Kayıt Ekranı',{color:'#a7f6d3',color2:'#47856d',fontfam:'serif'}),this.setModalVisible3(!modalVisible3)}}
              >
                 <Icon  name={Platform.OS === "ios" ? "ios-add" : "person-outline"}
              color={color2}
              size={45}/>
                <Text style={styles.textStyle2}>Kayıt Ol</Text>
              </Pressable>
             
                  <Pressable
                style={[styles.button3]}
                onPress={() => {anon(),this.setModalVisible3(!modalVisible3)}}
              > 
              <Icon  name={Platform.OS === "ios" ? "ios-add" : "caret-forward-outline"}
              color={color2}
              size={45}/>
               <Text style={styles.textStyle2}>Misafir Girişi</Text>
              </Pressable>
              </View>
              
            </View>
          </View>
        </Modal>
    {/* 1 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible4}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible4);
          }}
         
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          
            backgroundColor:'#161a1d',
            width:'100%',
           
          }}>
            <Text style={styles.modalInfo}>Haritadam Konumuna En Yakın Yerleri Görebilirsin</Text>
          


     <TouchableOpacity onPress={()=>{this.setState({modalVisible4:false}),this.setState({modalVisible5:true})}}
       style={{position:'absolute',zIndex:999,right:-10,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-outline"}
              color={'red'}
              size={75}
             
              />
     </TouchableOpacity>
          <Image
            source={require('../assets/in1.png')}
            resizeMode="center"
            style={{width:'100%',height:480}}
          />
          </View>
        </Modal>

{/* 2 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible5}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible5);
          }}
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           
            backgroundColor:'#161a1d'
          }}>
                        <Text style={styles.modalInfo}>Haritadam Konumuna En Yakın Yerleri Görebilirsin</Text>

          


<TouchableOpacity onPress={()=>{this.setState({modalVisible5:false}),this.setState({modalVisible6:true})}}
       style={{position:'absolute',zIndex:999,right:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-outline"}
              color={'red'}
              size={75}
             
              />
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{this.setState({modalVisible5:false}),this.setState({modalVisible4:true})}}
       style={{position:'absolute',zIndex:999,left:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-back-outline"}
              color={'red'}
              size={75}
             
              />
  
     

     </TouchableOpacity>
          <Image
            source={require('../assets/in4.png')}
            resizeMode="center"
            style={{width:'100%',height:480}}
          />
          </View>
        </Modal>
        {/* 3 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible6}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible6);
          }}
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           
            backgroundColor:'#161a1d'
          }}>
<Text style={styles.modalInfo}>Listeden İstediğin Şehrirdeki Yerleri Liste Halinde Görebilirsin</Text>

          


<TouchableOpacity onPress={()=>{this.setState({modalVisible6:false}),this.setState({modalVisible7:true})}}
       style={{position:'absolute',zIndex:999,right:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-outline"}
              color={'red'}
              size={75}
             
              />
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{this.setState({modalVisible6:false}),this.setState({modalVisible5:true})}}
       style={{position:'absolute',zIndex:999,left:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-back-outline"}
              color={'red'}
              size={75}
             
              />
  
     

     </TouchableOpacity>
          <Image
            source={require('../assets/in2.png')}
            resizeMode="center"
            style={{width:'100%',height:500}}
          />
          </View>
        </Modal>
        {/* 4 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible7}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible7);
          }}
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           
            backgroundColor:'#161a1d'
          }}>
            <Text style={styles.modalInfo}>Listeden İstediğin Şehrirdeki Yerleri Liste Halinde Görebilirsin</Text>

          


<TouchableOpacity onPress={()=>{this.setState({modalVisible7:false}),this.setState({modalVisible8:true})}}
       style={{position:'absolute',zIndex:999,right:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-outline"}
              color={'red'}
              size={75}
             
              />
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{this.setState({modalVisible7:false}),this.setState({modalVisible6:true})}}
       style={{position:'absolute',zIndex:999,left:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-back-outline"}
              color={'red'}
              size={75}
             
              />
  
     

     </TouchableOpacity>
          <Image
            source={require('../assets/in6.png')}
            resizeMode="center"
            style={{width:'100%',height:480}}
          />
          </View>
        </Modal>
        {/* 5 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible8}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible8);
          }}
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        
            backgroundColor:'#161a1d',
          }}>
            <Text style={styles.modalInfo}>Harita veya Listeden Seçtiğiniz Yer Hakkında Bilgi Edinebilir, Fotoğrafları Görebilir ve Eğer İsterseniz Google Map Üzerinden Rota Çizilmiş Olarak Yolculuk Yapabilirsiniz.</Text>

          



     <TouchableOpacity onPress={()=>{this.setState({modalVisible8:false}),this.setState({modalVisible7:true})}}
       style={{position:'absolute',zIndex:999,left:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-back-outline"}
              color={'red'}
              size={75}
             
              />
 </TouchableOpacity>

     <TouchableOpacity onPress={()=>{this.setState({modalVisible8:false}),this.setState({modalVisible9:true})}}
       style={{position:'absolute',zIndex:999,right:0,top:'50%'}}> 
     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-forward-outline"}
              color={'red'}
              size={75}
             
              />
     </TouchableOpacity>
          <Image
            source={require('../assets/in5.png')}
            resizeMode="center"
            style={{width:'100%',height:480}}
          />
          </View>
        </Modal>
        {/* 6 */}
        <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible9}
          onRequestClose={() => {
           
            this.setModalVisible3(!modalVisible9);
          }}
        >
           <LinearGradient colors={['black', '#192f6a']} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        
            backgroundColor:'#161a1d',
          }}>
            <View style={{alignItems:'center',marginBottom:75}}>
            <Text style={{fontWeight:'700',fontSize:20,color:'white'}}>İyi Yolculuklar </Text>
            <Text style={{fontWeight:'700',fontSize:20,color:'white'}}>:) </Text>

            </View>
           
          

     
     <TouchableOpacity onPress={()=>{this.setState({modalVisible9:false}),this.setState({modalVisible8:true})}}
       style={{position:'absolute',zIndex:999,left:0,top:'50%'}}> 

     <Icon  name={Platform.OS === "ios" ? "ios-add" : "chevron-back-outline"}
              color={'red'}
              size={75}
             
              />
  
     

     </TouchableOpacity>
     
     <TouchableOpacity onPress={()=>this.setState({modalVisible9:false})} style={{zIndex:999,position:'absolute',right:15,top:10,width:35,height:35,backgroundColor:'red',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
<Text style={{position:'absolute',zIndex:0,fontSize:20,fontWeight:'700',color:'white'}}>X</Text>
</TouchableOpacity>
     <Text style={{fontWeight:'700',fontSize:20,color:'white',marginBottom:5}}>Veli Müçteba Bayındır</Text>
     <Image
            source={require('../assets/in8.png')}
            resizeMode="center"
            style={{width:'100%',height:300}}
          />
    
     <View style={{flexDirection:'row',marginTop:15}}>
     <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/the_byndr/')}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "logo-instagram"}
                       color={'white'}
                       size={55}
                       style={{marginRight:10}}
                      
                       />
</TouchableOpacity>
<TouchableOpacity onPress={()=>Linking.openURL('https://www.linkedin.com/in/veli-mucteba-bayindir/')}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "logo-linkedin"}
                       color={'white'}
                       size={55}
                      style={{marginLeft:10}}
                       />
</TouchableOpacity>

             
       </View>
       </LinearGradient>
        </Modal>
        </AnimatedBackgroundColorView >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
  
    resizeMode: 'contain',
  
  },
  modalInfo:{
    color:'white',
    fontWeight:'700',alignSelf:'center'
  },
  image: {
    flex: 1,
    alignItems: 'center',
    
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
    marginTop: 25,
    marginBottom: 5,
    color: 'white',
  },

  
  icon: {position: 'absolute', right: 30, top: 25},

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
    marginTop: 22,
    marginBottom:25
  },
  button3: {
    borderRadius: 20,
margin:25,
    
    width:100,
  alignItems:'center'
  },
  
  buttonOpen: {
    backgroundColor: "#008ba3",
  },
  buttonClose2: {
    backgroundColor: "black",
  },
  buttonClose1: {
    backgroundColor: "red",
  },
  textStyle2: {
    color: "#a7f6d3",
   fontWeight:'700',
    textAlign: "center",
    fontSize:20,
    fontFamily:'san-serif-light'
  },
});

