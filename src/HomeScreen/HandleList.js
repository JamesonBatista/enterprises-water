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
  Divider,
  Text,
} from './styles';
var d = new Date();
const day = d.getDay();
import {useNavigation} from '@react-navigation/native';

const HandleListComponent = ({item}) => {
  const navigation = useNavigation();
  console.log(item);

  return (
    <>
      {item && (
        <View>
          <ViewList>
            <ViewEnterprise
              onPress={() => navigation.navigate('Details', item)}>
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
              <ViewContainer>
                <ViewInfo>
                  <Text
                    light={
                      item.category?.includes(day) && item.hour > d.getHours()
                    }
                    title>
                    {item.name}
                  </Text>
                  <Text
                    medium
                    light={
                      item.category?.includes(day) && item.hour > d.getHours()
                    }>
                    Cidade: {item.city}
                  </Text>
                  <Text
                    medium
                    light={
                      item.category?.includes(day) && item.hour > d.getHours()
                    }>
                    Bairro: {item.adress[1]}
                  </Text>
                  <Text
                    medium
                    light={
                      item.category?.includes(day) && item.hour > d.getHours()
                    }>
                    Contato: {item.phone}
                  </Text>
                </ViewInfo>
              </ViewContainer>
            </ViewEnterprise>
            <Divider />
          </ViewList>
        </View>
      )}
    </>
  );
};

export default HandleListComponent;
