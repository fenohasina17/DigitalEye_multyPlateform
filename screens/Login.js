import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, ActivityIndicator} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons} from '@expo/vector-icons'


import {Colors} from './../components/styles'

const {primary, tertiary} = Colors; 


import axios from 'axios';


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
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles'

const {brand, darkLight} = Colors;

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {


        const [hidePassword, setHidePassword] = useState(true);
        const [message, setMessage] = useState(true);
        const [messageType, setMessageType] = useState();

        const handleLogin = (credentials, setSubmitting) => {
           
            const url = 'http://api.mobilevideosystems.net/api/login';

            axios.post(url, credentials)
                .then( (response) => {
                    const result = response.data;
                    const {data, error, message} = result;
                    if(error == true) {
                        console.log("blabla");
                        handleMessage(message, error);
                    }else{
                        navigation.navigate('Welcome', {...data[0]});
                    }
                    // navigation.navigate('Welcome', {...data[0]});
                    setSubmitting(false);
                } )
                .catch( error => {
                console.log(error);
                setSubmitting(false);
                handleMessage("An error occurred check your network and try again");
            })
        }

        const handleMessage =  (message, type = 'FAILED') => {
            setMessage(message);
            setMessageType(type);
        }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} />
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{ email: 'pinrass9@gmail.com', password: '123456'}}
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values);
                            if (values.email == '' || values.password == '') {
                                 handleMessage("Please fill all the fields");
                                setSubmitting(false);
                            }else {
                                handleLogin(values, setSubmitting);
                            }
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                            <MyTextInput 
                                label="Email Address"
                                icon="mail"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType="email-address"

                            />
                            <MyTextInput 
                                label="Password"
                                icon="lock"  
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}

                            />

                            <MsgBox type={messageType}>{message}</MsgBox>

                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton disabled={true}>
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton> 
                            )}

                            <Line />

                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLink onPress={ () => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
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


export default Login;