import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome'
import AddUser from './../screens/AddUser'
import UpdateProfile from '../screens/UpdateProfile';

import { CredentialsContext } from '../components/CredentialsContext';

import {Colors} from './../components/styles'

const {primary, tertiary} = Colors; 



const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <CredentialsContext.Consumer>
            {(storedCredentials) =>(
                <NavigationContainer>
            <Stack.Navigator
             screenOptions={{
                headerShown: false,
                headerMode: 'screen',
                headerTintColor: 'black',
                headerStyle: { backgroundColor: 'white',
                                flex: 1,
                                alignItems: 'center', 
                                justifyContent: 'center'
                                
                },
              }}
                 initialRouteName="Login"
            >
            {storedCredentials? (
                <Stack.Screen name="Welcome" component={Welcome}/>
                
            ): (
                <>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                </>
            )}
                
               
                
            </Stack.Navigator>
        </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
        
    );
}

export default RootStack;