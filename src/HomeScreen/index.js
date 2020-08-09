import React, {useState, useEffect, useRef} from 'react';
import {
  Container,
  Scroll,
  FlatList,
  ScrollAdress,
  ViewAdress,
  TextAdress,
  DividerList,
  All,
  ContainerAll,
} from './styles';
import {StatusBar} from 'react-native';

import Loader from '../../components/Loader';
var d = new Date();
const day = d.getDay();
import {
  GetEnterprise,
  EnterprisesAPI,
  GetListCity,
  ListCity,
} from '../../components/API';
import HandleListComponent from './HandleList';

const HomeScreen = ({navigation: {navigate}}) => {
  const [enterprises, setEnterprises] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listAdress, setListAdress] = useState('Todos');
  const ListRef = useRef();

  useEffect(() => {
    GetListCity();
    setTimeout(() => {
      if (ListCity) {
        setCity(ListCity);
      } else {
        setTimeout(() => {
          GetListCity();
          setCity(ListCity);
        }, 2000);
        GetListCity();
        setCity(ListCity);
      }
    }, 4000);
  }, []);

  useEffect(() => {
    EnterprisesAPI();
    setTimeout(() => {
      if (GetEnterprise) {
        setEnterprises(GetEnterprise);
        setLoading(false);
      } else {
        EnterprisesAPI();
        setLoading(false);
      }
    }, 6000);
  }, []);
  const changeCategory = (adress) => {
    setListAdress(adress);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ContainerAll
        onPress={() => changeCategory('Todos')}
        selected={listAdress === 'Todos' ? true : false}>
        <All selected={listAdress === 'Todos' ? true : false}>Todos</All>
      </ContainerAll>

      <ScrollAdress showsHorizontalScrollIndicator={false} horizontal>
        {city
          .sort((a, b) => (a.nome > b.nome ? 1 : -1))
          .map((adress, index) => {
            return (
              <ViewAdress
                key={index}
                onPress={() => changeCategory(adress.nome)}>
                <TextAdress
                  selected={listAdress === adress.nome ? true : false}>
                  {adress.nome}
                </TextAdress>
                <DividerList
                  selected={listAdress === adress.nome ? true : false}
                />
              </ViewAdress>
            );
          })}
      </ScrollAdress>

      <Scroll>
        <Loader loading={loading} color={'#fff'} />

        <FlatList
          data={enterprises.filter((open) => {
            return (
              open.category.includes(day) || !open.category.includes(day),
              open.adress.includes(listAdress)
            );
          })}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <HandleListComponent item={item} />}
        />
      </Scroll>
    </Container>
  );
};

export default HomeScreen;
