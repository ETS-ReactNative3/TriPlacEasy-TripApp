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
Göreme Panaroma(manzara)
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
         Bir bankın ya da bir sandalyenin üzerinde, elde ince belli bardakta çay gibi kokan bir çay, serde huzur, karşıda ise leb-i derya Kapadokyalı bir anıyı kim istemez ki? Göreme Panorama Manzara İzleme Noktası Göreme’den 2 km uzaklıkta, Göreme Uçhisar yolu üzerinde Güvercinlik Vadisi’nin bitiş noktasında bulunuyor. 3917 metre yüksekliğiyle bölgenin en ihtişamlı dağı Erciyes’in ve güvercinliklerle dolu vadinin panoramasını gözler önüne seren Kapadokya’nın en güzel fotoğraf noktalarından!Dilerseniz eski zaman kıyafetleri de veriyorlar fotoğraf çektirmek için. Civarda bulunan hediyelik eşya dükkanlarına da uğramadan geçmeyin deriz    </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
