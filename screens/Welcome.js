import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons} from '@expo/vector-icons'


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
    Avatar
} from './../components/styles'

const {brand, darkLight} = Colors;

const Welcome = ({navigation}) => {


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} />
                <SubTitle>Welcome</SubTitle>

                <WelcomeContainer>
                    <StyledFormArea>

                        <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
                        
                        <Line />

                        <StyledButton onPress={() => {navigation.navigate("Login")}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
}


export default Welcome;