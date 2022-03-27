import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';
import { useRoute } from '@react-navigation/native';

const Pembatalan2 = ({navigation})  => {
    const route = useRoute();

    const [showModals, SetShowModals] = React.useState(false);

    const Psnn2 = () => { 
        navigation.navigate('PesananSaya2',{
            brgkt : route.params.brgkt,
            tjn : route.params.tjn,
            lyn : route.params.lyn, 
            tgl : route.params.tgl, 
            jm : route.params.jm
        }) 
      }
    const Home2 = () => {
      navigation.navigate('Home2',{
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

    const batal = () => {
      SetShowModals(true);
    }

    const batal2 = () => {
      SetShowModals(false);
      navigation.navigate('Pembatalan')
    }

  return(
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>

        <Modal visible={showModals}
          transparent
          onRequestClose={() => 
          SetShowModals(false)
          }>
          <View style={styles.centermesej}>
            <View style={styles.mesej}>
              <View style={styles.mesejtitle}>
                <Text style={styles.tekstitle}>Batalkan Pesanan</Text>
              </View>
              <View style={styles.warnbod}>
                <Text style={styles.teksmesej}>Ingin Membatalkan pesanan?</Text>
              </View>
              <Pressable
              onPress={batal2}
              style={styles.warning_button}
              android_ripple={{color:'#fff'}}>
              <Text style={styles.tekstitle}>Iya, Batalkan</Text>
            </Pressable>
            </View> 
          </View>
          </Modal>

        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Daftar Pembatalan
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
            
            <TouchableOpacity style={styles.Batalkan} onPress={batal}>
                <Text style={styles.BatalkanTeks}>
                    Batalkan Pesanan
                </Text>
            </TouchableOpacity>
          </View>
    </View>

    <View style={styles.BottomTab}>
        <TouchableOpacity style={styles.TabIcon} onPress={Home2}>
            <View style={{flexDirection:'column'}}></View>
          <Icon name={'home-outline'}  size={28}/>
          <Text style={{fontSize:3}}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon} onPress={Psnn2}>
          <Icon name={'receipt-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
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

  Batalkan:{
      height: 35,
      width: 150,
      backgroundColor: 'red',
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 30,
      shadowOffset: 5,
      shadowRadius: 0.4
  },

  BatalkanTeks:{
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      paddingTop: 5,
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
export default Pembatalan2;