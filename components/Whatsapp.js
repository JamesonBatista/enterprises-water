import React from 'react';
import {Linking, Alert, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;
const ViewWhatsapp = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-width: 1px;
  border-radius: 20px;
  background-color: cyan;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;
const ImageWhats = styled.Image``;

const Whatsapp = ({number}) => {
  let url = `whatsapp://send?text=Olá&phone=+5581${number}`;

  const handleWhatsapp = () => {
    Linking.canOpenURL(url)
      .then((support) => {
        return Linking.openURL(url);
      })
      .catch(() => {
        alert('aqui');
        return Linking.openURL(`whatsapp://send?text=Olá&phone=+5581${number}`);
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
