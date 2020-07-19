import React from 'react';

import {
  ViewProduct,
  Badge,
  Container,
  Text,
  ViewImage,
  Image,
  ViewInfo,
  ViewOptions,
  ViewBadge,
  ViewProducts,
  ViewDay,
  MiniBadge,
  BadgePayProducts,
  ViewContainerDay,
  Divider,
  ViewTitle,
  ContainerInfo,
  ViewPhone,
  Dot,
  ViewWhatsapp,
} from './styles';
import {weekDay, formPay, product} from '../../components/ArchivData';
import Whatsapp from '../../components/Whatsapp';
import {View, StyleSheet} from 'react-native';

const DetailsScreen = (item) => {
  const {
    formpay,
    adress,
    name,
    phone,
    phone3,
    phone2,
    photo,
    city,
    category,
    products,
  } = item.route.params;

  return (
    <Container>
      <ViewImage>
        <Image source={{uri: photo}} resizeMode="cover" />
      </ViewImage>
      <ViewTitle>
        <Text center bold title light>
          {name}
        </Text>
      </ViewTitle>
      <ContainerInfo>
        <ViewInfo>
          <Text medium bold marginr10>
            {city}
          </Text>
        </ViewInfo>
        <ViewInfo>
          <Text medium bold marginr10>
            {adress}
          </Text>
        </ViewInfo>
        <ViewInfo>
          <ViewPhone>
            <Text medium bold>
              {phone}
            </Text>
            <Dot color={phone2} />
            <Text medium bold>
              {phone2}
            </Text>
          </ViewPhone>
        </ViewInfo>
      </ContainerInfo>
      <Divider />
      <ViewOptions>
        <ViewBadge>
          <Text light title>
            Pagamento
          </Text>
          {formPay?.map((item, index) => {
            return (
              <ViewProduct key={index}>
                <BadgePayProducts color={formpay.includes(item.name)} />
                <Text light={formpay.includes(item.name)}>{item.name}</Text>
              </ViewProduct>
            );
          })}
        </ViewBadge>

        <ViewProducts>
          <Text title light>
            Produtos
          </Text>
          {product?.map((item, index) => {
            return (
              <ViewProduct key={index}>
                <BadgePayProducts color={products.includes(item.include)} />
                <Text light={products.includes(item.include)}>{item.name}</Text>
              </ViewProduct>
            );
          })}
        </ViewProducts>
      </ViewOptions>
      <Divider />

      <ViewContainerDay>
        <Text title light>
          Dias de atendimento
        </Text>
        <ViewDay>
          {weekDay?.map((item, index) => {
            return (
              <ViewProduct key={index}>
                <MiniBadge color={category.includes(item.id)} />
                <Text
                  small
                  light={category.includes(item.id)}
                  bold={category.includes(item.id)}>
                  {item.name}
                </Text>
              </ViewProduct>
            );
          })}
        </ViewDay>
      </ViewContainerDay>
      <ViewWhatsapp>
        <Text>Peça pelo Whatsapp -&gt; </Text>

        <Whatsapp number={'999789368'} />
      </ViewWhatsapp>
    </Container>
  );
};

export default DetailsScreen;
