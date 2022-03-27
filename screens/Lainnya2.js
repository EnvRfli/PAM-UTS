import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';
import { useRoute } from '@react-navigation/native';

const Lainnya2 = ({navigation})  => {
    const route = useRoute();
    const backtohome2 = () => {
        navigation.navigate('Home2',{
            brgkt : route.params.brgkt,
            tjn : route.params.tjn,
            lyn : route.params.lyn, 
            tgl : route.params.tgl, 
            jm : route.params.jm
        })
      }
      const Btl2 = () => {
        navigation.navigate('Pembatalan2', {
            brgkt : route.params.brgkt,
            tjn : route.params.tjn,
            lyn : route.params.lyn, 
            tgl : route.params.tgl, 
            jm : route.params.jm 
        })
      }
      const Psnn2 = () => { 
        navigation.navigate('PesananSaya2',{
            brgkt : route.params.brgkt,
            tjn : route.params.tjn,
            lyn : route.params.lyn, 
            tgl : route.params.tgl, 
            jm : route.params.jm
        }) 
    }
  return(
        <SafeAreaView style={styles.container}>
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
          <Text>Masih Kosong, Akan di update dikemudian Hari</Text>
        </View>
          <View style={styles.BottomTab}>
            <TouchableOpacity style={styles.TabIcon} onPress={backtohome2}>
              <Icon name={'home-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Psnn2}>
              <Icon name={'receipt-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Btl2}>
              <Icon name={'trash-bin-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon}>
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
})

export default Lainnya2;