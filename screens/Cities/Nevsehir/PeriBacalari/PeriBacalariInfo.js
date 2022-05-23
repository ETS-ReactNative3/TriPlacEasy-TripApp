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
Peri Bacalari 3 Güzeller
     </Text>
     </View>
     
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
             
         İki büyük bir küçük peribacasının anne baba çocuktan oluşan çekirdek aile misali dizilimi, Kapadokya’da görülmeden geçilmeyecek bir nokta yapmış Üç Güzeller’i. Sanki tanıdık bir aileye uğramadan geçmek ya da durup bir fotoğraf çektirelim dememek eksiklikmiş gibi.Unesco Dünya Mirasları arasında yer alan Kapadokya’da en çok fotoğraf çekilen yerlerin ilk sırasında Üç Güzeller Peribacaları yer alıyor. Öyle ki her yıl yaklaşık 2 milyon turistin ziyaret ettiği bölgede, tüm gezginlerin, nişanlanan veya evlenen çiftlerin albümlerindeki fotoğraflarda, arka fonda Üç Güzeller var. Gerek yurtiçi, gerek yurtdışı tatil turlarının reklamlarında, broşürlerinde hatta eski 50 TL’lerin bir yüzünde yine Kapadokya Üç Güzeller var. Çünkü bu 3 peribacası Kapadokya’nın simgesi.‘Kapadokya’nın her yanı peribacası değil mi zaten?’ diyenlere ise Üç Güzeller Peribacaları’nın şapkalı oluşumlarıyla diğerlerinden daha farklı bir yapıda olduğunu söylemeden geçmeyelim. Kapadokya’daki peribacaları tüflü volkanik arazide sel suları ve rüzgarın etkisiyle oluşmuş yapılar. Üç Güzeller’de, rüzgar ve sel suları kayaların zeminini aşındırırken üst kısımlarına dokunmamış ve sert kayalar gövdeleri huni şeklinde, başları ise düştü düşecek şapkalı peribacalarına dönüşmüş. 
         
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
