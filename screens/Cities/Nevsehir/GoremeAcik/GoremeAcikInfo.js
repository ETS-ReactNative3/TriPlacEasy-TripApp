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
   <Text style={{color:color2,fontFamily:fontfam,fontSize:45,alignItems:'center',justifyContent:'center'}}>
Göreme Açık Hava M.
     </Text>
     </View>
     
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
             
         Neredeyse her kaya bloğunun oyularak ibadet, yaşam ve öğreti alanlarına dönüştürüldüğü, her alanında kutsallığın sanatla birleştiği bu vadi 1985 yılında Unesco Dünya Mirası Listesi’ne girmiş.Kapadokya’ya gelip de görmeden gitmenin eksik bırakacağı, Aziz Basil’in ilham kaynağı, gelmiş geçmiş binlerce keşişin düşüncelerini kayalara kazıdığı Göreme Açık Hava Müzesi’nin içinde, gezilesi görülesi onlarca manastır kilise ve şapel bulunuyor.  Kiliselerin boyama teknikleri ise yapıldığı döneme göre farklılıklar gösteriyor. Vadide yaşamın başladığı İlk Hristiyanlık dönemindeki geometrik desenli boyamalar, daha geç tarihlerde yerini dinsel içerikli boyamalara bırakıyor. Çoğunlukla Hazreti İsa’nın ve İncil’in hikayelerini anlatan freskler ise, hala o dönemlerin kokusu geçmemiş, renklerinin feri sönmemiş, ‘bir zamanlar bizler de yaşadık’ diyen enerjisi tükenmemiş halde ziyaretçilerini bekliyor.
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
