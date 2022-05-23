import React,{Component}from 'react';
import {View, StyleSheet,TextInput, Text, TouchableOpacity,ScrollView, Image} from 'react-native';

;import Icon from 'react-native-vector-icons/Ionicons';



export default class forgot extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
     
    render(){ 
        
    
        const {fontfam,color,color2} = this.props.route.params
     
    
        return(
<ScrollView>
        <View  style={{backgroundColor: color,flex:1,justifyContent: 'center',alignItems: 'center'}}>
      
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('homepage')}
            >
        <Image
            source={require('../../../../assets/TripLogo2.png')}
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
   <Text style={{color:color2,fontSize:30,alignItems:'center',justifyContent:'center'}}>
Aşıklar Tepesi Sunset Point
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
         Göreme’de bulunan Sunset View Point, hem Nevşehir hem de Kapadokya’nın en güzel manzara noktalarından biri sayılır. Gün doğumu ya da gün batımı… Ne zaman isterseniz gelin. Her şekilde harika manzaraya tanıklık edeceksiniz. Geldiğiniz zaman, neden en popüler izleme noktalarından biri olduğunu daha iyi anlayacaksınız! Özellikle gün doğumunda, oldukça erken saatlerde geldiğinizde, balonların kalkışını yakalayacak ve olağanüstü manzaraya tanıklık edeceksiniz. İster balonlara katılıp havaya yükselenlerden olun, ister bu atmosferi fotoğraflamaya koyulun! Ancak tahmin edersiniz ki, bu atmosferi ve bu heyecanı fotoğraflamaktansa bizzat yaşamak daha keyifli olacaktır.
   </Text>          
    </View>
         
        </ScrollView>
        
        )
      
    }
    
}
