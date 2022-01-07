import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Constants } from 'expo-constants';
import { StatusBar } from 'expo-status-bar';


export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444"
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 30px;
    background-color: ${primary}; 
`


export const InnerContainer = styled.View`
    flex: 1;
    alignItems: center;
    width: 100%;
    
`;

export const WelcomeContainer = styled.View`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const  PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-top: 20px;
    margin-left: 0px;
`;
       
export const AvatarUpload = styled.Image`
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
   
`;
   
export const ProfileAvatar = styled.Image`
width: 120px;
height: 120px;
margin: auto;
border-radius: 50px;
border-width: 2px;
border-color: ${secondary};

`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight:  bold;
    color: ${tertiary};

    ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding:15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height:60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary}
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
   
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? green : red};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;
export const LogOutButton = styled.TouchableOpacity`
    right: 0px;
    top: 30px;
    position: absolute;
    padding: 15px;
    background-color: ${brand};
    justify-content: center;

    border-radius: 5px;
    margin-vertical: 5px;
    height: 52px;
    width: 115px;
`;

export const LogOutText = styled.Text`
    color: ${primary};
    font-size: 16px;
    position: absolute;
    padding: 15px;
    left: 30px;
`;

export const BottomNav = styled.View`

    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 60px;
    margin-bottom: 0px;

`;

export const StyledText = styled.Text`
    font-size: 13px;
    text-align: center;
`