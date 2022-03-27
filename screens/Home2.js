import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

const Home2 = ({navigation})  => {
    const route = useRoute();
    const [berangkat, onChangeBerangkat] = React.useState('');
    const [tujuan, onChangeTujuan] = React.useState('');
    const [layanan, onChangeLayanan] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');
    const [jam, onChangeJam] = React.useState('');

    const Psnn2 = () => { 
        navigation.navigate('PesananSaya2',{
            brgkt : route.params.brgkt,
            tjn : route.params.tjn,
            lyn : route.params.lyn, 
            tgl : route.params.tgl, 
            jm : route.params.jm
        }) 
      }
    const Btl2 = () => {
      navigation.navigate('Pembatalan2',{
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

    const [showModal, SetShowModal] = React.useState(false);

    const modal = () => {
      SetShowModal(true);
    }
    return(
      <SafeAreaView style={styles.container}>
        <View style={{flex:1}}>

        <Modal visible={showModal}
        transparent
        onRequestClose={() => 
        SetShowModal(false)
        }>
        <View style={styles.centermesej}>
          <View style={styles.mesej}>
            <View style={styles.mesejtitle}>
              <Text style={styles.tekstitle}>hanya dapat membuat 1 buah data</Text>
            </View>
            <View style={styles.warnbod}>
              <Text style={styles.teksmesej}>mohon tekan batalkan pesanan pada menu daftar pembatalan untuk membuat data baru</Text>
            </View>
            <Pressable
            onPress={() => SetShowModal(false)}
            style={styles.warning_button}
            android_ripple={{color:'#fff'}}>
            <Text style={styles.tekstitle}>OK</Text>
          </Pressable>
          </View> 
        </View>
        </Modal>

          <View style={styles.bgbox}>
            <Text style={styles.namaapk}>kapal Tzy</Text>

            <Text style={styles.teksDiBox}>Lokasi Keberangkatan</Text>
            <View style={styles.boxicon}>
              <Icon name={'boat-outline'}  size={28}/>
              <Picker style={styles.inputteks}
                  selectedValue={berangkat}
                  onValueChange={(itemValue) =>
                      onChangeBerangkat(itemValue)
                  }>
                  <Picker.Item label="Pilih Pelabuhan Awal" value="" />
                  <Picker.Item label="Bakauheni" value="Bakauheni" />
                  <Picker.Item label="Merak" value="Merak" />
              </Picker>
            </View>

            <Text style={styles.teksDiBox}>Pelabuhan Tujuan</Text>
            <View style={styles.boxicon}>
              <Icon name={'boat-outline'}  size={28}/>
              <Picker style={styles.inputteks}
                  selectedValue={tujuan}
                  onValueChange={(itemValue) =>
                      onChangeTujuan(itemValue)
                  }>
                      <Picker.Item label="Pilih Pelabuhan Akhir" value="" />
                      <Picker.Item label="Bakauheni" value="Bakauheni" />
                      <Picker.Item label="Merak" value="Merak" />
                  </Picker>
            </View>
              
            <Text style={styles.teksDiBox}>Kelas Layanan</Text>
            <View style={styles.boxicon}>
              <Icon name={'stats-chart-outline'}  size={28}/>
              <Picker style={styles.inputteks}
                  selectedValue={layanan}
                  onValueChange={(itemValue) =>
                      onChangeLayanan(itemValue)
                  }>
                      <Picker.Item label="Pilih Layanan" value="" />
                      <Picker.Item label="Express" value="Express" />
                      <Picker.Item label="Ekonomi" value="Ekonomi" />
                  </Picker>
            </View>

            <Text style={styles.teksDiBox}>Tanggal Masuk Pelabuhan</Text>
            <View style={styles.boxicon}>
              <Icon name={'calendar-outline'}  size={28}/>
              <Picker style={styles.inputteks}
                  selectedValue={tanggal}
                  onValueChange={(itemValue) =>
                      onChangeTanggal(itemValue)
                  }>
                      <Picker.Item label="Pilih Tanggal Masuk" value="" />
                      <Picker.Item label="Kamis, 2022-08-12" value="Kamis, 2022-08-12" />
                      <Picker.Item label="Jumat, 2022-08-13" value="Jumat, 2022-08-13" />
                      <Picker.Item label="Sabtu, 2022-08-14" value="Sabtu, 2022-08-14" />
                      <Picker.Item label="Minggu, 2022-08-15" value="Minggu, 2022-08-15" />
                      <Picker.Item label="Senin, 2022-08-16" value="Senin, 2022-08-16" />
                  </Picker>
            </View>

            <Text style={styles.teksDiBox}>Jam Masuk Pelabuhan</Text>
            <View style={styles.boxicon}>
              <Icon name={'time-outline'}  size={28}/>
              <Picker style={styles.inputteks}
                  selectedValue={jam}
                  onValueChange={(itemValue) =>
                      onChangeJam(itemValue)
                  }>
                      <Picker.Item label="Pilih Jam" value="" />
                      <Picker.Item label="08:00" value="08:00" />
                      <Picker.Item label="10:30" value="10:30" />
                      <Picker.Item label="14:30" value="14:30" />
                      <Picker.Item label="18:00" value="18:00" />
                      <Picker.Item label="22:30" value="22:30" />
                  </Picker>
            </View>

            <View style={styles.jmlh}>
              <Text style={styles.teksdijumlah}>
                Dewasa                                    1 orang
              </Text>
            </View>

            <TouchableOpacity style={styles.BuatTiket} onPress={modal}>
              <Text style={styles.tekstombol}>
                Buat Tiket
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.BottomTab}>
            <TouchableOpacity style={styles.TabIcon}>
              <Icon name={'home-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Psnn2}>
              <Icon name={'receipt-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Btl2}>
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
        backgroundColor: '#F5F5F5',
        flex: 1,
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
        alignSelf: 'Center',
        width: 300,
        marginTop: 70,
        paddingVertical: 20,
        paddingHorizontal: 18,
        borderRadius: 5,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
      },

      teksDiBox: {
        color: "grey",
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
        marginLeft: 10,
    },

    jmlh: {
      height: 30,
      width: 260,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 15,
      shadowOpacity: 0.3,
      shadowRadius: 8,
      alignItems: 'center',
    },

    teksdijumlah: {
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 5
    },

    BuatTiket: {
      backgroundColor: '#DE834D',
      height: 30,
      width: 200,
      marginTop: 15,
      borderRadius: 5,
      alignItems: 'center',
    },

    tekstombol: {
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 5,
      color: 'white',
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

export default Home2;