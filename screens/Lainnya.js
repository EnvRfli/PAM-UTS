import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';

const Lainnya = ({navigation})  => {
  const backtohome = () => {
    navigation.navigate('Home')
  }
  const Btl = () => {
    navigation.navigate('Pembatalan')
  }
  const Psnn = () => {
    navigation.navigate('PesananSaya')
  }
  return(
        <SafeAreaView style={styles.container}>
        <View style={styles.flexx}>
          <Text>Masih Kosong, Akan di update dikemudian Hari</Text>
        </View>
          <View style={styles.BottomTab}>
            <TouchableOpacity style={styles.TabIcon} onPress={backtohome}>
              <Icon name={'home-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Psnn}>
              <Icon name={'receipt-outline'}  size={28}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabIcon} onPress={Btl}>
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

    flexx:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
    
})

export default Lainnya;