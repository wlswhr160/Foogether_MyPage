  
import React, { useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Switch, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native';
import Styled from 'styled-components/native';
import IconButton4 from '~/Components/IconButton4';
import IconButton5 from '~/Components/IconButton5';
import LoginInfo from './LoginInfo';


import Input from '~/Components/Input';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';
import { NavigationContainer } from '@react-navigation/native';

const Container = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const LabelTitle = Styled.Text`
font-size: 19px;
margin-top: 30px;
margin-bottom: 10px;
margin-left: 15px;
font-family: 'neodgm';

`;


const LabelContainer = Styled.TouchableOpacity`
border: 1px;
border-color: #ebebeb;
margin-left: -45px;
margin-right: -10px;
margin-top: -1.4px;
`;

const Label = Styled.Text`
font-size: 17px;
margin-top: 15px;
margin-bottom: 15px;
margin-left: 55px;
color: #757578;
font-family: 'neodgm';
`;

const LabelContent = Styled.Text`
font-size: 14px;
color: #bfbfbf
margin-top: 5px;
margin-left: 15px;
font-family: 'neodgm';

`;

const ProfileItem = Styled.View`
flex-direction: row;
margin-top: -57px;
margin-left: 415px;
opacity: 0.3;
`;


type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;

interface Props {
  navigation: NavigationProp;
}

export default function SettingPage({navigation}: Props) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(isEnabled);
  const styles = StyleSheet.create({
    container: {
      marginTop: -40,
      marginRight: 10,
      marginBottom: 15,
    }
  });

  


  return (
    <Container>
    <ScrollView>
      <LabelTitle>로그인 정보</LabelTitle>
      <LabelContainer onPress={() => {navigation.navigate('LoginStatus');}}>
      <LoginInfo
        nickname="POPPI"
        />
        <ProfileItem>
        <IconButton5 onPress={() => {navigation.navigate('LoginStatus');}} iconName='next' />
        </ProfileItem>
        </LabelContainer>
        <LabelContainer>
          <Label>자동로그인</Label>
        </LabelContainer>
          <View style={styles.container}>
            <Switch
              trackColor={{ false: "#767577", true: "#faab5c" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
            <LabelTitle>계정 설정</LabelTitle>
          <LabelContainer onPress={() => {navigation.navigate('ProfileDetail');}}>
            <Label>상세 설정</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('ProfileDetail');}} iconName='next' />
            </ProfileItem>
          </LabelContainer>
          <LabelTitle>권한 설정</LabelTitle>
          <LabelContainer onPress={() => {navigation.navigate('SetAuth');}}>
            <Label>위치, 사진 등의 권한</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('SetAuth');}} iconName='next' />
            </ProfileItem>
          </LabelContainer>
            <LabelContent>권한 설정은 디바이스 환경설정의 권한 상태를 확인해 주세요.</LabelContent>
          <LabelTitle>서비스 정보</LabelTitle>
          <LabelContainer onPress={() => {navigation.navigate('TOS');}}>
            <Label>이용 약관</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('TOS');}} iconName='next' />
            </ProfileItem>
          </LabelContainer>
          <LabelContainer onPress={() => {navigation.navigate('PrivacyPolicy');}}>
            <Label>개인정보 처리방침</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('PrivacyPolicy');}} iconName='next' />
            </ProfileItem>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('LocationPrivacy');}}>
            <Label>위치기반서비스 이용약관</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('LocationPrivacy');}} iconName='next' />
            </ProfileItem>
            </LabelContainer>
            <LabelContainer onPress={() => {navigation.navigate('OpensourceLicense');}}>
            <Label>오픈소스 라이선스</Label>
            <ProfileItem>
            <IconButton5 onPress={() => {navigation.navigate('OpensourceLicense');}} iconName='next' />
            </ProfileItem>
            </LabelContainer>
    </ScrollView>
    </Container>
  );
};