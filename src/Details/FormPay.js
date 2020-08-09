import React from 'react';
import {View} from 'react-native';

import {
  ViewOptions,
  ViewBadge,
  Text,
  ViewProduct,
  ViewProducts,
  BadgePayProducts,
} from './styles';
import {formPay, product} from '../../components/ArchivData';

const FormPayment = ({data}) => {
  const {formpay, category, products, items} = data.route.params;
  console.log(formpay, products);
  return (
    <>
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
    </>
  );
};

export default FormPayment;
