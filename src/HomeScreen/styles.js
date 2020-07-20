import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-style: italic;
  color: ${(props) => props.color ?? 'gray'};
  ${({light, black}) => {
    switch (true) {
      case light:
        return 'color: #fff';
      case black:
        return 'color: #000';
      default:
        break;
    }
  }};
  ${({bold, lbold, minibold}) => {
    switch (true) {
      case bold:
        return 'font-weight: bold';

      case lbold:
        return 'font-weight: 400';

      case minibold:
        return 'font-weight: 700';
      default:
        break;
    }
  }};
  ${({small, medium, large, title}) => {
    switch (true) {
      case small:
        return 'font-size: 12px';
      case medium:
        return 'font-size: 14px';
      case large:
        return 'font-size: 16px';
      case title:
        return 'font-size: 20px';

      default:
        break;
    }
  }};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #343434;
`;

const Scroll = styled.ScrollView``;
const FlatList = styled.FlatList``;

const ViewList = styled.View`
  margin-top: 20px;
  justify-content: center;
`;

const View = styled.View``;
const Badge = styled.View`
  width: 25px;
  top: -10px;
  height: 25px;
  border-radius: 12.5px;
  background-color: ${(props) => (props.category ? '#00ff00' : 'red')};
`;
const ViewEnterprise = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0px 10px;
  margin-bottom: 10px;
`;
const Divider = styled.View`
  border-bottom-width: 1px;
  border-color: gray;
  width: 250px;
  margin: 0px 100px;
  justify-content: flex-end;
  align-items: flex-end;
`;
const BadgeView = styled.View`
  justify-content: center;
  align-items: center;
`;
const BadgeText = styled.Text`
  color: #fff;
  font-size: 10px;
  margin: 2px 0px;
  top: -10px;
`;
const ViewInfo = styled.View`
  margin: 0px 10px;
`;
const Info = styled.Text`
  color: gray;
`;

const ImageEnterprise = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 0px 5px;
  border-width: 1px;
  border-color: #fff;
  top: 20px;
`;
const ViewLottie = styled.View`
  top: 30px;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 180px;
  background-color: transparent;
`;
const ViewContainer = styled.View`
  flex-direction: row;
`;
export const ScrollAdress = styled.ScrollView`
  flex-grow: 0;
`;
export const ViewAdress = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TextAdress = styled.Text`
  margin: 5px 10px;
  margin-top: 15px;
  color: ${(props) => (props.selected ? '#00ffff' : '#9a9a9a')};
  font-weight: ${(props) => (props.selected ? 'bold' : '400')};
  font-size: ${(props) => (props.selected ? '18px' : '12px')};
`;
export const DividerList = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? '#00ffff' : 'gray')};
`;
export {
  ViewContainer,
  Divider,
  ViewInfo,
  Info,
  ImageEnterprise,
  ViewEnterprise,
  BadgeView,
  BadgeText,
  Badge,
  View,
  Container,
  Text,
  Scroll,
  FlatList,
  ViewList,
  ViewLottie,
};
