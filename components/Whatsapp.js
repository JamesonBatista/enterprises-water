import React from 'react';
import {Linking, Alert} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;
const ViewWhatsapp = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px;
`;
const ImageWhats = styled.Image`
  width: 30px;
  height: 30px;
`;

const Whatsapp = ({number}) => {
  let url = `whatsapp://send?text=Olá&phone=+5581${number}`;

  const handleWhatsapp = () => {
    Linking.canOpenURL(url)
      .then((support) => {
        return Linking.openURL(url);
      })
      .catch(() => {
        Alert.alert(
          'Erro de Sistema',
          'Para usar essa função você precisa do Whatsapp!',
        );
      });
  };

  return (
    <Container>
      <ViewWhatsapp onPress={() => handleWhatsapp()}>
        <ImageWhats source={require('../assets/whatsapp.png')} />
      </ViewWhatsapp>
    </Container>
  );
};

export default Whatsapp;
