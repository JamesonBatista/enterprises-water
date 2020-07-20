import React from 'react';
import {StatusBar} from 'react-native';

import {
  View,
  ViewList,
  ViewEnterprise,
  BadgeView,
  BadgeText,
  Badge,
  ImageEnterprise,
  ViewContainer,
  ViewInfo,
  ViewLottie,
  Divider,
  Text,
} from './styles';
import Lottie from '../../components/Lottie';
var d = new Date();
const day = d.getDay();
console.log('DIA: ', day);
console.log('HORA: ', d.getHours());
import Animation from '../../arrow.json';
import {useNavigation} from '@react-navigation/native';

const HandleListComponent = ({item}) => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <StatusBar barStyle="light-content" />
        <ViewList>
          <ViewEnterprise onPress={() => navigation.navigate('Details', item)}>
            <BadgeView>
              {item.category?.includes(day) && item.hour > d.getHours() ? (
                <BadgeText>ABERTO</BadgeText>
              ) : (
                <BadgeText>FECHADO</BadgeText>
              )}
              <Badge
                category={
                  item.category?.includes(day) && item.hour > d.getHours()
                }
              />
            </BadgeView>
            <ImageEnterprise source={{uri: item.photo}} />
            <ViewContainer>
              <ViewInfo>
                <Text light title>
                  {item.name}
                </Text>
                <Text medium>Cidade: {item.city}</Text>
                <Text medium>Bairro: {item.adress[1]}</Text>
                <Text medium>Número: {item.phone}</Text>
              </ViewInfo>
              <ViewLottie>
                <Lottie animation={Animation} />
              </ViewLottie>
            </ViewContainer>
          </ViewEnterprise>
          <Divider />
        </ViewList>
      </View>
    </>
  );
};

export default HandleListComponent;
