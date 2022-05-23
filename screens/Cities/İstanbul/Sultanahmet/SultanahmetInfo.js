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
        <View  style={{backgroundColor:color,flex:1,justifyContent: 'center',alignItems: 'center'}}>
     
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
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sultanahmet')} style={{position:'absolute',right:'85%',top:0}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="black"
  size={55}/>
</TouchableOpacity>
        <View style={{alignItems:'center'}}> 
   <Text style={{color:color2,fontFamily:fontfam,fontSize:30,alignItems:'center',justifyContent:'center'}}>
Sultanahmet Camii
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
             
         Sultan Ahmet Camii veya Sultânahmed Camiî, 1609-1617 yılları arasında Osmanlı Padişahı I. Ahmed tarafından İstanbul'daki tarihî yarımadada, Mimar Sedefkâr Mehmed Ağa'ya yaptırılmıştır.[1] Cami mavi, yeşil ve beyaz renkli İznik çinileriyle bezendiği için ve yarım kubbeleri ve büyük kubbesinin içi de yine mavi ağırlıklı kalem işleri ile süslendiği için Avrupalılarca "Mavi Camii (Blue Mosque)" olarak adlandırılır. Ayasofya'nın 1935 yılında camiden müzeye dönüştürülmesiyle, İstanbul'un ana camii konumuna ulaşmıştır.Aslında Sultanahmet Camii külliyesiyle birlikte, İstanbul’daki en büyük eserlerden biridir. Bu külliye bir cami, medreseler, hünkar kasrı, arasta, dükkânlar, hamam, çeşme, sebiller, türbe, darüşşifa, sıbyan mektebi, imarethane ve kiralık odalardan oluşmaktadır. Bu yapıların bir kısmı günümüze ulaşamamıştır.Yapının mimari ve sanatsal açıdan dikkate şayan en önemli yanı, 20.000'i aşkın İznik çinisiyle bezenmesidir.[2] Bu çinilerin süslemelerinde sarı ve mavi tonlardaki geleneksel bitki motifleri kullanılmış, yapıyı sadece bir ibadethane olmaktan öteye taşımıştır. Caminin ibadethane bölümü 64 x 72 metre boyutlarındadır. 43 metre yüksekliğindeki merkezi kubbesinin çapı 23,5 metredir. Caminin içi 200'den fazla renkli cam ile aydınlatılmıştır.[3] Yazıları Diyarbakırlı Seyyid Kasım Gubarî tarafından yazılmıştır. Çevresindeki yapılarla birlikte bir külliye oluşturur ve Sultanahmet, Türkiye'nin altı minareli ilk camiidir.
        </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
