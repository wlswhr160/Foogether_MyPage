import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  margin-top: 50px;
  margin-left: 20px;
`;

const ButtonContainer = Styled.View`
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 25px;
  text-align: center;
  font-family: 'neodgm';

`;

const Label = Styled.Text`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: 'neodgm';

`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}


const SuccessPn = ({navigation}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <LabelTitle>전화번호 변경 성공!</LabelTitle>
                <Label>성공적으로 전화번호가 변경되었습니다.</Label>
            </LabelContainer>
            <ButtonContainer>
            <Button
                label="돌아가기"
                style={{width: 150, height: 45, marginTop: 40}}
                onPress={() => {navigation.navigate('ProfileDetail');}}
            />
            </ButtonContainer>
        </Container>
    );
};

export default SuccessPn;