import React,{useEffect,useState,NativeModules} from 'react';
 import {View,Text,Modal,Image,Alert,Pressable,Linking,TextInput,TouchableOpacity,StyleSheet,FlatList,ScrollView} from 'react-native'
 import auth from '@react-native-firebase/auth'
 
 import { Formik } from 'formik';
 import * as Yup from 'yup'
 import { inject,observer } from 'mobx-react';
 import Header from '../Profile/header'
 import Icon from 'react-native-vector-icons/Ionicons';
import { values } from 'mobx';
import database from '@react-native-firebase/database';
import RNRestart from 'react-native-restart';
import LinearGradient from 'react-native-linear-gradient';
 const color='#a7f6d3'
    const color2='#47856d'
    const fontfam='san-serif-light'
const Profile=(props)=>{
    const [namee,setNamee]=useState('')
    const [langg,setLangg]=useState('tr')
    const [gName,setGName]=useState('')
    database()
    .ref('/data'+'/'+auth().currentUser.uid)
.on('value',snapshot => {
 setNamee(snapshot.val().name)
//  console.log(snapshot.val().lang)
  setLangg(snapshot.val().lang)
      
});

const currentUser= auth().currentUser;

// console.log(currentUser)
const [visible,setVisible]=useState(false)


const update = (values,{setSubmitting,resetForm})=>{
currentUser.updateProfile({
    displayName:values.name
}).then(()=>{
    setSubmitting(false)
})

if(values.password!='' && values.password!=null){
currentUser.updatePassword(values.password).then(()=>{
resetForm({
    password:''
})
    setSubmitting(false)
}).catch((error)=>{
if(error.code==='auth/weak-password'){
alert('Şifre 5 Haneden Daha Büyük Olmalı')
setSubmitting(false)

}
if(error.code==='auth/requires-recent-login'){
    alert('Şifre Güncellenirken Hata Yaşandı.Lütfen Tekrar Deneyiniz.(Çıkış Yapıp Tekrar Giriş Yapabilirsiniz')
    setSubmitting(false)
}


})
}
    
currentUser.updateEmail(values.email).then((res)=>{
    if(values.email===currentUser.email){
        // console.log('a')
    }else{
        alert('Mailiniz Güncellendi')

    }
    setSubmitting(false)
}).catch((error)=>{

    if (error.code === 'auth/email-already-in-use') {
        alert('Daha önce kullanılmamış bir email giriniz')
        setSubmitting(false)
        }
    //mail geçerli değilse
        if (error.code === 'auth/invalid-email') {
         alert('Geçersiz Mail')
         setSubmitting(false)
        }
        if(error.code==='auth/requires-recent-login'){
            alert('Email Güncellenirken Hata Yaşandı.Lütfen Tekrar Deneyiniz.(Çıkış Yapıp Tekrar Giriş Yapabilirsiniz')
            setSubmitting(false)
        }
    
    })

}
useEffect(()=>{
  database()
  .ref('/Users'+'/'+auth().currentUser.uid)
.on('value',snapshot => {
setGName(snapshot.val().UserAd)
})

},[])
const [modalVisible3,setVisible3]=useState(false)


const setModalVisible3 = (visible) => {
  setVisible(visible)
  }
//   console.log(currentUser.displayName)
  const logout =()=>{
    auth().signOut().then((res)=>{
       
    })
    }
    const [color,setColor]=useState('#a7f6d3')
    const [color2,setColor2]=useState('#47856d')
    const [lang,setLand]=useState('tr')
  
    database()
    .ref('data'+'/'+currentUser.uid)
    .update({
    
      color:color,
      color2:color2,
 color3:'white',
      lang:lang
    
    })
    // .then(() => console.log(currentUser.displayName,color,color2));
    return(
      <LinearGradient colors={[color2, color]}
      style={{
        
        flex:1
 }}>
<ScrollView style={{
        
        flex:1
 }}>
      

    <View style={{flexDirection:'row',marginTop:15,marginLeft:15,width:'50%'}}>
    <TouchableOpacity onPress={()=>{setLand('tr')}}
  style={{width:70,height:40}}>
 <Image
            source={{uri:'https://media.istockphoto.com/photos/closeup-of-the-republic-of-turkeys-flag-picture-id515724185?b=1&k=20&m=515724185&s=170667a&w=0&h=WTXjq8CLOP_Wi_cgdtRwvM1269AN1djI545M8Q6keRk='}}
            resizeMode="center"
            style={{width:70,height:40}}
          />
    </TouchableOpacity>
<TouchableOpacity onPress={()=>{setLand('en')}}
  style={{width:70,height:40}}>
 <Image
            source={{uri:'https://media.istockphoto.com/vectors/united-kingdom-flag-realistic-waving-union-jack-vector-id1251660737?k=20&m=1251660737&s=612x612&w=0&h=Hd3fVDhA3KUaefIawI9jcyTFL7M_YZwO6wBxTu8bVxE='}}
            resizeMode="center"
            style={{width:60,height:40}}
          />
    </TouchableOpacity>
 
</View>
    <View style={{height:100}}>
    
    <View style={{ position:'absolute',right:25,top:-15}}>
    
        <TouchableOpacity style={style.exitCont}onPress={logout}>
        <Icon  name={Platform.OS === "ios" ? "ios-add" : "exit"}
  color={'#FF4733'}
  size={55}/>
        </TouchableOpacity>
    </View>

   
</View>


<Image
            source={require('../../assets/TripLogo2.png')}
            
            style={  {
    
                marginTop:-50,
                width: 100,
                height: 100,
                margin:15,
                alignSelf:'center',justifyContent:'center'
             
            }}
          />
   <View style={style.itemTopCont}>
     
  { currentUser.email==null 
      ? 
      
      <View><Text style={{
        fontSize:40,
     
       marginBottom:30,
        color:color2,
    
       
    }}> {langg=='tr'?'Misafir Kullanıcı' :'Guest User'}</Text>
     <Text style={{
        fontSize:25,
     
       alignSelf:'center',
        color:color2,
    
       
    }}>{gName}</Text>
   
    <TouchableOpacity
style={
{  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  backgroundColor:color2,
  borderRadius:5,
  width:95,
 marginTop:45,
  height:53,
  borderWidth:1,
  borderColor:'white'}
}
 onPress={currentUser.email==null ? logout : handleSubmit}
>
    <Text style={{
          color:'#F4EFC0'
          ,fontSize:22,
          fontWeight:'700',
          fontFamily:'sans-serif-condensed',
         
    }}>{langg=='tr'? currentUser.email==null? 'Çıkış Yap' :'Güncelle' :currentUser.email==null? 'Exit' :'Update'}</Text>
</TouchableOpacity>

    </View>
    :  
  <Formik initialValues={{
      email:currentUser.email,
      password:currentUser.password,
      
      
  }}
  
  onSubmit={update}
  
  validationSchema={
      Yup.object().shape({
     email:Yup.string().email('Geçersiz Mail').required('Mailinizi Giriniz'),
    
    })
  }
  >
      
{({values,handleSubmit,errors,handleChange,isValid,isSubmitting})=>(

    <View style={
        {
        alignItems:'center',
    justifyContent:'center',
    
    flex:1,
    borderRadius:25,
    width:'100%',}}>
        
        <Text style={{
    fontSize:40,
   marginTop:-50,
   marginBottom:30,
    color:color2,

   
}}>{currentUser.email==null? 'Misafir Kullanıcı' :currentUser.displayName}</Text>

        <Icon  name={Platform.OS === "ios" ? "ios-add" : "mail"}
  color={color2}
  size={30}
 />
        <View style={style.inputContainer}>
    
<TextInput 
editable={currentUser.email==null? false :true}
value={values.email}
autoCapitalize='none'
placeholder={currentUser.email==null?'-':'Email Adresiniz'}
placeholderTextColor={color2}
onChangeText={handleChange('email')}
style={{
    width:230,
    height:50, 
    borderRadius:10,
    backgroundColor:color,
    color:color2,
    fontSize:15,
    fontWeight:'700',
    borderWidth:1,
    borderColor:'white'
}}
/>
    

{(errors.email)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.email}</Text>}
        </View>
        <Icon  name={Platform.OS === "ios" ? "ios-add" : "key"}
  color={color2}
  size={30}

  />
        <View style={style.inputContainer}>
    
<TextInput
editable={currentUser.email==null? false :true}
value={values.password}
autoCapitalize='none'
placeholder={lang=='tr'?currentUser.email==null?'-':'Şifre Değiştir':currentUser.email==null?'-':'Change Password'}
placeholderTextColor={color2}
onChangeText={handleChange('password')}
style={{
    width:230,
    height:50, 
    borderRadius:10,
    // backgroundColor:'#F4EFC0',
    backgroundColor:color,
    color:color2,
    fontSize:15,
    fontWeight:'700',
borderWidth:1,
borderColor:'white'
}}
>

</TextInput>
{(errors.password)&&<Text style={{fontFamily:'sans-serif-condensed',color:'red',fontSize:18}}>{errors.password}</Text>}

        </View>
        
     
<TouchableOpacity
style={{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:color2,
  borderRadius:5,
  width:95,
  marginTop:25,
  height:53,
  borderWidth:2,
  borderColor:'black'
}}
 onPress={currentUser.email==null ? logout : handleSubmit}
>
    <Text style={{
          color:'#F4EFC0'
          ,fontSize:22,
          fontWeight:'700',
          fontFamily:'sans-serif-condensed',
         
    }}>{lang=='tr'?currentUser.email==null? 'Çıkış Yap' :'Güncelle':currentUser.email==null? 'Exit' :'Update'}</Text>
</TouchableOpacity>
       

    </View>
)}

  </Formik>}


   </View>
   
   <View style={{flexDirection:'row',alignSelf:'center',marginTop:25}}>
    <TouchableOpacity onPress={()=>{setColor('#a7f6d3'),setColor2('#47856d')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#a7f6d3',borderRadius:30,borderWidth:1,borderColor:'white'}}>


    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setColor('#ee4758'),setColor2('#780019')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#ee4758',borderRadius:30,borderWidth:1,borderColor:'white'}}>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setColor('#a2ff6d'),setColor2('#508235')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#a2ff6d',borderRadius:30,borderWidth:1,borderColor:'white'}}>

    </TouchableOpacity>
    {/* <TouchableOpacity onPress={()=>{setColor('#9c80ef'),setColor2('#534198')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#9c80ef',borderRadius:30,borderWidth:1,borderColor:'white'}}>

    </TouchableOpacity> */}
    {/* <TouchableOpacity onPress={()=>{setColor('#1976d2'),setColor2('#004ba0')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#1976d2',borderRadius:30,borderWidth:1,borderColor:'white'}}>

    </TouchableOpacity> */}
  <TouchableOpacity onPress={()=>{setColor('#e1bcff'),setColor2('#765c84')}}
    style={{margin:5,width:50,height:50,backgroundColor:'#e1bcff',borderRadius:30,borderWidth:1,borderColor:'white'}}>

    </TouchableOpacity>


  
    
    

    </View>
    <TouchableOpacity style={{alignSelf:'center',marginTop:5}} onPress={() =>  setModalVisible3(setVisible3(true))}>
           
           <Icon  name={Platform.OS === "ios" ? "ios-add" : "man-outline"}
   color={color2}
   size={75}/>
  </TouchableOpacity>
    <Modal
          animationType="slide"
         
          transparent={false}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal Kapatıldı");
            setModalVisible3(setVisible3(false))
          }}
        >
          <LinearGradient colors={['black', '#192f6a']} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        
            backgroundColor:'#161a1d',
          }}>
            <View style={{alignItems:'center',marginBottom:75}}>
            <Text style={{fontWeight:'700',fontSize:20,color:'white'}}>{langg=='tr'?'Geliştirici':'Developer'}</Text>
            

            </View>
           
          <TouchableOpacity onPress={()=>setModalVisible3(setVisible3(false))} style={{zIndex:999,position:'absolute',right:25,top:25,width:35,height:35,backgroundColor:'tomato',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
<Text style={{position:'absolute',zIndex:0,fontSize:20,fontWeight:'700',color:'white'}}>X</Text>

     </TouchableOpacity>
     
     
     
     
     <Text style={{fontWeight:'700',fontSize:20,color:'white',marginBottom:5}}>Veli Müçteba Bayındır</Text>
     <Image
            source={require('../../assets/in8.png')}
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
        </ScrollView>
</LinearGradient>
    )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'#47856d',
        flex:1
        
    },
    kayitolbutton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:color2,
        borderRadius:5,
        width:95,
        marginTop:25,
        height:53,
        borderWidth:2,
        borderColor:'black'
    },
    
    kayitolbutton2:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:color2,
        borderRadius:5,
        width:95,
       marginTop:45,
        height:53,
        borderWidth:1,
        borderColor:'white'
  },
  
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


    itemTopCont:{
paddingHorizontal:10,
alignItems:'center',
justifyContent:'center',
flex:1,

    },
    
itemContainer:{
flex:1,
borderWidth:1,
borderColor:'white',
marginBottom:15,
marginHorizontal:10,
paddingVertical:15,
justifyContent:'center',
alignItems:'center',
minHeight:100,
borderRadius:15,
backgroundColor:'#006466'
},
item:{
    color:'white',
    fontSize:20
    ,fontFamily:'sans-serif-light'
},
//MODAL

input:{
    width:230,
    height:50, 
    borderRadius:5,
    backgroundColor:'black',
    color:color2,
    fontSize:15,
  
},
forminput:
{
    alignItems:'center',
justifyContent:'center',
flex:1,
borderRadius:25,
width:'100%',


},

inputContainer:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:25,
    flexDirection:'row',
  
},



})
export default Profile