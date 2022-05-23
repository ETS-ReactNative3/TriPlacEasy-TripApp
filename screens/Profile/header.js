import React, { useEffect,useState } from 'react';
import {ActivityIndicator,View,Text, TextInput,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import auth from '@react-native-firebase/auth'
import Modal from 'react-native-modal'
 import { Formik } from 'formik';
 import * as Yup from 'yup'
 import database from '@react-native-firebase/database';

 import Icon from 'react-native-vector-icons/Ionicons';

 const color='#a7f6d3'
 const color2='#47856d'
 const fontfam='san-serif-light'
const Header =()=>{

    database()
    .ref('/data'+'/'+auth().currentUser.uid)
    .once('value')
    .then(snapshot => {
      const update = {
          displayName: snapshot.val().name
        
           };
           auth().currentUser.updateProfile(update);
    });
    const logout =()=>{
        auth().signOut().then((res)=>{
           
        })
        }
        const [currentUser,setCurrentUser]=useState({
           displayName:'',
           uid:'' 

        })
        // const currentUser= auth().currentUser;
        const [visible,setVisible]=useState(false)
        
useEffect(()=>{

   setCurrentUser(auth().currentUser)
},[])

        const save=(values,{resetForm,setSubmitting})=>{
            const reference=database()
            .ref('/data'+'/'+auth().currentUser.uid)
        .push()
        
        
            reference.set({
              name: values.name,
              url:values.url,
              uid:currentUser.uid
            })
            .then(() => {
        
                alert('Radyo Eklendi')
                resetForm({})
                setVisible(false)
        
            })
            .catch((e)=>{
                alert(e.message)
                setSubmitting(false)
            })
        }
return(


    <View style={style.header}>
<Text style={style.giris}>{currentUser.email==null? 'Misafir Kullanıcı' :currentUser.displayName}</Text>
    
    <View style={style.left}>
    
        <TouchableOpacity style={style.exitCont}onPress={logout}>
        <Icon  name={Platform.OS === "ios" ? "ios-add" : "exit-outline"}
  color={'red'}
  size={40}/>
        </TouchableOpacity>
    </View>

   
</View>
)
}
const style=StyleSheet.create({

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'black',
        alignItems:'center',
        padding:15
    },
    left:{
        flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'},
    name:{
        color:'white',
        fontFamily:'serif',
      fontWeight:'700',
        fontSize:25
    },
    exitCont:{
    marginLeft:40
    },
    exit:{
        color:'white',
        fontFamily:'sans-serif-light',
     
        fontSize:25
    },
    addCont:{
        marginLeft:5
        },
        add:{
            color:'white',
            fontFamily:'sans-serif-light',
            fontSize:25
        },
        input:{
            width:230,
            height:50, 
            borderRadius:15,
            backgroundColor:'#006466'
        },
        forminput:
        {
            alignItems:'center',
        justifyContent:'center',
        flex:1,
        borderRadius:25,
        width:'100%',
        backgroundColor:'#1b3a4b'
        },
        
        inputContainer:{
            alignItems:'center',
            justifyContent:'center',
            marginBottom:25
        },
        giris:{
            fontSize:30,
            marginTop:35,
            color:color,
            fontFamily:'serif',
            
        },
        kayitolbutton:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#dad7cd',
            borderRadius:5,
            width:85,
            marginTop:25,
            height:43
        },
        
        kayitolbutton2:{
        color:'#006466'
        ,fontSize:20,
        fontWeight:'700'}
        
})
export default Header