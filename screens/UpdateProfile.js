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
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors, 
    MsgBox,
    AvatarUpload
  
} from './../components/styles'

const {brand, darkLight} = Colors;

const UpdateProfile = ({navigation}) => {

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
                    initialValues={{ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome")
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                         <AvatarUpload resizeMode="cover" source={require('./../assets/img/logo.png')} />
                       
                        {/* <View >
                            <StyledButton onPress={ImagePickerExample} >Pick</StyledButton>
                            {image && <Image source={{ uri: image }} />}
                         </View> */}

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
                                UpdateProfile
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



export default UpdateProfile;


// export default function ImagePickerExample() {
//     const [image, setImage] = useState(null);
  
//     // useEffect(() => {
//     //   (async () => {
//     //     if (Platform.OS !== 'web') {
//     //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     //       if (status !== 'granted') {
//     //         alert('Sorry, we need camera roll permissions to make this work!');
//     //       }
//     //     }
//     //   })();
//     // }, []);
  
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
  
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Pick an image from camera roll" onPress={pickImage} />
//         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }