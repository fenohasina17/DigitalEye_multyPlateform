import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, useWindowDimensions } from 'react-native';
import AddUser from './../screens/AddUser';


import { Formik } from 'formik';

import { Octicons, Ionicons, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import { TabView, SceneMap } from 'react-native-tab-view';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import {
    StyledContainer,
    Colors,   
    StyledButton,
    ButtonText,
    Avatar, 
    SubTitle
    
} from './../components/styles'

const {brand, darkLight} = Colors;

const Home = ({navigation}) => {

    return (
        <StyledContainer>
            <StatusBar style="dark" />

     

                {/*  */}
                <SubTitle><Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />                    Full Name</SubTitle>
                <SubTitle><Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />                    Full Name</SubTitle>
                <StyledButton  onPress={() => {navigation.navigate("AddUser")}}>
                    <ButtonText>Add New User</ButtonText>
                </StyledButton>
        </StyledContainer>
    );
}




export default Home;