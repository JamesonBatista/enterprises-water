import React, {useState, useEffect} from 'react';
import {
  BadgeText,
  Badge,
  View,
  Container,
  Scroll,
  FlatList,
  ViewList,
  BadgeView,
  ViewEnterprise,
  ImageEnterprise,
  ViewInfo,
  Info,
  Divider,
  Text,
  ViewLottie,
  ViewContainer,
} from './styles';

import {StatusBar} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Lottie from '../../components/Lottie';
import Loader from '../../components/Loader';
var d = new Date();
const day = d.getDay();
import Animation from '../../arrow.json';

const HomeScreen = ({navigation: {navigate}}) => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firestore()
      .collection('empresas')
      .onSnapshot((response) => {
        const data = response.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setEnterprises(data);
        console.log('enterprise: ', enterprises);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);
  const handleList = (item) => {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Loader loading={loading} />

        <ViewList>
          <ViewEnterprise onPress={() => navigate('Details', item)}>
            <BadgeView>
              {item.category.includes(day) ? (
                <BadgeText>ABERTO</BadgeText>
              ) : (
                <BadgeText>FECHADO</BadgeText>
              )}
              <Badge category={item.category?.includes(day)} />
            </BadgeView>
            <ImageEnterprise source={{uri: item.photo}} />
            <ViewContainer>
              <ViewInfo>
                <Text light title>
                  {item.name}
                </Text>
                <Text medium>Bairro: {item.city}</Text>
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
    );
  };

  return (
    <Container>
      <Scroll>
        <FlatList
          data={enterprises.filter((open) => {
            return open.category.includes(day) || !open.category.includes(day);
          })}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => handleList(item)}
        />
      </Scroll>
    </Container>
  );
};

export default HomeScreen;
