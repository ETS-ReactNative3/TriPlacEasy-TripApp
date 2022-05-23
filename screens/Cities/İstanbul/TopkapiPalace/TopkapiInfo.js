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
   <Text style={{color:color2,fontFamily:fontfam,fontSize:40,alignItems:'center',justifyContent:'center'}}>
Topkapı Sarayı
     </Text>
     </View>
         <Text style={{margin:25,fontSize:25,color:'black'}}>
         1453 yılında İstanbul’un fethi sonrasında Fatih Sultan Mehmet’in isteği üzerine 1460 yıllarında yapımına başlanan Topkapı Sarayı’nın inşası 1478 yılında tamamlanmıştır. Dolmabahçe Sarayı gibi tek seferde tüm ek yapılarıyla beraber inşa edilmeyen Topkapı Sarayı, 19. yüzyıla kadar eklenen yapılarla genişlemiştir.Topkapı Sarayı, konum itibariyle İstanbul’un en eski tarihî bölgelerinden birinde konumlanmaktadır. Marmara Denizi, İstanbul Boğazı ve Haliç arasında kalan tarihî İstanbul Yarımadası’nda bulunan saray, İstanbul’un ikonik yapılarından biridir. Sarayburnu’nda bulunan Doğu Roma akropolü üzerindeki 700.000 metrekarelik bir alan üzerine kurulmuş olan Topkapı Sarayı, Fatih Sultan Mehmet’ten itibaren 31. padişah Sultan Abdülmecid’e kadar yaklaşık dört yüz yıl süreyle imparatorluğun idare, eğitim ve sanat merkezi; padişahların da evi olmuştur. 19. yüzyılın ortalarından itibaren yavaş yavaş hanedanın Dolmabahçe Sarayı’na taşınması ile terk edilen Topkapı Sarayı, tarihî önemini ve değerini korumuştur.Türkiye Cumhuriyeti’nin kuruluşundan sonra, 3 Nisan 1924 yılında müze hâline getirilen Topkapı Sarayı, Cumhuriyet’in ilk müzesi olma özelliğini taşır. Bugün yaklaşık 300.000 metrekarelik bir alan kaplayan Topkapı Sarayı yapıları, mimarisi, koleksiyonları ve yaklaşık 300.000 arşiv belgesi ile dünyanın en büyük saray-müzelerinden biridir.Saltanat kapısından girildiğinde, saray yapıları geçişli dört avlu ve çevresindeki mimari yapılardan oluşmaktadır. Etrafı bahçeler ve meydanlarla çevrili olan saray yapıları içerisinde Alay Meydanı olarak da anılan ilk avluda Aya İrini Kilisesi, Darphane, Fırın, Hastane, Odun Ambarı, Hasırcılar Ocağı yapıları bulunuyordu.Sarayın ikinci avlusu, devlet yönetiminin gerçekleştiği mekânların yer aldığı Divan Meydanı bir diğer adıyla Adalet Meydanı’dır. Tarih boyunca pek çok törene sahne olan bu avluda divan toplantılarının yapıldığı Divan-ı Hümayun (Kubbealtı) ve yanında Divan-ı Hümayun Hazinesi yer alır. Bu avluda ayrıca Divan yapısının arkasında Adalet Kulesi, Kubbealtı’nın yanında Harem Dairesi girişi, Zülüflü Baltacılar Koğuşu, Has Ahırlar yer alır.Sarayın üçüncü avlusuna aynı zamanda Enderun Avlusu da denilmektedir. Bu bölümde padişaha ait Arz Odası, Enderun Hazinesi, Has Oda gibi yapıların yanı sıra Sultan III. Murat döneminde kurulan Saray Okulu’na ait yapılar da bulunmaktadır.Son avlu olan dördüncü avluda da padişaha ait köşkler ve asma bahçeleri yer almaktadır. Bu bölümde Osmanlı klasik köşk mimarisinin en seçkin ve estetik açıdan en gelişkin örnekleri olan Bağdat ve Revan Köşkleri ile İftariye Kameriyesi bulunmaktadır. Dördüncü avlunun alt kısmında ise saraya ait son yapılar olan Mecidiye Köşkü ve Esvab Odası görülür.
         </Text>
         </View>
         
        </ScrollView>
        
        )
      
    }
    
}
