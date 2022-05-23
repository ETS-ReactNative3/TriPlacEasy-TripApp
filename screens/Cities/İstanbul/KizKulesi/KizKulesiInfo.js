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
        
    
        const {color,color2,fontfam} = this.props.route.params
     
    
        return(
<ScrollView>
        <View  style={{backgroundColor: color,flex:1,justifyContent: 'center',alignItems: 'center'}}>
      
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('homeage')}
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
   <Text style={{color:color2,fontFamily:fontfam,fontSize:40,alignItems:'center',justifyContent:'center'}}>
Kız Kulesi
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
         Kız Kulesi, hakkında çeşitli rivayetler anlatılan, efsanelere konu olan, İstanbul Boğazı'nın Marmara Denizi'ne yakın kısmında, Salacak açıklarında yer alan küçük adacık üzerinde inşa edilmiş yapıdır.Üsküdar'ın sembolü haline gelen kule, Üsküdar’da Bizans devrinden kalan tek eserdir. MÖ 24 yıllarına kadar uzanan tarihi bir geçmişe sahip olan kule, Karadeniz’in Marmara ile birleştiği yerde küçük bir ada üzerinde kurulmuştur. Bazı Avrupalı tarihçiler buraya Leander Kulesi derler. Kule hakkında pek çok rivayetler bulunmaktadır. Evliya Çelebi kuleyi şöyle tarif eder: “Deniz içinde karadan bir ok atımı uzak, dört köşe, sanatkarane yapılmış bir yüksek kuledir. Yüksekliği tam 80 (seksen) arşındır. Sathı mesehası iki yüz adımdır. İki taraftan kapısı vardır. „ Bugün görülen kulenin temelleri ve alt katın önemli kısımları II. Mehmed devri yapısıdır. Kulenin etrafındaki sahanlık geniş kaplanmıştır. Üstündeki madalyon halindeki bir mermer levhada, kuleye şimdiki şeklini veren Sultan II. Mahmud'un, Hattat Rasim’in kaleminden çıkmış 1832 tarihli bir tuğrası vardır. Kulenin Eminönü tarafı daha genişçe olup burada bir de sarnıç vardır.
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
