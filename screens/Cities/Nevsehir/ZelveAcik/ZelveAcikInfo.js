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
   <Text style={{color:color2,fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
Zelve Açık Hava Müze
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
         Avanos’a 5 km, Paşabağları’na 1 km. uzaklıktaki Zelve, Aktepe’nin dik ve kuzey yamaçlarında kurulmuştur. Üç vadiden oluşan Zelve Örenyeri, peribacalarının en yoğun olduğu yerdir.Üç vadiden oluşan Zelve örenyeri, Kapadokya bölgesinde peribacalarının en yoğun olduğu yer. Doğanın yarattığı güzelliklerden biri olan bu alan IX. ve XIII. yüzyıllarda Hıristiyanların önemli yerleşim ve dini merkezlerinden birisi oldu, papazlara verilen ilk dini seminerler bu yörede gerçekleşti.Vadideki en önemli kiliseler olan Balıklı, Üzümlü ve Geyikli kiliseleri İkonoklastik dönem (728-842) öncesine tarihleniyorlar. Burada ayrıca Aziz Simeon adına yapılmış şapel ve birçok kaya mekânı bulunuyor. 1952 yılına kadar iskân edilmiş vadide manastırlar, kiliseler, yerleşim yerlerinin yanı sıra tünel, değirmen, cam gibi yapılar görülebilir.    </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
