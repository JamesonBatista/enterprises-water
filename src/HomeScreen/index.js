import React, {useState, useEffect, useRef} from 'react';
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
  ScrollAdress,
  ViewAdress,
  TextAdress,
  DividerList,
} from './styles';

import {StatusBar} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Lottie from '../../components/Lottie';
import Loader from '../../components/Loader';
var d = new Date();
const day = d.getDay();
import Animation from '../../arrow.json';
import {ListAdress} from '../../components/ArchivData';
const HomeScreen = ({navigation: {navigate}}) => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listAdress, setListAdress] = useState('Todos');
  const ListRef = useRef();
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
  const changeCategory = (adress) => {
    setListAdress(adress);
  };
  const handleList = (item) => {
    return (
      <>
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

  return (
    <Container>
      <ScrollAdress showsHorizontalScrollIndicator={false} horizontal>
        {ListAdress.map((adress, index) => {
          return (
            <ViewAdress key={index} onPress={() => changeCategory(adress)}>
              <TextAdress selected={listAdress === adress ? true : false}>
                {adress}
              </TextAdress>
              <DividerList selected={listAdress === adress ? true : false} />
            </ViewAdress>
          );
        })}
      </ScrollAdress>

      <Scroll>
        <FlatList
          data={enterprises.filter((open) => {
            return (
              open.category.includes(day) || !open.category.includes(day),
              open.adress.includes(listAdress)
            );
          })}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => handleList(item)}
        />
      </Scroll>
    </Container>
  );
};

export default HomeScreen;
