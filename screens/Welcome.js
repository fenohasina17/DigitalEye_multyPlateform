import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons, MaterialIcons} from '@expo/vector-icons'


import {
    StyledContainer,
    InnerContainer,
    WelcomeContainer,
    WelcomeImage,
    PageLogo,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors, 
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent, 
    Avatar, 
    LogOutButton,
    LogOutText
} from './../components/styles'

const {brand, darkLight} = Colors;

const Welcome = ({navigation}) => {


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer> 
                    <StyledFormArea>

                        <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
                        <LogOutButton onPress={() => {navigation.navigate("Login")}}>
                            <LogOutText>Logout</LogOutText>
                            <MaterialIcons name="logout" size={24} color="black" />
                        </LogOutButton>
                        
                        <Line />

                        <StyledButton >
                            <ButtonText>Add Usser</ButtonText>
                        </StyledButton>

                    </StyledFormArea>
            </InnerContainer>
        </StyledContainer>
    );
}


export default Welcome;