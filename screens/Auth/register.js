import React, { useState } from 'react';
 import {View,Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native'
 import { Formik } from 'formik';
 import * as Yup from 'yup'
 import auth from '@react-native-firebase/auth'
import { PropTypes } from 'mobx-react';
import { values } from 'mobx';
import database from '@react-native-firebase/database';
const color='#a7f6d3'
    const color2='#47856d'
    const fontfam='san-serif-medium'
    

const Register=(props)=>{
   
    
const [name,setName]=useState('')
const[mail,setMail]=useState('')
const [pass,setPass]=useState('')
const infos=()=>{
    database()
    .ref('/Users'+'/'+auth().currentUser.uid)
    .update({
      
      UserAd:isim,
      UserMail:mail,
      UserPass:sifre,
    
      
    })
  }


  auth().createProfileChan
    const register =(values,{setSubmitting,resetForm})=>{
        setName(values.name)
        setMail(values.mail)
        setPass(values.password)
// setSubmitting(false)
// resetForm({});

try{
 auth().createUserWithEmailAndPassword(values.email,values.password)
 //mail verification

 .then((userCredential)=>{
   
  userCredential.user.sendEmailVerification();
  auth().signOut();
  alert("Doğrulama Maili Gönderildi");
})
 .then(() => {
  resetForm({})
    //Kullanıcı kayıt olduysa
    infos()
   props.navigation.navigate('homepage')
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
    

    console.error(error);
  });
  

}

catch(e)
{
    alert(e.message)
}

    }
    
    
    database()
  .ref('data')
  .update({
    name: name,
   color:'#a7f6d3',
   color2:'#47856d'
  
  })
  .then(() => console.log(name));

console.log(values.name)
 
 


    return(
<View style={style.container}>
   
  
  <Formik initialValues={{
      email:'',
      password:'',
      name:'',
     
  }}
 
  onSubmit={register}
  
  validationSchema={
      Yup.object().shape({
     email:Yup.string().email('Geçersiz Mail').required('Mailinizi Giriniz'),
     password:Yup.string().required('Şifrenizi Giriniz'),
    name:Yup.string().required('Kullanıcı Adı Giriniz'),
    
    })
  }
  
  >
     
{({values,handleSubmit,errors,handleChange,isValid,isSubmitting})=>(

    <View style={style.forminput}>
        <Text style={style.giris}>KAYIT OL</Text>
   <View style={style.inputContainer}>
<TextInput 
value={values.name}
autoCapitalize='none'
placeholder='Kullanıcı Adı'
placeholderTextColor={'black'}
onChangeText={handleChange('name')}
style={style.input}
/>
{(errors.name)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.name}</Text>}
        </View>

    
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
    <Text style={style.kayitolbutton2}>Kayıt Ol</Text>
</TouchableOpacity>
       

    </View>
)}

  </Formik>

  <Text style={{color:'white'}}>Hesabınız Varsa</Text>
<TouchableOpacity 

onPress={()=>props.navigation.navigate('Giriş Ekranı')}>
 <Text style={{marginLeft:3,color:'white',fontWeight:'700',fontSize:15}}>Giriş Yap</Text>
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
kayitolbutton2:{
    color:color2
    ,fontSize:22,
    fontWeight:'700',
    fontFamily:'sans-serif-condensed'},
kayitolbutton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#161a1d',
    borderRadius:5,
    width:95,
    marginTop:25,
    height:53
},
giris:{
    fontSize:30,
    marginBottom:50,
    color:color2,
    fontFamily:'serif',
    
},
})
export default Register 