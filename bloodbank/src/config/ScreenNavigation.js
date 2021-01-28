import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterOrLogin from '../screens/RegisterOrLogin';
import Register from '../screens/Register';
import Login from '../screens/Login';
import DonarOrAcceptor from '../screens/DonarOrAcceptor';
import FindDonar from '../screens/FindDonar';
import DonateBlood from '../screens/DonateBlood';
import DonateNow from '../screens/DonateNow';

const Stack = createStackNavigator();


const ScreenNavigation = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegisterOrLogin">
                <Stack.Screen name="RegisterOrLogin" component={RegisterOrLogin} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DonarOrAcceptor" component={DonarOrAcceptor} />
                <Stack.Screen name="FindDonar" component={FindDonar} />
                <Stack.Screen name="DonateBlood" component={DonateBlood} />
                <Stack.Screen name="DonateNow" component={DonateNow} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
  
  
  export default ScreenNavigation; 