import React,{Component}from 'react';
import {View, StyleSheet,TextInput, Text, TouchableOpacity,ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import dbb from '../dbb.json'

import LinearGradient from 'react-native-linear-gradient';

export default class forgot extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
     
    render(){ 
        
        const {city,color,color2,fontfam} = this.props.route.params
        
     
    
        return(
           
<ScrollView >
<LinearGradient colors={[color, color2]}
            style={{
              
      
              flex:1,justifyContent: 'center',alignItems: 'center'
       }}>
      
        <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            >
        <Image
            source={require('../../../assets/TripLogo4.png')}
            resizeMode="center"
            style={  {
    
                resizeMode: 'contain',
                width: 50,
                height: 50,
                marginTop:5
             
            }}
          />
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',right:'85%',top:0}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="black"
  size={55}/>
</TouchableOpacity>
        <View style={{alignItems:'center'}}> 
   <Text style={{color:color2,fontFamily:fontfam,fontSize:35,alignItems:'center',justifyContent:'center'}}>
{dbb.item.cities['Aksaray'][city].name}
     </Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <Text style={{flexShrink:1,fontSize:20,padding:15,color:'black'}}>
         {dbb.item.cities['Aksaray'][city].info}    
   </Text>
     </View>
        
 </LinearGradient>
        </ScrollView>
       
        )
      
    }
    
}
