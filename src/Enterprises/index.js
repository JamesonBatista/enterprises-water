import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Text,
  View,
  ViewLottie,
  ViewDescription,
  ViewEmail,
} from './styles';
import firestore from '@react-native-firebase/firestore';

import Loader from '../../components/Loader';
import Lottie from '../../components/Lottie';
import Animation from '../../danger.json';
const Enterprises = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    firestore()
      .collection('information')
      .onSnapshot((response) => {
        const data = response.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setInfo(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Loader loading={loading} />
      {info?.map((item, index) => {
        return (
          <>
            <View>
              <ViewLottie>
                <Lottie animation={Animation} />
              </ViewLottie>
              <Text center big>
                {item.title}
              </Text>
              <ViewLottie>
                <Lottie animation={Animation} />
              </ViewLottie>
            </View>
            <ViewDescription>
              <Text title center>
                {item.description}
              </Text>
            </ViewDescription>
            <ViewEmail>
              <Text color={'cyan'}> {item.email}</Text>
            </ViewEmail>
          </>
        );
      })}
    </Container>
  );
};

export default Enterprises;
