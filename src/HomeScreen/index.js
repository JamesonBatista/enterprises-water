import React, {useState, useEffect, useRef} from 'react';
import {
  Container,
  Scroll,
  FlatList,
  ScrollAdress,
  ViewAdress,
  TextAdress,
  DividerList,
} from './styles';

import Loader from '../../components/Loader';
var d = new Date();
const day = d.getDay();
import {ListAdress} from '../../components/ArchivData';
import {GetEnterprise, EnterprisesAPI} from '../../components/API';
import HandleListComponent from './HandleList';

const HomeScreen = ({navigation: {navigate}}) => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listAdress, setListAdress] = useState('Todos');
  const ListRef = useRef();
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
    }, 5000);
  }, []);
  const changeCategory = (adress) => {
    setListAdress(adress);
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
