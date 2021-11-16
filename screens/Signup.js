import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons} from '@expo/vector-icons'


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
    TextLinkContent
} from './../components/styles'

const {brand, darkLight} = Colors;

const Signup = () => {

        const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                {/* <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} /> */}
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput 
                            label="First Name"
                            icon="person"
                            placeholder="fenohasina"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            keyboardType="email-address"

                        />
                        <MyTextInput 
                            label="Last Name"
                            icon="person"
                            placeholder="Rasoavarison"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            keyboardType="email-address"

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
                            keyboardType=""

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
                            <TextLink>
                                <TextLinkContent>SignIn</TextLinkContent>
                            </TextLink>
                        </ExtraView>
  
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
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