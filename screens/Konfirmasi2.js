import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable,
    ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Konfirmasi2 = ({navigation})  => {
  const [Nama, onChangeNama] = React.useState('');
  const [Gender, onChangeGender] = React.useState('');
  const [Usia, onChangeUsia] = React.useState('');

  const [showWarning, SetShowWarning] = React.useState(false);
  const [showTransfer, SetShowTransfer] = React.useState(false);
  
  const Transferdisini = () => {
    if (Nama === '' || Gender === '' || Usia === '' ){
      SetShowWarning(true);
    } else{
      SetShowTransfer(true);
    }
  }

  const pindah = () => {
    SetShowTransfer(false);
    navigation.navigate('PesananSaya2',{
      nams : Nama,
      gends : Gender,
      usias : Usia,
      brgkt : route.params.brgkt2,
      tjn : route.params.tjn2,
      lyn : route.params.lyn2, 
      tgl : route.params.tgl2, 
      jm : route.params.jm2
      })
  }
  const kembali2 = () => {
    navigation.navigate('Home')
  }
    const route = useRoute();
    return(
      <SafeAreaView style={styles.container}>
        <Modal visible={showWarning}
        transparent
        onRequestClose={() => 
        SetShowWarning(false)
        }>
        <View style={styles.centermesej}>
          <View style={styles.mesej}>
            <View style={styles.mesejtitle}>
              <Text style={styles.tekstitle}>Tidak dapat melanjutkan</Text>
            </View>
            <View style={styles.warnbod}>
              <Text style={styles.teksmesej}>Mohon Lengkapi data yang dibutuhkan</Text>
            </View>
            <Pressable
            onPress={() => SetShowWarning(false)}
            style={styles.warning_button}
            android_ripple={{color:'#fff'}}>
            <Text style={styles.tekstitle}>OK</Text>
          </Pressable>
          </View> 
        </View>
        </Modal>

        <Modal visible={showTransfer}
        transparent
        onRequestClose={() => 
        SetShowTransfer(false)
        }>
        <View style={styles.centermesej}>
          <View style={styles.mesej}>
            <View style={styles.mesejtitle}>
              <Text style={styles.tekstitle}>Transfer ke rekening</Text>
            </View>
            <View style={styles.warnbod}>
              <Text style={styles.teksmesej}>BRI : 696969696969</Text>
              <Text style={styles.teksmesej}>BNI : 248950294682</Text>
            </View>
            <Pressable
            onPress={pindah}
            style={styles.warning_button}
            android_ripple={{color:'#fff'}}>
            <Text style={styles.tekstitle}>OK</Text>
          </Pressable>
          </View> 
        </View>
        </Modal>

        <ScrollView>
        <View style={styles.bgbox}>
          <Text style={styles.namaapk}>kapal Tzy</Text>
          <Text style={styles.kuota}>Informasi Pemesanan</Text>
          <View style={styles.boxinbox}>
            <Text style={styles.perjalanan}>{route.params.brgkt2}           {'->'}           {route.params.tjn2}</Text>
            <Text style={styles.k1}>Jadwal Masuk Pelabuhan</Text>
            <Text style={styles.k2}>{route.params.tgl2}</Text>
            <Text style={styles.k2}>{route.params.jm2}</Text>
            <Text style={styles.k1}>Layanan</Text>
            <Text style={styles.k2}>{route.params.lyn2}</Text>
            <Text>-----------------------------------------</Text>
            <Text style={styles.k2}>Dewasa x 1                               Rp 65.000,00</Text>
          </View>
          <Text style={styles.kuota2}>Data Pemesan</Text>

          <Text style={styles.teksDiBox}>Nama Lengkap</Text>
          <TextInput 
            style={styles.inputteks} 
            placeholder='Masukkan nama lengkap anda'
            onChangeText={(text) => onChangeNama(text)}
            value={Nama}
          />

          <Text style={styles.teksDiBox}>Jenis Kelamin</Text>
          <TextInput 
            style={styles.inputteks} 
            placeholder='Laki-laki/Perempuan'
            onChangeText={(text) => onChangeGender(text)}
            value={Gender}
          />

          <Text style={styles.teksDiBox}>Umur</Text>
          <TextInput 
            style={styles.inputteks} 
            placeholder='15 Tahun'
            onChangeText={(text) => onChangeUsia(text)}
            value={Usia}
          />

          <View style={styles.buttonpilihan}>
            <TouchableOpacity style={styles.btn1} onPress={kembali2}>
              <Text style={styles.teksbtn1}>Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={Transferdisini}>
              <Text style={styles.teksbtn2}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
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
      marginTop: 50,
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

    kuota2:{
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 14,
      fontWeight: "700",
      marginTop: 10,
    },

    teksDiBox: {
      color: "black",
      alignSelf: 'flex-start',
      fontSize: 13,
      fontWeight: "500",
      paddingVertical: 5,
    },

    inputteks: {
      height: 30,
      width: 260,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#555',
      marginBottom: 5, 
      fontSize: 13,
      fontWeight: 'bold',
      paddingLeft: 15,
      backgroundColor: '#F5F5F5',
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
    backgroundColor: '#DE834D',
    borderRadius: 5,
    padding: 7,
    alignItems: 'center',
    marginLeft: 30
  },

  teksbtn2:{
    fontWeight: 'bold',
    color: 'white'
  },

  mesej:{
    width: 250,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
  },

  centermesej:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },

  mesejtitle:{
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  warnbod:{
    height: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tekstitle:{
    fontWeight: 'bold',
  },

  teksmesej:{
    textAlign: 'center',
    margin: 15,
  },

  warning_button:{
    backgroundColor: '#F7F5F2',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  }
})

export default Konfirmasi2;