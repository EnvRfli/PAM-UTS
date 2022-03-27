import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Konfirmasi = ({navigation})  => {
    const route = useRoute();

    const kembali = () => {
        navigation.navigate('Home')
    }
    const Lanjut = () => {
        navigation.navigate('Konfirmasi2',{
          brgkt2 : route.params.brgkt,
          tjn2 : route.params.tjn,
          lyn2 : route.params.lyn,
          tgl2 : route.params.tgl,
          jm2 : route.params.jm,
        })
    }
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.bgbox}>

          <Text style={styles.namaapk}>kapal Tzy</Text>
          <Text style={styles.kuota}>Kuota tersedia (6969)</Text>
          <Text style={styles.kuota}>Rincian Tiket</Text>
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
          <Text style={styles.perjalanan}>Total                                   Rp.65.000,00</Text>

          <View style={styles.buttonpilihan}>
            <TouchableOpacity style={styles.btn1} onPress={kembali}>
              <Text style={styles.teksbtn1}>Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={Lanjut}>
              <Text style={styles.teksbtn2}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },

    boxicon:{
      flexDirection: 'row',
      height: 30,
      width: 260,
    },
  
    namaapk: {
      marginTop: 10,
      fontSize: 25,
      marginBottom: 25,
      textAlign: 'center',
      fontWeight: "bold",
      color: "blue"
    },

    bgbox: {
      width: 300,
      marginTop: 70,
      paddingVertical: 20,
      paddingHorizontal: 18,
      borderRadius: 5,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: 'center',
      backgroundColor: 'white'
    },

    kuota:{
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 13,
      fontWeight: "700",
      paddingVertical: 5,
    },

    boxinbox:{
      width: 270,
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

    buttonpilihan:{
      marginTop: 15,
      flexDirection: 'row',
      height: 35,
      width: 270,
    },

    btn1:{
      height: 35,
      width: 120,
      borderColor: 'blue',
      borderRadius: 5,
      borderWidth: 2,
      padding: 6,
      alignItems: 'center'
    },

    teksbtn1:{
      fontWeight: 'bold',
      color: 'blue'
    },

    btn2:{
      height: 35,
      width: 120,
      backgroundColor: 'blue',
      borderRadius: 5,
      padding: 7,
      alignItems: 'center',
      marginLeft: 30
    },

    teksbtn2:{
      fontWeight: 'bold',
      color: 'white'
    }
})

export default Konfirmasi;