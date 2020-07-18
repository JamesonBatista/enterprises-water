import React from 'react';
import {View, Button, Image} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const IconRigth = styled.Image`
  width: 40px;
  height: 40px;
`;
const ViewIcon = styled.TouchableOpacity`
  background-color: gray;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  margin-left: 10px;
`;
const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <ViewIcon
      onPress={() => {
        navigation.navigate('Enterprises');
      }}>
      <IconRigth source={require('../../assets/arrow.png')} />
    </ViewIcon>
  );
};

export default LeftIcon;
