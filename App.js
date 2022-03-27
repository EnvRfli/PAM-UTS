import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PesananSaya from './screens/PesananSaya';
import Pembatalan from './screens/Pembatalan';
import Lainnya from './screens/Lainnya';
import Lainnya2 from './screens/Lainnya2';
import Konfirmasi from './screens/Konfirmasi';
import Konfirmasi2 from './screens/Konfirmasi2';
import Home2 from './screens/Home2';
import PesananSaya2 from './screens/PesananSaya2';
import Pembatalan2 from './screens/Pembatalan2';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Konfirmasi"
        component={Konfirmasi}
      />
      <Stack.Screen
        name="Konfirmasi2"
        component={Konfirmasi2}
      />
      <Stack.Screen
        name="PesananSaya"
        component={PesananSaya}
      />
      <Stack.Screen
        name="Pembatalan"
        component={Pembatalan}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
      />
      <Stack.Screen
        name="Home2"
        component={Home2}
      />
      <Stack.Screen
        name="PesananSaya2"
        component={PesananSaya2}
      />
      <Stack.Screen
        name="Pembatalan2"
        component={Pembatalan2}
      />
      <Stack.Screen
        name="Lainnya2"
        component={Lainnya2}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;