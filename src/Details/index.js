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
  ViewItems,
  Items,
  TextItems,
  ItemGas,
  ViewAgua,
} from './styles';
import {weekDay, formPay, product} from '../../components/ArchivData';
import Whatsapp from '../../components/Whatsapp';
import ProductsComponents from './Products';
import InformationComponents from './Informations';

const DetailsScreen = (item) => {
  const {formpay, category, products, items} = item.route.params;
  return (
    <Container>
      <InformationComponents data={item} />
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

      {/* View component products */}
      <ProductsComponents items={items} />
      {/* View component products */}

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
        <Text light>Peça pelo Whatsapp -&gt; </Text>
        <Whatsapp number={'999789368'} />
      </ViewWhatsapp>
    </Container>
  );
};

export default DetailsScreen;
