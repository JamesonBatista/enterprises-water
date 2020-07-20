import React from 'react';

import {
  ViewTitle,
  Text,
  ContainerInfo,
  ViewInfo,
  ViewPhone,
  Dot,
} from './styles';

const InformationComponents = ({data}) => {
  const {name, city, adress, phone, phone2} = data.route.params;
  return (
    <>
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
            {adress[1]}
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
    </>
  );
};

export default InformationComponents;
