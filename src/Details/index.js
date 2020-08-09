import React from 'react';

import {Container, Text, Divider, ViewWhatsapp} from './styles';
import Whatsapp from '../../components/Whatsapp';
import ProductsComponents from './Products';
import InformationComponents from './Informations';
import FormPayment from './FormPay';
import ServiceDayComponent from './ServiceDay';

const DetailsScreen = (item) => {
  const {items, phone, phone2} = item.route.params;
  return (
    <Container>
      <InformationComponents data={item} />
      <Divider />
      <FormPayment data={item} />
      <Divider />
      {/* View component products */}
      <ProductsComponents items={items} />
      {/* View component products */}
      <Divider />
      <ServiceDayComponent data={item} />
      {phone2 && (
        <ViewWhatsapp>
          <Text light>Peça pelo Whatsapp -&gt; </Text>
          <Whatsapp number={phone} />
        </ViewWhatsapp>
      )}
    </Container>
  );
};

export default DetailsScreen;
