import React from 'react';

import {
  Items,
  ViewAgua,
  ViewItems,
  TextItems,
  ItemGas,
  ContainerInfo,
  Text,
} from './styles';

const ProductsComponents = ({items}) => {
  return (
    <>
      <ContainerInfo>
        <Text light title>
          Disponíveis
        </Text>
      </ContainerInfo>
      <Items>
        <ViewAgua>
          <ViewItems>
            <TextItems>{items.itemOne?.name}</TextItems>
            <TextItems>Preço: {items.itemOne?.price},00</TextItems>
          </ViewItems>
          {items.itemTwo && (
            <ViewItems>
              <TextItems>{items.itemTwo?.name}</TextItems>
              <TextItems>Preço: {items.itemTwo?.price},00</TextItems>
            </ViewItems>
          )}
          {items.itemTree && (
            <ViewItems>
              <TextItems>{items.itemTree?.name}</TextItems>
              <TextItems>Preço: {items.itemTree?.price},00</TextItems>
            </ViewItems>
          )}
          {items.itemFour && (
            <ViewItems>
              <TextItems>{items.itemFour?.name}</TextItems>
              <TextItems>Preço: {items.itemFour?.price},00</TextItems>
            </ViewItems>
          )}
        </ViewAgua>
        {items.itemGas && (
          <ItemGas>
            <TextItems>{items.itemGas?.name}</TextItems>
            <TextItems>Preço: {items.itemGas?.price},00</TextItems>
          </ItemGas>
        )}
      </Items>
    </>
  );
};

export default ProductsComponents;
