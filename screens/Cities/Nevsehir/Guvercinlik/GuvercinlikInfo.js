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
Güvercinlik Vadisi
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
         Kapadokya’nın en güzel yerlerinden biri olan Güvercinlik Vadisi, yıllardan beri tüm konuklarını büyüleyici manzarası ve Uçhisar Kalesinden şahit olunan meşhur gün batımıyla ağırlar. Uçhisar ve Göreme arasındaki bu geniş vadi, adını gerçekten de güvercinlerden alır. Rivayete göre, 9. Yüzyılda başlayan güvercin yetiştiriciliği ile beraber burada yaşayanların dikkatini çeken üzüm yetiştiriciliğinde güvercin gübresinin çok faydalı olduğudur. Bu nedenle bugün de göze çarpan kayadan oyma yuvalar, tarım işçilerinin verimini artırabilmek adına, evler yerine vadiyi seçmesiyle oluşur.Sadece tarımda değil, aynı zamanda kilise duvarlarını renklendiren çizimlerin ve desenlerin renklerini koruyabilmek, fresklerin sağlam kalmasını sağlayabilmek adına da güvercin gübrelerinin verimli olduğu için kullanıldığı söylenir. Günümüzde de hala çeşit çeşit güvercinlerin vadide bulundukça son derece keyifli bir manzara oluşturdukları görülür. Bu nedenle Güvercinlik Vadisi, eşsiz manzara ve tarihi ile turizme da katkı sağlayan en önemli bölgelerden birisidir.  </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
