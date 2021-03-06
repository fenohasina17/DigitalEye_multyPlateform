import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Image, Button , Platform} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons} from '@expo/vector-icons'

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import * as ImagePicker from 'expo-image-picker';

import {
    StyledContainer,
    InnerContainer,
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
    AvatarUpload
} from './../components/styles'

const {brand, darkLight} = Colors;

const Signup = ({navigation}) => {

        const [hidePassword, setHidePassword] = useState(true);

     // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

    return (
      <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} /> 
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome")
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                         { pickedImagePath !== '' &&   <AvatarUpload resizeMode="cover" source={{ uri: pickedImagePath }} /> }
                       
                        <StyledButton onPress={showImagePicker}>
                          <ButtonText>Select an image</ButtonText> 
                        </StyledButton>
                        <StyledButton onPress={openCamera}>
                          <ButtonText>Open Camera</ButtonText>
                        </StyledButton>
                        <MyTextInput 
                            label="First Name"
                            icon="person"
                            placeholder="fenohasina"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                          
                        />
                        <MyTextInput 
                            label="Last Name"
                            icon="person"
                            placeholder="Rasoavarison"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                          

                        />
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="feno@gmail.com"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            keyboardType="email-address"

                        />
                        <MyTextInput 
                            label="Phone Number"
                            icon=""
                            placeholder="+261 34 10 066 15"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            keyboardType="numeric"

                        />

                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}

                        />
                        <MyTextInput 
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}

                        />

                        <MsgBox>...</MsgBox>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Sign up
                            </ButtonText>
                        </StyledButton>

                        <Line />
  
                        <ExtraView>
                            <ExtraText>Already an account? </ExtraText>
                            <TextLink onPress={ () => navigation.navigate("Login") }>
                                <TextLinkContent>SignIn</TextLinkContent>
                            </TextLink>
                        </ExtraView>
  
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={isPassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
            </RightIcon>
        )}
    </View>)
}


export default Signup;
