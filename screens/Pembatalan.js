import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';

const Pembatalan = ({navigation})  => {
  const backtohome = () => {
    navigation.navigate('Home')
  }
  const Psnn = () => {
    navigation.navigate('PesananSaya')
  }
  const Lain = () => {
    navigation.navigate('Lainnya')
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Daftar Pembatalan
          </Text>
        </View>

          <Image source={require('../assets/delete-ticket-512.png')} style={styles.gambar} />
          <Text style={styles.teksuto}>Tidak ada tiket yang dapat dibatalkan</Text>
    </View>

    <View style={styles.BottomTab}>
        <TouchableOpacity style={styles.TabIcon} onPress={backtohome}>
          <Icon name={'home-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon} onPress={Psnn}>
          <Icon name={'receipt-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
          <Icon name={'trash-bin-outline'}  size={28}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon} onPress={Lain}>
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
  }

})
export default Pembatalan;