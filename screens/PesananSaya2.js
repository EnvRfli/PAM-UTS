import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/ionicons';

const PesananSaya2 = ({navigation})  => {
  const route = useRoute();
  
  const backtohome = () => {
    navigation.navigate('Home2',{
        brgkt : route.params.brgkt,
        tjn : route.params.tjn,
        lyn : route.params.lyn, 
        tgl : route.params.tgl, 
        jm : route.params.jm
    })
  }
  const Btl = () => {
    navigation.navigate('Pembatalan2', {
        brgkt : route.params.brgkt,
        tjn : route.params.tjn,
        lyn : route.params.lyn, 
        tgl : route.params.tgl, 
        jm : route.params.jm 
    })
  }
  const Lain2 = () => {
    navigation.navigate('Lainnya2',{
      brgkt : route.params.brgkt,
      tjn : route.params.tjn,
      lyn : route.params.lyn, 
      tgl : route.params.tgl, 
      jm : route.params.jm
    })
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Pesanan Saya
          </Text>
        </View>
        <View style={styles.boxinbox}>
            <Text style={styles.perjalanan}>{route.params.brgkt}           {'->'}           {route.params.tjn}</Text>
            <Text style={styles.k1}>Jadwal Masuk Pelabuhan</Text>
            <Text style={styles.k2}>{route.params.tgl}</Text>
            <Text style={styles.k2}>{route.params.jm}</Text>
            <Text style={styles.k1}>Layanan</Text>
            <Text style={styles.k2}>{route.params.lyn}</Text>
            <Text>-----------------------------------------</Text>
            <Text style={styles.k2}>Dewasa x 1                               Rp 65.000,00</Text>
          </View>
    </View>
    <View style={styles.BottomTab}>
        <TouchableOpacity style={styles.TabIcon} onPress={backtohome}>
          <Icon name={'home-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
          <Icon name={'receipt-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon} onPress={Btl}>
          <Icon name={'trash-bin-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon} onPress={Lain2}>
          <Icon name={'reorder-three-outline'}  size={28}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      },
    
    header:{
      height: 50,
      backgroundColor: "blue",
      alignItems: 'center',
    },
  
    textHeader:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      paddingVertical: 11,
      alignSelf: 'center',
      textAlign: 'center'
    },
  
    boxinbox:{
      marginTop: 50,
      alignSelf: 'center',
      width: 300,
      paddingVertical: 20,
      paddingHorizontal: 18,
      borderRadius: 5,
      shadowOpacity: 0.4,
      borderWidth: 1,
      shadowRadius: 5,
      alignItems: 'center',
      backgroundColor: '#F9C5D5'
    },
  
    perjalanan:{
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 14,
      fontWeight: "800",
      paddingVertical: 5,
    },
  
    k1:{
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 12,
      fontWeight: "750",
      paddingVertical: 7,
    },
  
    k2:{
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 12,
      fontWeight: "500", 
    },
  
    BottomTab:{
      flexDirection:'row',
      borderTopWidth: 1, 
      height: 50, 
      justifyContent: 'center',
      borderColor: 'grey',
      backgroundColor: 'white',
    },
  
    TabIcon:{
      flex: 0.25,
      alignSelf: 'center',
      textAlign: 'center',
    },
  
    gambar:{
      height: 150,
      width: 150,
      alignSelf: 'center',
      marginTop: 160, 
  },
  
  teksuto:{
      alignSelf: 'center',
      fontSize: 15,
      fontWeight: '600',
      color: 'blue',
      marginTop: 30,
  },
  
  })
  export default PesananSaya2;