import React, {useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, useWindowDimensions } from 'react-native';
import Home from './../screens/Home'
import Disclaimer from './../screens/Disclaimer'
import Profile from './../screens/Profile';
import { Formik } from 'formik';

import { Octicons, Ionicons, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import { TabView, SceneMap } from 'react-native-tab-view';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from '../components/CredentialsContext';


import {contextValue,
    StyledContainer,
    InnerContainer,
   
    StyledButton,
    ButtonText,
    Colors, 
    Line,
    Avatar, 
    LogOutButton,
    LogOutText,
    BottomNav
} from './../components/styles'

const {brand, darkLight} = Colors;

const Welcome = ({navigation}) => {

    const {storedCredentials, setStoredCredentials} =  useContext(CredentialsContext);
    const clearLogin = () =>  {
        console.log("logout");
    //    AsyncStorage
    //        .removeItem('digitalEyeCredentials')
    //        .then(() => {
    //            setStoredCredentials("");
    //        })
    //        .catch(error => console.log(error))
    }
   

    return (
        <StyledContainer>
            <StatusBar style="dark" />

     

                <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
                <LogOutButton onPress={clearLogin}>
                    <LogOutText>Logout</LogOutText>
                    <MaterialIcons name="logout" size={24} color="black" />
                </LogOutButton>
            
            <Tab.Navigator>
                <Tab.Screen  name="Home" component={Home} />
                <Tab.Screen  name="Profile" component={Profile} />
                <Tab.Screen name="Disclaimer" component={Disclaimer} />
            </Tab.Navigator>
                    
        </StyledContainer>
    );
}
const Tab = createMaterialBottomTabNavigator();



export default Welcome;