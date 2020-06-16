import React from 'react';
import Styled from 'styled-components/native';


const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text`
font-family: 'neodgm';

`;

const mainHome = () => {
  return (
    <Container>
      <Label>This is mainHome </Label>
      
    </Container>
  );
};

export default mainHome;