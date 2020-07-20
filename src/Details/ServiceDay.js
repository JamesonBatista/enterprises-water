import React from 'react';

import {
  ViewContainerDay,
  Text,
  ViewDay,
  ViewProduct,
  MiniBadge,
} from './styles';
import {weekDay} from '../../components/ArchivData';
const ServiceDayComponent = ({data}) => {
  const {category} = data.route.params;

  return (
    <>
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
    </>
  );
};

export default ServiceDayComponent;
