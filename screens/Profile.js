import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, useWindowDimensions } from 'react-native';


import { Formik } from 'formik';

import { Octicons, Ionicons, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import { TabView, SceneMap } from 'react-native-tab-view';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    Colors,   
    StyledButton,
    ButtonText,
    Avatar, 
    SubTitle,
    StyledText,
    ProfileAvatar
    
} from './../components/styles'

const {brand, darkLight} = Colors;

const Profile = ({navigation}) => {

    return (
        <StyledContainer>
            <StatusBar style="dark" />
         
                <ProfileAvatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
                <SubTitle>Full Name</SubTitle>
                <StyledButton onPress={() => navigation.navigate("UpdateProfile")} >
                    <ButtonText>Edit Profile</ButtonText>
                </StyledButton>
          

        </StyledContainer>
    );
}




export default Profile;