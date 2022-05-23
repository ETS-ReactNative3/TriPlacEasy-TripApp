import React, { useState } from 'react';
 import {View,Dimensions,Text,Image, TextInput,StyleSheet, TouchableOpacity, Alert} from 'react-native'
 import { Formik } from 'formik';
 import * as Yup from 'yup'
 import auth from '@react-native-firebase/auth'
import { PropTypes } from 'mobx-react';
const color='#a7f6d3'
    const color2='#47856d'
    const fontfam='san-serif-medium'
const Loginn=(props)=>{
   
     
    

    const login =(values,{setSubmitting,resetForm})=>{
        // console.log(values)
// setSubmitting(false)
// resetForm({});

try{
 auth().signInWithEmailAndPassword(values.email,values.password).then(() => {
  resetForm({})
    //Kullanıcı kayıt olduysa
    props.navigation.navigate('Profile') 
  
  })
  .catch(error => {
      //Mail adresi kullanıldıysa
    if (error.code === 'auth/email-already-in-use') {
    alert('Daha önce kullanılmamış bir email giriniz')
    setSubmitting(false)
    }
//mail geçerli değilse
    if (error.code === 'auth/invalid-email') {
     alert('Geçersiz Mail')
     setSubmitting(false)
    }
    if(error.code==='auth/weak-password'){
        alert('Şifre 6 karakterden daha uzun olmalı')
    }
    if(error.code==='auth/wrong-password'){
        alert('Hatalı Şifre')
    }
if(error.code==='auth/user-not-found'){
alert('Hatalı Mail')
setSubmitting(false)
}
    console.error(error);
  });

}
catch(e)
{
    alert(e.message)
}
    }
    
  

    const windowWidth = Dimensions.get('window').width;
    return(
<View style={style.container}>


    <Image source={require('../../assets/TripLogo4.png')}
            resizeMode="center"
            style={{resizeMode: 'contain',width:100}}
          />
<Text style={style.giris}>GİRİŞ YAP</Text>


  <Formik initialValues={{
      email:'',
      password:''
  }}
  
  onSubmit={login}
  
  validationSchema={
      Yup.object().shape({
     email:Yup.string().email('Geçersiz Mail').required('Mailinizi Giriniz'),
     password:Yup.string().required('Şifrenizi Giriniz')
        })
  }
  >
   
{({values,handleSubmit,errors,handleChange,isValid,isSubmitting})=>(

    <View style={style.forminput}>
      
        <View style={style.inputContainer}>
<TextInput 
value={values.email}
autoCapitalize='none'
placeholder='Email '
placeholderTextColor={'black'}
onChangeText={handleChange('email')}
style={style.input}
/>
{(errors.email)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.email}</Text>}
        </View>

        <View style={style.inputContainer}>
<TextInput
secureTextEntry={true}
value={values.password}
autoCapitalize='none'
placeholder='Şifre'
placeholderTextColor={'black'}
onChangeText={handleChange('password')}
style={style.input}
keyboardType='number-pad'
/>
{(errors.password)&&<Text style={{fontFamily:'sans-serif-condensed',color:'red',fontSize:18}}>{errors.password}</Text>}
        </View>
        
     
<TouchableOpacity
style={style.kayitolbutton}
 onPress={handleSubmit}

>
    <Text style={style.kayitolbutton2}>Giriş</Text>
</TouchableOpacity>
{/* <TouchableOpacity
style={style.kayitolbutton}
 onPress={()=>props.navigation.navigate('Kayıt Ekranı')}

>
    <Text style={style.kayitolbutton2}>Kayıt Ol</Text>
</TouchableOpacity> */}

    </View>
)}

  </Formik>



<Text style={{color:'white'}}>Hesabınız Yoksa</Text>
<TouchableOpacity 

onPress={()=>props.navigation.navigate('Kayıt Ekranı')}>
 <Text style={{marginLeft:3,color:'white',fontWeight:'700',fontSize:15}}>Kayıt Ol</Text>
</TouchableOpacity>

</View>


    )
}
const style=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
},
input:{
    width:270,
    height:50, 
    borderRadius:5,
    backgroundColor:color,
    fontFamily:'sans-serif-medium',
    fontSize:15
},
forminput:
{alignItems:'center',
justifyContent:'center',
flex:1,
width:'100%',
backgroundColor:'black'
},

inputContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25
},
kayitolbutton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#161a1d',
    borderRadius:5,
    width:95,
    marginTop:25,
    height:53
},

kayitolbutton2:{
color:color2
,fontSize:22,
fontWeight:'700',
fontFamily:'sans-serif-condensed'},
giris:{
    fontSize:30,
    marginTop:35,
    color:color2,
    fontFamily:'serif',
    
},
})
export default Loginn