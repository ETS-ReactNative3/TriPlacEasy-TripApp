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
Taksim Meydanı
     </Text>
     </View>
     <View style={{alignItems:'center'}}> 
   <Text style={{color:color2,fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
(İstiklal Cad.)
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
         Taksim Meydanı, İstanbul'un Beyoğlu ilçesinde yer alan ve İstanbul kentinin en ünlü noktalarından biri olan meydan. Çevresindeki lokanta, mağaza, otel, eğlence ve kültür yerleriyle İstanbul'un en büyük turistik çekim merkezinden biridir. Cumhuriyet Döneminde bir meydan haline gelmiş olan Taksim Meydanı, pek çok siyasi ve toplumsal olaya da ev sahipliği yapmıştır. Meydandaki trafiği kısmen yer altına indiren Taksim Yayalaştırma Projesi, 2013 yılında kısmen tamamlanmıştır.İstanbul Büyükşehir Belediyesi tarafından 2020 Şubat ayında başlatılan uluslararası tasarım yarışmasında, İstanbul halkının oylarıyla birinci olacak projeye göre Taksim Meydanı'nın yeniden düzenlenmesine karar verilmiştir.
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
