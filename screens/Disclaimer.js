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
    StyledText
    
} from './../components/styles'

const {brand, darkLight} = Colors;

const Disclaimer = () => {

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Disclaimer</PageTitle>
                <StyledText>
                Neither Golden Plains Unified School District or MVS are licensed medical doctors and are not providing medical advice, or diagnosing or treating any condition you may have. Always consult with your physician about your personal health or medical related issues. The contents of this App and related communications are presented for information purposes only and are not intended as medical advice, nor to replace the advice of a medical doctor or other health care professional. Anyone experiencing symptoms of covid-19 should first consult with, and seek clearance and guidance from, a competent health care professional. The information on this App and related communications should not be construed as specific advice. It is presented for the sole purpose of stimulating awareness and reducing the spread of any viruses.
                </StyledText>
            </InnerContainer>

        </StyledContainer>
    );
}




export default Disclaimer;