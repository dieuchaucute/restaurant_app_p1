import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

export default function RootNavigation(){

  return(

    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen
        name="Main"
        component={BottomTabs}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />

    </Stack.Navigator>

  )

}