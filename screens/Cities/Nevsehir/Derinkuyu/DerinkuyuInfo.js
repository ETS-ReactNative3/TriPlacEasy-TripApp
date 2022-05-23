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
   <Text style={{color:color2,fontFamily:fontfam,fontSize:35,alignItems:'center',justifyContent:'center'}}>
     Derinkuyu Yeraltı Şehri
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
             
             
             
         Nevşehir- Niğde karayolu üzerinde ve Nevşehir’e 30 km. uzaklıkta bulunan Derinkuyu ilçesindedir. Kaymaklı yeraltı şehrinde olduğu gibi burada da büyük bir topluluğu içinde barındıracak ve ihtiyaçlarını karşılayacak mekânlar vardır.Kapadokya bölgesinin jeolojik oluşumu sayesinde inşa edilmiş sekiz katlı Derinkuyu Yeraltı Şehri, büyük bir topluluğu içinde barındıracak ve ihtiyaçlarını karşılayacak mekânlardan oluşuyor. Bölgede bulunan bir diğer örnek olan Kaymaklı Yeraltı Şehri'nden farklı olarak Derinkuyu'da bir misyonerler okulu, günah çıkartma yeri, vaftiz havuzu ve ilgi çekici bir kuyu da bulunuyor.Derinkuyu'nun ilk yerlileri Asur kolonilerine kadar uzanıyor. II. yüzyılda Roma İmparatorluğu'nun zulmünden kaçan ilk Hıristiyanlar Antakya ve Kayseri üzerinden Kapadokya'ya gelerek buraya yerleşmişler. Bölgedeki yeraltı şehirlerini kuran ilk Hıristiyanlar, girişleri kolayca fark edilemeyecek şekilde yapılmış bu şehirlerde saklanarak Romalı askerlerin zulmünden kurtulabilmişler. Yeraltı şehirlerinde uzun süre dışarı çıkmadan yaşamak zorunda kalabilecekleri için erzak depoları, havalandırma bacaları, şarap imalathaneleri, kiliseler, manastırlar, su kuyuları, tuvaletler ve toplantı odaları yaparak alanlarını genişletmişler. Birbirine bağlı odalardan oluşan bu şehirlerde bazı odalar ancak bir insanın geçebileceği kadar dar tünellerle birbirine bağlanıyor. Tünellerin giriş çıkışlarında güvenlik nedeniyle tüneli kapatmak için kullanılan büyük taş silindirler var.
         
         
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
