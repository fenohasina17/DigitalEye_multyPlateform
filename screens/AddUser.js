import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons} from '@expo/vector-icons'

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import * as ImagePicker from 'expo-image-picker';

import {
    StyledContainer,
    InnerContainer,
    AvatarUpload,
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

const AddUser = ({navigation}) => {

        const [hidePassword, setHidePassword] = useState(true);

        // const ImagePickerExample = () => {
        //     const [image, setImage] = useState(null);
          
        //     useEffect(() => {
        //       (async () => {
        //         if (Platform.OS !== 'web') {
        //           const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //           if (status !== 'granted') {
        //             alert('Sorry, we need camera roll permissions to make this work!');
        //           }
        //         }
        //       })();
        //     }, []);
          
        //     const pickImage = async () => {
        //       let result = await ImagePicker.launchImageLibraryAsync({
        //         mediaTypes: ImagePicker.MediaTypeOptions.All,
        //         allowsEditing: true,
        //         aspect: [4, 3],
        //         quality: 1,
        //       });
          
        //       console.log(result);
          
        //       if (!result.cancelled) {
        //         setImage(result.uri);
        //       }
        //     };
          
        //     return ImagePickerExample;
        //   }

    return (
      <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <Formik
                    initialValues={{ studentId: '', firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome")
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                       
                        {/* <View >
                            <StyledButton onPress={ImagePickerExample} >Pick</StyledButton>
                            {image && <Image source={{ uri: image }} />}
                         </View> */}
                         <AvatarUpload resizeMode="cover" source={require('./../assets/img/logo.png')} />
                         <MyTextInput 
                        
                            icon=""
                            placeholder="Student ID"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('studentId')}
                            onBlur={handleBlur('phone')}
                            keyboardType="numeric"
                        />
                        <MyTextInput 
                            icon="person"
                            placeholder="First Name"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                          
                        />
                        <MyTextInput 
                            icon="person"
                            placeholder="Last Name"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                          

                        />
                       
                        <MyTextInput 
                            icon=""
                            placeholder="Phone Number"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            keyboardType="numeric"

                        />
                          <MyTextInput 
                            icon="person"
                            placeholder="School Name"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                          

                        />
                        <MyTextInput 
                            icon=""
                            placeholder="Emergency Phone"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            keyboardType="numeric"

                        />
                         <MyTextInput 
                            placeholder="Address"
                            placeholderTextColor="darkLight"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                          

                        />
                       
                        <MsgBox>...</MsgBox>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Add User
                            </ButtonText>
                        </StyledButton>
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



export default AddUser;